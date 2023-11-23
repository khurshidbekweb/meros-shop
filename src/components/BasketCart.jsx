import praductImg from '../assets/images/example.png'

function BasketCart() {
  return (
    <div className="basket flex items-start gap-5 mb-4">
        <div className="basket-card border w-[850px]  p-2 py-5 flex justify-between items-center  hover:shadow">
            <img width={150} src={praductImg} alt="imgCard" />
            <div className="praduct-info w-[80%]">
                <div className="bookmark-haed flex justify-between items-center">
                    <h3 className='text-[20px] font-bold'> Praduct name </h3>
                    <button><i className='bx bx-trash text-[25px]'></i></button>
                </div>
                <div className="parduct-own-info flex justify-between items-center mt-8">
                    <div className="text-bookmarks-praduct">
                        <p className="sale">Sotuvchi: <strong>Доставка курьером</strong></p>
                        <p className="color">Rang: <strong>Sariq</strong></p>
                    </div>
                    <div className="bookmark-count flex items-center border relative p-1">
                        <button className="text-[25px] font-bold p-2">
                            <span className="w-[15px] block h-[2px] bg-slate-400"></span>
                        </button>    
                        <p className="text-[20px] font-bold px-1">1</p>
                        <button className="font-bold p-2">
                            <span className="w-[15px] block h-[2px] bg-slate-400"></span>
                            <span className="w-[15px] block absolute rotate-[90deg] top-[18px] h-[2px] bg-slate-400"></span>
                        </button>
                    </div>
                    <h4 className="prins font-bold">236 000 so`m</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BasketCart