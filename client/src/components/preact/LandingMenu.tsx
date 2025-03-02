import { isAuthenticated } from "../../store/mod";
import { BurgerMenu } from "./BurgerMenu";
import { Button } from "./Button";

export function LandingMenu() {
    return (
        <>
            {
                isAuthenticated.value
                    ? <IsLoggedInMenu />
                    : <IsNotLoggedInMenu />
            }
        </>
    )
}

function IsNotLoggedInMenu() {
    return (
        <>
            <div class="relative flex justify-center mt-2 items-center">
                <Button class="hidden md:block" type="outlined" to="/login">Iniciar Sesión</Button>
                <Button class="hidden md:block mr-3 ml-1" type="filled" to="/signup">Registrarse
                </Button>
                <BurgerMenu />
            </div>
        </>
    )
}

function IsLoggedInMenu() {
    return (
        <>
            <div class="relative flex justify-center gap-10 mt-2 items-center">
                <Button class="" type="filled" to="/dashboard">
                    Dashboard
                </Button>
                <BurgerMenu />
            </div>
        </>
    )
}