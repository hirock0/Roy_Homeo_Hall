import AllMedicines from "@/components/home/allMedicines/allMedicines"
import Banner from "@/components/home/banner/banner"
import FlashSaleCards from "@/components/home/flashSaleCards/flashSaleCards"
import Section_1 from "@/components/home/section_1/section_1"
import Nav from "@/components/nav/nav"
import LeftSection from "@/components/home/leftSection/leftSection"
const HomePage = () => {
    return (
        <main className="">

            <div className="">
              

                <div className=" ">

                    <div className=" mt-5 max-sm:mt-2  ">
                        <Banner />
                    </div>
                    <section>
                        <Section_1 />
                    </section>
                    <section>
                        <FlashSaleCards />
                    </section>
                    <section>
                        <AllMedicines />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default HomePage
