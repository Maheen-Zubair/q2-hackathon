import Section1 from "./(heroSection)/section1/page";
import Section2 from "./(heroSection)/section2/page";
import Section3 from "./(heroSection)/section3/page";
import Section4 from "./(heroSection)/section4/page";
import Section5 from "./(heroSection)/section5/page";
import Section5b from "./(heroSection)/section5b/page";
import Section6 from "./(heroSection)/section6/page";
import Section7 from "./(heroSection)/section7/page";
import Section8 from "./(heroSection)/section8/page";
import Section9 from "./(heroSection)/section9/page";
import Section from "./(heroSection)/section/page";
import Header from "./components/header";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
            <div  className="edit">

      <Header />
      </div>
      {/* -----------main slide:"New Furniture Collection Trends in 2020"-------- */}
      <Section1 />  
      <div  className="edit">
      <Section2 />

      {/* -------Leatest Products , What Shopex Offer!-------- */}
      <Section4 />

      {/* ---------Unique Features Of leatest & Trending Poducts------ */}
      <Section3 />
 
     {/* ------- Trending Products ------- */}
      <Section5b />
      <Section />

      {/* -------Discount Item--------- */}
      <Section5 />

       {/* ------Top Categories-------- */}     
      <Section6 />

      {/* -----Get Leatest Update By Subscribe 0ur Newslater------- */}
      <Section7 />

      {/* -----company-logo------------ */}
      <Section8 />
      
      {/* -----Leatest Blog------- */}
      <Section9 /> 
     <Footer />
     </div>
    </div>
  );
}
