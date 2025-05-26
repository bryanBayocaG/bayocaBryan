import { projects } from '../../../data/data'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
    const webAppCount = projects.filter(project => project.type === "Web App").length;
    const logoDesignCount = projects.filter(project => project.type === "Logo Design").length;
    const graphicDesignCount = projects.filter(project => project.type === "Graphic Art").length;
    const handleChange = () => {
        console.log('helo')
    }
    return (
        <div className='sticky top-0 w-full gap-[1rem] bg-primary p-[1rem] dark:bg-primary-dark flex justify-between z-20 rounded-[.1rem] shadow-lg'>
            <div className=" text-white flex flex-col gap-[1rem] w-[85vw] max-w-[55rem] rounded-[.5rem]">
                <div className='bg-white/20 p-[1rem] shadow-lg'>
                    <div className="flex w-full bg-white text-black  items-center px-2">
                        <FaSearch />
                        <input
                            id='searchbar'
                            type="text"
                            placeholder="Search tech..."
                            // value={serachData.searchTerm}
                            onChange={handleChange}
                            className="bg-transparent p-2 focus:outline-none w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-start gap-[1rem]">
                    <div className="flex flex-col md:items-start gap-[.5rem] items-center">
                        <label>Type</label>
                        <select
                            id="category"
                            // value={serachData.category}
                            onChange={handleChange}
                            className="bg-white/30 dark:bg-white text-white dark:text-neutral-600 rounded-md px-[.5rem] py-[.3rem] focus:outline-none"
                        >
                            <option className="text-neutral-600" value="all">All</option>
                            <option className="text-neutral-600 " value="framework">Web App</option>
                            <option className="text-neutral-600 " value="language">Graphic Art</option>
                            <option className="text-neutral-600" value="library">Logo Design</option>
                        </select>
                    </div>
                    <div className="flex flex-col md:items-start gap-[.5rem] items-center">
                        <label>Status</label>
                        <select
                            id="category"
                            // value={serachData.category}
                            onChange={handleChange}
                            className="bg-white/30 dark:bg-white text-white dark:text-neutral-600 rounded-md px-[.5rem] py-[.3rem] focus:outline-none"
                        >
                            <option className="text-neutral-600" value="all">All</option>
                            <option className="text-neutral-600 " value="framework">Done</option>
                            <option className="text-neutral-600 " value="language">In-Progress</option>
                        </select>
                    </div>
                    <div className="flex    flex-col md:items-start gap-[.5rem] items-center">
                        <label>No. per page</label>
                        <select
                            id="category"
                            // value={serachData.category}
                            onChange={handleChange}
                            className="bg-white/30 dark:bg-white text-white dark:text-neutral-600 rounded-md px-[.5rem] py-[.3rem] focus:outline-none"
                        >
                            <option className="text-neutral-600" value="3">03 per Page</option>
                            <option className="text-neutral-600" value="4">04 per Page</option>
                            <option className="text-neutral-600 " value="5">05 per Page</option>
                            <option className="text-neutral-600 " value="6">06 per Page</option>
                            <option className="text-neutral-600 " value="7">07 per Page</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-[1rem] h-full'>
                <div className='w-[7rem] flex flex-col items-center justify-center bg-white/20 text-white p-[.5rem] rounded-[.5rem] shadow-lg'>
                    <p className='text-[2rem] text-center font-bold'>{logoDesignCount < 10 ? `0${logoDesignCount}` : logoDesignCount}</p>
                    <p className='whitespace-nowrap text-center'>Logo Design</p>
                </div>
                <div className='w-[7rem] flex flex-col items-center justify-center bg-white/20 text-white p-[.5rem] rounded-[.5rem] shadow-lg'>
                    <p className='text-[2rem] text-center font-bold'>{graphicDesignCount < 10 ? `0${graphicDesignCount}` : graphicDesignCount}</p>
                    <p className='whitespace-nowrap text-center'>Graphic Design</p>
                </div>
                <div className='w-[7rem] flex flex-col items-center justify-center bg-white/20 text-white p-[.5rem] rounded-[.5rem] shadow-lg'>
                    <p className='text-[2rem] text-center font-bold'>{webAppCount < 10 ? `0${webAppCount}` : webAppCount}</p>
                    <p className='whitespace-nowrap text-center'>Web App</p>
                </div>
            </div>
        </div>
    )
}

export default SearchBar