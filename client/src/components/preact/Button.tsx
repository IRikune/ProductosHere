import type { ComponentChildren } from "preact"

interface Props {
    type?: "underline" | "filled" | "outlined";
    to?: string;
    children?: ComponentChildren;
    disabled?: boolean;
    class?: string;
    id?: string;
    onClick?: () => void;
}

export function Button({ disabled, type = "underline", to, children, class: className, id, ...props }: Props) {
    const Tag = to ? "a" : "button";
    const styles = {
        underline: 'relative px-2 before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:rounded-full before:duration-300 before:transition-all before:bg-black hover:before:w-full',
        filled: 'text-white border-transparent border-2 rounded bg-black px-4 py-2 hover:bg-transparent hover:border-black transition-all duration-300 hover:text-black',
        outlined: 'border-black border-2 rounded bg-transparent px-4 py-2 hover:bg-black transition-all duration-300 hover:text-white',
    }
    return (
        <Tag
            {...props}
            href={to}
            id={id}
            disabled={disabled}
            className={`cursor-pointer ${styles[type]} ${className}`}>
            {children}
        </Tag>);
}