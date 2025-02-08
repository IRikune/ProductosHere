import { useSignalEffect, useSignal, type Signal } from "@preact/signals";
import { useWait } from "../../hooks/mod";

interface Props {
    class?: string;
    isAnimating: Signal<boolean>;
}
export function AuthPresentation({ isAnimating, class: className }: Props) {
    const isLoading = useSignal(true);
    useSignalEffect(() => {
        useWait(3000)
            .then(() => { isLoading.value = false })

        useWait(4000)
            .then(() => { isAnimating.value = false })
    })
    return (
        <section
            class={`font-drawed text-center presentation transition-all duration-1000 transition-discrete starting:opacity-0
            ${isLoading.value ? "animate-fade-in" : "animate-fade-out"} 
            ${!isAnimating.value && "hidden"} ${className}`}
        >
            <img
                src="../../public/ducks.png"
                alt="ducks"
                class="w-96 -mt-40 -mb-20 animate-pulse-2 aspect-square"
            />
            <h2 class="text-4xl">¿Te quieres unir a nosotros?</h2>
            <h3 class="text-5xl">¡Bienvenido!</h3>
        </section>
    );
}