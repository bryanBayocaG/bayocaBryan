import { useTheme } from 'next-themes'
import { CiLight, CiDark } from "react-icons/ci";
function ThemeSwitch() {
    const { theme, setTheme } = useTheme()
    return (
        <div className='w-[2rem] h-[2rem] '>
            {theme === 'light' ?
                (<button title='Switch Theme' className='hover:cursor-pointer w-full h-full hover:text-primary' onClick={() => setTheme('dark')}><CiDark className='w-full h-full' /></button>)
                :
                (<button title='Switch Theme' className='hover:cursor-pointer w-full h-full hover:text-primary' onClick={() => setTheme('light')}><CiLight className='w-full h-full' /></button>)}
        </div>
    )
}

export default ThemeSwitch