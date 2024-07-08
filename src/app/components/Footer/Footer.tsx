import Image from "next/image";
import LogoPrimaryHorizontal from "@/app/assets/brand/logo-primary-horizontal.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-rich-black w-full lg:h-[594px] flex justify-end flex-col items-center">
      <div className="lg:px-[160px] lg:h-[546px] w-full flex items-center flex-col justify-center lg:gap-[145px]">
        <Image
          alt="Logo da Willy Academy no Sentido Horizontal."
          src={LogoPrimaryHorizontal}
          className="lg:w-[404px]"
        />
        <nav className=" text-primary-duch-white font-medium text-normal flex lg:gap-[56px]">
          <Link href={"#"}>Repositório</Link>
          <Link href={"#"}>GitHub</Link>
          <Link href={"#"}>Instagram</Link>
          <Link href={"#"}>LinkedIn</Link>
        </nav>
      </div>
      <div className="bg-[#FF9900] lg:h-50px w-full text-neutral-rich-black text-center">
        <span className="font-medium text-normal">
          IN PROGRESS BY WILLIANS SANTOS.
        </span>
      </div>
    </footer>
  );
}
