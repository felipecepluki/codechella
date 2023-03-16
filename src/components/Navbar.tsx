import Logo from "../assets/home/logo.svg";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="bg-darkblue gap-8 w-full h-32 py-8 px-[120px] flex items-center justify-between">
      <NavLink to="/">
        <img src={Logo} className="w-[233.9px] h-16" />
      </NavLink>
      <div className="flex flex-row gap-8">
        <NavLink
          to="/experiencia"
          className="font-raleway font-bold text-xl leading-10 text-white"
        >
          A experiência
        </NavLink>
        <NavLink
          to="/setores"
          className="font-raleway font-bold text-xl leading-10 text-white"
        >
          Mapa de Setores
        </NavLink>
        <NavLink
          to="/informacoes"
          className="font-raleway font-bold text-xl leading-10 text-white"
        >
          Informações
        </NavLink>
        <NavLink
          to="/ingresso-comprado"
          className="font-raleway font-bold text-xl leading-10 text-white"
        >
          Ingresso
        </NavLink>
      </div>
    </div>
  );
}
