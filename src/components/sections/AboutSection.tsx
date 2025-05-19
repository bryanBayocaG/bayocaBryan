import { techStack } from "../../data/data"
import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import TechStackIcon from "../TechStackIcon";
import NotFound from "../NotFound";

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
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        const params = new URLSearchParams(location.search);

        if (id === "category") {
            if (value === "all") {
                params.delete("category");
            } else {
                params.set("category", value);
            }
        }

        if (id === "useFor") {
            if (value === "all") {
                params.delete("designation");
            } else {
                params.set("designation", value);
            }
        }

        navigate(`?${params.toString()}`, { replace: true });
    };
    const handleClearFilters = () => {
        setSearchTerm("");

        const params = new URLSearchParams(location.search);
        params.delete("search");
        params.delete("category");
        params.delete("designation");

        navigate(`?${params.toString()}`, { replace: true });
    };
    return (
        <section className='about-path bg-[#0078d4] dark:bg-primary-dark -mt-[20vh] py-[15rem]  lg:py-[8rem] flex flex-col justify-center items-center text-white gap-[1rem] min-h-[50rem]'>
            <h2>About section</h2>
            <div className="bg-white/10 backdrop-blur-lg flex flex-col md:flex-row gap-[1rem] shadow-lg p-[1rem] w-[35rem] md:w-[45rem] lg:w-[65rem] rounded-[.5rem]">
                <div className="flex w-full bg-white text-black  items-center px-2">
                    <FaSearch />
                    <input
                        id='searchbar'
                        type="text"
                        placeholder="Search tech..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="bg-transparent p-2 focus:outline-none w-full"
                    />
                </div>
                <div className="flex justify-center gap-[1rem]">
                    <div className="flex flex-row md:flex-col md:items-start gap-[.5rem] items-center">
                        <label>Category</label>
                        <select
                            id="category"
                            value={category || "all"}
                            onChange={handleFilterChange}
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
                            value={designation || "all"}
                            onChange={handleFilterChange}
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
                {searchTerm || category || designation ? (
                    <button onClick={handleClearFilters} className="bg-white/20 whitespace-nowrap p-[.5rem] rounded-[.3rem] hover:cursor-pointer hover:bg-white/40">
                        Clear Filters
                    </button>
                ) : null}
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-[1rem]  p-[1.5rem] ">
                {filteredTech.length > 0 ? (
                    <>
                        <div className="col-span-4 lg:col-span-6">
                            <p className="text-center">List of my stack</p>
                        </div>
                        {
                            filteredTech.map((tech, i) => (
                                <TechStackIcon key={i} image={tech.img} name={tech.name} />
                            ))
                        }
                    </>
                ) : (
                    <div className="col-span-4 lg:col-span-6">
                        <NotFound />
                    </div>
                )}
            </div>
        </section>
    )
}

export default AboutSection