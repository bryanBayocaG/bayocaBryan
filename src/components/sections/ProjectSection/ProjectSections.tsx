
import SectionHeader from "../../SectionHeader"
import SearchBar from "./SearchBar"
import { projects } from '../../../data/data'
import Cards from "./Cards"


function ProjectSections() {
    console.log(projects)
    return (
        <section
            id="my_projects"
            className="flex flex-col w-full h-full justify-center gap-[1rem] p-[2rem]">
            <SectionHeader sectionName="Things I’ve Made" />
            <SearchBar />
            <div className="flex flex-col gap-[1rem] justify-center items-center">
                {projects.map(({ name, description, image, liveUrl, sourceCodeUrl, status, techStack, type }, i) => (
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
        </section>
    )
}

export default ProjectSections