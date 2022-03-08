import Retroceder from "./components/Retroceder";
import SliderLogin from "./components/SliderLogin";
import LogoFormularios from "./components/LogoFormularios"
import MenuFooter from "./components/MenuFooter";
function Natural(){
    return(
        <div className="flex">
            <div className="text-center w-full h-screen bg-black text-white flex ">
                <Retroceder/>
                <div className="justify-content my-11 space-y-4">
                    <div>
                       <LogoFormularios/>
                      
                    </div>
                    <div className="pt-10" >
                           <label className="text-xs text-left">Name</label><br />
                           <input className="bg-white rounded" type="text" />
                           <label className="text-xs text-left ">Name</label><br />
                           <input className="bg-white rounded" type="text" />
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

export default Natural;