import axios, { AxiosResponse } from "axios";
import nookies from "nookies";
import dotenv from "dotenv";

dotenv.config();
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

interface newUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

interface signUpResponse {
  msg: string;
  user: {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    created_at: string;
    token: string;
  };
}

export default async function newUserRequest(user: newUser) {
  const request = await axios
    .post(
      String(API_URL + "/auth/sign-up"),
      {
        nome: user.name,
        sobrenome: user.lastName,
        email: user.email,
        senha: user.password,
      },
      { headers: { "x-functions-key": API_KEY } }
    )
    .then(function (response: AxiosResponse<signUpResponse>) {
      nookies.set(nookies.get(null), "token", response.data.user.token, {
        httpsOnly: true,
        path: "/",
      });
      return { success: true, msg: "" };
    })
    .catch(function (error: any) {
      return { success: false, msg: String(error.response?.data.msg) };
    });
  return request;
}
