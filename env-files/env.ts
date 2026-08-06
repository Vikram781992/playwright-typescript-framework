import * as dotenv from "dotenv";
import { dot } from "node:test/reporters";

export const getEnv = () => {
    dotenv.config({
        override:true,
        path:`src/helper/env/.env.${process.env.ENV}`
    });
}
