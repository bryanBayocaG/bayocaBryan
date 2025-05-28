import type { Dispatch, SetStateAction } from "react";

interface Props {
    totalLists: number;
    listPerPage: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ totalLists, listPerPage, currentPage, setCurrentPage }: Props) {
    const pages = [];

    for (let i = 1; i <= Math.ceil(totalLists / listPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="flex gap-2 justify-center items-center p-[.5rem] px-[1rem] rounded-[.3rem] bg-white/20 transition-all transform duration-300">
            {pages.map((page, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setCurrentPage(page)
                    }}
                    className={`p-2 rounded-lg hover:cursor-pointer w-10 h-10 border-2 border-secondary ${currentPage === page ? "bg-primary text-white scale-125" : "text-secondary"
                        }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}

export default Pagination;