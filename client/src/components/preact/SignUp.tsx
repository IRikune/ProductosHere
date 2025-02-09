import { useSignal, signal, batch, type Signal } from "@preact/signals";
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
const step = signal(0);
export function SignUp() {

    const isAnimating = useSignal(true);

    return (
        <>
            <section class="h-16 flex flex-col justify-center items-center">
                <a class="z-10" href="/">
                    <h1 class={`font-drawed transition-all duration-1000 text-6xl ${!isAnimating.value && "-translate-y-4"}`}>
                        ProductosHere
                    </h1>
                </a>
                <DinamicDialog step={step} isAnimating={isAnimating} />
            </section>
            <section class="h-40 mt-10">
                <AuthPresentation isAnimating={isAnimating} />
                {!isAnimating.value && <SignUpForm />}
            </section>
            <section
                class={`opacity-0 justify-self-end transition-all duration-1000 ${!isAnimating.value && "opacity-100"}`}>
                <SignUpSteps step={step} />
            </section>
            {/* <h1>Data</h1>
            <h2>Name: {formName}</h2>
            <h2>Email: {formEmail}</h2>
            <h2>Password: {formPassword}</h2> */}
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
        if (step.value < Step.Profile) step.value = step.value + 1;
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
                step.value !== Step.Profile
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
            placeholder="Ejemplo: María López"
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
            placeholder="tucorreo@algo.com"
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
            placeholder="Shhhhh..."
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

function DinamicDialog({ step, isAnimating }: { step: Signal<number>, isAnimating: Signal<boolean> }) {

    return (
        <h2 class={`block h-10 font-drawed text-xl opacity-0 transition-all duration-1000 m-auto ${!isAnimating.value && "opacity-100"}`}>
            {step.value === Step.Name && "¿Cómo te gustaría que te llamemos?"}
            {step.value === Step.Email && "Tu correo electrónico (¡prometemos no compartirlo con nadie!)"}
            {step.value === Step.Password && "Crea una contraseña tan fuerte como tu café matutino"}
            {step.value === Step.Profile && "¿Una imagen que te represente? ¡Nos encantará conocer tu estilo!"}
        </h2>
    )
}