import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
// import { resolveTechItems } from "../../../utils/techItemAssigner";
// import TechStackIcon from "../../TechStackIcon";
interface Props {
    name: string;
    description?: string;
    img?: string;
    type: string;
    techStack?: string[];
    sourceCodeUrl?: string;
    liveUrl?: string;
    status: string;
}

function Cards({ name, description, img, type, techStack, sourceCodeUrl, liveUrl, status }: Props) {

    return (
        <div key={name} className="flex flex-col md:flex-row border-2 w-full md:h-[300px] max-w-[1140px] border-neutral-200 shadow-xl rounded-[.5rem] overflow-hidden dark:border-white/[0.2]">
            <div
                style={{
                    backgroundImage: `url(${img || '/noImage.jpg'})`,
                }}
                className={`relative bg-white/20 bg-cover  bg-center h-[200px] md:h-full w-full md:w-[40%]`}>
                <div className="absolute top-2 left-2 flex flex-col gap-[1rem]  text-white ">
                    <p className={`p-[.5rem] px-[1rem] text-center rounded-[.5rem] ${type === 'Web App' ? 'bg-primary' : type === 'Graphic Art' ? 'bg-orange-400' : 'bg-amber-300'}`}>
                        {type}
                    </p>
                    <p className={`p-[.5rem] px-[1rem] text-center rounded-[.5rem] ${status === 'Done' ? 'bg-green-600' : 'bg-amber-200'}`}>
                        {status}
                    </p>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-[1rem] p-[1.5rem]">
                <div className="flex justify-between">
                    <h3>{name}</h3>
                    <div className="flex gap-[1rem]">
                        {liveUrl && <a href={liveUrl} title="Live URL" target="_blank"><FaExternalLinkAlt className="w-[2rem] h-[2rem]" /></a>}
                        {sourceCodeUrl && <a href={sourceCodeUrl} title="Source Code" target="_blank"><FaGithub className="w-[2rem] h-[2rem]" /></a>}
                    </div>
                </div>
                {/* <div className="flex flex-row gap-[1rem]">
                    {techStack ?
                        resolveTechItems(techStack || []).map((tech) => (
                            <TechStackIcon useFor="smallIcon" image={tech.img} name={tech.name} />
                        ))
                        :
                        ''
                    }
                </div> */}
                <div className="flex flex-wrap gap-[.5rem]">
                    {techStack?.map((techName, i) => (
                        <p key={i}
                            className="bg-neutral-400 text-white dark:bg-white/20 p-[.3rem] px-[1rem] rounded-full"
                        >
                            {techName}
                        </p>
                    ))}
                </div>
                <div>
                    <p className="text-justify text-[1rem] line-clamp-6">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards