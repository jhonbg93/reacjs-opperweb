function Categorias(){
    return(
        <div>
            <p className="text-white text-4xl py-32 px-32"><b>Lista de Categorías</b></p> 
            <div className="text-white mx-20 grid grid-cols-3 gap-5 items-center ">
                <a href="#"><div className="text-center py-7 bg-[#3E1149] w-48 h-20 mx-10"><p><b>ACCIÓN</b></p></div></a>              <a href="#"><div className="text-center py-7 bg-[#3E1149] w-48 h-20 mx-4"><p><b>AVENTURA</b></p></div>
</a>               <a href="#"><div className="text-center py-7 bg-[#3E1149] w-48 h-20 mx-4"><p><b>COMEDIA</b></p></div></a>              <a href="#"><div className="text-center py-7 bg-[#3E1149] w-48 h-20 mx-10"><p><b>TERROR</b></p></div>
</a>              <a href="#"><div className="text-center py-7 bg-[#3E1149] w-48 h-20 mx-4"><p><b>ROMANCE</b></p></div></a>              <a href="#"><div className="text-center py-7 bg-[#3E1149] w-48 h-20 mx-4"><p><b></b>MISTERIO</p></div>  </a>              
            </div>   
        </div>
    )
};

export default Categorias;
