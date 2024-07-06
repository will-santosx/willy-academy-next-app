"use client";
import FormInput from "@/app/components/FormInput/FormInput";
import { FormEvent, useState } from "react";
import { z } from "zod";
import Link from "next/link";
import { BiMessageError } from "react-icons/bi";
import newUserRequest from "./requestSignUp";
import LoadingPage from "@/app/components/Loading/Loading";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const passwordSchema = z
    .string()
    .min(8, "A senha deve conter pelo menos 8 caracteres.")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número.");

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validatePassword = passwordSchema.safeParse(inputPassword);
    if (!validatePassword.success) {
      setErrorMessages(validatePassword.error?.errors[0].message);
    } else {
      setErrorMessages("");
      setLoading(true);
      const request = await newUserRequest({
        name: inputName,
        lastName: inputLastName,
        email: inputEmail,
        password: inputPassword,
      });
      if (request.success) {
        router.push("/");
        setLoading(false);
      } else {
        setLoading(false);
        setErrorMessages(request.msg);
      }
      setLoading(false);
    }
  };

  return (
    <main className="xl:px-[120px] | md:px-[90px] | px-[15px] py-[20px] items-center flex flex-col gap-[4rem] bg-secondary-cadmium-green min-h-[100vh]">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
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
            <div className="text-neutral-bright-gray text-center">
              <h1 className="xl:text-[36px] | text-[24px] font-bold">
                Informe seus Dados
              </h1>
              <h2 className="xl:text-[20px] | text-[14px] font-medium">
                Preencha o formulário com suas informações.
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <form
                onSubmit={(e) => handleFormSubmit(e)}
                autoComplete="off"
                className="flex flex-col gap-[3rem]"
              >
                <div className="flex flex-col gap-[1.6rem]">
                  <FormInput
                    type="text"
                    autoComplete="given-name"
                    name="name"
                    label="Nome"
                    required={true}
                    placeholder="Ex: Willians"
                    value={inputName}
                    autoFocus={true}
                    onChange={(e) => {
                      setInputName(e.target.value);
                    }}
                  />
                  <FormInput
                    type="text"
                    autoComplete="family-name"
                    name="sobrenome"
                    label="Sobrenome"
                    required={true}
                    placeholder="Ex: dos Santos"
                    value={inputLastName}
                    onChange={(e) => {
                      setInputLastName(e.target.value);
                    }}
                  />
                  <FormInput
                    type="email"
                    autoComplete="false"
                    name="email"
                    label="Email"
                    required={true}
                    placeholder="Ex: email@willy.com"
                    value={inputEmail}
                    onChange={(e) => {
                      setInputEmail(e.target.value);
                    }}
                  />
                  <FormInput
                    type="password"
                    name="password"
                    label="Senha"
                    required={true}
                    placeholder=""
                    value={inputPassword}
                    autoComplete="new-password"
                    minLength={8}
                    onChange={(e) => {
                      setInputPassword(e.target.value);
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
                  <span className="text-neutral-bright-gray text-[14px] text-center">
                    Já tem uma conta?{" "}
                    <Link className="underline font-medium" href={"./"}>
                      Acesse por aqui.
                    </Link>
                  </span>
                </div>
              </form>
              <span className="text-neutral-bright-gray text-[14px] text-center">
                Ao continuar o cadastro, você concorda com os nossos{" "}
                <Link
                  className="underline font-medium"
                  target="_blank"
                  href={"#"}
                >
                  Termos de Uso
                </Link>{" "}
                e{" "}
                <Link
                  className="underline font-medium"
                  target="_blank"
                  href={"#"}
                >
                  Políticas de Privacidade
                </Link>
              </span>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
