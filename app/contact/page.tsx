// pages/contact.js
import Image from "next/image";
import image from "../../public/Group 124.png";
import image2 from "../../public/Group 100.png";
export default function Contact() {
  return (
    <div>
      <div className="lg:h-[286px] mt-5 h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Contact Us
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages <span className="text-[#FB2E86]">. Contact Us</span>
          </p>
        </div>
      </div>
      <div className="h-screen  pb-24 bg-white flex flex-col justify-center items-center p-4">
        <div className="max-w-5xl w-full bg-white  rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#151875] mb-4">
                Information About Us
              </h2>
              <p className="text-[#8A8FB9]">
                Learn more about our services and collaboration offerings. We
                aim to provide top-notch solutions and build strong client
                relationships.
              </p>
              <div className="flex space-x-3 mt-4">
                <span className="w-6 h-6 bg-[#5625DF] rounded-full"></span>
                <span className="w-6 h-6 bg-[#FF27B7] rounded-full"></span>
                <span className="w-6 h-6 bg-[#37DAF3] rounded-full"></span>
              </div>
            </div>

            <div className="lg:pl-[100px] md:pl-[130px]">
              <h2 className="text-2xl font-bold text-[#151875] mb-4">
                Contact Way
              </h2>
              <div className="space-y-3">
                <Image src={image2} alt="image2" />
              </div>
            </div>
          </div>
          <div className="md:flex-row flex-col flex justify-between">
            <div className="mt-10 ">
              <h2 className="text-2xl font-bold text-[#151875] mb-6">
                Get In Touch
              </h2>
              <form className="grid grid-cols-1 p-2 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="col-span-2 md:col-span-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="col-span-2 md:col-span-1 p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="col-span-2 p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Type Your Message"
                  className="col-span-2 p-3 border border-gray-300 rounded-[3px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="col-span-2 h-[44px] w-[157px] bg-pink-500 text-white py-2 px-4 rounded-[3px] hover:bg-pink-600 transition duration-300"
                >
                  Send Mail
                </button>
              </form>
            </div>

            <div className="mt-10 flex md:justify-center md:items-center">
              <Image src={image} alt="networkImage" width={400} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
