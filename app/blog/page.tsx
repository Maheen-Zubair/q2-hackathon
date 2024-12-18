import Image from "next/image";
import image1 from "../../public/pen.png";
import image2 from "../../public/Vector (1).png";
import search from "/public/search.png";
import image3 from "../../public/Group 225.png";
import logo from "../../public/Group 213.png";
import Section8 from "../section8/page";
interface Product {
  name: string;
  image: string;
}

interface ProductList {
  image: string;
}

export default function Blog() {
  const productData: Product[] = [
    {
      name: "Mauris at orci non vulputate diam tincidunt nec.",
      image: "/bruce-mars-FWVMhUa_wbY-unsplash 2.png",
    },
    {
      name: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      image: "/bruce-mars-FWVMhUa_wbY-unsplash 3.png",
    },
    {
      name: "Sit nam congue feugiat nisl, mauris amet nisi. ",
      image: "/bruce-mars-FWVMhUa_wbY-unsplash 4.png",
    },
  ];
  const productlist: ProductList[] = [
    { image: "/recent (4).png" },
    { image: "/recent (1).png" },
    { image: "/recent (2).png" },
    { image: "/recent (3).png" },
  ];
  const productList2: ProductList[] = [
    { image: "/sale (1).png" },
    { image: "/sale (2).png" },
    { image: "/sale (3).png" },
  ];

  function option() {
    return (
      <div className=" h-[30px]  w-[122px]  text-[14px] text-[#3F509E] bg-white hover:text-white hover:bg-[#F939BF] rounded-[3px] flex justify-center items-center">
        Women (21)
      </div>
    );
  }
  return (
    <div>
      <div className="lg:h-[286px] h-[120px] mt-5 md:h-[220px] w-full bg-[#F6F5FF] flex flex-col items-start justify-center">
        <div className=" flex flex-col items-start justify-center lg:pl-28 pl-10 md:pl-16">
          <h1 className="lg:text-[36px] text-[20px] md:text-[28px] font-bold text-[#101750]">
            Blog Page
          </h1>
          <p className="text-black lg:text-[16px] text-[12px] md:text-[14px] ">
            Home . Pages <span className="text-[#FB2E86]">. Blog Page</span>
          </p>
        </div>
      </div>
      <div className="mainContainer w-screen mt-10 sm:mt-20  flex justify-center">
        <div className="subContainer w-[95%] md:w-[85%]  gap-10 flex xlg:flex-row flex-col items-center lg:items-start justify-center ">
          <div className="part1 w-full max-w-[600px] cclg:max-w-[650px] hilg:max-w-[870px]">
            {productData.map((item,index) => (
              <div key={index} className="flex flex-col  lg:gap-5 gap-4">
                <Image
                  className="hilg:max-h-[453px] hilg:max-w-[870px] sm:max-h-[300px] sm:max-w-[600px] w-full"
                  height={453}
                  width={870}
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-4">
                  <div className="lg:h-[23px] h-auto lg:w-[360px] w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        className="lg:h-[16px] h-auto w-auto"
                        src={image1}
                        alt="image"
                      />
                      <p className="lg:h-[23px] h-auto lg:w-[160px] w-auto bg-[#FFE7F9] text-[#151875] lg:text-[14px] text-[13px] flex justify-center items-center">
                        Surf Auxion
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        className="lg:h-[16px] h-auto w-auto"
                        src={image2}
                        alt="image"
                      />
                      <p className="lg:h-[23px] h-auto lg:w-[127px] w-auto bg-[#FFE7F9] text-[#151875] lg:text-[14px] text-[13px] flex justify-center items-center">
                        Aug 09 2020
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:gap-5 gap-2 h-auto w-full">
                    <h1 className="lg:text-[30px] mt-5 text-[#151875] font-bold text-[18px]">
                      {item.name}
                    </h1>
                    <p className="text-[#8A8FB9] w-full lg:text-[16px] text-[14px] break-words">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Velit facilisis quis auctor pretium ipsum, eu rutrum.
                      Condimentum eu malesuada vitae ultrices in in neque, porta
                      dignissim. Adipiscing purus, cursus vulputate id id dictum
                      at.
                    </p>
                  </div>
                  <div className="mt-2">
                    <button className="flex items-center lg:text-[16px] text-[14px] mb-4 text-[#151875] font-semibold gap-2">
                      <p className="hover:text-[#FB2E86] hover:underline">
                        Read More
                      </p>
                      <div className="bg-[#FB2E86] h-[5px] w-[5px] rounded-full"></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="part2 w-full xlg:w-[270px] flex flex-col items-center  lg:items-start gap-5  ">
            <div className=" w-[270px]  h-[77px]">
              <h1 className="text-[#151875]  text-[22px] font-semibold ">
                Search
              </h1>
              <div className=" border-[#BDBDD8] border-[1px] rounded-[2px]  h-[40px]  w-[270px] flex items-center justify-center  gap-12">
                <input
                  type="search"
                  placeholder="Search For Posts"
                  className=" text-[14px] text-[#1518751A] "
                />
                <Image width={16} height={16} src={search} alt="search"></Image>
              </div>
            </div>
            <div className=" w-[254px]  h-[161px]">
              <h1 className="text-[#151875]  text-[22px] font-semibold">
                Categories
              </h1>
              <div className=" h-[114px]  w-[254px] grid grid-cols-2">
                <div className="group  h-[30px]  w-[122px]  text-[14px] text-[#3F509E] bg-white hover:text-white hover:bg-[#F939BF] rounded-[3px] flex justify-center items-center">
                  Hobbies (14)
                </div>
                <div>{option()}</div>
                <div>{option()}</div>
                <div>{option()}</div>
                <div>{option()}</div>
                <div>{option()}</div>
              </div>
            </div>
            <div className=" w-[120px]  h-[22px] text-[#151875]  text-[22px] font-semibold">
              Recent Post
            </div>

            <div className=" w-[250px]  h-[270px] flex flex-col justify-between ">
              {productlist.map((item,index) => (
                <div key={index} className=" h-[51px]  w-[250px] flex gap-2">
                  <Image
                    height={51}
                    width={70}
                    src={item.image}
                    alt="image"
                  ></Image>
                  <div className="flex flex-col gap-1">
                    <h1 className=" text-[14px] text-[#3F509E]">
                      It is a long established fact
                    </h1>
                    <h3 className=" text-[11px] text-[#8A8FB9]">Aug 09 2020</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-[129px]  h-[22px] text-[#151875]  text-[22px] font-semibold">
              Sale Product
            </div>

            <div className=" w-[250px]  h-[201px] flex flex-col justify-between ">
              {productList2.map((item,index) => (
                <div key={index} className=" h-[51px]  w-[250px] flex gap-2">
                  <Image
                    height={51}
                    width={70}
                    src={item.image}
                    alt="image"
                  ></Image>
                  <div className="flex flex-col gap-1">
                    <h1 className=" text-[14px] text-[#3F509E]">
                      Elit ornare in enim mauris.
                    </h1>
                    <h3 className=" text-[11px] text-[#8A8FB9]">Aug 09 2020</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="  text-[#151875]  text-[22px] font-semibold">
              Offer product
            </div>
            <div className=" w-[267px]  h-[282px]">
              <Image src={image3} alt="image3" />{" "}
            </div>
            <div className=" ">
              <h1 className="text-[#151875]  text-[22px] font-semibold">
                Follow
              </h1>

              <Image src={logo} alt="logo" className="p-3 ml-3" />
            </div>
            <div className="  text-[#151875]  text-[22px] font-semibold">
              Tags
            </div>
            <div className=" w-[228px] flex flex-wrap gap-5 ">
              <h1 className="hover:text-[#FB2E86] underline text-[#151875] hover:underline">
                General
              </h1>
              <h1 className="hover:text-[#FB2E86] underline text-[#151875] hover:underline">
                Atsanil
              </h1>
              <h1 className="hover:text-[#FB2E86] underline text-[#151875] hover:underline">
                Insas.
              </h1>
              <h1 className="hover:text-[#FB2E86] underline text-[#151875] hover:underline">
                Bibsaas
              </h1>
              <h1 className="hover:text-[#FB2E86] underline text-[#151875] hover:underline">
                Nulla.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Section8/>
    </div>
  );
}
