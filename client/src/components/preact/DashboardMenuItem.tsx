import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type { ComponentChildren } from "preact";

interface Props {
    id: string;
    children: ComponentChildren;
    class?: string;
}
export function DashboardMenuItem({ id, children, class: className }: Props) {
    const isActive = useSignal(false);
    useEffect(() => {
        if (id === window.location.pathname) {
            isActive.value = true;
        }
    }, [id, isActive])
    return (
        <>
            <li
                class={`hover:bg-neutral-200 transition duration-300 px-3 py-2 ${isActive.value && "bg-neutral-200 border-l-4"} ${className}`}
                id={id}>
                {children}
            </li>
        </>
    )
}