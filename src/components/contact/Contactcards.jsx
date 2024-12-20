import first from "../../assets/img/first.webp"
import second from "../../assets/img/second.webp"
import third from "../../assets/img/third.webp"
import fourth from "../../assets/img/fourth.webp"

const Contactcards = () => {
  return (
   <div className="Contactcards">
    <div className="innercard">
      
        <div className="row ms-0 mt-3">
            <div className="image1">
              <img src={first} alt="Contact cards image" />
            </div>
          <div className="image2">
              <img src={second} alt="Conract cards image" />
            </div>
          
          <div className="image3">
              <img src={third} alt="Contact cards image" />
            </div>
          
          <div className="image4">
              <img src={fourth} alt="Contact cards image" />
            </div>
        </div>
    </div>
   </div>
  )
}

export default Contactcards