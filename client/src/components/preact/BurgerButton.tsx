import { useState, useEffect } from 'preact/hooks';
import { Button } from './Button';
import '../../assets/animations.css'
export function BurgerButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false)
    }, [])

    return (
        <div
            className=''
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='cursor-pointer w-10 h-10 right-14 top-8 absolute rounded flex justify-center items-center transition duration-300 active:bg-neutral-200 z-20 overflow-hidden starting:opacity-0'>
                <div className={`rounded w-[80%] p-px bg-black self-start absolute mt-2 ${isOpen ? 'animation-top-bar-open' : 'animation-top-bar-close'}`}></div>
                <div className={`rounded w-[80%] p-px bg-black absolute ${isOpen ? 'animation-middle-bar-open' : 'animation-middle-bar-close'}`}></div>
                <div className={`rounded w-[80%] p-px bg-black self-end absolute mb-2 ${isOpen ? 'animation-bottom-bar-open' : 'animation-bottom-bar-close'}`}>
                </div>
            </button>
            <div
                className="-z-50">
                <Menu isOpen={isOpen} />
            </div>
        </div>
    );
}
function Menu({ isOpen }: { isOpen: boolean }) {
    return (
        <div
            className={`
                fixed bg-white -left-[100dvw] w-dvw h-dvh -top-1 py-10 -z-50 flex items-center
                justify-center flex-col ${isOpen ? 'animation-slide z-10' : 'animation-slide-out z-10'}`}>
            <a href='/feed'>
                <Button type='outlined' className='text-3xl my-2'>Feed</Button>
            </a>
            <a href='/games'>
                <Button type='outlined' className='text-3xl my-2'>Games</Button>
            </a>
            <a href='/about'>
                <Button type='outlined' className='text-3xl my-2'>About</Button>
            </a>
            <a href='/login'>
                <Button type='outlined' className='text-2xl my-2'>Login</Button>
            </a>
            <a href='/signup'>
                <Button type='filled' className='text-2xl my-2'>Sign Up</Button>
            </a>
        </div>
    )
}