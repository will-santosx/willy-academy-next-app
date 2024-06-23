"use client";
import Image from "next/image";
import Link from "next/link";
import LogoHorizontal from "@/app/assets/brand/logo-green-horizontal.png";
import LogoIcon from "@/app/assets/brand/logo-green-icon.png";
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
    <header className="bg-white w-full sm:px-[15px] sm:h-[55px] md:h-[100px] lg:h-[6.25rem] lg:px-[160px] flex justify-center items-center font-medium">
      <div className="w-full flex justify-between items-center ">
        <button
          className="sm:hidden outline-none p-1 focus:bg-neutral-rich-black focus:bg-opacity-20 rounded-full"
          onClick={toggleMenu}
        >
          <BiMenu className="text-secondary-cadmium-green w-[24px] h-[24px]" />
        </button>
        <div className="flex">
          <Link href={"/"}>
            <Image
              alt="Logo da Willy Academy Verde no Sentido Horizontal."
              src={LogoHorizontal}
              className="max-lg:w-[219px] lg:min-w-[200px] sm:w-[90px] max-sm:w-[100px] md:w-[160px]"
            />
          </Link>
        </div>
        <nav className="hidden sm:text-sm-small md:text-small lg:text-small whitespace-nowrap sm:flex items-center lg:gap-[40px] gap-5 text-neutral-rich-black">
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
        <div className="hidden sm:block">
          <Link href={"#"}>
            <button className="bg-secondary-cadmium-green lg:w-[320px] w-[130px] md:w-[164px] h-[30px] md:h-[45px] lg:h-[65px] transition-all hover:scale-105 hover:bg-selected-secondary font-semi-bold uppercase lg:text-normal rounded-normal text-primary-duch-white">
              Acesse
            </button>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-neutral-bright-gray z-50 flex flex-col items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 outline-none p-1 focus:bg-neutral-rich-black focus:bg-opacity-20 rounded-full"
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
            <Link href={"#"} onClick={closeMenu} className="mt-4">
              <button className="bg-secondary-cadmium-green w-[160px] h-[45px] transition-all hover:scale-105 hover:bg-selected-secondary font-semi-bold uppercase text-normal rounded-normal text-primary-duch-white">
                Acesse
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
