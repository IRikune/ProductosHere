import { useState } from "preact/hooks"
import { AuthPresentation } from "./AuthPresentation";

export function SignUp() {
    const [isAnimating, setIsAnimating] = useState(true);
    return (
        <>
            <div class="">
            </div>
            <h1 class={`font-drawed transition-all duration-1000 text-6xl ${!isAnimating && "-mt-12 mb-2"}`}>
                ProductosHere
            </h1>
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
            <input class="w-full bg-neutral-200 rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-black o"
                placeholder="Como te llamas?" id="name" type="text" />
        </form>
    )
}