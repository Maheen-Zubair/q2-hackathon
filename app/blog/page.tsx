// import Image from "next/image"
// import image1 from "/public/Vector.png"
// import image2 from "/public/Vector (1).png"
// import search from "/public/search.png"

// interface Product {
//     name: string,
//     image: string,
// }

// interface ProductList {
//     image: string
// }

// export default function Blog() {
    
//     const productData:Product[] = [
//         {name: "Mauris at orci non vulputate diam tincidunt nec.", image: "/bruce-mars-FWVMhUa_wbY-unsplash 2.png"},
//         {name: "Aenean vitae in aliquam ultrices lectus. Etiam.", image:"/bruce-mars-FWVMhUa_wbY-unsplash 3.png"},
//         {name: "Sit nam congue feugiat nisl, mauris amet nisi. ", image:"/bruce-mars-FWVMhUa_wbY-unsplash 4.png"}
//     ]
//     const productlist:ProductList[] = [
//         { image: "/Rectangle 126.png"},
//         {image: "/Rectangle 126 (1).png"},
//         {image: "/Rectangle 126 (2).png"},
//         {image: "/Rectangle 126 (3).png"}
//     ]
//     const productList2:ProductList[]= [
//         {image: "/img4.png"},
//         {image: "/img3.png"},
//         {image: "/img2.png"},
//         {image: "/img.png"}
//     ]

//     function option() {
//         return(
//             <div className=" h-[30px]  w-[122px]  text-[14px] text-[#3F509E] bg-white hover:text-white hover:bg-[#F939BF] rounded-[3px] flex justify-center items-center">Women (21)</div>
//         )
//     }
//     return(

//         <div className="flex pt-24 pb-24 lg:flex-row flex-col items-center lg:items-start">
// <div className="lg:w-[870px] w-[90%] md:w-[600px] flex flex-col lg:gap-10 gap-5 items-center lg:items-start">
//     {(productData.map((item) => (
//         <div className="flex flex-col lg:gap-5 gap-4">
//             <Image className="w-[95%] md:w-[600px] h-[220px]" height={453} width={870} src={item.image} alt={item.name}></Image>
//             <div className="lg:h-[23px] h-[18px] lg:w-[360px] w-[200px] flex items-center justify-between">
//                 <div className="flex items-center gap-2"><Image className="lg:h-[16px] h-[12px] w-[16px] lg:w-[16px]" src={image1} alt="image"></Image><p className="lg:h-[23px] h-[20px] lg:w-[160px] w-[120px] bg-[#FFE7F9] text-[#151875] lg:text-[14px] text-[13px] flex justify-center items-center">Surf Auxion</p></div>
//                 <div className="flex items-center gap-2"><Image className="lg:h-[16px] h-[12px] w-[16px] lg:w-[16px]" src={image2} alt="image"></Image><p className="lg:h-[23px] h-[20px] lg:w-[127px] w-[110px] bg-[#FFE7F9] text-[#151875] lg:text-[14px] text-[13px] flex justify-center items-center">Aug 09 2020</p></div>
//             </div>
//             <div className="flex flex-col lg:gap-5 justify-start">
//                 <h1 className="lg:text-[30px] text-[#151875] font-bold">{item.name}</h1>
//                 <p className="text-[#8A8FB9] lg:text-[16px] text-[12px] md:text-[14px]  leading-[25.6px] lg:w-[852px] md:w-[600px] lg:h-[49px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dic at.</p>
//                 <button className="lg:h-[22px] lg:w-[95px] w-[70px] flex justify-center items-center lg:text-[16px] text-[12px] md:text-[14px] text-[#151875] font-semibold lg:gap-[5px]"><p>Read More </p><div className="bg-[#FB2E86] lg:h-[5px] h-[3px] lg:w-[5px] w-[3px] rounded-full"></div></button>
//             </div>
//         </div>
//     )))}
// </div>
//             <div className="flex flex-col items-center  lg:items-start gap-5">
//                 <div className=" w-[270px]  h-[77px]">
//                     <h1 className="text-[#151875]  text-[22px] font-semibold ">Search</h1>
//                     <div className=" border-[#BDBDD8] border-[1px] rounded-[2px]  h-[40px]  w-[270px] flex items-center justify-center  gap-12">
//                     <input type="search" placeholder="Search For Posts" className=" text-[14px] text-[#1518751A] " /> <Image width={16} height={16} src={search} alt="search"></Image>
//                     </div>
//                 </div>
//                 <div className=" w-[254px]  h-[161px]">
//                 <h1 className="text-[#151875]  text-[22px] font-semibold">Categories</h1>
//                 <div className=" h-[114px]  w-[254px] grid grid-cols-2">
//                 <div className="group  h-[30px]  w-[122px]  text-[14px] text-[#3F509E] bg-white hover:text-white hover:bg-[#F939BF] rounded-[3px] flex justify-center items-center">Hobbies (14)</div>
//                 <div>{option()}</div>
//                 <div>{option()}</div>
//                 <div>{option()}</div>
//                 <div>{option()}</div>
//                 <div>{option()}</div>


//                 </div>
//                 </div>
//                 <div className=" w-[120px]  h-[22px] text-[#151875]  text-[22px] font-semibold">Recent Post</div>

//                 <div className=" w-[250px]  h-[270px] flex flex-col justify-between ">
//                         {(productlist.map((item) => (                    
//                             <div className=" h-[51px]  w-[250px] flex gap-2">
//                             <Image height={51} width={70} src={item.image} alt="image"></Image>
//                             <div className="flex flex-col gap-1">
//                                 <h1 className=" text-[14px] text-[#3F509E]">It is a long established fact</h1>
//                                 <h3 className=" text-[11px] text-[#8A8FB9]">Aug 09 2020</h3>
//                             </div>
//                             </div>
//                         )))}
//                 </div>
//                 <div className=" w-[129px]  h-[22px] text-[#151875]  text-[22px] font-semibold">Sale Product</div>


//                 <div className=" w-[250px]  h-[201px] flex flex-col justify-between ">
//                         {(productList2.map((item) => (                    
//                             <div className=" h-[51px]  w-[250px] flex gap-2">
//                             <Image height={51} width={70} src={item.image} alt="image"></Image>
//                             <div className="flex flex-col gap-1">
//                                 <h1 className=" text-[14px] text-[#3F509E]">Elit ornare in enim mauris.</h1>
//                                 <h3 className=" text-[11px] text-[#8A8FB9]">Aug 09 2020</h3>
//                             </div>
//                             </div>
//                         )))}
//                 </div>
                
//                                 <div className=" w-[140px]  h-[22px] text-[#151875]  text-[22px] font-semibold" >Offer product</div>
//                 <div className=" w-[267px]  h-[282px]"></div>
//                 <div className=" w-[126px]  h-[78px]">
//                 <h1 className="text-[#151875]  text-[22px] font-semibold">Follow</h1>

//                 </div>
//                 <div className=" w-[47px]  h-[22px] text-[#151875]  text-[22px] font-semibold">Tags</div>
//                 <div className=" w-[228px]  h-[64px]"></div>
//             </div>
//         </div>
//     )
// }