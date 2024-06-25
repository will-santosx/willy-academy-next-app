import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex items-center flex-col">
      <section className="xl:h-[685px] xl:px-[160px] xl:py-[60px] | sm:bg-lg-top-image-banner | sm:h-[430px] sm:justify-between sm:py-[40px] sm:px-[30px] | max-sm:items-center max-sm:justify-end max-sm:py-[20px] max-sm:gap-[30px] | | h-[470px] w-full flex flex-col bg-cover bg-center bg-sm-top-image-banner">
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
        <Link href={"#"}>
          <button className="xl:w-[400px] xl:h-[80px] xl:text-[32px] | max-sm:w-[225px] max-sm:h-[40px] max-sm:text-[18px] | sm:w-[300px] sm:h-[60px] sm:text-[20px] | bg-primary-duch-white transition-all hover:scale-105 hover:bg-selected-primary text-secondary-cadmium-green rounded-normal font-semi-bold text-subtitle">
            Eu Quero!
          </button>
        </Link>
      </section>
    </main>
  );
}
