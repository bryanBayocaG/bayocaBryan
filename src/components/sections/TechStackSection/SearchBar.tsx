import { useEffect, useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { techStack, type TechItem } from '../../../data/data';
import type { Dispatch, SetStateAction } from 'react';

interface SearchBarProps {
    setTechStack: Dispatch<SetStateAction<TechItem[]>>;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

function SearchBar({ setTechStack, setCurrentPage }: SearchBarProps) {
    const navigate = useNavigate();
    const [serachData, setSearchData] = useState({
        searchTerm: '',
        useFor: 'all',
        category: 'all'
    });
    // useEffect(() => {
    //     const urlParams = new URLSearchParams(location.search)
    //     const searchTermFromUrl = urlParams.get('searchTerm')
    //     const useForFromUrl = urlParams.get('useFor')
    //     const categoryFromUrl = urlParams.get('category')
    //     if (searchTermFromUrl || useForFromUrl || categoryFromUrl) {
    //         setSearchData({
    //             searchTerm: searchTermFromUrl || '',
    //             useFor: useForFromUrl || 'all',
    //             category: categoryFromUrl || 'all'
    //         })
    //     }
    // }, [location.search]);
    const filteredTech = useMemo(() => {
        return techStack.filter(tech => {
            const matchesSearch = tech.name.toLowerCase().includes(serachData.searchTerm.toLowerCase());
            const matchesCategory =
                serachData.category === 'all' || tech.category === serachData.category;

            const matchesDesignation =
                serachData.useFor === 'all' || tech.designation === serachData.useFor;

            return matchesSearch && matchesCategory && matchesDesignation;
        });
    }, [serachData.searchTerm, serachData.category, serachData.useFor]);

    useEffect(() => {
        setTechStack(filteredTech)
    }, [filteredTech])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;

        const updatedSearchData = {
            ...serachData,
            [id === 'searchbar' ? 'searchTerm' : id]: value
        };

        setSearchData(updatedSearchData);

        const urlParams = new URLSearchParams();
        if (updatedSearchData.searchTerm) {
            urlParams.set('searchTerm', updatedSearchData.searchTerm);
        }
        if (updatedSearchData.useFor && updatedSearchData.useFor !== 'all') {
            urlParams.set('useFor', updatedSearchData.useFor);
        }
        if (updatedSearchData.category && updatedSearchData.category !== 'all') {
            urlParams.set('category', updatedSearchData.category);
        }

        const query = urlParams.toString();
        setCurrentPage(1);
        navigate(`?${query}`, { replace: true });
    };
    const handleClearFilters = () => {
        setSearchData({
            searchTerm: '',
            useFor: 'all',
            category: 'all'
        })
        const params = new URLSearchParams(location.search);
        params.delete("searchTerm");
        params.delete("useFor");
        params.delete("category");
        navigate(`?${params.toString()}`, { replace: true });
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg flex flex-col md:flex-row gap-[1rem] shadow-lg p-[1rem] w-[35rem] md:w-[45rem]  lg:w-[65rem] rounded-[.5rem]">
            <div className="flex w-full bg-white text-black  items-center px-2">
                <FaSearch />
                <input
                    id='searchbar'
                    type="text"
                    placeholder="Search tech..."
                    value={serachData.searchTerm}
                    onChange={handleChange}
                    className="bg-transparent p-2 focus:outline-none w-full"
                />
            </div>
            <div className="flex justify-center gap-[1rem]">
                <div className="flex flex-row md:flex-col md:items-start gap-[.5rem] items-center">
                    <label>Category</label>
                    <select
                        id="category"
                        value={serachData.category}
                        onChange={handleChange}
                        className="bg-white/30 dark:bg-white text-white dark:text-neutral-600 rounded-md px-[.5rem] py-[.3rem] focus:outline-none"
                    >
                        <option className="text-neutral-600" value="all">All</option>
                        <option className="text-neutral-600" value="framework">Framework</option>
                        <option className="text-neutral-600" value="language">Language</option>
                        <option className="text-neutral-600" value="library">Library</option>
                        <option className="text-neutral-600" value="database">Database</option>
                        <option className="text-neutral-600" value="design">Designing</option>
                        <option className="text-neutral-600" value="tool">Tools</option>
                    </select>
                </div>
                <div className="flex flex-row md:flex-col md:items-start gap-[.5rem] items-center">
                    <label>Use for</label>
                    <select id="useFor"
                        value={serachData.useFor}
                        onChange={handleChange}
                        className="bg-white/30 dark:bg-white text-white dark:text-neutral-600 rounded-md px-[.5rem] py-[.3rem] focus:outline-none"
                    >
                        <option className="text-neutral-600" value="all">All</option>
                        <option className="text-neutral-600" value="frontend">Front-end</option>
                        <option className="text-neutral-600" value="backend">Back-end</option>
                        <option className="text-neutral-600" value="tool">Tools</option>
                        <option className="text-neutral-600" value="design">Designing</option>
                    </select>
                </div>
            </div>
            {serachData.searchTerm != '' || serachData.useFor != 'all' || serachData.category != 'all' ? (
                <button onClick={handleClearFilters} className="bg-white/20 whitespace-nowrap p-[.5rem] rounded-[.3rem] hover:cursor-pointer hover:bg-white/40">
                    Clear Filters
                </button>
            ) : null}
        </div>
    )
}

export default SearchBar