import { Building2, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { FaAirbnb } from "react-icons/fa";


const perks = [
    {
        id: 1,
      name: "Airbnb",
      Icon: (<>

      <FaAirbnb size={30} />
      </>),
      description: 'Count on us to handle your Airbnb cleaning needs, providing thorough and detail-oriented services to ensure each guest enjoys a pristine and inviting space during their stay.'
    },
    {
        id: 2,
      name: "Office",
      Icon: <Building2 size={30}/>,
      description: 'Our office and small building cleaning services guarantee a pristine and inviting environment, fostering productivity and professionalism in every space we touch.'
    },
    {
        id: 3,
      name: "Residential",
      Icon: <HomeIcon size={30} />,
      description: "We take pride in offering genuine, top-notch cleaning services for homes and Airbnbs alike, creating a clean and welcoming space that reflects your professional standards."
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
                            Welcome to our locally-owned cleaning company, operated by a passionate young couple right here in Lexington, KY. Our mission is to provide exceptional and trustworthy cleaning services in the Southern KY area for vacation rentals and offices, creating inviting and pristine spaces for guests and employees alike.
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
                                    {perk.Icon}
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
                </div>
            </Reveal>
                    <div className="bg-secondary-pink w-full shadow-md flex flex-col items-center py-4">
                        <h1 className="border-b-2 border-secondary-400 font-bold md:text-3xl text-2xl py-4 font-playfair">
                            Additional Information
                        </h1>
                        <p className="md:w-1/2 w-5/6 text-center  text-subtext font-roboto">
                        Please view our Services section to view a detailed list of our typical services.
                        </p>
                        <Link to="/services">
                            <Button className="rounded mt-4 text-lg text-secondary-pink hover:scale-110 transition" variant="default">
                                Services
                            </Button>
                        </Link>
                    </div>
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
