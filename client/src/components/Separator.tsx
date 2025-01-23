
interface Props {
    class?: string;
    repeat?: number;
}

function SVG({ className }: { className: string }) {
    return (
        <svg className={`w-32 ${className}`} viewBox="0 0 345 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M319.527 13.7592C307.316 13.7592 295.106 13.9172 282.896 13.7162C273.105 13.5582 263.314 12.7108 253.509 12.6103C245.035 12.5241 236.503 12.5528 228.087 13.4433C210.408 15.296 192.816 18.0391 175.123 19.7769C166.606 20.6099 158.275 19.2168 149.973 15.9136C136.432 10.5278 122.389 13.1273 108.604 15.9423C100.56 17.5795 92.5867 19.5472 84.542 21.0839C77.3991 22.4483 71.0436 21.1701 65.2462 16.0141C59.406 10.815 51.8766 12.1076 45.1202 13.7018C35.3006 15.9997 25.6957 19.2312 16.0335 22.1898C9.97849 24.0425 4.51039 22.8217 0.817287 17.4503C-0.399434 15.6838 -0.0988275 12.2369 0.688463 9.98202C1.01769 9.03413 4.9398 8.21547 6.34261 8.97666C10.823 11.4038 14.7451 9.75224 18.9106 8.51711C31.1637 4.88351 43.4455 0.991394 56.4286 2.09727C60.637 2.45632 65.418 3.43295 68.6817 5.83141C75.3093 10.7145 82.1229 9.7953 89.2085 8.57453C101.419 6.4633 113.572 3.97871 125.825 2.19782C134.943 0.876508 143.904 2.0111 152.664 5.4149C163.643 9.66607 175.166 8.57456 186.489 7.26762C205.413 5.08459 224.236 1.73821 243.203 0.201471C253.681 -0.64589 264.359 1.43659 274.966 1.70947C289.137 2.06852 303.323 1.86745 317.508 2.06852C324.823 2.16905 332.181 2.32705 339.438 3.16005C341.471 3.38984 344.434 5.83139 344.863 7.74155C345.736 11.5906 342.258 11.8635 339.366 12.0215C332.768 12.4092 326.169 12.8257 319.57 13.2422C319.57 13.4145 319.555 13.5869 319.541 13.7449L319.527 13.7592Z" fill="black" />
        </svg>

    )
}



export function Separator({ class: className = "", repeat = 4 }: Props) {
    const svgs = Array.from({ length: repeat }, (_, i) => i);

    return (
        <section className="flex justify-around">
            {
                svgs.map(() => {
                    return <SVG className={className} />
                })
            }
        </section>

    )
}