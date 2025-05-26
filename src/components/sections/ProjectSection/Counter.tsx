interface Props {
    count: number;
    name: string;
}

function Counter({ count, name }: Props) {
    return (
        <div className='w-[7rem] h-full flex flex-col items-center justify-center bg-white/20 text-white p-[.5rem] rounded-[.5rem] shadow-lg'>
            <p className='text-[2rem] text-center font-bold'>{count < 10 ? `0${count}` : count}</p>
            <p className='whitespace-nowrap text-center'>{name}</p>
        </div>
    )
}

export default Counter