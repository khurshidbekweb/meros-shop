import BasketCart from "../components/BasketCart"



function Basket() {    
  return (
    <div className="basket">
        <div className="container">
            <div className="basket_inner flex gap-6 mt-4">
                <div className="basket-elements">
                  <BasketCart />                  
                  <BasketCart />                  
                  <BasketCart />                  
                  <BasketCart />                  
                </div>              
        <div className="basket-pay w-[400px] h-[330px] fixed right-32 hover:shadow p-2 rounded">
            <div className="total-praduct flex justify-between p-1 mb-1">
            <h3 className='text-[22px] font-bold'>Jami: </h3>
            <h3 className='text-[22px] font-bold '>236 000 sum</h3>
            </div>
            <hr />
            <form className='mt-3'>
                <input type="text" placeholder='Promokodni kirgazing' className='w-[80%] border p-2 rounded-l-[5px]'/>
                <button className='w-[20%] border p-2 rounded-r-[5px] font-bold bg-[#32386B] text-white'>Kiritish</button>
            </form>
            <div className="pay-parduct-main-informations">
                <div className="flex justify-between font-medium px-2 mt-4">
                    <h3>Qiymati: </h3>
                    <h4>22 so`m</h4>
                </div>
                <div className="flex justify-between font-medium px-2 mt-2">
                    <h3>Promokod: </h3>
                    <h4>0 so`m</h4>
                </div>
                <div className="flex justify-between font-medium items-start px-2 mt-2 mb-3">
                    <h3>Naqd pul to`lash uchun komissiya miqdori: </h3>
                    <h4> 0 %</h4>
                </div>
            </div>

            <button className="p-2 bg-[#32386B] text-white w-[100%] rounded text-[20px] mt-7">Buyutma berish</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Basket