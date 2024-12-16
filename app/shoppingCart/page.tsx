import Image from "next/image";
const Cart = () => {
    const images=[
       {id: 1, image: "/bag (3).png"},
       {id: 2, image: "/bag (4).png"},
       {id: 3, image: "/bag (5).png"},
       {id: 4, image: "/bag (1).png"},
       {id: 5, image: "/bag (2).png"},

    ]
  return (
    <div className="min-h-screen p-6 text-[#1D3178]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-4">Product</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4">Quantity</th>
                  <th className="pb-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {images.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center">
                        <Image src={item.image} alt="bag" width={100} height={100}  className="w-16 h-16 rounded-lg mr-4"></Image>
                        <div>
                          <p className="font-semibold">Product Name</p>
                          <p className="text-sm text-gray-500">Color: Brown</p>
                          <p className="text-sm text-gray-500">Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">$32.00</td>
                    <td className="py-4">
                      <input
                        type="number"
                        className="w-16 text-center border rounded-lg"
                        defaultValue={1}
                      />
                    </td>
                    <td className="py-4">$219.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-6">
              <button className="bg-[#FB2E86] h-[39px] w-[134px] text-white px-4 py-2 rounded-lg">
                Update Curt
              </button>
              <button className="bg-[#FB2E86] h-[39px] w-[134px] rounded-[2px] text-white px-4 py-2 ">
                Clear Curt
              </button>
            </div>
          </div>

          {/*----------------Cart Totals---------- */}
          <div className=" text-[#1D3178] pt-8">
            <h2 className="font-bold text-lg mb-4 lg:text-center lg:mr-7">
              Cart Totals
            </h2>

            <div className=" bg-[#F4F4FC] h-[240px] w-[371px] rounded-[3px] shadow-lg p-6">
              <div className="border-b pb-4">
                <div className="flex font-semibold justify-between mb-2">
                  <p className="pb-5 border-b-2 border-[#E8E6F1] w-full">
                    Subtotal:
                  </p>
                  <p>£219.00</p>
                </div>
                <div className="flex font-semibold justify-between">
                  <p>Totals:</p>
                  <p>£325.00</p>
                </div>
              </div>
              <p className="text-sm text-[#8A91AB] my-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="bg-[#19D16F] hover:bg-[#2aac67] text-white w-[312px] rounded-[3px] h-[40px] py-2 ">
                Proceed To Checkout
              </button>
            </div>
            
            {/*------- Calculate Shipping--------- */}
            <h2 className="font-bold text-lg mt-6 lg:text-center lg:mr-7 mb-4">
                Calculate Shipping
              </h2>
            <div className="bg-[#F4F4FC] h-[240px] w-[371px] rounded-[3px]">
              
              <form>
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full bg-[#F4F4FC] border p-2 rounded-lg mb-2"
                />
                <input
                  type="text"
                  placeholder="Mirpur Dhaka : 1900"
                  className="w-full bg-[#F4F4FC] border p-2 rounded-lg mb-2"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full bg-[#F4F4FC] border  p-2 rounded-lg mb-4"
                />
                <button className="bg-[#FB2E86] hover:bg-[#d23076] h-[41px] w-[179px] text-white  py-2 rounded-[2px]">
                  Calculate Shipping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
