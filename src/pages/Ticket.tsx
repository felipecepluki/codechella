import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Button from "../assets/ticket/button.png";
import * as Select from "@radix-ui/react-select";

function Ticket() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <div className="flex flex-col items-center justify-center w-full h-[407px] bg-bannerTicket bg-cover" />
      </div>
      <main className="flex flex-col items-center bg-gradient-to-b from-[#BFDAE6] via-[#FCF0DD] to-[#FACF9D] w-full h-full pb-6">
        <h6 className="font-calistogo font-normal text-5xl leading-[62px] text-[#444] mt-12">
          Preencha o formulário a seguir:
        </h6>
        <form className="w-[795px] mt-12 flex flex-col items-start">
          <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444]">
            Nome Completo:
          </h6>
          <input
            type="text"
            className="bg-white w-full h-12 mt-2 focus:outline-none p-3 font-raleway text-[#444]"
          />
          <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444] mt-8">
            Email:
          </h6>
          <input
            type="email"
            className="bg-white w-full h-12 mt-2 focus:outline-none p-3 font-raleway text-[#444]"
          />
          <div className="w-full flex flex-row">
            <div className="flex w-1/2 flex-col">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444] mt-8">
                Tipo de ingresso
              </h6>
              <Select.Root>
                <Select.Trigger
                  className="bg-white flex flex-row justify-between items-center mt-2 gap-[10px] p-[10px] outline-none h-12"
                  aria-label=""
                >
                  <Select.Value
                    placeholder="Tipo de ingresso"
                    className="font-raleway font-medium text-xl leading-10 text-[#444]"
                  />
                  <Select.Icon className="text-[#444]" />
                </Select.Trigger>
              </Select.Root>
            </div>
            <div className="flex w-1/2 ml-6 flex-col">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444] mt-8">
                Data de nascimento:
              </h6>
              <input
                type="text"
                className="bg-white w-full h-12 mt-2 focus:outline-none p-3 font-raleway text-[#444]"
              />
            </div>
          </div>
          <button className="w-full flex justify-center mt-8">
            <img src={Button} />
          </button>
        </form>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Ticket;
