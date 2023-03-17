import Instagram from "../assets/social/instagram.svg";
import Twitch from "../assets/social/twitch.svg";
import Twitter from "../assets/social/twitter.svg";
import WhatsApp from "../assets/social/whatsapp.svg";
import LogoText from "../assets/social/logo-text.svg";

export function Footer() {
  return (
    <div className="bg-[#FACF9D] py-6 px-[120px] flex flex-row justify-between gap-4 items-center w-full h-[232px]">
      <div className="">
        <img src={LogoText} className="w-[233.9px] h-16" />
        <div className="mt-2 flex flex-row">
          <p className="font-raleway font-medium text-xl leading-10 text-[#444]">
            Acesse nossas redes:
          </p>
          <img src={WhatsApp} className="ml-2 mr-2 w-8 h-8" />
          <img src={Twitch} className="mr-2 w-8 h-8" />
          <img src={Instagram} className="mr-2 w-8 h-8" />
          <img src={Twitter} className="ml-2 w-8 h-8" />
        </div>
      </div>
      <div className="mr-[120px] mt-[76px] mb-[76px]">
        <p className="font-raleway font-medium text-xl leading-10 text-[#444]">
          Desenvolvido por{" "}
          <a href="https://www.felipecepluki.com.br/">Felipe Cepluki</a>.<br />
          Projeto fictício sem fins comerciais.
        </p>
      </div>
    </div>
  );
}
