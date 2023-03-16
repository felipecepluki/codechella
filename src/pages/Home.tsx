import { Navbar } from "../components/Navbar";
import People from "../assets/home/people.svg";
import Button from "../assets/home/button.svg";

import { Footer } from "../components/Footer";

function Home() {
  return (
    <div className="">
      <nav>
        <Navbar />
      </nav>
      <div>
        <div className="flex flex-col items-center justify-center w-full h-[407px] bg-banner bg-cover">
          <h1 className="font-calistogo font-normal text-[64px] text-[#444]">
            Boas-vindas ao
          </h1>
          <h1 className="font-calistogo font-normal text-[64px] text-[#444]">
            #CodeChella2023!
          </h1>
        </div>
        <main className="flex flex-col bg-gradient-to-b from-[#BFDAE6] via-[#FCF0DD] to-[#FACF9D] w-full h-full">
          <div className="flex w-full flex-row">
            <img
              src={People}
              className="ml-[121.5px] mt-[65px] w-[609px] h-[381px] rounded-2xl"
            />
            <div className="flex flex-col w-full ml-12 items-center justify-center">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444]">
                11 e 12 de Março <br /> Aluródromo de São Paulo
              </h6>
              <p className="font-raleway font-medium text-xl text-[#444] leading-10 text-justify mr-[121.5px]">
                Hora de programar nossa memória com novas lembranças! Uma nova
                experiência sobre música, linguagens e, claro, tecnologia! Somos
                um festival diverso, com vários artistas e referências.
                Divirta-se!
              </p>
              <button className="mt-6">
                <img src={Button} />
              </button>
            </div>
          </div>
          <div className="flex mt-[96px] flex-col items-center justify-center w-full">
            <h1 className="font-calistogo font-normal leading-[83px] text-[64px] text-[#444]">
              /Line-Up/
            </h1>
            <div className="flex mt-[37px] w-full flex-row items-center justify-center">
              <div className="w-[359.5px] h-[1px] bg-[#DF9010] mr-8" />
              <div className="p-4 gap-[10px] flex items-center justify-center w-[417px] h-[94px] bg-[#DF9010]">
                <h3 className="font-calistogo font-normal text-5xl leading-[62px] text-white">
                  SÁBADO 11/03
                </h3>
              </div>
              <div className="w-[359.5px] h-[1px] bg-[#DF9010] ml-8" />
            </div>
            <h2 className="text-[#444] mt-12 font-raleway text-5xl font-extrabold leading-[56px]">
              System of a DOM
            </h2>
            <div className="flex mt-8 w-full justify-around flex-row ml-[141.5px] mr-[141.5px]">
              <h5 className="text-[40px] text-[#444] font-bold leading-[40px] font-raleway">
                Python Maiden
              </h5>
              <h5 className="text-[40px] text-[#444] font-bold leading-[40px] font-raleway">
                Apollo Client 2001
              </h5>
              <h5 className="text-[40px] text-[#444] font-bold leading-[40px] font-raleway">
                Bon Java
              </h5>
              <h5 className="text-[40px] text-[#444] font-bold leading-[40px] font-raleway">
                NickCallback
              </h5>
            </div>
            <div className="flex ml-[194.5px] mr-[194.5px] mt-8 w-full justify-around flex-row">
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                Linkin Promises
              </h6>
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                Fullstack Fihters
              </h6>
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                Papa React
              </h6>
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                Angular in Chains
              </h6>
            </div>
            <div className="flex ml-[333.5px] mr-[333.5px] mt-8 w-full justify-around flex-row">
              <h6 className="text-[32px] text-[#444] font-medium leading-[38px] font-raleway">
                Agnostic Front-end
              </h6>
              <h6 className="text-[32px] text-[#444] font-medium leading-[38px] font-raleway">
                SlipkNode
              </h6>
              <h6 className="text-[32px] text-[#444] font-medium leading-[38px] font-raleway">
                Pink Flutter
              </h6>
              <h6 className="text-[32px] text-[#444] font-medium leading-[38px] font-raleway">
                Flutter
              </h6>
            </div>
            <div className="flex mt-[61px] w-full flex-row items-center justify-center">
              <div className="w-[359.5px] h-[1px] ml-[120px] mr-12 bg-[#DF9010]" />
              <div className="p-4 gap-[10px] flex items-center justify-center w-[417px] h-[94px] bg-[#DF9010]">
                <h3 className="font-calistogo font-normal text-5xl leading-[62px] text-white">
                  DOMINGO 12/03
                </h3>
              </div>
              <div className="w-[359.5px] h-[1px] ml-12 mr-[120px] bg-[#DF9010]" />
            </div>
            <h2 className="mt-12 font-raleway font-extrabold text-5xl leadint-[56px] text-[#444]">
              Lana Del Ploy
            </h2>
            <div className="flex mt-8 ml-[117.5px] mr-[117.5px] w-full justify-around flex-row">
              <h5 className="text-[40px] text-[#444] font-bold leading-[47px] font-raleway">
                Dua Lib
              </h5>
              <h5 className="text-[40px] text-[#444] font-bold leading-[47px] font-raleway">
                The Backnd
              </h5>
              <h5 className="text-[40px] text-[#444] font-bold leading-[47px] font-raleway">
                CSS Styles
              </h5>
              <h5 className="text-[40px] text-[#444] font-bold leading-[47px] font-raleway">
                DJ Query
              </h5>
              <h5 className="text-[40px] text-[#444] font-bold leading-[47px] font-raleway">
                ArrayAna Grande
              </h5>
            </div>
            <div className="flex mt-8 ml-[145px] mr-[145px] w-full justify-around flex-row">
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                Miley Cypress
              </h6>
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                The Bootstrap Boys
              </h6>
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                Json Derulo
              </h6>
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                CloudPlay
              </h6>
              <h6 className="text-[32px] text-[#444] font-bold leading-[38px] font-raleway">
                Dev Lovato
              </h6>
            </div>
            <div className="flex mt-8 ml-[369.5px] mr-[369.5px] w-full justify-around flex-row">
              <h6 className="text-[32px] text-[#444] font-medium leading-[38px] font-raleway">
                Kylie MiLOG
              </h6>
              <h6 className="text-[32px] text-[#444] font-medium leading-[38px] font-raleway">
                Jenkins Brothers
              </h6>
              <h6 className="text-[32px] text-[#444] font-medium leading-[38px] font-raleway">
                Rubycat Dolls
              </h6>
            </div>
            <div className="bg-festival h-[338px] mt-14 w-full bg-cover" />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Home;
