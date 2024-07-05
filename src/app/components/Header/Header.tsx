"use client";
import Image from "next/image";
import Link from "next/link";
import LogoHorizontal from "@/app/assets/brand/logo-green-horizontal.png";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white w-[100vw] flex items-center justify-center font-medium | max-sm:px-[20px] max-sm:h-[55px] | sm:px-[20px] sm:h-[75px] | lg:px-[30px]">
      <div className="w-full flex items-center justify-around | max-sm:gap-[27px] | sm:gap-[130px]">
        <button
          className="lg:hidden | outline-none focus:bg-neutral-rich-black focus:bg-opacity-20 rounded-normal"
          onClick={toggleMenu}
        >
          <BiMenu className="sm:w-[35px] sm:h-[35px] | text-secondary-cadmium-green w-[24px] h-[24px]" />
        </button>
        <div className="flex">
          <Link href={"/"}>
            <Image
              alt="Logo da Willy Academy Verde no Sentido Horizontal."
              src={LogoHorizontal}
              className="max-sm:w-[130px] | sm:w-[170px] | min-w-[130px]"
            />
          </Link>
        </div>
        <nav className="lg:flex lg:gap-[20px] | xl:gap-[50px] | hidden  whitespace-nowrap items-center text-neutral-rich-black">
          <Link
            href={"/user/questoes"}
            className="transition-all nav-links pb-1 hover:text-black"
          >
            Banco de questões
          </Link>
          <Link
            href={"/user/disciplinas"}
            className="transition-all nav-links pb-1 hover:text-black"
          >
            Disciplinas
          </Link>
          <Link
            href={"/user/meu-desempenho"}
            className="transition-all nav-links pb-1 hover:text-black"
          >
            Desempenho
          </Link>
          <Link
            href={"/user/sobre"}
            className="transition-all nav-links pb-1 hover:text-black"
          >
            Sobre Nós
          </Link>
        </nav>
        <Link
          href={"/auth/cadastro"}
          className="max-sm:w-[105px] max-sm:h-[33px] | sm:w-[145px] sm:h-[42px] | lg:text-[19px] lg:w-[190px] | xl:text-[20px] xl:w-[190px] xl:h-[55px] | text-[16px]"
        >
          <button className="w-full h-full bg-secondary-cadmium-green transition-all hover:scale-105 hover:bg-selected-secondary font-semi-bold uppercase rounded-normal text-primary-duch-white">
            Acesse
          </button>
        </Link>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-neutral-bright-gray z-50 flex flex-col items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 outline-none p-1 focus:bg-neutral-rich-black focus:bg-opacity-20 rounded-normal"
            onClick={closeMenu}
          >
            <BiX className="text-secondary-cadmium-green w-[24px] h-[24px]" />
          </button>
          <nav className="flex flex-col items-center gap-6 text-neutral-rich-black text-sm-title">
            <Link href={"#"} onClick={closeMenu}>
              Banco de questões
            </Link>
            <Link href={"#"} onClick={closeMenu}>
              Disciplinas
            </Link>
            <Link href={"#"} onClick={closeMenu}>
              Desempenho
            </Link>
            <Link href={"#"} onClick={closeMenu}>
              Sobre Nós
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
