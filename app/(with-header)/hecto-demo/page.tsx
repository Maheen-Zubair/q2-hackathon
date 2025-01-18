import Image from "next/image";

export default function HectoDemo() {
    const images=[
       {id: 1,image:"/hecto (1).png"},
       {id: 2,image:"/hecto (2).png"},
       {id: 3,image:"/hecto (3).png"},
       {id: 4,image:"/hecto (4).png"},
       {id: 5,image:"/hecto (5).png"},


    ]
    return (
      <div className="mb-36">
        <div className="lg:h-[286px] mt-5 h-[120px] md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
          <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
            <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Hekto Demo         </h1>
            
          </div>
        </div>
      <div className=" xmmd:p-4 sm:p-10 text-[#1D3178]  ">
         <h2 className="text-[24px]  font-semibold mb-3  ml-[10%]">Hekto Demo</h2>
         <div className="text-sm ml-[10%] ">Cart / Information / Shipping / Payment</div>
         <div className="flex justify-center items-center">
        <div className="grid extraBig:grid-cols-3 gap-10  rounded-lg xmmd:w-[90%] clg:w-[85%]  p-6 ">
          {/* Left Section: Form */}
          
          <div className="lg:col-span-2 bg-[#F8F8FD]   py-[50px] px-5">
            <div className="space-y-6 flex flex-col gap-10">
              <div>
                <h3 className="text-lg font-semibold mb-6 ">Contact Information</h3>
                <input
                  type="text"
                  placeholder="Email or mobile phone number"
                  className="w-full border rounded p-2 bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]"
                />
                <div className="mt-5">
                  <input type="checkbox" id="updates" className="mr-2" />
                  <label htmlFor="updates" className="text-[#8A91AB] text-sm">
                    Keep me up to date on news and exclusive offers
                  </label>
                </div>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold mb-6">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name (optional)"
                    className=" rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-2 border-b-[#BFC6E0] "
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border-2 rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="border-2 rounded p-2 w-full mt-4 bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="border-2 rounded p-2 w-full mt-4 bg-transparent border-transparent placeholder:text-[#C1C8E1]  border-b-[#BFC6E0]"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input type="text" placeholder="City" className="border-2 rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" />
                  <input type="text" placeholder="Bangladesh" className="border-2 rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input type="text" placeholder="Postal Code" className="border-2 rounded p-2 w-full bg-transparent border-transparent placeholder:text-[#C1C8E1] border-b-[#BFC6E0]" />
                </div>
              </div>
  
              <button className=" bg-[#FB2E86] text-white py-2 rounded-[2px] h-[44px] w-[182px] mt-4 hover:bg-pink-600">
                Continue Shipping
              </button>
            </div>
          </div>
  
          {/* Right Section: Cart Items */}
          <div className=" p-6 rounded-lg">
            <div className="space-y-4">
              {images.map((images, i) => (
                <div key={i} className="flex items-center space-x-4 border-b pb-4">
                  <div className="  rounded">
                    <Image src={ images.image} alt="1" width={100} height={100} className="h-[87px] w-[83px]"/>
                    </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium ">Ur diam consequat</h4>
                    <p className="text-xs text-gray-500">Color: Brown | Size: XL</p>
                  </div>
                  <p className="text-sm font-semibold ">$32.00</p>
                </div>
              ))}
            </div>
  
            <div className="bg-[#F4F4FC] p-1 xmmd:p-5 mt-9 w-[371px] h-[284px] overflow-y-hidden">
            <div className="mt-6 flex flex-col gap-5 text-[#1D3178] ">
              <div className="flex pb-5 border-b-2 border-[#E8E6F1] gap-[90px] xmmd:gap-0 xmmd:justify-between text-sm">
                <p className="text-[20px] font-bold">Subtotal:</p>
                <p className="text-[18px] font-semibold">£219.00</p>
              </div>
              <div className="flex  pb-5 border-b-2 border-[#E8E6F1] gap-[120px] xmmd:gap-0 xmmd:justify-between text-sm ">
              <p className="text-[20px]  font-bold">Total:</p>
              <p className="text-[18px] font-semibold">£325.00</p>
              </div>
            </div><div className=""></div>
            <p className="xmmd:text-sm text-[12px] text-[#8A91AB] pt-6 pb-6">
                Shipping & taxes calculated at checkout.
              </p>
            <div className=" flex justify-center items-center">

            <button className="w-[312px]  mr-[170px] ml-5 xmmd:mr-0 xmmd:ml-0 bg-[#19D16F] h-[40px] text-white py-2 rounded mt-4 hover:bg-green-600">
              Proceed To Checkout
            </button>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div></div>
    );
  }
  