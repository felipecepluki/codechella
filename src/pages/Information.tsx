import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import * as Accordion from "@radix-ui/react-accordion";
import Arrow from "../assets/information/arrow.svg";

function Information() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <div className="flex flex-col items-center justify-center w-full h-[407px] bg-bannerInformation bg-cover" />
      </div>
      <main className="flex flex-col bg-gradient-to-b from-[#BFDAE6] via-[#FCF0DD] to-[#FACF9D] w-full h-full pb-6">
        <Accordion.Root
          className="flex flex-col items-center justify-center"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <Accordion.Item
            className="mt-12 bg-[#2E7BA2] w-[996px] h-[70px]"
            value="item-1"
          >
            <Accordion.Trigger className="flex items-center flex-row w-full justify-between">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-white p-4">
                Quais serão as atrações?
              </h6>
              <img src={Arrow} className="pr-[19px]" />
            </Accordion.Trigger>
            <Accordion.Content className="">
              <div className="bg-[#C8DEEF] p-4 items-center w-[996px] h-[112px] mb-6">
                <p>
                  Teremos dois dias de shows, o primeiro (11/03) com bandas de
                  rock, e o segundo (12/03) com bandas pop.{" "}
                  <p className="underline">
                    Confira o line-up em detalhes clicando neste link!
                  </p>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            className="mt-[136px] bg-[#2E7BA2] w-[996px] h-[70px]"
            value="item-2"
          >
            <Accordion.Trigger className="flex items-center flex-row w-full justify-between">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-white p-4">
                Qual é a classificação etária?
              </h6>
              <img src={Arrow} className="pr-[19px]" />
            </Accordion.Trigger>
          </Accordion.Item>
          <Accordion.Item
            className="mt-6 bg-[#2E7BA2] w-[996px] h-[70px]"
            value="item-2"
          >
            <Accordion.Trigger className="flex items-center flex-row w-full justify-between">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-white p-4">
                Quais são os setores disponíveis?
              </h6>
              <img src={Arrow} className="pr-[19px]" />
            </Accordion.Trigger>
          </Accordion.Item>
          <Accordion.Item
            className="mt-6 bg-[#2E7BA2] w-[996px] h-[70px]"
            value="item-3"
          >
            <Accordion.Trigger className="flex items-center flex-row w-full justify-between">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-white p-4">
                Quais são os itens proibidos?
              </h6>
              <img src={Arrow} className="pr-[19px]" />
            </Accordion.Trigger>
          </Accordion.Item>
        </Accordion.Root>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Information;
