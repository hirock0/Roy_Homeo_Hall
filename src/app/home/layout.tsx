import Nav from "@/components/nav/nav"
import CategoryBar from "@/components/home/categoryBar/categoryBar"
import LeftSection from "@/components/home/leftSection/leftSection"
import Style from "@/app/home/home.module.css"
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className=" fixed left-0 right-0 z-30 top-0">
                <Nav />
            </div>
            <div className="  bg-white z-20 sticky top-20 overflow-hidden ">
                <CategoryBar />
            </div>
            <div className=" flex justify-between mt-24 ">
                <div className={` ${Style.scrollBar} w-3/12 max-lg:hidden h-[700px] overflow-x-scroll sticky top-20  text-nowrap `}>
                    <LeftSection />
                </div>
                <div className={` px-5 w-9/12 max-lg:w-full`}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout
