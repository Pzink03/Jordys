import { Link } from "react-router-dom";
import { ICON_LINKS } from "./constants/iconLinks";




export function Footer() {
    return (
        <div className="w-full h-full mt-10 bg-secondary-pink">
            <div className="p-10 ">
                <p className="text-subtext text-center font-semibold">
                    <span className="">Still have questions? {" "}</span>
                    Please don't hesitate to get in {" "}
                    <span className="text-bold text-secondary ">
                        <Link className="text-primary-green hover:border-b-2 ease-in-out transition hover inline-block border-primary-green " to="/contact">
                            contact
                        </Link>
                    </span>
                    {" "} with me!
                </p>

                <div className="flex items-center justify-center gap-4 flex-col text-sm pt-4">
                    <ul className='flex flex-col justify-center items-start gap-2'>
                        {ICON_LINKS.map (({id, child, href, style, text}) => (
                            // eslint-disable-next-line
                        <li key={id} className={ "flex gap-2 items-center justify-center rounded-full first:hover:bg-gray-600 first:hover:scale-105 first:transition first:duration-300 first:cursor-pointer" + " " + style }>
                            <a className='text-primary-green flex justify-center items-center bg-white rounded-full w-10 h-10' href={href} target='_blank' rel="noreferrer">  {child}</a>
                            <p className="px-2 text-base text-subtext font-semibold">{text}</p>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-end">

                <p className="text-gray-400 text-xs">
                    @Copyright Petakis Media
                </p>
                {/* <img
                className="w-32 h-32"
                src="/assets/Logo.svg"
                /> */}
            </div>
        </div>
    )
}
