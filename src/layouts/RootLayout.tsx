import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar"
import { Footer } from "../components/Footer"

export function RootLayout() {
  return (
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <div className=" my-4 flex-grow grid grid-cols-1">

            <div className="min-h-screen">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>

  )
}
