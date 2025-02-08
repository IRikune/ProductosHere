import { useSignal, signal, batch } from "@preact/signals";
import { AuthPresentation } from "./AuthPresentation";
import type { TargetedEvent } from "preact/compat";

const signUpData = signal({
    name: "",
    email: "",
    password: "",
})

const formName = signal("");
const formEmail = signal("");
const formPassword = signal("");
export function SignUp() {
    const isAnimating = useSignal(true);
    return (
        <>
            <a class="z-10" href="/">
                <h1 class={`font-drawed transition-all duration-1000 text-6xl ${!isAnimating.value && "-mt-12 mb-2"}`}>
                    ProductosHere
                </h1>
            </a>
            <section>
                <AuthPresentation isAnimating={isAnimating} />
            </section>
            {!isAnimating.value && <SignUpForm />}
            <h1>Data</h1>
            <h2>Name: {formName}</h2>
            <h2>Email: {formEmail}</h2>
            <h2>Password: {formPassword}</h2>
        </>
    );
}
export function SignUpForm() {
    const step = useSignal("name");
    return (
        <form onSubmit={e => e.preventDefault()}>
            <div class="relative">
                {step.value === "name" && <NameStep />}
                {step.value === "email" && <EmailStep />}
                {step.value === "password" && <PasswordStep />}
            </div>
        </form>
    );
}
function NameStep() {
    const handleNameInput = (e: TargetedEvent<HTMLInputElement>) => {
        console.log(e.currentTarget?.value)
        const value = e.currentTarget?.value;
        batch(() => {
            formName.value = value;
            signUpData.value.name = value;
        })
    }
    return (
        <input
            onInput={handleNameInput}
            value={formName}
            class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
            placeholder="¿Cómo te llamas?"
            id="name"
            type="text"
        />
    )
}
function EmailStep() {
    return (
        <input
            value={formEmail}
            class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
            placeholder="Escribe tu correo..."
            id="name"
            type="text"
        />
    )
}

function PasswordStep() {
    return (
        <input
            value={formPassword}
            class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
            placeholder="Escribe tu contraseña..."
            id="name"
            type="password"
        />
    )
}