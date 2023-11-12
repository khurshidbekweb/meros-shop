import imgCard from "../assets/images/example.png";
import star from "../assets/icons/star.svg";
import { useRef } from "react";
function Card() {
  const cardEl = useRef(null)
  const cardActions = useRef(null)

  const handleCardHover = (e) => {
    console.log(e);
  }
  return (
    <div ref={cardEl} onMouseOver={handleCardHover} className="card-main  p-2 w-[250px]">
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
        <div ref={cardActions} id="praduct-show" className="show-praduct-info absolute bg-slate-500 p-5 top-6 left-0 py-10">

        </div>
      </div>
      <div className="info-praduct">
        <h4 className="praduct-type text-[16px] font-medium text-[#8D909B] mt-1 block">
          Книги
        </h4>
        <div className="rating-name overflow-hidden mt-1">
            <h4 title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, impedit?"
              className="praduct-name text-[16px] font-medium h-[51px] overflow-hidden"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              impedit?
            </h4>
          
          <div className="rating flex mt-1">
            <span>
              <img src={star} alt="star" />
            </span>
            <span>
              <img src={star} alt="star" />
            </span>
            <span>
              <img src={star} alt="star" />
            </span>
            <span>
              <img src={star} alt="star" />
            </span>
            <span>
              <img src={star} alt="star" />
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
