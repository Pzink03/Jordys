export function ServiceCard() {
    return (
        <>
          <section className="md:p-10 flex justify-center w-full">
            <div className="flex flex-col max-w-screen-2xl lg:flex-row justify-center w-full">
              <div className="hover:scale-105 flex flex-1 flex-col origin-right border-r-0 shadow-sm rounded-tr-none rounded-br-none justify-between items-center p-4 border-2 rounded my-4 bg-secondary-pink">
                <div className="text-center mb-4">
                  <div className="font-medium text-3xl pb-2 font-playfair">AirBnB</div>
                  <img
                    className=" w-96 h-86 object-cover object-center rounded border-2 border-primary-green p-1"
                    src="/assets/AirBnbPic.jpg"
                    alt=""
                  />
                </div>
                <ul className="w-96 h-full md:px-4 px-8 pt-4 list-disc flex justify-start flex-col gap-y-2 font-roboto">
                  <p className="text-center  text-xl font-semibold pb-2 font-playfair">Services Include:</p>
                <li className="text-lg ">
                Dusting and wiping down surfaces
                    </li>
                    <li className="text-lg ">
                    Vacuuming and mopping floors
                    </li>
                    <li className="text-lg ">
                    Cleaning and sanitizing bathrooms
                    </li>
                    <li className="text-lg ">
                    Restocking amenities such as toiletries and towels
                    </li>
                    <li className="text-lg ">
                    Emptying trash bins and replacing liners
                    </li>
                    <li className="text-lg ">
                    Cleaning kitchen appliances, countertops, and dishes
                    </li>
                    <li className="text-lg">
                    Checking for any damages or maintenance issues
                    </li>
                    <li className="text-lg">
                    Communicating with the host about any special requests or issues
                    </li>
                    <li className="text-lg">
                    Ensuring the property is guest-ready before each arrival.
                    </li>
                </ul>
              </div>
              <div className="hover:scale-105 flex flex-1 flex-col shadow-sm justify-start items-center p-4 border-2 rounded m-0 relative bg-white">
                <div className="text-center mb-4">
                  <div className="font-medium text-3xl pb-2 font-playfair">Office</div>
                  <img className="w-96 h-86 object-cover object-center rounded border-4 border-secondary-pink p-2" src="/assets/OfficePic.jpg" alt="" />
                </div>
                <ul className="w-96 h-auto list-disc md:px-4 px-8 flex flex-col gap-y-2 font-roboto">
                <p className="text-center text-xl font-semibold pb-2 font-playfair">Services Include:</p>
                  <li className="text-lg ">
                  Vacuuming or sweeping floors
                    </li>
                    <li className="text-lg ">
                    Mopping hard floors
                    </li>
                    <li className="text-lg ">
                    Dusting surfaces such as desks, shelves, and countertops
                    </li>
                    <li className="text-lg ">
                    Emptying trash bins and replacing liners
                    </li>
                    <li className="text-lg ">
                    Wiping down windowsills and glass surfaces
                    </li>
                    <li className="text-lg ">
                    Cleaning kitchen or breakroom areas, including countertops, sinks, and appliances
                    </li>
                    <li className="text-lg ">
                    Disinfecting frequently touched surfaces such as door handles and light switches
                    </li>
                    <li className="text-lg ">
                    Restocking supplies such as toilet paper, paper towels, and soap
                    </li>
                    <li className="text-lg ">
                    Spot-cleaning any stains or spills on carpets or upholstery
                    </li>
                    <li className="text-lg ">
                    Removing cobwebs from corners or high ceilings
                    </li>
                    <li className="text-lg ">
                    Polishing and shining fixtures and hardware
                    </li>
                </ul>
              </div>
              <div className="hover:scale-105 h-auto flex flex-1 flex-col origin-left border-l-0 rounded-tl-none rounded-bl-none shadow-sm justify- items-center p-4 border-2 rounded my-4 bg-secondary-pink">
                <div className="text-center mb-4">
                  <div className="font-medium text-3xl pb-2 font-playfair">Residential</div>
                  <img
                    className="w-96 h-[240px] object-cover object-right rounded border-2 border-primary-green p-1"
                    src="/assets/LivingRoomPic.jpg"
                    alt=""
                  />
                </div>
                  <ul className="w-80 h-auto list-disc flex pt-4 flex-col gap-y-2 font-roboto">
                  <p className="text-center text-xl font-semibold pb-2 font-playfair">Services Include:</p>
                  <li className="text-lg ">
                Dusting and wiping down surfaces
                    </li>
                    <li className="text-lg ">
                    Vacuuming and mopping floors
                    </li>
                    <li className="text-lg ">
                    Cleaning and sanitizing bathrooms
                    </li>
                    <li className="text-lg ">
                    Restocking amenities such as toiletries and towels
                    </li>
                    <li className="text-lg ">
                    Emptying trash bins and replacing liners
                    </li>
                    <li className="text-lg ">
                    Cleaning kitchen appliances, countertops, and dishes
                    </li>
                    <li className="text-lg">
                    Checking for any damages or maintenance issues
                    </li>
                    <li className="text-lg">
                    Communicating with the host about any special requests or issues
                    </li>
                    <li className="text-lg">
                    Ensuring the property is guest-ready before each arrival.
                    </li>
                  </ul>
              </div>
            </div>
          </section>
        </>
    )
}
