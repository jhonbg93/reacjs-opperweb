import ButtonHome from "./components/ButtonHome";
import LogoHome from "./components/LogoHome";
import Menu from "./components/Menu";

function Home(){
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
                    <div className="my-20 mx-20"  >
                        <p className="text-white text-3xl">Hola, <b>Pedro Perez</b></p>
                        <div className="my-20 mx-0">
                            <p className="text-white">Selecciona una opción:</p>
                            <ButtonHome/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;