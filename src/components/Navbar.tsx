import { useState } from "preact/hooks";
import { Logo } from "./Logo";
import "./Navbar.css";

export function Navbar() {
    return (
        <nav class="bg-white py-4 px-5 border-b border-black">
            <ul class="flex justify-between uppercase text-sm">
                <div class="flex items-center gap-5 font-light">
                    <NavbarMenu />
                    <NavbarItem class="hidden md:block" href="#">Preguntas</NavbarItem>
                    <NavbarItem class="hidden md:block" href="#">Nosotros</NavbarItem>
                </div>
                <div>
                    <a href="/">
                        <Logo />
                    </a>
                </div>
                <div class="flex items-center gap-5 font-light">
                    <NavbarItem class="hidden md:block" href="#">Productos</NavbarItem>
                    <NavbarItem class="block" href="#">Unirse ahora</NavbarItem>
                </div>
            </ul>
        </nav>
    )
}

type NavbarItemProps = {
    href: string;
    class?: string;
    children: any;
}

function NavbarItem({ href, children, class: className }: NavbarItemProps) {
    return (
        <li>
            <a
                class={`relative before:absolute before:-bottom-1 before:w-0 before:h-px before:bg-black hover:before:w-full before:transition-all before:duration-300 ${className}`}
                href={href}>{children}
            </a>
        </li>
    )
}
function NavbarMenu() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}
                class="relative w-10 md:hidden">
                <span class="uppercase relative before:absolute before:-bottom-1 before:w-0 before:h-px before:bg-black hover:before:w-full before:transition-all before:duration-300">
                    menu
                </span>
            </button>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}
function Menu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {
    return (
        <ul
            class={`
                fixed text-2xl opacity-0 transition-opacity bg-white -left-[100dvw] w-dvw h-dvh -top-1 py-10 -z-50 flex items-center 
                justify-center gap-2 flex-col ${isOpen ? 'animation-slide z-10 opacity-100' : 'animation-slide-out z-10'}
                `}>
            <NavbarItem href="#">Preguntas</NavbarItem>
            <NavbarItem href="#">Preguntas</NavbarItem>
            <NavbarItem href="#">Preguntas</NavbarItem>
            <button onClick={() => setIsOpen(false)} class="text-black">
                Cerrar menu
            </button>
        </ul>
    )
}