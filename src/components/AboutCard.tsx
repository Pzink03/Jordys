

type AboutCardProps = {
    title: string
    description: string
    image: string
    className?: string
}


export function AboutCard({title, description, image, className}: AboutCardProps){
    return (
        <section className="w-full h-auto my-6 bg-primary-green shadow-md">
                        <div className={`flex md:flex-row-reverse flex-col-reverse w-full items-center justify-center ${className}`}>
                            <div className="px-4 md:px-10 py-10 text-center block items-center">
                            <h1 className=' p-4 text-4xl border-b-2 text-secondary-pink'>
                                {title}
                            </h1>
                            <p className="text-center text-subtext block">
                            {description}
                            </p>

                            </div>


                                {<img
                                src={image}
                                className=" w-[400px] h-[400px]"
                                />}
                        </div>
        </section>
    )
}
