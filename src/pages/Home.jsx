// import BestOffer from "../components/home/BestOffer"
import Cakes from "../components/home/Cakes"
import Clients from "../components/home/Clients"
import EnjoyOurCoffee from "../components/home/EnjoyOurCoffee"
import Faq from "../components/home/Faq"
import Franchise from "../components/home/Franchise"
import NewSweets from "../components/home/NewSweet"
import OrmadoKaffehaus from "../components/home/OrmadoKaffehaus"
// import OurRecentBlog from "../components/home/OurRecentBlog"
import PaymentsWithMpay from "../components/home/PaymentsWithMpay"
import Testimonials from "../components/home/Testimonials"
import WhyUs from "../components/home/WhyUs"
import YourOrmado from "../components/home/YourOrmado"
import {testimonalsforhome} from '../data/data';

import { useContext, useState, useEffect } from "react";
import { ApiLinkContext } from "../context/ApiLinkContext";
import axios from "axios";
import VipBlog from "../components/home/VipBlog"
import YourFavoriteCoffee from "../components/home/YourFavoriteCoffee"
import DeliverySec from "../components/home/DeliverySec"
import GiftCardSec from "../components/home/GiftCardSec"
import CorporateSec from "../components/home/CorporateSec"

const Home = () => {

  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ApiLink2 } = useContext(ApiLinkContext);

  useEffect(() => {
      axios.get(`${ApiLink2}/faq`)
      .then((res) => {
        const faqData = res.data.data;
        console.log(res.data.data)
        setFaq(faqData);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        setLoading(false);
      });
  }, [ApiLink2]);


  return (
    <>
     <OrmadoKaffehaus/>
      <EnjoyOurCoffee/>
      <YourOrmado />
      <Testimonials senddata={testimonalsforhome} />
      <Clients />
      <WhyUs />
      <YourFavoriteCoffee/>
      <VipBlog/>
      <NewSweets />
      <Cakes />
      <Franchise />
      <DeliverySec/>
      <CorporateSec/>
      <GiftCardSec/>
      <Faq faqs={faq}/>
      
      {/* <OurRecentBlog/> */}
      <PaymentsWithMpay/>
    </>
  )
}

export default Home