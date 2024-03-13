import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/Reveal"

export function About(){

    return (
        <>
            <div className="min-w-screen h-auto flex flex-col justify-center items-center relative py-20 ">
                <div className="flex flex-col items-center absolute top-0 z-20 ">
                    <img
                    src="/assets/Logo.svg"
                    className="w-[300px]"
                    />
                </div>
                <Reveal>
                    <div className="mt-[200px] text-black w-full  flex flex-col items-center justify-center">
                        <h1 className="border-t-2 border-secondary-400 font-bol text-6xl py-4 my-4 font-playfair">
                            About Jordy's
                        </h1>
                        <div className="max-w-4xl p-4 flex flex-col items-center justify-center relative">
                            <p className="text-subtext md:text-xl text-lg w-5/6 text-center">
                            Whether you require a regular cleaning schedule or a one-time deep clean, count on us to handle all your cleaning needs with expertise and care.
                            </p>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="max-w-7xl flex flex-col justify-center items-center">
                        <section className="w-full h-auto my-6 bg-secondary-pink shadow-md">
                            <div className="flex md:flex-row flex-col-reverse w-full items-center justify-center">
                                <header className="px-4 md:px-10 py-10 text-center block items-center">
                                    <h1 className=' p-2 text-4xl text-black border-b-2 inline-block font-playfair'>
                                        Why Choose Jordy's?
                                    </h1>
                                    <p className="text-center text-subtext block">
                                    Merry Maids® is so much more than just a home cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love. We put The Extra In Your Ordinary ®, restoring balance to your life by taking care of your home. Life flies by in the blink of an eye, so it’s crucial to stop and enjoy it. With Merry Maids®, you can do just that.
                                    Our house cleaning services cover every inch of your space. We can freshen up your bathroom, invigorate your kitchen, and restore your bedroom to ensure you have the beautiful and clean home you deserve. We’ll get deep into the corners and crevices to rid your space of any dust, germs, and bacteria to deliver a home that is both spotless and healthy.
                                    </p>
                                </header>
                                <img
                                src="/assets/CleaningSuppliesPic.jpg"
                                className=" w-[400px] h-[400px] object-cover object-right rounded p-4"
                                />
                            </div>
                        </section>
                        <section className="w-full h-auto mb-6">
                            <div className="flex md:flex-row flex-col w-full items-center justify-center">
                                <img
                                src="/assets/CleaningPic2.jpg"
                                className=" w-[400px] h-[400px] object-cover "
                                />
                                <div className="px-4 md:px-10 py-10 text-center block items-center">
                                    <h1 className=' p-2 text-4xl text-black border-b-2 inline-block font-playfair'>
                                        Exceptional Service You Can Trust
                                    </h1>
                                    <p className="text-center text-subtext block">
                                    Merry Maids® is so much more than just a home cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love. We put The Extra In Your Ordinary ®, restoring balance to your life by taking care of your home. Life flies by in the blink of an eye, so it’s crucial to stop and enjoy it. With Merry Maids®, you can do just that.
                                    Our house cleaning services cover every inch of your space. We can freshen up your bathroom, invigorate your kitchen, and restore your bedroom to ensure you have the beautiful and clean home you deserve. We’ll get deep into the corners and crevices to rid your space of any dust, germs, and bacteria to deliver a home that is both spotless and healthy.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="w-full h-auto mb-6 bg-secondary-pink">
                            <div className="flex md:flex-row flex-col-reverse w-full items-center justify-center">
                                <div className="px-4 md:px-10 py-10 text-center block items-center">
                                    <h1 className='p-2 text-4xl text-black border-b-2 inline-block font-playfair'>
                                        Customer Satisfaction Is Our Number One Goal
                                    </h1>
                                    <p className="text-center text-subtext block">
                                    Merry Maids® is so much more than just a home cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love. We put The Extra In Your Ordinary ®, restoring balance to your life by taking care of your home. Life flies by in the blink of an eye, so it’s crucial to stop and enjoy it. With Merry Maids®, you can do just that.
                                    Our house cleaning services cover every inch of your space. We can freshen up your bathroom, invigorate your kitchen, and restore your bedroom to ensure you have the beautiful and clean home you deserve. We’ll get deep into the corners and crevices to rid your space of any dust, germs, and bacteria to deliver a home that is both spotless and healthy.
                                    </p>
                                </div>
                                <img
                                src="/assets/CustomerPic.jpg"
                                className=" w-[400px] h-[400px] object-cover"
                                />
                            </div>
                        </section>
                    </div>
                </Reveal>
                <Reveal>
                    <section className="py-6 max-w-7xl h-full">
                        <header className="flex justify-center py-10 items-center ">
                            <h1 className="md:text-6xl text-4xl border-secondary-400 text-black font-bold font-playfair">
                                Meet The Team
                            </h1>
                        </header>
                        <div className="flex mt-20 justify-center px-2 whitespace-wrap items-end bg-secondary-pink lg:h-[475px] md:h-[550px] sm:h-[550px] h-[650px] relative">
                            <img
                            src="/assets/heroImage.jpg"
                            className="w-[300px] h-[300px] object-cover absolute -top-20 rounded-xl"
                            />
                            <p className="md:w-4/6 w-full text-center pb-10 text-xl">Hey there, we're Jordan and Pete. Throughout our journey together, we've discovered a mutual drive to achieve our goals, hand in hand. Whether it's exploring new adventures or building our dreams, we're committed to supporting each other every step of the way. Our partnership isn't just about our commitment to each other; it's about teamwork, resilience, and unwavering dedication to creating a future we're both proud of. We appreciate your consideration and support in helping us achieve our financial goals.</p>
                        </div>
                    </section>
                </Reveal>
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="font-bold border-b-2 pb-2 my-10 text-xl md:text-2xl w-2/3 text-center font-playfair">
                    We guarantee a consistent, professional cleaning on every visit.
                    Please contact us to set up a free, no obligation estimate.
                    </h1>
                    <Button className="rounded text-lg text-secondary-pink hover:scale-110 transition" variant="default">
                        Contact
                    </Button>
                </div>
            </div>
        </>
    )
}
