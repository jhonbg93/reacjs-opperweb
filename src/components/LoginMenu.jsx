
import Button from "./Button";
import Input from "./Input";
import MenuFooter from "./MenuFooter";
import Retroceder from "./Retroceder"

function LoginMenu(){
    return(
        <div className="text-center justify-content">
           
            <div className="justify-content">
                <img src="image/loginMenu/loginmenu.png" alt="logo" />
            </div>
            <div >
                <p className="text-4x1 "><b>ひさしぶり!</b></p>
            </div>
            
            <p className="text-xs">¡Hola, te extrañamos!</p>
            <div className="text-left ">
                <label className="text-xs">Email</label>
                <Input type='email' placeholder="usuario@" name="Email"/> 
                <label className="text-xs">Contraseña</label>
                <Input type='password' placeholder="password" name="password"/>
                <div className="text-rigth" ><p className="text-[#E487FB] text-xs "> <a href="/">¿Olvido la contraseña?</a></p></div>
                <Button/>
            </div>
            <div className="my-9">
            <MenuFooter/>
            </div>         
            
        </div>

    )
};

export default LoginMenu;