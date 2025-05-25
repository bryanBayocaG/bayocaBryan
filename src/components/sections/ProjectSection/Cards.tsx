import { FaGithub, FaLink } from "react-icons/fa"

interface Props {
    name: string;
    description?: string;
    type: string;
    techStack?: string[];
    sourceCodeUrl?: string;
    liveUrl?: string;
    status: string;
}

function Cards({ name, description, type, techStack, sourceCodeUrl, liveUrl, status }: Props) {
    return (
        <div className="flex flex-col md:flex-row border-2 w-full md:h-[300px] max-w-[1140px] border-neutral-200 shadow-xl rounded-[.5rem] overflow-hidden">
            <div className={`relative bg-[url(/certificate/javascript_async.jpg)] bg-primary dark:bg-primary-dark bg-contain bg-no-repeat bg-center h-[200px] md:h-full w-full md:w-[40%]`}>
                <div className="absolute top-2 left-2 flex flex-col gap-[1rem]  text-white ">
                    <p className="p-[.5rem] px-[1rem] bg-primary rounded-[.5rem]">
                        {type}
                    </p>
                    <p className="p-[.5rem] px-[1rem] bg-green-600 rounded-[.5rem]">
                        {status}
                    </p>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-[1rem] p-[1.5rem]">
                <div className="flex justify-between">
                    <h3>{name}</h3>
                    <div className="flex gap-[1rem]">
                        <a href={liveUrl}><FaLink className="w-[2rem] h-[2rem]" /></a>
                        <a href={sourceCodeUrl}><FaGithub className="w-[2rem] h-[2rem]" /></a>
                    </div>
                </div>
                <div>
                    <p className="text-justify text-[1rem] line-clamp-4">{description}</p>
                </div>
                <div>
                    {techStack?.map((tech, i) => (
                        <p key={i}>{tech}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards