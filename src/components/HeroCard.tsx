import { cn } from "@/lib/utils"

type HeroCardProps = {
    title: string
    description: string
    image: string
    className?: string
}



export function HeroCard({title, description, image}: HeroCardProps){
    return (
      <>
            <div className={`gap-10`}>
                <img
                src={image}
                className=" w-[200px] h-[300px] object-cover object-top rounded"
                />
            </div>
            <div className="p-4 md:w-1/2 w-5/6">
                        <header className={`text-2xl border-b-2 md:text-start text-center p-2 mb-4 ${cn(title === "Pete Zink" && 'md:text-end')} `}>
                            {title}
                        </header>
                        <p className="text-subtext self-end ">
                            {description}
                        </p>
                </div>
      </>


    )
}
