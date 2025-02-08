import { useState } from "preact/hooks"
import { AuthPresentation } from "./AuthPresentation";

export function SignUp() {
    const [isAnimating, setIsAnimating] = useState(true);
    return (
        <>
            <div class="">
            </div>
            <a class="z-10" href="/">
                <h1 class={`font-drawed transition-all duration-1000 text-6xl ${!isAnimating && "-mt-12 mb-2"}`}>
                    ProductosHere
                </h1>
            </a>
            <section>
                <AuthPresentation
                    isAnimating={isAnimating}
                    setIsAnimating={setIsAnimating}
                />
            </section>
            {
                !isAnimating && <SignUpForm />
            }
        </>
    )
}

function SignUpForm() {
    return (
        <form action="">
            <div class="relative">
                <input class="font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl tracking-tighter after:content-none bg-neutral-200"
                    placeholder="Como te llamas?" id="name" type="text" />
            </div>
        </form>
    )
}