import imgCard from "../assets/images/example.png";
import star from "../assets/icons/star.svg";
import showPraduct from '../assets/icons/eye.svg'
import likePraduct from '../assets/icons/degree.svg'
import addShop from '../assets/icons/addShop.svg'
import { useRef } from "react";
import { NavLink } from "react-router-dom";
// import Degrre from './Degrre'

function Card() {
  const cardEl = useRef(null)
  const cardActions = useRef(null)

  const handleCardHover = () => {
    cardActions.current.classList.remove('translate-x-[-75px]')
  }
  const handlCardLeave = () =>{
    cardActions.current.classList.add('translate-x-[-75px]');
  }
  const data = [];
  const fovoritePraduct=(id)=>{
    data.map(praduct => {
      return praduct.id == id 
    })
  }
  return (
    <div ref={cardEl} onMouseOver={handleCardHover} onMouseLeave={handlCardLeave} className="card-main overflow-hidden p-2 w-[235px]">
      <div className="imgs-praduct relative ">        
          <img
            className="img-paraduct overflow-hidden"
            width={245}
            height={200}
            src={imgCard}
            alt="imgPraduct"
          />        
        <p className="absolute bg-[#F5921C] text-white p-1 left-0 rounded-[3px] font-bold bottom-0">
          -54%
        </p>
        <div ref={cardActions} className="translate-x-[-75px] show-praduct-info absolute top-4 left-0 z-10">
          <NavLink to="/view" className="bg-[#666666] hover:bg-[#F5921C] transition-colors block rounded-[4px] text-white" >
            <img src={showPraduct} alt="showPraduct" className="p-2"/>
          </NavLink>
          <button onClick={(e)=>fovoritePraduct(e)} className="bg-[#666666] hover:bg-[#F5921C] transition-colors block rounded-[4px] text-white mt-2">
            <img src={likePraduct} alt="degeree" className="p-2" />
          </button>
          <button className="bg-[#666666] hover:bg-[#F5921C] transition-colors block rounded-[4px] text-white mt-2">
            <img src={addShop} alt="degeree" className="p-2" />
          </button>
        </div>
      </div>
      <div className="info-praduct">
        <h4 className="praduct-type text-[16px] font-medium text-[#8D909B] mt-1 block">
          Книги
        </h4>
        <div className="rating-name overflow-hidden mt-1">
            <h4 title="Книги Коран" className="praduct-name text-[16px] font-medium h-[51px] overflow-hidden">Книги Коран  </h4>
          {/* <Degrre/> */}
          <div className="rating flex mt-1">
            <span>
              <img width={20} src={star} alt="star" />
            </span>
            <span>
              <img width={20} src={star} alt="star" />
            </span>
            <span>
              <img width={20} src={star} alt="star" />
            </span>
            <span>
              <img width={20} src={star} alt="star" />
            </span>
            <span>
              <img width={20} src={star} alt="star" />
            </span>
          </div>
        </div>        
        <h4 className="price text-[22px] font-bold ">30 000 сум</h4>
        <p className="scitka text-[14px] mt-0 text-[#8D909B] line-through">
          220 000 сум
        </p>      
      </div>
    </div>
  );
}

export default Card;
