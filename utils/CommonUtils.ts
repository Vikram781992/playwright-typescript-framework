import cryptoJs from "crypto-js"

export default class CommonUtils{

private secretKey:string;

constructor()
{
    if(process.env.SECRET_KEY){
        this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
    }
    else{
        throw new Error("please provide secretkey for starting execution")
    }
}

public encryptData(data:string)
{
    const encryptData = cryptoJs.AES.encrypt(data,this.secretKey).toString();
    console.log(encryptData);
    return encryptData;
}

public decryptData(encData:string)
{
    const decryptData = cryptoJs.AES.decrypt(encData,this.secretKey).toString();
    return decryptData;
}
}