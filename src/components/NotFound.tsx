
function NotFound() {
    return (
        <div className='flex w-full flex-col justify-center items-center'>
            <img src="/notFound.png" className='h-[12rem]' alt="notFound" />
            <p className="whitespace-nowrap text-[2rem]">Seems like I still don't have that...</p>
        </div>
    )
}

export default NotFound