
import TechStackIcon from "../../TechStackIcon";
import NotFound from "../../NotFound";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { techStack } from "../../../data/data";
import type { TechItem } from "../../../data/data";
import SectionHeader from "../../SectionHeader";
import Pagination from "../../Pagination";
import { useTailwindBreakpoint } from "../../../hooks/monitorScreenSize";

function TechStackSection() {
    const screen = useTailwindBreakpoint();
    console.log(screen.width);
    const [techStackItem, setTechStackItem] = useState<TechItem[]>(techStack)
    const [currentPage, setCurrentPage] = useState(1);
    let listPerPage;
    switch (true) {
        case (screen.width >= 1024):
            listPerPage = 21;
            break;
        case (screen.width >= 768):
            listPerPage = 20;
            break;
        default:
            listPerPage = 12;
    }
    console.log('listing', listPerPage)
    const lastListingIndex = currentPage * listPerPage;
    const firstListingIndex = lastListingIndex - listPerPage;
    const currentListing = techStackItem.slice(firstListingIndex, lastListingIndex);
    return (
        <section
            id="tech_stack"
            className='about-path flex flex-col justify-center items-center gap-[1rem] bg-primary dark:bg-primary-dark -mt-[20vh] py-[15rem] lg:py-[8rem] text-white min-h-[50rem]'>
            <SectionHeader sectionName="What I Work With" />
            <SearchBar setTechStack={setTechStackItem} />
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-[1rem]  p-[1.5rem] ">
                {currentListing.length > 0 ? (
                    <>
                        <div className="col-span-4 md:col-span-5 lg:col-span-7">
                            <p className="text-center">List of my stack</p>
                        </div>
                        {
                            currentListing.map((tech, i) => (
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
            <Pagination
                totalLists={techStackItem.length}
                listPerPage={listPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div className="hidden md:block h-2" />
        </section>
    )
}

export default TechStackSection