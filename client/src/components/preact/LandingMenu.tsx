import { signal, effect } from "@preact/signals";
import { isAuthenticated } from "../../store/mod";
import { BurgerButton } from "./BurgerButton";
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
                <BurgerButton />
            </div>
        </>
    )
}

function IsLoggedInMenu() {
    return (
        <>
            <div class="">
                <BurgerButton />
            </div>
        </>
    )
}