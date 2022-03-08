function MenuFooter(){
    return(
        <div >
            <p className="text-xs"><hr />Regístrate también con</p>
            <div className="flex mx-5 ">
               <a href="#"><img className="mx-5" src="image/icons/Group100.png" alt="instagram" /></a>
               <a href="#"><img className="mx-5"src="image/icons/Group99.png" alt="twitter" /></a>
               <a href="#"><img className="mx-5"src="image/icons/Group98.png" alt="facebook" /></a>
            </div>
            
            <p className="text-xs">¿Quieres registrarte? <a href="/"><span className="text-[#E487FB]">Registrate</span></a></p>
            
        </div>
    )
};

export default MenuFooter;