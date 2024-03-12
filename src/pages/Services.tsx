import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServicesCards";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Services(){
    return (
        <div className=" min-w-screen h-auto px-4 pt-20 flex flex-col items-center justify-center relative">
            <div className="flex flex-col items-center absolute top-0 z-20 ">
                <img
                src="/assets/Logo.svg"
                className="w-[300px]"
                />
            </div>
            <Reveal>

            <div className="flex flex-col mt-[200px] justify-center items-center">
                        <h1 className=' my-2 p-4 border-t-2 text-3xl md:text-6xl text-black'>
                            What We Offer
                        </h1>
                        <p className="md:w-1/2 w-5/6 text-center text-lg md:text-xl">
                        Whether you require a regular cleaning schedule or a one-time deep clean, count on us to handle all your cleaning needs with expertise and care.
                        </p>
            </div>
            </Reveal>
            <Reveal>

            <ServiceCard />
            </Reveal>
            <Reveal>
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="font-bold border-b-2 pb-2 text-xl md:text-2xl w-2/3 text-center">
                    We guarantee a consistent, professional cleaning on every visit.
                    Please contact us to set up a free, no obligation estimate.
                    </h1>
                    <Link to="/contact">
                        <Button className="rounded mt-4 text-lg text-secondary-pink hover:scale-110 transition" variant="default">
                            Contact
                        </Button>
                    </Link>
                </div>
            </Reveal>
        </div>
    )
}
