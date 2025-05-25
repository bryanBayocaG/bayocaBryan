
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
    const handleChange = () => {
        console.log('helo')
    }
    return (
        <div className="bg-primary dark:bg-primary-dark text-white mx-auto flex flex-col md:flex-row gap-[1rem] shadow-lg p-[1rem] w-[85vw] max-w-[65rem] rounded-[.5rem]">
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
            <div className="flex justify-center gap-[1rem]">
                <div className="flex flex-row md:flex-col md:items-start gap-[.5rem] items-center">
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
                <div className="flex flex-row md:flex-col md:items-start gap-[.5rem] items-center">
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
            </div>
        </div>
    )
}

export default SearchBar