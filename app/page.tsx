import Section1 from "./section1/page";
import Section2 from "./section2/page";
import Section3 from "./section3/page";
import Section4 from "./section4/page";
import Section5 from "./section5/page";
import Section5b from "./section5b/page";
import Section6 from "./section6/page";
import Section7 from "./section7/page";
import Section8 from "./section8/page";
import Section9 from "./section9/page";
import Section from "./section/page";
export default function Home() {
  return (
    <div>
      {/* -----------main slide:"New Furniture Collection Trends in 2020"-------- */}
      <Section1 />  
      <Section2 />

      {/* -------Leatest Products , What Shopex Offer!-------- */}
      <Section4 />

      {/* ---------Unique Features Of leatest & Trending Poducts------ */}
      <Section3 />
 
 {/* ------- Trending Products ------- */}
      {/* <Section5b />
      <Section /> */}

      {/* -------Discount Item--------- */}
      {/* <Section5 /> */}

       {/* ------Top Categories-------- */}     
      <Section6 />

      {/* -----Get Leatest Update By Subscribe 0ur Newslater------- */}
      <Section7 />

      {/* -----company-logo------------ */}
      <Section8 />
      
      {/* -----Leatest Blog------- */}
      <Section9 /> 
     
    </div>
  );
}
