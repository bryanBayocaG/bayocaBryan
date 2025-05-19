import { FaFacebook, FaInstagram, FaLocationArrow } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCallOutline } from 'react-icons/io5'
import FooterSiteMap from './FooterSiteMap'

function Footer() {
    return (
        <footer className="relative w-full pt-[1rem] bg-[url('/polygonialBGW.svg')] bg-center bg-size-[300%] md:bg-size-[200%] bg-no-repeat" id="footer">
            {/* background grid */}
            <div className="md:flex flex-row items-center px-[2rem]">
                <div className="flex flex-1 flex-col items-center md:items-start gap-y-3">
                    <div className="flex pointer-events-none items-center justify-center ">
                        <img
                            className="w-[8rem]"
                            src="/BYN.svg"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-[.5rem]">
                        <IoCallOutline className="w-[2rem] h-[2rem]" />
                        <p className="text-[1.5rem]">0966-7984-996</p>
                    </div>
                    <div className="flex flex-row items-center gap-[.5rem] ">
                        <FaLocationDot className="w-[2rem] h-[2rem]" />
                        <p className="text-[1.5rem] whitespace-nowrap">Bacoor City, Cavite </p>
                        <p className="text-[1.5rem] whitespace-nowrap">(Open to relocate)</p>
                    </div>
                </div>
                <FooterSiteMap />
                <div className="flex flex-1 flex-col items-center md:items-end gap-y-[1rem]">
                    <h5 className="font-bold text-center whitespace-nowrap">
                        C'mon! let's <span className="text-blue-700">Connect!</span>
                    </h5>

                    <div className="flex items-center md:gap-3 gap-6">
                        <a
                            href="https://www.instagram.com/acoyabyan/"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg"
                        >
                            <FaInstagram className="w-full h-full hover:scale-[120%]" />
                        </a>
                        <a
                            href="https://www.facebook.com/bra.yan.232115"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg"
                        >
                            <FaFacebook className="w-full h-full hover:scale-[120%]" />
                        </a>

                    </div>
                    <a href="mailto:bryanbayoca686@gmail.com">
                        <button

                        >
                            <FaLocationArrow />
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-3">
                <p className="text-[1.3rem] text-gray-500">
                    © Bryan Bayoca 2024–2025. All rights reserved.
                </p>
            </div>
        </footer >
    )
}

export default Footer