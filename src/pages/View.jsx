import Footer from "../components/Footer";
import Header from "../components/Header";
import Degrre from "../components/Degrre";
import fovorite from "../assets/icons/star.svg";
import { useState } from "react";

const data = [
  {
    img: "https://picsum.photos/id/28/450/550",
    id: 1,
  },
  {
    img: "https://picsum.photos/id/15/450/550",
    id: 2,
  },
  {
    img: "https://picsum.photos/id/5/450/550",
    id: 3,
  },
  {
    img: "https://picsum.photos/id/215/450/550",
    id: 4,
  },
];
function View() {
  let delivery = true;
  const [activeImg, setActiveImg] = useState(data[0].id);
  const [count, setCount] = useState(1);
  const incrementPraduckt = () => {
    setCount(count + 1);
  };
  const decrementPraduct = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };
  return (
    <>
      <Header />
      <div className="view">
        <div className="container">
          <div className="view-inner">
            <div className="wrap-main-view mt-5 flex">
              <div className="img-wrap w-[50%] flex ">
                <div className="child-img w-[20%] text-center">
                  {data.length &&
                    data.map((item) => {
                      return (
                        <img
                          key={item.id}
                          onClick={() => setActiveImg(item.id)}
                          width={90}
                          height={110}
                          className={
                            item.id == activeImg
                              ? `mb-2 border p-1 cursor-pointer active-child-img`
                              : `mb-2 border p-1 cursor-pointer`
                          }
                          src={item.img}
                          alt="img"
                        />
                      );
                    })}
                </div>
                <div className="main-img-view  w-[500px]">
                  <img
                    className="mb-2 border px-10 py-5"
                    src={data.find((img) => img.id == activeImg).img}
                    alt="img"
                  />
                </div>
              </div>
              <div className="view-information-praduct px-5">
                <h2 className="text-[24px] font-bold mb-3">
                  Триллионер слушает
                </h2>
                <Degrre />
                <h3 className="text-[24px] font-bold mt-5">Коротко о товаре</h3>
                <p className="text-[18px] text-[#8D909B]">
                  Автор _ _ _ _ _ _ _ _ _ _ _{" "}
                  <strong className="text-black">
                    Аляутдинов Шамиль Рифатович
                  </strong>
                </p>
                <p className="text-[18px] text-[#8D909B]">
                  Языки _ _ _ _ _ _ _ _ _ _ _{" "}
                  <strong className="text-black">Русский</strong>
                </p>
                <p className="text-[18px] text-[#8D909B]">
                  Надпись _ _ _ _ _ _ _ _ _ _{" "}
                  <strong className="text-black">Кириллица</strong>
                </p>
                <p className="text-[18px] text-[#8D909B]">
                  Издательство _ _ _ _ _ _ _{" "}
                  <strong className="text-black">Диля</strong>
                </p>

                <div className="pay-count mt-9 items-center flex gap-5">
                  <h4 className="text-[18px] font-medium">Количество:</h4>
                  <div className="bookmark-count flex items-center border rounded-sm relative p-1">
                    <button
                      className="text-[25px] font-bold p-2"
                      onClick={decrementPraduct}
                    >
                      <span className="w-[15px] block h-[2px] bg-slate-400"></span>
                    </button>
                    <p className="text-[20px] font-bold px-1">{count}</p>
                    <button
                      className="font-bold p-2"
                      onClick={incrementPraduckt}
                    >
                      <span className="w-[15px] block h-[2px] bg-slate-400"></span>
                      <span className="w-[15px] block absolute rotate-[90deg] top-[18px] h-[2px] bg-slate-400"></span>
                    </button>
                  </div>
                </div>
                <h2 className="text-[35px] font-bold text-[#32386B] mt-5">
                  {count * 50000} сум
                </h2>
                <div className="btn-wrap-view mt-4 flex gap-5">
                  <button className="hover:bg-[#32386B] hover:text-white transition-all p-3 px-12 text-[20px] font-medium border rounded-[5px]">
                    Купить
                  </button>
                  <button className="hover:bg-[#32386B] hover:text-white transition-all p-3 px-12 text-[20px] font-medium border rounded-[5px]">
                    В корзину
                  </button>
                </div>
                <div className="fovorite flex gap-4 mt-7">
                  <img
                    className="cursor-pointer"
                    src={fovorite}
                    alt="fovorite"
                  />
                  <p className="fovorite-text">Добавить в избранное</p>
                </div>
                <div className="delivery flex gap-4 mt-4">
                  {delivery ? "✅" : "❌"}
                  <p>Доставка по Узбекистану</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default View;
