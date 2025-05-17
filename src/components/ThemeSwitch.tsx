import { useTheme } from 'next-themes'
import { CiLight, CiDark } from "react-icons/ci";
function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    return (
        <div className='w-6 h-6 '>
            {theme === 'light' ?
                (<button className='hover:cursor-pointer w-full h-full dark:hover:text-neutral-300 hover:text-neutral-500' onClick={() => setTheme('dark')}><CiDark className='w-full h-full' /></button>)
                :
                (<button className='hover:cursor-pointer w-full h-full dark:hover:text-neutral-300 hover:text-neutral-500' onClick={() => setTheme('light')}><CiLight className='w-full h-full' /></button>)}
        </div>
    )
}

export default ThemeSwitch