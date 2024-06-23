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
    <header className="bg-white w-full max-sm:h-[55px] max-sm:px-[15px] lg:h-[6.25rem] lg:px-[160px] flex justify-center font-medium">
      <div className="w-full justify-between flex items-center lg:gap-[100px]">
        <button
          className="max-sm:block hidden outline-none p-1 focus:bg-neutral-rich-black focus:bg-opacity-20 rounded-full"
          onClick={toggleMenu}
        >
          <BiMenu className="text-secondary-cadmium-green w-[24px] h-[24px]" />
        </button>
        <div>
          <Link href={"/"}>
            <Image
              alt="Logo da Willy Academy Verde no Sentido Horizontal."
              src={LogoHorizontal}
              className="lg:w-[219px] max-sm:w-[120px]"
            />
          </Link>
        </div>
        <nav className="max-sm:hidden flex lg:gap-[88px] whitespace-nowrap justify-around text-neutral-rich-black text-small lg:max-w-[804px]">
          <Link
            href={"#"}
            className="transition-all hover:underline hover:opacity-85"
          >
            Banco de questões
          </Link>
          <Link
            href={"#"}
            className="transition-all hover:underline hover:opacity-85"
          >
            Disciplinas
          </Link>
          <Link
            href={"#"}
            className="transition-all hover:underline hover:opacity-85"
          >
            Desempenho
          </Link>
          <Link
            href={"#"}
            className="transition-all hover:underline hover:opacity-85"
          >
            Sobre Nós
          </Link>
        </nav>
        <div>
          <Link href={"#"}>
            <button className="bg-secondary-cadmium-green max-sm:text-sm-normal max-sm:w-[105px] max-sm:h-[30px] transition-all hover:scale-105 hover:bg-selected-secondary font-semi-bold uppercase lg:text-normal rounded-normal text-primary-duch-white lg:w-[350px] lg:h-[65px]">
              Acesse
            </button>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed px-[20px] inset-0 bg-neutral-bright-gray z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-10 outline-none p-1 focus:bg-neutral-rich-black focus:bg-opacity-20 rounded-full"
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
