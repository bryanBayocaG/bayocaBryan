
interface Props {
    image: string;
    name: string;
}


function TechStackIcon({ image, name }: Props) {
    return (
        <div className="bg-white/30 p-[.5rem] w-[7rem] rounded-[.3rem] flex flex-col gap-[.5rem] justify-center items-center shadow-md hover:shadow-lg hover:scale-110">
            <div className="w-3rem h-[3rem]">
                <img className="w-full h-full" src={image} alt="tech_logo" />
            </div>
            <p >{name}</p>
        </div>
    )
}

export default TechStackIcon