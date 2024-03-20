import { LucideHome, CheckCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";


const perks = [
    {
        id: 1,
      name: "AirBnB",
      Icon: LucideHome,
      description: 'Count on us to handle your Airbnb cleaning needs, providing thorough and detail-oriented services to ensure each guest enjoys a pristine and inviting space during their stay.'
    },
    {
        id: 2,
      name: "Office",
      Icon: CheckCircle,
      description: 'Our office and small building cleaning services guarantee a pristine and inviting environment, fostering productivity and professionalism in every space we touch.'
    },
    {
        id: 3,
      name: "Residential",
      Icon: Leaf,
      description: "We've pledged 1% of sales to the preservation and restoration of the natural environment. We've pledged 1% of sales to the preservation and restoration of the natural environment."
    },

  ]

export function Home(){
    return (
        <div className=" min-w-screen h-full px-4 pt-20 flex flex-col items-center justify-center relative">
            <div className="flex flex-col items-center absolute top-0 z-20 ">
                <img
                src="/assets/Logo.svg"
                className="w-[300px]"
                />
            </div>
            <Reveal>
                <section className="w-full h-auto mt-[200px] ">
                    <div className="flex flex-col justify-center items-center">
                            <h1 className=' my-2 p-2 border-t-2 md:text-6xl text-4xl font-playfair text-black'>
                                Why Choose Jordy's?
                            </h1>
                            <p className="text-center inline-block text-subtext md:w-1/2 w-5/6 font-roboto">
                            Merry Maids® is so much more than just a home cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love. We put The Extra In Your Ordinary ®, restoring balance to your life by taking care of your home. Life flies by in the blink of an eye, so it’s crucial to stop and enjoy it. With Merry Maids®, you can do just that.
                            Our house cleaning services cover every inch of your space. We can freshen up your bathroom, invigorate your kitchen, and restore your bedroom to ensure you have the beautiful and clean home you deserve. We’ll get deep into the corners and crevices to rid your space of any dust, germs, and bacteria to deliver a home that is both spotless and healthy.
                            </p>
                    </div>
                </section>
            </Reveal>
            <Reveal>
                <div className="mt-4 text-black w-full flex flex-col items-center justify-center">
                    <h1 className="border-b-2 border-secondary-400 font-bold md:text-3xl text-2xl py-4 font-playfair">
                        Some Of Our Services
                    </h1>
                    <div className="py-4 max-w-6xl grid grid-cols-1 gap-y-12 sm:gap-x-4 md:grid-cols-3 lg:gap-x-4 lg:gap-y-0">
                        {perks.map((perk) => (
                            <div key={perk.id} className="text-center shadow-md py-10 px-2 border-2 bg-secondary-pink md:flex md:items-start md:text-left lg:block lg:text-center">
                                <div className="md:flex-shrink-0 flex justify-center">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full text-secondary-pink bg-primary-green">
                                    {<perk.Icon />}
                                    </div>
                                </div>
                                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                                    <h3 className="text-2xl font-medium text-black font-playfair">
                                    {perk.name}
                                    </h3>
                                    <p className="mt-3 text-base text-muted-foreground text-subtext font-roboto">
                                    {perk.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-secondary-pink w-full shadow-xl flex flex-col items-center py-4">
                        <h1 className="border-b-2 border-secondary-400 font-bold md:text-3xl text-2xl py-4 font-playfair">
                            Additional Information
                        </h1>
                        <p className="md:w-1/2 w-5/6 text-center text-subtext font-roboto">
                            Not sure if Jordy's is the right choice for you? Please, feel free to call us any time or fill out our contact form to email us directly to set up a free consultation.
                        </p>
                        <Link to="/services">
                            <Button className="rounded mt-4 text-lg text-secondary-pink hover:scale-110 transition" variant="default">
                                Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </Reveal>
            <section className="flex flex-col justify-center items-center">
            <h1 className="border-b-2 pt-10 border-secondary-400 font-bold md:text-3xl text-2xl py-4 font-playfair">
                    Free Estimate
                </h1>
                <p className="md:w-1/2 w-5/6 text-center text-subtext font-roboto">
                    Not sure if Jordy's is the right choice for you? Please, feel free to call us any time or fill out our contact form to email us directly to set up a free consultation.
                </p>
                <Link to="/contact">
                    <Button className="rounded mt-4 text-lg text-secondary-pink hover:scale-110 transition" variant="default">
                        Contact
                    </Button>
                </Link>
            </section>
        </div>
    )
}
