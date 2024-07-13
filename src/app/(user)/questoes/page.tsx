"use client";
import Image from "next/image";
import VectorImage from "@/app/assets/images/questions-vector.png";
import { FeatureCard } from "@/app/components/FeatureCards/FeatureCards";
import useEmblaCarousel from "embla-carousel-react";
import UserFeedback from "@/app/components/UserFeedbacks/UserFeedback";
import Autoplay from "embla-carousel-autoplay";

export default function QuestionsPage() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <main className="flex flex-col gap-[5rem]">
      <section className="flex items-center xl:gap-[10rem] lg:gap-[6rem] gap-[4rem] text-center font-medium flex-col w-full text-neutral-rich-black">
        <div className="flex flex-col lg:flex-row gap-[4rem] items-center w-full justify-between">
          <div className="flex flex-col lg:gap-7 gap-5 items-center lg:items-start lg:text-start">
            <div>
              <h1 className="uppercase text-[24px] md:text-[30px] xl:text-[33px] font-bold">
                Banco de Questões
              </h1>
              <h3 className="text-[15px] md:text-[18px] xl:text-[22px] font-medium lg:max-w-[400px]">
                Pratique e Prepare-se para Exames com Questões Reais
              </h3>
            </div>
            <button className="bg-secondary-cadmium-green xl:h-[60px] xl:w-[260px] transition-all hover:bg-selected-secondary md:text-[18px] text-[15px] hover:scale-105 p-1 rounded-normal uppercase text-primary-duch-white md:w-[235px] md:h-[50px] w-[185px] h-[40px]">
              Explorar Questões
            </button>
          </div>
          <Image
            alt="Ilustração de um grupo de estudantes"
            className="w-[300px] md:w-[380px] lg:w-[350px] xl:w-[400px] 2xl:w-[550px]"
            src={VectorImage}
          />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-[20px] md:text-[24px] lg:text-[27px] xl:text-[30px] 2xl:text-[32px]">
            O que é o Banco de Questões?
          </h2>
          <p className="text-[15px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px]">
            Nosso Banco de Questões oferece uma vasta coleção de perguntas de
            diversos vestibulares e concursos. Com ele, você pode testar seus
            conhecimentos, identificar áreas de melhoria e se preparar de forma
            eficaz para seus exames.
          </p>
        </div>
      </section>
      <section className="flex items-center gap-[3rem] text-center font-medium flex-col w-full text-neutral-rich-black">
        <h1 className="text-[24px] font-bold md:text-[27px]">
          Funcionalidades
        </h1>
        <div className="flex flex-col gap-[2.3rem]">
          <FeatureCard
            number="1"
            icon={null}
            title="Diversidade de Questões"
            description="Encontre questões de diversas disciplinas e níveis de dificuldade."
          />
          <FeatureCard
            number="2"
            icon={null}
            title="Filtros Avançados"
            description="Use filtros para encontrar questões específicas por disciplina, tópico, ano e dificuldade."
          />
          <FeatureCard
            number="3"
            icon={null}
            title="Respostas e Explicações"
            description="Cada questão vem com a resposta correta e uma explicação detalhada."
          />
          <FeatureCard
            number="4"
            icon={null}
            title="Histórico de Prática"
            description="Acompanhe suas tentativas anteriores e veja seu progresso ao longo do tempo."
          />
        </div>
      </section>
      <section className="flex items-center gap-[3rem] text-center font-medium flex-col w-full text-neutral-rich-black">
        <h1 className="text-[24px] font-bold">O que nossos usuários dizem?</h1>
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex w-full">
            <div className="embla__slide min-w-full flex justify-center">
              <UserFeedback
                name="Felipe"
                lastName="Rocha"
                gender="m"
                feedback="A Willy Academy salvou meus estudos! Antes eu me sentia perdido, mas com o banco de questões e as dicas personalizadas, consigo ver meu progresso e focar no que realmente preciso melhorar."
              />
            </div>
            <div className="embla__slide min-w-full flex justify-center">
              <UserFeedback
                name="Camila"
                lastName="Paes"
                gender="f"
                feedback="Eu adoro a Willy Academy! As questões são bem parecidas com as que caem nas provas de verdade e o acompanhamento de desempenho é muito útil. Já sinto que estou mais confiante para os vestibulares."
              />
            </div>
            <div className="embla__slide min-w-full flex justify-center">
              <UserFeedback
                name="Rafael"
                lastName="Lima"
                gender="m"
                feedback="Estudar para concursos ficou muito mais fácil com a Willy Academy. A plataforma é super fácil de usar e adoro poder ver onde estou indo bem e onde preciso melhorar. As videoaulas também são um diferencial enorme."
              />
            </div>
            <div className="embla__slide min-w-full flex justify-center">
              <UserFeedback
                name="Larissa"
                lastName="Nunes"
                gender="m"
                feedback="A Willy Academy é incrível! As questões são bem variadas e a parte de monitoramento me ajuda a ver exatamente onde estou errando. Me sinto muito mais preparada para as provas agora."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/*<div className="embla overflow-hidden" ref={emblaRef}>
  <div className="embla__container flex">
    <div className="embla__slide min-w-full">Slide 1</div>
    <div className="embla__slide min-w-full">Slide 2</div>
    <div className="embla__slide min-w-full">Slide 3</div>
  </div>
</div>*/
