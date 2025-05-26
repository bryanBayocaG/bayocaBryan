
import SectionHeader from "../../SectionHeader"
import SearchBar from "./SearchBar"
import { projects, type Project } from '../../../data/data'
import Cards from "./Cards"
import { useState } from "react"
import Pagination from "../../Pagination"
import NotFound from "../../NotFound"


function ProjectSections() {
    const [projectItem, setProjectItem] = useState<Project[]>(projects)
    const [currentPage, setCurrentPage] = useState(1);
    const [listPerPage, setListPerPage] = useState(3);

    const lastListingIndex = currentPage * listPerPage;
    const firstListingIndex = lastListingIndex - listPerPage;
    const currentListing = projectItem.slice(firstListingIndex, lastListingIndex);
    return (
        <section
            id="my_projects"
            className="flex relative flex-col w-full h-full justify-center gap-[1rem] p-[2rem]">
            <SectionHeader sectionName="Things I’ve Made" />
            <SearchBar setProjectItem={setProjectItem} setListPerPage={setListPerPage} />
            <div className="flex flex-col gap-[1rem] justify-center items-center">
                {currentListing.length === 0 && (
                    <NotFound />
                )}
                {
                    currentListing.map(({ name, description, image, liveUrl, sourceCodeUrl, status, techStack, type }, i) => (
                        <Cards
                            key={i}
                            name={name}
                            description={description}
                            img={image}
                            liveUrl={liveUrl}
                            sourceCodeUrl={sourceCodeUrl}
                            status={status}
                            techStack={techStack}
                            type={type}
                        />
                    ))
                }
            </div>
            <Pagination
                totalLists={projectItem.length}
                listPerPage={listPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </section>
    )
}

export default ProjectSections