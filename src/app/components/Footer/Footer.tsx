import Image from "next/image";
import LogoPrimaryHorizontal from "@/app/assets/brand/logo-primary-horizontal.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-rich-black w-full min-h-[350px] flex flex-col justify-center items-center relative">
      <div className="lg:px-[160px] px-[20px] gap-[40px] h-full lg:h-[546px] w-full flex items-center flex-col justify-center lg:gap-[145px]">
        <Image
          alt="Logo da Willy Academy no Sentido Horizontal."
          src={LogoPrimaryHorizontal}
          className="lg:w-[404px] w-[170px] sm:w-[230px]"
        />
        <div className="flex flex-col gap-[20px]">
          <nav className="text-primary-duch-white font-semibold text-center sm:text-[20px]">
            <span>willy.academy@proton.me</span>
          </nav>
          <nav className=" text-primary-duch-white font-medium flex-col sm:flex-row text-center gap-[15px] underline flex lg:gap-[56px]">
            <Link
              className="text-[14px] sm:text-[20px]"
              target="_blank"
              href={"https://github.com/will-santosx/willy-academy-next-app"}
            >
              Repositório
            </Link>
            <Link
              target="_blank"
              className="text-[14px] sm:text-[20px]"
              href={"https://github.com/will-santosx"}
            >
              GitHub
            </Link>
            <Link
              target="_blank"
              className="text-[14px] sm:text-[20px]"
              href={"https://www.instagram.com/leao.willians/"}
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              className="text-[14px] sm:text-[20px]"
              href={
                "https://www.linkedin.com/in/david-willians-dos-santos-212932254/"
              }
            >
              LinkedIn
            </Link>
          </nav>
        </div>
      </div>
      <div className="bg-[#FF9900] lg:h-50px h-[30px] absolute top-[100%] w-full text-neutral-rich-black">
        <span className="font-medium text-[15px] flex h-full items-center justify-center">
          IN PROGRESS BY WILLIANS SANTOS.
        </span>
      </div>
    </footer>
  );
}
