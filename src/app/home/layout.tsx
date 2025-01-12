
import Nav from "@/components/nav/nav"
import CategoryBar from "@/components/home/categoryBar/categoryBar"
import LeftSection from "@/components/home/leftSection/leftSection"
import Style from "@/app/home/home.module.css"
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>
                <Nav />
                <div className=" ">
                    <CategoryBar />

                </div>
            </div>
            <div className=" flex justify-between">

                <div className=" w-3/12 max-lg:hidden text-nowrap ">
                    <LeftSection />
                </div>
                <div className=" lg:w-9/12 max-lg:w-full">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout
