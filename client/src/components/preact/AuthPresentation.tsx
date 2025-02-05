import { useState, useEffect } from "preact/hooks";
import { useWait } from "../../hooks/mod";


export function AuthPresentation({ class: className }: { class?: string }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        useWait(3000)
            .then(() => setIsLoading(false))
        useWait(4000)
            .then(() => setIsAnimating(false))
    }, [])

    return (
        <section
            class={`font-drawed text-center presentation transition-all duration-1000 transition-discrete starting:opacity-0
            ${isLoading ? "animate-fade-in" : "animate-fade-out"} ${!isAnimating && "hidden"} ${className}`}>
            <h1 class="font-drawed text-6xl">
                ProductosHere
            </h1>
            <img
                src="../../public/ducks.png"
                alt="ducks"
                class="w-96 -my-15 animate-pulse-2 aspect-square"
            />
            <h2 class="text-4xl">¿Te quieres unir a nosotros?</h2>
            <h3 class="text-5xl">¡Bienvenido!</h3>
        </section>
    )
}