import TopGreenBanner from "@/app/assets/images/top-green-banner.png";
import LogoIcon from "@/app/assets/brand/logo-primary-icon.png";
import Image from "next/image";
import { BiBrain, BiLaptop, BiTrendingUp, BiTrophy } from "react-icons/bi";

export default function LandingHome() {
  return (
    <main className="w-full flex items-center flex-col lg:gap-[65px]">
      <section
        style={{ backgroundImage: `url(${TopGreenBanner.src})` }}
        className="lg:h-[684px] w-full lg:px-[266.5px] lg:pt-[120px] bg-cover bg-center"
      >
        <div className="text-neutral-bright-gray flex flex-col lg:gap-[48px]">
          <div className="flex flex-col">
            <span className="text-title-text font-extra-bold">
              Seu futuro começa agora.
            </span>
            <span className="text-semi-bold text-subtitle-text">
              Prepare-se. Supere-se. Brilhe.
            </span>
          </div>
          <p className="lg:max-w-[602px] text-normal-text">
            Na Willy Academy, acreditamos que seu <b>esforço</b> merece
            <b>resultados tangíveis</b>. Descubra como podemos ajudá-lo a{" "}
            <b>transformar seu potencial</b> em conquistas reais.
          </p>
        </div>
        <button className="lg:w-[400px] lg:mt-[71px] lg:h-[80px] bg-primary-duch-white transition-all hover:scale-105 hover:bg-selected-primary text-secondary-cadmium-green rounded-normal font-semi-bold text-subtitle-text">
          Eu Quero!
        </button>
      </section>
      <section className="bg-neutral-bright-gray w-full flex lg:gap-[120px] flex-col justify-center text-neutral-rich-black lg:px-[266.5px]">
        <div className="w-full flex items-center flex-col lg:gap-[13px]">
          <h1 className="font-bold text-title-text text-center lg:max-w-[1152px] uppercase">
            Por que a Willy Academy é a Escolha Certa para o Seu Sucesso
            Acadêmico?
          </h1>
          <p className="lg:w-[1387px] text-normal-text text-center">
            Combinamos <b>tecnologia avançada</b>, <b>feedback personalizado</b>{" "}
            e <b>recursos adaptativos</b> para oferecer uma{" "}
            <b>experiência de estudo</b> única, focada em impulsionar o seu{" "}
            <b>sucesso acadêmico</b>.
          </p>
        </div>
        <div className="flex flex-col items-center lg:gap-[35px]">
          <div className="bg-neutral-rich-black bg-opacity-20 lg:w-[905px] lg:h-[292px] lg:gap-[50px] lg:px-[16px] lg:py-[38px] justify-center rounded-normal flex">
            <h1 className="text-[144px] text-secondary-cadmium-green font-black">
              1.
            </h1>
            <div>
              <div className="text-secondary-cadmium-green flex items-center lg:gap-[20px]">
                <BiLaptop className="lg:w-[120px] lg:h-[120px]" />
                <h2 className="font-bold text-title-text">
                  Tecnologia Avançada
                </h2>
              </div>
              <p className="text-normal-text font-medium text-neutral-rich-black lg:w-[666px]">
                Utilizamos tecnologia avançada para oferecer uma experiência de
                estudo intuitiva e eficaz.
              </p>
            </div>
          </div>
          <div className="bg-neutral-rich-black bg-opacity-20 lg:w-[905px] lg:h-[292px] lg:gap-[50px] lg:px-[16px] lg:py-[38px] justify-center rounded-normal flex">
            <h1 className="text-[144px] text-secondary-cadmium-green font-black">
              2.
            </h1>
            <div>
              <div className="text-secondary-cadmium-green flex items-center lg:gap-[20px]">
                <BiTrophy className="lg:w-[120px] lg:h-[120px]" />
                <h2 className="font-bold text-title-text">
                  Feedback Personalizado
                </h2>
              </div>
              <p className="text-normal-text font-medium text-neutral-rich-black lg:w-[666px]">
                Nossa plataforma fornece feedback personalizado para ajudá-lo a
                identificar e superar suas áreas de dificuldade.
              </p>
            </div>
          </div>
          <div className="bg-neutral-rich-black bg-opacity-20 lg:w-[905px] lg:h-[292px] lg:gap-[50px] lg:px-[16px] lg:py-[38px] justify-center rounded-normal flex">
            <h1 className="text-[144px] text-secondary-cadmium-green font-black">
              3.
            </h1>
            <div>
              <div className="text-secondary-cadmium-green flex items-center lg:gap-[20px]">
                <BiBrain className="lg:w-[120px] lg:h-[120px]" />
                <h2 className="font-bold text-title-text">
                  Recursos Adaptativos
                </h2>
              </div>
              <p className="text-normal-text font-medium text-neutral-rich-black lg:w-[666px]">
                Oferecemos recursos adaptativos que se ajustam ao seu estilo de
                aprendizado e ritmo de estudo.
              </p>
            </div>
          </div>
          <div className="bg-neutral-rich-black bg-opacity-20 lg:w-[905px] lg:h-[292px] lg:gap-[50px] lg:px-[16px] lg:py-[38px] justify-center rounded-normal flex">
            <h1 className="text-[144px] text-secondary-cadmium-green font-black">
              4.
            </h1>
            <div>
              <div className="text-secondary-cadmium-green flex items-center lg:gap-[20px]">
                <BiTrendingUp className="lg:w-[120px] lg:h-[120px]" />
                <h2 className="font-bold text-title-text">Seus Resultados</h2>
              </div>
              <p className="text-normal-text font-medium text-neutral-rich-black lg:w-[666px]">
                Acompanhe seu progresso e desempenho em tempo real com nossas
                ferramentas de monitoramento avançadas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center bg-secondary-cadmium-green lg:h-[602px] lg:px-[266.5px]">
        <div className="lg:w-full lg:h-[518px] lg:px-[58px] flex justify-between items-center">
          <div className="text-neutral-bright-gray lg:max-w-[644px] flex lg:gap-[20px] flex-col">
            <h1 className="font-bold text-title-text">
              Nossa plataforma te prepara seja qual for o seu objetivo.
            </h1>
            <hr />
            <p className="font-medium text-normal-text">
              Acessando nossa plataforma, você terá acesso completo aos
              materiais preparatórios, podendo começar sua jornada de estudos de
              qualquer lugar ou explorar todos os conteúdos livremente,
              construindo seu próprio plano de aprendizado personalizado.
            </p>
          </div>
          <div>
            <Image
              alt="Logoicon Principal da Willy Academy"
              className="lg:w-[284px]"
              src={LogoIcon}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
