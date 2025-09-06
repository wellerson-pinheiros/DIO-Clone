import { MdEmail} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
function Cadastro() {
  return (
    <>
    <div className="min-h-screen max-w-full flex">
        <div className="flex flex-col   container mx-auto py-5 px-20 sm:py-10 gap-10 items-center text-center  justify-center  lg:text-left lg:flex-row lg:justify-between">
            <div>
            <h2 className="text-white lg:text-3xl text-sm sm:text-3xl
            font-bold max-w-[532px] hidden sm:block">
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
          </h2>
          </div>
          
          <div className="flex flex-col gap-2 max-w-[565px] text-white">
            <h2 className="lg:text-4xl text-2xl font-bold">Faça seu Login</h2>

            <p className="text-gray-300">Faça seu login e make the change.</p>
            <form className="flex flex-col gap-5 max-w-[374px]">

                <div className="relative flex items-center">
                <IoPersonSharp color="#8647AD"  className="absolute left-0 top-1/2 -translate-y-1/2"/>
                <label htmlFor="email"></label>
                <input type="text" placeholder="E-mail" id="email" name="email" required className="bg-transparent border-b-2 outline-none w-full pl-5 focus:border-pink-500"/>
              </div>



              <div className="relative flex items-center">
                <MdEmail color="#8647AD"  className="absolute left-0 top-1/2 -translate-y-1/2"/>
                <label htmlFor="email"></label>
                <input type="text" placeholder="E-mail" id="email" name="email" required className="bg-transparent border-b-2 outline-none w-full pl-5 focus:border-pink-500"/>
              </div>
              
              
              <div className="relative flex items-center">
                  <RiLockPasswordLine color="#8647AD"  className="absolute left-0 top-1/2 -translate-y-1/2"/>
                 <label htmlFor="password"></label>
                 <input type="text" placeholder="password" id="password" name="password" required className="bg-transparent border-b-2 outline-none w-full pl-5 focus:border-pink-500"/>
              </div>
             
              <button className="py-7 flex justify-center lg:justify-start w-full" type="submit">
                <span className="text-white bold rounded-2xl  text-base bg-tertiary transition duration-300 hover:drop-shadow-[0_0_15px_#E4105D] py-1 px-16">
                  Criar conta
                </span>
              </button>
              <div className="flex flex-col gap-1">
                <p className="text-base">
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os <strong>Termos de Uso</strong> da DIO.
                </p>
                <p>
                    Já tenho conta. <Link to="/Login"><span className="text-[#23DD7A]">Fazer login</span></Link>
                </p>
              </div>
              
            </form>
          </div>
        </div>
    </div>
    </>
  )
}

export default Cadastro