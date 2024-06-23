import Image from "next/image";
import Link from "next/link";
import LogoHorizontal from "@/app/assets/brand/logo-green-horizontal.png";

export default function Header() {
  return (
    <header className="bg-white w-full lg:h-[6.25rem] lg:px-[160px] flex justify-center font-medium">
      <div className="w-full justify-between flex items-center lg:gap-[100px]">
        <div>
          <Link href={"/"}>
            <Image
              alt="Logo da Willy Academy no Sentido Horizontal."
              src={LogoHorizontal}
              className="lg:w-[219px]"
            />
          </Link>
        </div>
        <nav className="flex lg:gap-[88px] whitespace-nowrap justify-around text-neutral-rich-black text-small-text lg:max-w-[804px]">
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
          <button className="bg-secondary-cadmium-green transition-all hover:border-neutral-bright-gray hover:border-opacity-20 border-[5px] border-transparent font-semi-bold uppercase lg:text-normal-text rounded-normal text-primary-duch-white lg:w-[350px] lg:h-[65px]">
            Já sou aluno &#40;a&#41;
          </button>
        </div>
      </div>
    </header>
  );
}
