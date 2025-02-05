import { useState, useEffect } from "preact/hooks";
import { useWait } from "../../hooks/mod";
import type { Dispatch, StateUpdater } from "preact/hooks";
interface Props {
    class?: string
    isAnimating: boolean,
    setIsAnimating: Dispatch<StateUpdater<boolean>>
}
export function AuthPresentation({ isAnimating, setIsAnimating, class: className }: Props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        useWait(3000)
            .then(() => setIsLoading(false))
        useWait(4000)
            .then(() => setIsAnimating(false))
    }, [])

    return (
        <section
            class={`font- font-drawed text-center presentation transition-all duration-1000 transition-discrete starting:opacity-0
            ${isLoading ? "animate-fade-in" : "animate-fade-out"} ${!isAnimating && "hidden"} ${className}`}>
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