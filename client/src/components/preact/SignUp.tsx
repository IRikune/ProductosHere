import { useSignal, signal, batch } from "@preact/signals";
import { AuthPresentation } from "./AuthPresentation";
import { SignUpSteps } from "./SignUpSteps";
import type { TargetedEvent } from "preact/compat";

const signUpData = signal({
    name: "",
    email: "",
    password: "",
})
const formName = signal("");
const formEmail = signal("");
const formPassword = signal("");
export const step = signal(0);
export function SignUp() {

    const isAnimating = useSignal(true);

    return (
        <>
            <section class="h-32 mt-30">
                <a class="z-10" href="/">
                    <h1 class={`font-drawed transition-all duration-1000 text-6xl ${!isAnimating.value && "-translate-y-4"}`}>
                        ProductosHere
                    </h1>
                </a>
            </section>
            <section class="h-56">
                <AuthPresentation isAnimating={isAnimating} />
                {!isAnimating.value && <SignUpForm />}
            </section>
            <section>
            </section>
            <h1>Data</h1>
            <h2>Name: {formName}</h2>
            <h2>Email: {formEmail}</h2>
            <h2>Password: {formPassword}</h2>
            <SignUpSteps />
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
    const handleStep = (e: TargetedEvent<HTMLButtonElement>) => {
        if (step.value !== 3) step.value = step.value + 1;
    }
    return (
        <form class="flex flex-col" onSubmit={e => e.preventDefault()}>
            <div class="relative">
                {step.value === Step.Name && <NameStep />}
                {step.value === Step.Email && <EmailStep />}
                {step.value === Step.Password && <PasswordStep />}
                {step.value === Step.Profile && <ProfileStep />}
            </div>
            {
                step.value !== 3
                && <button
                    onClick={handleStep}
                    type="button"
                    class="w-10 h-10 cursor-pointer bg-black rounded-full m-auto mt-2">
                    👉
                </button>
            }
        </form>
    );
}
function NameStep() {
    const handleNameInput = (e: TargetedEvent<HTMLInputElement>) => {
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
    const handleEmailInput = (e: TargetedEvent<HTMLInputElement>) => {
        const value = e.currentTarget?.value;
        batch(() => {
            formEmail.value = value;
            signUpData.value.email = value;
        })
    }
    return (
        <input
            onInput={handleEmailInput}
            value={formEmail}
            class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
            placeholder="Escribe tu correo..."
            id="email"
            type="text"
        />
    )
}

function PasswordStep() {
    const handlePasswordInput = (e: TargetedEvent<HTMLInputElement>) => {
        const value = e.currentTarget?.value;
        batch(() => {
            formPassword.value = value;
            signUpData.value.password = value;
        })
    }
    return (
        <input
            onInput={handlePasswordInput}
            value={formPassword}
            class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
            placeholder="Escribe tu contraseña..."
            id="name"
            type="password"
        />
    )
}

function ProfileStep() {
    const handleProfileInput = (e: TargetedEvent<HTMLInputElement>) => {
        const value = e.currentTarget?.value;
        batch(() => {
            formPassword.value = value;
            signUpData.value.password = value;
        })
    }
    return (
        <input
            onInput={handleProfileInput}
            value={formPassword}
            class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
            placeholder="Escribe tu perfil..."
            id="name"
            type="text"
        />
    )
}