import { Logo } from "./Logo";

export function Navbar() {
    return (
        <nav class="bg-white py-4 px-5 border-b border-black">
            <ul class="flex justify-between uppercase text-sm">
                <div class="flex items-center gap-5 font-light">

                    <NavbarItem href="#">FAQS</NavbarItem>
                    <NavbarItem href="#">Nosotros</NavbarItem>
                </div>
                <div>
                    <a href="/">
                        <Logo />
                    </a>
                </div>
                <div class="flex items-center gap-5 font-light">
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Unirse ahora</a>
                    </li>
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
            <a href={href}>{children}</a>
        </li>
    )
}