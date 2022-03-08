
import Button from "./Button";
import Input from "./Input";
import MenuFooter from "./MenuFooter";
import Retroceder from "./Retroceder"

function LoginMenu(){
    return(
        <div className="text-center justify-content">
            <div className="content-start">
                <Retroceder/>
            </div>
            <div className="justify-content">
                <img src="image/loginMenu/loginmenu.png" alt="logo" />
            </div>
            <div>
                <p className="text-3x1">ひさしぶり!</p>
            </div>
            
            <p className="text-xs">¡Hola, te extrañamos!</p>
            <div className="text-left ">
                <div><p className="text-xs">Email</p></div>
                    <Input type='email' placeholder="usuario@" name="Email"/> 
                <div ><p className="text-xs">Contraseña</p></div>
                    <Input type='password' placeholder="password" name="password"/>
                <div className="text-rigth" ><p className="text-[#E487FB] text-xs "> <a href="/">¿Olvido la contraseña?</a></p></div>
                <Button/>
            </div>
                     
            <MenuFooter/>
        </div>

    )
};

export default LoginMenu;