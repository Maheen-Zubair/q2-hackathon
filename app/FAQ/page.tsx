import Section8 from "../section8/page";
export default function FAQ() {
  return (
    <div >
         <div className="flex flex-col mt-5 items-center justify-center min-h-screen ">
         <div className="lg:h-[286px] h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
            <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
                <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">FAQ</h1>
                <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">Home . Pages <span className="text-[#FB2E86]">. Faq</span></p>
            </div>
            </div>
    <div className="flex justify-center mt-10 sm:mt-32 items-center">
        
      <div className="grid  grid-cols-1 cclg:grid-cols-2 ">
        {/* --------text--------- */}
        <div className=" w-[90%] xmdd:w-[560px] h-full xmdd:h-[728px] overflow-y-hidden p-10 mr-6">
      <h2 className="text-[36px] font-bold text-[#1D3178] mb-10">General Information</h2>
      <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1D3178] mb-6">
                  Eu dictumst cum at sed euismod condimentum?
                </h3>
                <p className="text-[#A1ABCC] mb-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D3178] mb-6">
                  Magna bibendum est fermentum eros.
                </h3>
                <p className="text-[#A1ABCC] mb-8 " >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D3178] mb-6">
                  Odio muskana hak eris conseekin sceleron?
                </h3>
                <p className="text-[#A1ABCC] mb-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D3178] mb-6">
                  Elit id blandit sabara boi velit gua mara?
                </h3>
                <p className="text-[#A1ABCC] mb-8 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
                </p>
              </div>
            </div>

        </div>



{/* -----------form--------- */}
        <div className= "w-[90%] xmdd:w-[556px] h-[600px] xmdd:h-[738px] bg-[#F8F8FD] px-10 ml-6">
          <div className=" h-[30%] bg-[#F8F8FD] text-[26px] text-[#1D3178] font-bold pt-[70px] ">
            {" "}
            Ask a Question
          </div>
          <div className=" h-[70%] bg-[#F8F8FD]">
            <form className="flex flex-col gap-3 xmdd:gap-10">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-[445px] p-3  border border-gray-300 h-[50px]  rounded-[5px]   "
              />
              <input
                type="text"
                placeholder="Subject*"
                className="w-[445px] p-3 border border-gray-300 h-[50px] rounded-[5px] "
              />
              <textarea
                rows={4}
                placeholder="Type Your Message*"
                className="w-[445px] p-3 border  h-[100px] xmdd:h-[197px] border-gray-300 rounded-[5px] "
              ></textarea>
              <button
                type="submit"
                className="w-[156px] h-[48px] mb-10 text-[16px] bg-[#FB2E86] text-white py-2 rounded-[3px] hover:bg-pink-700 transition"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Section8/>
    </div>
  );
}
