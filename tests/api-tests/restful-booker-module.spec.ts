import { request } from 'node:http';
import {expect, test} from '../../fixtures/hooks-fixture'
import jsonapipathdata from '../../data/api-data/api-path-data.json'
import { execPath } from 'node:process';


test('api get call',async({request})=>{

    const response = await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(await response.json());

})

test('api test 2',async({request}) => {
    const bookingone = await request.get('booking/1')
    console.log(await bookingone.json())
})


test('api test 3',{tag:['@api','@ui'],
annotation:{
    type:'link',
    description:'Test case link'
}
},async({request}) =>{

const bookingdetails = await request.get(jsonapipathdata.booking_path);
const jsonResponse = await bookingdetails.json()
//console.log(jsonResponse)
expect(bookingdetails.status()).toBe(200);
expect(bookingdetails.statusText()).toBe('OK')
expect(bookingdetails).not.toBeNull()
expect(bookingdetails.headers()['content-type']).toContain('application/json; charset=utf-8');
console.log(await bookingdetails.body())
expect((await bookingdetails.body())).not.toHaveLength(0)
})

test('post method',{tag:['@api','@uat'],annotation:{
type:'link',
description:'link of the test',

}},async({request})=>{

const postResonse = await request.post(jsonapipathdata.booking_path,{
        data:jsonapipathdata.createbooking
    })
    const jsonResopnse = await postResonse.json()
    expect(postResonse.status()).toBe(200)
    expect(jsonResopnse.booking).toMatchObject(jsonapipathdata.createbooking)
})



test('authentication key',
    {   
        tag:['@api','@uat'],annotation:
        {
            type: 'link',
            description :'link of test'
        }
    },
    async({request})=>{

    const updateResponse = await request.put(`${jsonapipathdata.booking_path}/${jsonapipathdata.booking_id2}`,{
        // headers:{
        //         Authentication:"Basic YWRtaW46cGFzc3dvcmQxMjM=]",
        //         //Cookie: "token=abc123"
        // },
        data:jsonapipathdata.updatebooking
    })
    console.log(`${jsonapipathdata.booking_path} ${jsonapipathdata.booking_id2}`)
    console.log(await updateResponse.json())
    const responseJson = await updateResponse.json()
    console.log(responseJson);
    //the website is not resopnding gives 403 for every patch request 

})


test('authentication key from api key',
    {   
        tag:['@api','@uat'],annotation:
        {
            type: 'link',
            description :'link of test'
        }
    },
    async({request,commonApiUtuls})=>{
        const token = await commonApiUtuls.getToken()
    const updateResponse = await request.post(`${jsonapipathdata.booking_path}/${jsonapipathdata.booking_id2}`,{
        headers:{
            Cookie:`token=${token}`
        }
    })
    console.log(await updateResponse.json())
    const responseJson = await updateResponse.json()
    console.log(responseJson);
    //the website is not resopnding gives 403 for every patch request 

})


test('delete test',
{
    tag:['@uat','@api'],
    annotation:
    {
        type:'link',
        description:'test link'
    }
},
async({request,commonApiUtuls}) =>{
    const apikey = await commonApiUtuls.getToken()
   const deleteApiBooking = await request.delete(`${jsonapipathdata.booking_path}/${jsonapipathdata.booking_id}`,
    {
        headers:{
            Cookie:`token=${apikey}`
        }
    }
   )
  expect(deleteApiBooking.status()).toBe(200)
})

