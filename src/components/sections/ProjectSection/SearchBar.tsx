import { projects, techStack, type Project } from '../../../data/data'
import { FaMinus, FaPlus, FaSearch } from 'react-icons/fa'
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
    setProjectItem: Dispatch<SetStateAction<Project[]>>;
    setListPerPage: Dispatch<SetStateAction<number>>;
}

interface SearchData {
    searchProjectTerm: string;
    type: string;
    status: string;
    numberPerPage: number;
}


function SearchBar({ setProjectItem, setListPerPage }: SearchBarProps) {
    const navigate = useNavigate();
    const webAppCount = projects.filter(project => project.type === "Web App").length;
    const logoDesignCount = projects.filter(project => project.type === "Logo Design").length;
    const graphicDesignCount = projects.filter(project => project.type === "Graphic Art").length;
    const [searchData, setSearchData] = useState<SearchData>({
        searchProjectTerm: '',
        type: 'all',
        status: 'all',
        numberPerPage: 3,
    });
    const [currentTags, setCurrentTags] = useState<string[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        const updatedSearchData = {
            ...searchData,
            [id === 'searchProjectTerm' ? 'searchProjectTerm' : id]: value
        };
        setSearchData(updatedSearchData);

        const urlParams = new URLSearchParams();

        if (updatedSearchData.searchProjectTerm) {
            urlParams.set('searchProjectTerm', updatedSearchData.searchProjectTerm);
        }
        if (updatedSearchData.type && updatedSearchData.type !== 'all') {
            urlParams.set('useFor', updatedSearchData.type);
        }
        if (updatedSearchData.status && updatedSearchData.status !== 'all') {
            urlParams.set('category', updatedSearchData.status);
        }
        if (updatedSearchData.numberPerPage) {
            setListPerPage(updatedSearchData.numberPerPage);
        }
        const query = urlParams.toString();
        navigate(`?${query}`, { replace: true });
    }
    const handleTags = (name: string) => {
        const isAlreadySelected = currentTags.includes(name);
        if (isAlreadySelected) {
            const updateTags = currentTags.filter(tag => tag !== name)
            setCurrentTags(updateTags)
        } else {
            setCurrentTags(prev => [...prev, name])
        }
    }
    const filteredProjects = useMemo(() => {
        return projects.filter(proj => {
            const matchesSearch = proj.name.toLowerCase().includes(searchData.searchProjectTerm.toLowerCase());
            const matchesType =
                searchData.type === 'all' || proj.type === searchData.type;

            const matchesStatus =
                searchData.status === 'all' || proj.status === searchData.status;

            const matchesTags = currentTags.length === 0 || currentTags.some(tag => proj.techStack.includes(tag));

            return matchesSearch && matchesType && matchesStatus && matchesTags;


        });
    }, [searchData.searchProjectTerm, searchData.type, searchData.status, currentTags]);

    useEffect(() => {
        setProjectItem(filteredProjects)
    }, [filteredProjects])
    return (
        <div className='md:sticky top-0 flex flex-col gap-[1rem]  w-full bg-primary p-[1rem] dark:bg-primary-dark z-20 rounded-[.1rem] shadow-lg'>
            <div className='flex justify-between gap-[1rem] '>
                <div className="bg-white/20 p-[1rem] shadow-lg text-white flex flex-col md:flex-row gap-[1rem] w-[85vw] max-w-[55rem] rounded-[.5rem]">
                    <div className="flex w-full my-auto h-[90%] bg-white text-black  items-center px-2">
                        <FaSearch />
                        <input
                            id='searchProjectTerm'
                            type="text"
                            placeholder="Search Project..."
                            value={searchData.searchProjectTerm}
                            onChange={handleChange}
                            className="bg-transparent p-2 focus:outline-none w-full"
                            autoComplete='off'
                        />
                    </div>

                    <div className="flex justify-start gap-[1rem]">
                        <div className="flex flex-col items-start gap-[.5rem] ">
                            <label>Type</label>
                            <select
                                id="type"
                                value={searchData.type}
                                onChange={handleChange}
                                className="bg-white/30 dark:bg-white text-white dark:text-neutral-600 rounded-md px-[.5rem] py-[.3rem] focus:outline-none"
                            >
                                <option className="text-neutral-600" value="all">All</option>
                                <option className="text-neutral-600 " value="Web App">Web App</option>
                                <option className="text-neutral-600 " value="Graphic Art">Graphic Art</option>
                                <option className="text-neutral-600" value="Logo Design">Logo Design</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start gap-[.5rem] ">
                            <label>Status</label>
                            <select
                                id="status"
                                value={searchData.status}
                                onChange={handleChange}
                                className="bg-white/30 dark:bg-white text-white dark:text-neutral-600 rounded-md px-[.5rem] py-[.3rem] focus:outline-none"
                            >
                                <option className="text-neutral-600" value="all">All</option>
                                <option className="text-neutral-600 " value="Done">Done</option>
                                <option className="text-neutral-600 " value="In-progress">In-Progress</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start gap-[.5rem]">
                            <label>No. per page</label>
                            <select
                                id="numberPerPage"
                                value={searchData.numberPerPage}
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
                <div className='hidden md:block'>
                    <div className='flex flex-row h-full  gap-[1rem]'>
                        <Counter name="Logo" count={logoDesignCount} />
                        <Counter name="Graphic Art" count={graphicDesignCount} />
                        <Counter name="Web App" count={webAppCount} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row flex-wrap gap-[.5rem] w-full h-full text-white'>
                <p>Tags:</p>
                {techStack.map((techStack, i) => (
                    <button
                        key={i}
                        onClick={() => handleTags(techStack.name)}
                        className={`p-[.5rem] px-[1rem] rounded-[.5rem] shadow-lg flex items-center justify-center gap-[.5rem] cursor-pointer
    ${currentTags.includes(techStack.name) ? 'bg-amber-300' : 'bg-white/20 hover:bg-white/30'}
  `}
                    >
                        {currentTags.includes(techStack.name) ? <FaMinus /> : <FaPlus />}
                        {techStack.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SearchBar