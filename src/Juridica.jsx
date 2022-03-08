

import Retroceder from "./components/Retroceder";
import SliderLogin from "./components/SliderLogin";
import LogoFormularios from "./components/LogoFormularios"
import MenuFooter from "./components/MenuFooter";
import ButtonRegistrar from "./components/ButtonRegistrar";
function Juridica(){
    return(
        <div className="flex">
            <div className="text-center w-full h-screen bg-black text-white flex ">
                <Retroceder/>
                <div className="justify-content my-11 space-y-4">
                    <div>
                       <LogoFormularios/>
                      
                    </div>
                    <div className="pt-10 text-xs text-left mx-6" >
                           <label>Razon social</label><br />
                           <input className="bg-[#787878] border borde-white rounded h-8 w-60" type="text" /><br />
                           <label>NIT</label><br />
                           <input className="bg-[#787878] border borde-white rounded h-8 w-60" type="text" /><br />
                           <label>Telefono</label><br />
                           <input className="bg-[#787878] border borde-white rounded h-8 w-60" type="number" /><br />
                           <label>Email</label><br />
                           <input className="bg-[#787878] border borde-white rounded h-8 w-60" type="email" placeholder="usuario@yabu.com" /><br />
                           <label>Contraseña</label><br />
                           <input className="bg-[#787878] border borde-white rounded h-8 w-60" type="email" placeholder="********" /><br />
                           <label>Confirmar contraseña</label><br />
                           <input className="bg-[#787878] border borde-white rounded h-8 w-60" type="email" placeholder="********" /><br />
                           <ButtonRegistrar/>                     
                        </div>
                    <div className="mb-96">
                        <MenuFooter/>
                    </div>
                </div>
                   
            </div>
            
            <div className="w-full h-screen bg-[#3E1149] flex justify-center items-center">
                <SliderLogin/>   
                     
            </div>
            
        </div>
    )
}

export default Juridica;