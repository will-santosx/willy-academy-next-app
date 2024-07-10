import Link from "next/link";
import { FeatureCard } from "./components/FeatureCards/FeatureCards";
import { BiBrain, BiLaptop, BiTrendingUp, BiTrophy } from "react-icons/bi";
import Image from "next/image";
import PrimaryIcon from "@/app/assets/brand/logo-primary-icon.png";

export default function Home() {
  return (
    <main className="w-full flex items-center flex-col gap-[3rem] bg-neutral-bright-gray">
      <section className="xl:h-[685px] xl:px-[167px] xl:py-[60px] | sm:bg-lg-top-image-banner | sm:h-[430px] sm:justify-between sm:py-[40px] sm:px-[30px] | max-sm:items-center max-sm:justify-end max-sm:py-[20px] max-sm:gap-[30px] | | h-[470px] w-full flex flex-col bg-cover bg-center bg-sm-top-image-banner">
        <div className="sm:justify-center sm:text-left sm:items-start sm:gap-[40px] | max-sm:gap-[20px] | lg:gap-[48px] | text-neutral-bright-gray flex flex-col items-center text-center justify-end">
          <div className="flex flex-col">
            <span className="xl:text-[40px] | max-sm:text-[24px] | sm:text-[24px] | font-extra-bold">
              Seu futuro começa agora.
            </span>
            <span className="xl:text-[32px] | max-sm:text-[16px] | sm:text-[20px] | font-semi-bold">
              Prepare-se. Supere-se. Brilhe.
            </span>
          </div>
          <p className="xl:text-[24px] xl:max-w-[850px] | max-sm:text-[12px] | md:text-[16px] md:max-w-[690px] | sm:text-[14px] sm:max-w-[500px]">
            Na Willy Academy, acreditamos que seu <b>esforço</b> merece{" "}
            <b>resultados tangíveis</b>. Descubra como podemos ajudá-lo a
            transformar seu <b>potencial</b> em <b>conquistas reais</b>. <br />
            <br />
            Nossos programas são desenvolvidos para promover o{" "}
            <b>crescimento contínuo</b> e alcançar <b>metas ambiciosas</b>.
            Junte-se a nós e veja como o <b>aprendizado</b> pode abrir{" "}
            <b>portas</b> para <b>novas oportunidades</b>.
          </p>
        </div>
        <Link
          href={"#"}
          className="xl:w-[400px] xl:h-[80px] max-sm:w-[225px] max-sm:h-[40px] sm:w-[300px] sm:h-[60px]"
        >
          <button className="h-full w-full xl:text-[32px] |  max-sm:text-[18px] |  sm:text-[20px] | bg-primary-duch-white transition-all hover:scale-105 hover:bg-selected-primary text-secondary-cadmium-green rounded-normal font-semi-bold text-subtitle">
            Eu Quero!
          </button>
        </Link>
      </section>
      <section className="xl:py-[70px] xl:px-[160px] |  | py-[40px] px-[15px] w-full text-neutral-rich-black">
        <div className="xl:gap-[25px] | | gap-[30px] w-full flex flex-col items-center text-center">
          <span className="xl:text-[40px] xl:max-w-[1150px] | md:text-[32px] | text-[24px] font-bold uppercase">
            Por que a Willy Academy é a Escolha Certa para o Seu Sucesso
            Acadêmico?
          </span>
          <p className="xl:w-[1150px] lg:text-[24px] | md:text-[18px] | text-[15px]">
            Combinamos <b>tecnologia avançada</b>, <b>feedback personalizado</b>{" "}
            e <b>recursos adaptativos</b> para oferecer uma{" "}
            <b>experiência de estudo única</b>, focada em{" "}
            <b>impulsionar o seu sucesso acadêmico</b>.
          </p>
        </div>
      </section>
      <section className="xl:px-[300px] | lg:px-[140px] | md:px-[120px] | sm:px-[100px] | px-[10px] py-[35px] gap-[35px] w-full flex flex-col items-center justify-start">
        <h1 className="xl:text-[40px] | md:text-[32px] | sm:text-[28px] | text-neutral-rich-black text-[24px] font-bold">
          Nosso Diferencial
        </h1>
        <div className="flex flex-col w-full gap-[35px] px-[15px]">
          <FeatureCard
            number="1"
            icon={
              <BiLaptop className="sm:w-[29px] sm:h-[29px] | md:w-[34px] md:h-[34px] | lg:w-[55px] lg:h-[55px] w-[25px] h-[25px]" />
            }
            title="Tecnologia Avançada"
            description="Utilizamos tecnologia avançada para oferecer uma experiência de estudo intuitiva e eficaz."
          />
          <FeatureCard
            number="2"
            icon={
              <BiTrophy className="sm:w-[29px] sm:h-[29px] | md:w-[34px] md:h-[34px] | lg:w-[55px] lg:h-[55px] w-[25px] h-[25px]" />
            }
            title="Feedback Individuais"
            description="Oferecemos feedback personalizado para ajudá-lo a identificar e superar suas dificuldades."
          />
          <FeatureCard
            number="3"
            icon={
              <BiBrain className="sm:w-[29px] sm:h-[29px] | md:w-[34px] md:h-[34px] | lg:w-[55px] lg:h-[55px] w-[25px] h-[25px]" />
            }
            title="Recursos Adaptativos"
            description="Oferecemos recursos adaptativos que se ajustam ao seu estilo de aprendizado e ritmo de estudo."
          />
          <FeatureCard
            number="4"
            icon={
              <BiTrendingUp className="sm:w-[29px] sm:h-[29px] | md:w-[34px] md:h-[34px] | lg:w-[55px] lg:h-[55px] w-[25px] h-[25px]" />
            }
            title="Seus Resultados"
            description="Acompanhe seu progresso em tempo real com nossas ferramentas avançadas."
          />
        </div>
      </section>
      <section className="xl:px-[150px] 2xl:px-[350px] xl:py-[35px] md:px-[60px] lg:px-[100px] px-[20px] py-[20px] w-full bg-secondary-cadmium-green gap-5 md:flex-row flex-col-reverse justify-between flex items-center">
        <div className="text-neutral-bright-gray flex flex-col gap-3">
          <h3 className="xl:max-w-[555px] xl:text-[40px] md:text-[32px] md:max-w-[400px] md:text-start text-center text-[20px] font-bold">
            Nossa plataforma te prepara seja qual for o seu objetivo.
          </h3>
          <p className="xl:max-w-[645px] xl:text-[24px] md:max-w-[500px] lg:text-[20px] sm:text-[18px] md:text-start font-medium text-[14px] text-center">
            Acessando nossa plataforma, você terá acesso completo aos materiais
            preparatórios, podendo começar sua jornada de estudos de qualquer
            lugar ou explorar todos os conteúdos livremente, construindo seu
            próprio plano de aprendizado personalizado.
          </p>
        </div>
        <div>
          <Image
            alt={"Logo Willy Academy Primário"}
            className="xl:w-[284px] lg:w-[190px] md:w-[160px] w-[100px] md:block"
            src={PrimaryIcon}
          />
        </div>
      </section>
    </main>
  );
}
