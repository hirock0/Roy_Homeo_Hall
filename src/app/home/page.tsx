import Banner from "@/components/home/banner/banner"
import Section_1 from "@/components/home/section_1/section_1"
const HomePage = () => {
    return (
        <main className="">
            <div className="">
                <div className="overflow-y-scroll scrollbar h-[calc(100vh-130px)] px-5">
                    <div className=" mt-5 max-sm:mt-2  ">
                        <Banner />
                    </div>
                    <section>
                        <Section_1 />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default HomePage
