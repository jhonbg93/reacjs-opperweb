function ButtonHome(){
    return(
        <div className="h-80 w-96 space-y-6 my-9" >
            <a href="#"><button className=" text-xs text-[#3E1149] bg-[#E487FB] h-12 w-64 py-2 px-4 my-3 border border-white rounded"><a href="/"><b>Ver todas las categorías</b></a></button></a>
            <a href="#"><button className=" text-xs text-[#3E1149] bg-[#E487FB] h-12 w-64 py-2 px-4 my-3 border border-white rounded"><a href="/"><b>Crear categorías</b></a></button></a>
            <a href="#"><button className=" text-xs text-[#3E1149] bg-[#E487FB] h-12 w-64 py-2 px-4 my-3 border border-white rounded"><a href="/"><b>Cerrar sesión</b></a></button></a>
        </div>
        
    )
};

export default ButtonHome;