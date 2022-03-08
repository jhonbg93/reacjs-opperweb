import Categorias from "./components/Categorias";
import LogoHome from "./components/LogoHome";
import Menu from "./components/Menu";

function ListaCategorias(){
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
                    <Categorias/>
                </div>
            </div>
        </div>
    )
};

export default ListaCategorias;