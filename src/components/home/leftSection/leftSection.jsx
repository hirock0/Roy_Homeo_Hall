const Soft = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdFlash } from "react-icons/io";
import Link from "next/link";
const LeftSection = () => {
  return (
    <main className=" w-full container mx-auto px-5 pb-10 overflow-y-scroll h-[calc(100vh-130px)]">
      <div className="">
        {/* ------------ */}
        <div className="">
          <h1>Category Seclect</h1>
        </div>
        {/* --------- */}
        <div className=" flex flex-col mt-5 space-y-5">
          {Soft?.map((item, index) => (
            <div className="" key={index}>
              <Link
                href={"/"}
                className={`${
                  index === 0 && "border-t"
                } border-b  border-slate-400 flex items-start justify-between h-16`}
              >
                <div className=" flex items-center gap-2 h-full ">
                  <div className="   w-20 flex items-center justify-center">
                    <IoMdFlash size={52} className=" text-yellow-600" />
                  </div>
                  <h1>Flash sale</h1>
                </div>
                <div className=" h-full flex items-center justify-center">
                  <MdKeyboardArrowRight size={25} />
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* ------------ */}
      </div>
    </main>
  );
};

export default LeftSection;
