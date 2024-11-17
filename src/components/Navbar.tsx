import { Logo } from "./Logo";

export function Navbar() {
    return (
        <nav class="bg-white py-4 px-5 border-b border-black">
            <ul class="flex justify-between uppercase text-sm">
                <div class="flex items-center gap-5 font-light">

                    <NavbarItem href="#">Preguntas</NavbarItem>
                    <NavbarItem href="#">Nosotros</NavbarItem>
                </div>
                <div>
                    <a href="/">
                        <Logo />
                    </a>
                </div>
                <div class="flex items-center gap-5 font-light">
                    <NavbarItem href="#">Productos</NavbarItem>
                    <NavbarItem href="#">Unirse ahora</NavbarItem>
                </div>
            </ul>
        </nav>
    )
}

type NavbarItemProps = {
    href: string;
    children: any;
}

function NavbarItem({ href, children }: NavbarItemProps) {
    return (
        <li>
            <a
                class="relative before:absolute before:-bottom-1 before:w-0 before:h-px before:bg-black hover:before:w-full before:transition-all before:duration-300"
                href={href}>{children}</a>
        </li>
    )
}