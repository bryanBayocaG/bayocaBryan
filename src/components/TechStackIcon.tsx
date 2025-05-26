
interface Props {
    image: string;
    name: string;
    useFor?: string;
}


function TechStackIcon({ image, name, useFor }: Props) {
    return (
        <div className={`${useFor === 'smallIcon' ? 'w-[5rem] h-[5rem] text-[.6rem]' : 'w-[7rem] '} p-[.5rem] bg-white/30 rounded-[.3rem] flex flex-col gap-[.5rem] justify-center items-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300`}>
            <div className={`${useFor === "smallIcon" ? 'w-[2rem] h-[2rem]' : 'w-3rem h-[3rem]'}`}>
                <img className="w-full h-full " src={image} alt="tech_logo" title={name} />
            </div>
            <p >{name}</p>
        </div>
    )
}

export default TechStackIcon