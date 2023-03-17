import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Logo from "../assets/success-shop/logo.svg";
import LogoText from "../assets/success-shop/logo-text.svg";
import QrCode from "../assets/success-shop/qr-code.svg";

function SucessShop() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        <div className="flex flex-col items-center justify-center w-full h-[407px] bg-bannerShop bg-cover" />
      </div>
      <main className="pb-16 flex flex-col items-center bg-gradient-to-b from-[#BFDAE6] via-[#FCF0DD] to-[#FACF9D] w-full h-full ">
        <h6 className="mt-16 font-raleway font-bold text-[32px] leading-[38px] text-[#444]">
          Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
          evento e divirta-se!
        </h6>
        <div className="mt-8 w-[792px] h-[350px] bg-gradient-to-b from-[#BFDAE6] via-[#FCF0DD] to-[#FACF9D] shadow-ticket flex flex-col items-start">
          <div className="flex flex-row w-full items-center justify-between py-8 px-8">
            <img src={LogoText} />
            <img src={Logo} />
          </div>
          <div className="flex flex-row">
            <div className="pl-8 py-8 pr-12">
              <img src={QrCode} />
            </div>
            <div className="flex flex-col">
              <h6 className="font-raleway font-bold text-[32px] leading-[38px] text-[#444] mt-8">
                Felipe Cepluki
              </h6>
              <p className="font-raleway font-medium text-xl leading-10 text-[#444]">
                Ingresso Costesia <br />
                Setor Pista <br />
                Data: 11/03 <br />
                Local: São Paulo-SP
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SucessShop;
