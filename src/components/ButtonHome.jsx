function ButtonHome(){
    return(
        <div className="h-80 w-96 space-y-6 my-9" >
            <a href="#"><button className=" text-xs text-[#3E1149] bg-[#E487FB] h-12 w-64 py-2 px-4 my-3 border border-white rounded"><b>Ver todas las categorías</b></button></a>
            <a href="#"><button className=" text-xs text-[#3E1149] bg-[#E487FB] h-12 w-64 py-2 px-4 my-3 border border-white rounded"><b>Crear categorías</b></button></a>
            <a href="http://localhost:3000/"><button className=" text-xs text-[#3E1149] bg-[#E487FB] h-12 w-64 py-2 px-4 my-3 border border-white rounded"><b>Cerrar sesión</b></button></a>
        </div>
        
    )
};

export default ButtonHome;