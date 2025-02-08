interface InputProps {
    placeholder: string;
    id: string;
    type: string;
    class?: string;
}

export function Input({ placeholder, id, type, class: className }: InputProps) {
    return (
        <div class="tracking-widest">
            <input
                class={`font-drawed w-full rounded focus:outline-offset-1 outline-neutral-500 p-2 focus:outline-none text-3xl  after:content-none bg-neutral-200 ${className}`}
                placeholder={placeholder}
                id={id}
                type={type} />
        </div>
    )
}