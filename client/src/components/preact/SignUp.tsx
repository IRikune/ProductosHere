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

enum Step {
    Name = 0,
    Email = 1,
    Password = 2,
    Profile = 3,
}
export function SignUpForm() {
    const step = useSignal(0);
    const handleStep = (e: TargetedEvent<HTMLButtonElement>) => {
        step.value = step.value + 1;
    }
    return (
        <form class="flex flex-col" onSubmit={e => e.preventDefault()}>
            <div class="relative">
                {step.value === Step.Name && <NameStep />}
                {step.value === Step.Email && <EmailStep />}
                {step.value === Step.Password && <PasswordStep />}
                {step.value === Step.Profile && <ProfileStep />}
            </div>
            <button
                onClick={handleStep}
                type="button"
                class="w-10 h-10 cursor-pointer bg-black rounded-full m-auto mt-2">
                👉
            </button>
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

function ProfileStep() {
    return (
        <input
            value={formPassword}
            class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
            placeholder="Escribe tu perfil..."
            id="name"
            type="text"
        />
    )
}