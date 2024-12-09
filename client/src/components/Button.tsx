

interface Props {
    type?: "underline" | "filled" | "outlined";
    to?: string;
    children?: any;
    className?: string;
}


export function Button({ type = "underline", to, children, className }: Props) {
    const Tag = to ? "a" : "button";

    if (type === "underline") {
        return (
            <Tag
                href={to}
                className={`relative px-2 before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:rounded-full before:duration-300 before:transition-all before:bg-black hover:before:w-full  ${className}`}>
                {children}
            </Tag>);
    }
    if (type === "filled") {
        return (
            <Tag
                href={to}
                className={`text-white border-transparent border-2 rounded bg-black px-4 py-2 hover:bg-transparent hover:border-black transition-all duration-300 hover:text-black ${className}`}>
                {children}
            </Tag>);
    }
    if (type === "outlined") {
        return (
            <Tag
                href={to}
                className={`border-black border-2 rounded bg-transparent px-4 py-2 hover:bg-black transition-all duration-300 hover:text-white ${className}`}>
                {children}
            </Tag>);
    }

    return <Tag>Hello</Tag>;
}
