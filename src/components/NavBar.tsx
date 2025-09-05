import { Link } from "react-router-dom";
import logo from "../assets/logo-dio 1.png";
import { BiMenu } from "react-icons/bi";

function NavBar() {
  return (
    <>
      <header className="w-full  bg-primary p-4 ">
        <div className="container mx-auto px-8 flex items-center justify-between w-full">
          <Link to="/">
            <img src={logo} alt="Logo DIO" />
          </Link>
          <div className="header-links sm:flex items-center gap-2 hidden">
            <Link to="/" className="text-white font-sans text-base bold ">
              Home
            </Link>
            <Link
              to="/"
              className="text-white bold rounded-2xl px-2 text-base bg-quaternary transition duration-300 hover:drop-shadow-[0_0_15px_#565656] "
            >
              Entrar{" "}
            </Link>
            <Link
              to="/"
              className="text-white bold rounded-2xl px-2 text-base bg-quaternary transition duration-300 hover:drop-shadow-[0_0_15px_#565656]"
            >
              Cadastrar{" "}
            </Link>
          </div>
          <button className="text-white sm:hidden hover:text-tertiary transition">
            <BiMenu size={28} />
          </button>
        </div>
      </header>
    </>
  );
}

export default NavBar;
