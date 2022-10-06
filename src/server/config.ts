import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export interface Config {
    server_port: number;
}

export const config: Config = {
    server_port: +(process.env.SERVER_PORT || 3000),
};
