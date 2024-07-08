"use client";
import FormInput from "@/app/components/FormInput/FormInput";
import { FormEvent, useState } from "react";
import loginUser from "./requestSignIn";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiMessageError } from "react-icons/bi";

export default function SignupPage() {
  const [errorMessages, setErrorMessages] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [loginInputEmail, setLoginInputEmail] = useState("");
  const [loginInputPassword, setLoginInputPassword] = useState("");
  const router = useRouter();
  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessages("");
    setLoading(true);
    const request = await loginUser({
      email: loginInputEmail,
      password: loginInputPassword,
    });
    if (request.success) {
      router.push("/");
      setLoading(false);
    } else {
      setLoading(false);
      setErrorMessages(request.msg);
    }
    setLoading(false);
  };

  return (
    <main className="xl:px-[120px] | md:px-[90px] | px-[15px] py-[20px] items-center flex flex-col gap-[4rem] bg-neutral-bright-gray min-h-screen">
      <div className="flex flex-col gap-[50px]">
        {errorMessages != "" && errorMessages !== "undefined" && (
          <div className="bg-red-100 border border-red-700 text-red-700 p-3 rounded-normal text-center text-[12px] md:text-[16px]">
            <ul>
              <li className="flex gap-5 items-center justify-center">
                <BiMessageError size={24} />
                <span>{errorMessages}</span>
              </li>
            </ul>
          </div>
        )}
        <div className="text-secondary-cadmium-green text-center">
          <h1 className="xl:text-[36px] | text-[24px] font-bold">
            Seja bem-vindo de volta
          </h1>
          <h2 className="xl:text-[20px] | text-[14px] font-medium">
            Insira suas credenciais para acessar sua conta.
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            autoComplete="off"
            className="flex flex-col gap-[3rem]"
          >
            <div className="flex flex-col sm:gap-[1.6rem]">
              <FormInput
                type="email"
                autoComplete="false"
                name="email"
                label="Email"
                required={true}
                placeholder="Ex: email@willy.com"
                value={loginInputEmail}
                onChange={(e) => {
                  setLoginInputEmail(e.target.value);
                }}
              />
              <FormInput
                type="password"
                name="password"
                label="Senha"
                required={true}
                placeholder=""
                value={loginInputPassword}
                minLength={8}
                onChange={(e) => {
                  setLoginInputPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="uppercase bg-selected-secondary w-[310px] h-[60px] rounded-normal text-primary-duch-white text-[24px] font-bold tracking-[0.25rem] transition-all hover:opacity-80 hover:scale-105"
              >
                Continuar
              </button>
              <span className="text-secondary-cadmium-green text-[14px] text-center">
                Ainda não tem uma conta?{" "}
                <Link className="underline font-medium" href={"/auth/cadastro"}>
                  Crie uma por aqui.
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
