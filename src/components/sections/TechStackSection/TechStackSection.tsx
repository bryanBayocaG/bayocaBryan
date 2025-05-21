
import TechStackIcon from "../../TechStackIcon";
import NotFound from "../../NotFound";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { techStack } from "../../../data/data";
import type { TechItem } from "../../../data/data";
import SectionHeader from "../../SectionHeader";

function TechStackSection() {
    const [techStackItem, setTechStackItem] = useState<TechItem[]>(techStack)
    return (
        <section
            id="techstack"
            className='about-path flex flex-col justify-center items-center gap-[1rem] bg-primary dark:bg-primary-dark -mt-[20vh] py-[15rem] lg:py-[8rem] text-white min-h-[50rem]'>
            <SectionHeader sectionName="What I Work With" />
            <SearchBar setTechStack={setTechStackItem} />
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-[1rem]  p-[1.5rem] ">
                {techStackItem.length > 0 ? (
                    <>
                        <div className="col-span-4 lg:col-span-6">
                            <p className="text-center">List of my stack</p>
                        </div>
                        {
                            techStackItem.map((tech, i) => (
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

export default TechStackSection