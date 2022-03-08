import Retroceder from "./components/Retroceder";
import SliderLogin from "./components/SliderLogin";
import LogoFormularios from "./components/LogoFormularios"
import MenuFooter from "./components/MenuFooter";
import ButtonRegistrar from "./components/ButtonRegistrar";
import LoginMenu from "./components/LoginMenu";
function Natural(){
    return(
        <div className="flex">
            <div className="text-center w-full h-screen bg-black text-white flex ">
              <Retroceder/>
              <div className="justify-content my-11 space-y-4">
                <div>
                 <LoginMenu/>
                </div>
              </div>
                   
            </div>
            
            <div className="w-full h-screen bg-[#3E1149] flex justify-center items-center">
                <SliderLogin/>   
                     
            </div>
            
        </div>
    )
}

export default Natural;