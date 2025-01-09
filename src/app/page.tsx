import Banner from "@/components/home/banner/banner"
import Section_1 from "@/components/home/section_1/section_1"

const AppPage = () => {

  return (
    <main className="">
      <div className=" mt-5 max-sm:mt-2 container mx-auto ">
        <Banner />
      </div>
      <section>
        <Section_1 />
      </section>
    </main>
  )
}

export default AppPage
