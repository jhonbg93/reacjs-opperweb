import LogoHome from "./components/LogoHome"
import Menu from "./components/Menu"
function CrearCategoria(){
    return(
        <div>
           <div className="flex justify-center items-center">
                <div className="w-80 h-screen bg-[#3E1149] text-white ">
                    <LogoHome/>
                    <div>
                        <Menu/>
                    </div>
                </div>
                <div className="w-full h-screen bg-black ">
                <div>
            <p className="text-white text-4xl py-32 mb-0 px-32"><b>Crear categoría</b></p> 
            <div className="text-white mx-32 my-0 grid grid-cols-3 gap-5 items-center ">
                  <form> 
                        <label className="text-xs">Nombre de categoría</label> <br />
                        <input className="w-80 h-10 mb-5 border rounded bg-[#787878] text-xs" type="text" placeholder="" />
                        <button className="text-[#3E1149] text-xs bg-[#E487FB] h-11 w-80 py-2 px-4 my-3 border border-white rounded"><a href="/"><b>Crear</b></a></button>                
                  </form>              
            </div>   
        </div>
                </div>
            </div>
        </div>
    )
};

export default CrearCategoria;