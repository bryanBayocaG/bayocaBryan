import { techStack } from "../../data/data"
import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function AboutSection() {
    const query = useQuery();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState(query.get("search") || "");
    const category = query.get("category");
    const designation = query.get("designation");

    const filteredTech = useMemo(() => {
        return techStack.filter(tech => {
            const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = category ? tech.category === category : true;
            const matchesDesignation = designation ? tech.designation === designation : true;
            return matchesSearch && matchesCategory && matchesDesignation;
        });
    }, [searchTerm, category, designation]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        setSearchTerm(newSearch);

        const params = new URLSearchParams(location.search);
        if (newSearch) {
            params.set("search", newSearch);
        } else {
            params.delete("search");
        }
        navigate(`?${params.toString()}`, { replace: true });
    };
    return (
        <section className='bg-[#0078d4] dark:bg-primary-dark -mt-[20vh] pt-[15rem] flex flex-col justify-center items-center text-white gap-[1rem]'>
            <h2>About section</h2>
            <div className="bg-white/10 backdrop-blur-lg flex flex-row gap-[1rem] shadow-lg p-[1rem] w-[85vw] rounded-[.5rem]">
                <div className="flex w-full bg-white text-black  items-center px-2">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search tech..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="bg-transparent p-2 focus:outline-none w-full"
                    />
                </div>
                <div>
                    <label>Category</label>
                    <select
                        defaultValue="all"
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
                <div>
                    <label>Use for</label>
                    <select name="" id="" defaultValue={'all'}
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
            <div className="flex flex-col gap-[1rem]">
                {filteredTech.length > 0 ?
                    filteredTech.map((tech, i) => (
                        <p key={i}>{tech.name}</p>
                    ))
                    :
                    (<p>Nothing matches</p>)
                }
            </div>
        </section>
    )
}

export default AboutSection