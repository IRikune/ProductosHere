import type { Signal } from "@preact/signals";

export function SignUpSteps({ step }: { step: Signal<number> }) {
    return (
        <div class="**:text-neutral-500 **:hover:text-black *:cursor-pointer **:transition-all **:duration-300 **:font-drawed **:text-4xl **:mt-2 **:mx-2">
            <button
                onClick={() => { step.value = 0 }}
                type="button">
                Nombre
            </button>
            <button
                onClick={() => { step.value = 1 }}
                type="button">
                Email
            </button>
            <button
                onClick={() => { step.value = 2 }}
                type="button">
                Contraseña
            </button>
            <button
                onClick={() => { step.value = 3 }}
                type="button">
                Perfil
            </button>
        </div>
    )
}
