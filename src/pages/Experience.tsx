import { Navbar } from "../components/Navbar";
import Celebrate from "../assets/experience/celebrate.svg";
import Sustainability from "../assets/experience/sustainability.svg";
import FerrisWheel from "../assets/experience/ferris-wheel.svg";
import { Footer } from "../components/Footer";

function Experience() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="bg-gradient-to-b from-[#BFDAE6] via-[#FCF0DD] to-[#FACF9D] w-full h-full">
        <div className="bg-bannerExperience flex h-[407px] bg-cover items-center justify-center">
          <h1 className="font-calistogo font-normal text-[64px] text-[#444]">
            A Experiência
          </h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src={Celebrate}
            className="ml-[121.5px] mt-16 w-[609px] h-[381px] mr-[48px]"
          />
          <div className="flex mt-[83.5px] flex-col mr-[121.5px]">
            <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444]">
              Acessibilidade e Inclusão
            </h6>
            <p className="mt-6 font-raleway font-medium text-xl leading-10 text-[#444] items-center text-justify">
              Nosso evento tenta abraçar um público mais amplo em todos os
              sentidos, de todas as idades, corpos, gostos e pensamentos! Isso
              está presente no espaço físico, na sinalização, no treinamento da
              equipe de apoio, na comunicação em libras, braile, visual e tátil.
              Além disso, dispomos de ingressos gratuitos para pessoas com
              deficiência e acompanhantes, pessoas idosas e crianças!
            </p>
          </div>
        </div>
        <div className="flex flex-row ml-[121.5px] mt-[147.5px] mr-[121.5px]">
          <div>
            <h6 className="font-raleway font-bold leading-[38px] text-[32px] text-[#444]">
              Sustentabilidade
            </h6>
            <p className="font-raleway font-medium text-xl leading-10 text-[#444] text-justify mt-6">
              Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso,
              levamos o futuro do nosso planeta a sério. Nosso festival é
              carbono zero, com utilização de copos retornáveis, coleta e
              destinação adequada de resíduos, e transporte coletivo.
            </p>
          </div>
          <img src={Sustainability} className="ml-[48px] h-[381px] w-[609px]" />
        </div>
        <div className="flex flex-row pb-16">
          <img
            src={FerrisWheel}
            className="ml-[121.5px] mt-[128px] w-[609px] h-[381px] mr-[48px]"
          />
          <div className="flex mt-[167.5px] flex-col">
            <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444]">
              Atrações
            </h6>
            <p className="mt-6 mr-[121.5px] font-raleway font-medium text-xl leading-10 text-[#444] text-justify">
              Intervenções artísticas e culturais para todos os gostos! Durante
              os intervalos dos shows, nossa experiência contará com recreação
              para crianças, oficina de cerâmica, origami, circo e aquarela!
              Além disso, nosso espaço contra com 3 praças de alimentação, roda
              gigante e outros brinquedos!
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Experience;
