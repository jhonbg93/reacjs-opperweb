function Menu(){
    return(
        <div>
            <div className="mx-10 my-14 ">
                <p><b>Categorías</b></p>
                <div className="mx-5 my-2 underline ">
                    <ul>
                     <a href="#"><li>Ver todas</li></a>
                     <a href="#"><li>Crear</li></a>
                    </ul>
                </div>
                <p className="my-10"><b>Cerrar Sesión</b></p>
                
            </div>
            
        </div>
    )
}

export default Menu;