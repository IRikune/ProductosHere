export function Highlight({ class: className }: { class?: string }) {
    return (
        <svg viewBox="0 0 89 113" fill="none" xmlns="http://www.w3.org/2000/svg" class={`w-10 fill-black ${className}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M84.6197 31.6024C84.2747 27.3869 83.9704 23.2136 83.5027 19.0104C83.4054 18.1058 82.5977 17.4578 81.6992 17.5573C80.7946 17.6547 80.1443 18.4685 80.2438 19.3669C80.7057 23.5472 81.0086 27.6851 81.35 31.8714C81.4266 32.7757 82.2194 33.4465 83.1153 33.3739C84.0195 33.2973 84.6963 32.5066 84.6197 31.6024Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M55.839 51.4837C46.2722 42.1509 36.2398 33.3074 26.4803 24.1848C25.8152 23.5664 24.7788 23.6032 24.1626 24.2621C23.5442 24.9272 23.5749 25.9612 24.2378 26.5858C33.9831 35.6895 44.0013 44.5139 53.5455 53.8317C54.1979 54.4665 55.2338 54.4506 55.8664 53.8045C56.5012 53.1521 56.4851 52.1163 55.839 51.4837Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.8201 95.755C25.7064 93.7199 14.5185 91.9926 3.42785 89.8334C2.54059 89.6654 1.68107 90.245 1.50688 91.1301C1.3305 92.0213 1.9163 92.8831 2.80136 93.0573C13.9066 95.2147 25.1069 96.9463 36.2352 98.9796C37.1246 99.1414 37.9803 98.5535 38.1421 97.664C38.3061 96.7684 37.7157 95.919 36.8201 95.755Z" className={className} />
        </svg>
    )
}