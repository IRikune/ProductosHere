import { type Signal, useSignal } from '@preact/signals';
import { Button } from './Button';
import '../../assets/animations.css'

export function BurgerMenu({ class: className }: { class?: string }) {
    const isOpen = useSignal(false);
    return (
        <div>
            <button
                type="button"
                onClick={() => { isOpen.value = !isOpen.value }}
                class={`cursor-pointer w-10 h-10 relative rounded flex justify-center items-center transition duration-300 active:bg-neutral-200 z-40 overflow-hidden starting:opacity-0 *:bg-black *:p-px ${className}`}>
                <div
                    class={`rounded w-[80%] self-start absolute mt-2 ${isOpen.value ? 'animation-top-bar-open' : 'animation-top-bar-close'}`} />
                <div
                    class={`rounded w-[80%] absolute ${isOpen.value ? 'animation-middle-bar-open' : 'animation-middle-bar-close'}`} />
                <div
                    class={`rounded w-[80%] self-end absolute mb-2 ${isOpen.value ? 'animation-bottom-bar-open' : 'animation-bottom-bar-close'}`}>
                </div>
            </button>
            <div>
                <Menu isOpen={isOpen} />
            </div>
        </div>
    );
}
function Menu({ isOpen }: { isOpen: Signal<boolean> }) {
    return (
        <div
            class={`
                fixed bg-[#f4f2ed] left-0 w-dvw h-dvh -top-1 py-10 z-30 flex items-center justify-center flex-col starting:opacity-0 transition-all duration-300 ease-in-out transition-discrete
                ${isOpen.value ? 'opacity-100 translate-0' : 'opacity-0 hidden'}`}>
            <a href='/feed'>
                <Button type='outlined' class='text-3xl my-2'>Feed</Button>
            </a>
            <a href='/games'>
                <Button type='outlined' class='text-3xl my-2'>Games</Button>
            </a>
            <a href='/about'>
                <Button type='outlined' class='text-3xl my-2'>About</Button>
            </a>
            <a href='/login'>
                <Button type='outlined' class='text-2xl my-2'>Login</Button>
            </a>
            <a href='/signup'>
                <Button type='filled' class='text-2xl my-2'>Sign Up</Button>
            </a>
        </div>
    )
}