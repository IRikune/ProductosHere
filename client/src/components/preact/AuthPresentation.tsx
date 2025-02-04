import { LovingDoodle } from "../doodles/LovingDoodle"
export function AuthPresentation() {
    return (
        <section className="font-drawed text-center presentation">
            <h1 className="font-drawed text-6xl">
                ProductosHere
            </h1>
            <img
                src="../../public/ducks.png"
                alt="ducks"
                className="w-96 -my-15 animate-pulse-2"
            />
            <h2 className="text-4xl">¿Te quieres unir a nosotros?</h2>
            <h3 className="text-5xl">¡Bienvenido!</h3>
        </section>
    )
}

