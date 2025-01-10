
import Nav from "@/components/nav/nav"
import CategoryBar from "@/components/home/categoryBar/categoryBar"
import LeftSection from "@/components/home/leftSection/leftSection"
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>
                <Nav />
                <div className="">
                    <CategoryBar />

                </div>
            </div>
            <div className=" flex">
                
                <div className="  max-lg:hidden text-nowrap ">
                <LeftSection />
                </div>
                <div className=" lg:w-5/6">
                {children}
                </div>
            </div>

        </div>
    )
}

export default Layout
