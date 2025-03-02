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
            <div class="hidden md:block">
                <Button type="outlined" to="/login">Iniciar Sesión</Button>
                <Button class="mx-2" type="filled" to="/signup">Registrarse
                </Button>
            </div>
            <div class="md:hidden">
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