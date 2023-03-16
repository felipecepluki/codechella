import { Navbar } from "../components/Navbar";
import MapsSectors from "../assets/maps/map-sectors.svg";
import Track from "../assets/maps/track.svg";
import TrackPremium from "../assets/maps/track-premium.svg";
import Chairs from "../assets/maps/chairs.svg";
import { Footer } from "../components/Footer";

function Sectors() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <div className="flex flex-col items-center justify-center w-full h-[407px] bg-bannerSectors bg-cover" />
        <main className="flex flex-col bg-gradient-to-b from-[#BFDAE6] via-[#FCF0DD] to-[#FACF9D] w-full h-full pb-12">
          <div className="ml-[120px] mt-8 flex flex-row">
            <img src={MapsSectors} className="mr-12" />
            <div className="">
              <h6 className="mt-[157.5px] font-raleway font-bold text-[32px] leading-[38px] text-[#444]">
                Legenda:
              </h6>
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center justify-center mt-6">
                  <div className="bg-[#0E7DF1] w-8 h-8 mr-4" />
                  <p className="font-medium text-xl font-raleway text-[#444]">
                    Pista Premium
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center mt-7">
                  <div className="bg-[#FE016E] w-8 h-8 mr-4" />
                  <p className="font-medium text-xl font-raleway text-[#444]">
                    Pista Comum
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center mt-7">
                  <div className="bg-[#01A89E] w-8 h-8 mr-4" />
                  <p className="font-medium text-xl font-raleway text-[#444]">
                    Cadeiras térreo
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center mt-7">
                  <div className="bg-[#3F51B5] w-8 h-8 mr-4" />
                  <p className="font-medium text-xl font-raleway text-[#444]">
                    Cadeiras superiores
                  </p>
                </div>
                <div className="flex flex-row items-center justify-center mt-7">
                  <div className="bg-[#0E7DF1] w-8 h-8 mr-4" />
                  <p className="font-medium text-xl font-raleway text-[#444]">
                    Rampas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-20 items-center justify-center">
            <h5 className="font-raleway font-bold text-[40px] leading-[47px] text-[#444]">
              Mais detalhes sobre os setores:
            </h5>
            <div className="flex flex-row">
              <div className="flex w-[382.4px] flex-col items-center mt-8">
                <img src={Track} />
                <h6 className="font-raleway font-bold mt-8 text-[32px] leading-[38px] text-[#444]">
                  Pista
                </h6>
                <p className="font-raleway font-medium text-xl leading-10 text-[#444] mt-6 text-center">
                  Pista convencional, atendida pelos bares e banheiros das
                  laterais do estádio. Espaço amplo, com local para sentar e
                  descansar. Separada da pista premium por uma grade.
                </p>
              </div>
              <div className="flex w-[382.4px] flex-col items-center ml-6 mr-6 mt-[138px]">
                <img src={TrackPremium} />
                <h6 className="font-raleway font-bold mt-8 text-[32px] leading-[38px] text-[#444]">
                  Pista Premium
                </h6>
                <p className="font-raleway font-medium text-xl leading-10 text-[#444] mt-6 text-center">
                  Pista mais próxima do palco, com acesso muito próximo a
                  banheiros e bares num raio de 100m. Todas as pessoas idosas
                  e/ou com deficiência têm direito a acesso gratuito a essa
                  área.
                </p>
              </div>
              <div className="flex flex-col items-center w-[382.4px] mt-8">
                <img src={Chairs} />
                <h6 className="font-raleway font-bold mt-8 text-[32px] leading-[38px] text-[#444]">
                  Cadeiras
                </h6>
                <p className="font-raleway font-medium text-xl leading-10 text-[#444] mt-6 text-center">
                  Opção de cadeiras térreas ou elevadas. Acesso próximo a
                  banheiros e bares, visão um pouco elevada em relação às
                  pistas.
                </p>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Sectors;
