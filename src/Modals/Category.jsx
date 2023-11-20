import './modal.css'

import Brend from '../assets/images/brendImg.png'


function Category() {
  return (
    <div className="w-[100%] mx-auto transition-all duration-150 overflow-hidden">      
      <div className="category-wrapper w-[1530px] flex items-start mx-auto bg-white">
        <ul className="w-[470px] h-[100%] pb-5 bg-[#F4F7F8]">
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            <li className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"><a href="#" className="category--link">Category-01</a></li>
            
        </ul>
          <div className="chald-category-wrap w-[1080px] p-3">
            <div className="w-[930px] flex items-start gap-[30px]">
            <div className="category-childs-in-category w-[65%] flex flex-wrap gap-6">
              <ul className="category-childs-list w-[250px]"> Книги мира
                <li className="childs-item"><a href="#" className="links-child">Child-1</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-2</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-3</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-4</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-5</a></li>
              </ul>
              <ul className="category-childs-list w-[250px]"> Книги мира
                <li className="childs-item"><a href="#" className="links-child">Child-1</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-2</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-3</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-4</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-5</a></li>
              </ul> 
              <ul className="category-childs-list w-[250px] bg-silver"> Книги мира
                <li className="childs-item"><a href="#" className="links-child">Child-1</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-2</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-3</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-4</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-5</a></li>
              </ul>
              <ul className="category-childs-list w-[250px]"> Книги мира
                <li className="childs-item"><a href="#" className="links-child">Child-1</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-2</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-3</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-4</a></li>
                <li className="childs-item"><a href="#" className="links-child">Child-5</a></li>
              </ul> 
            </div>
            <div className="category-chald-brends text-center w-[30%]">
              <img height={60} src={Brend} alt="bernd" />
              <img height={60} src={Brend} alt="bernd" />
              <img height={60} src={Brend} alt="bernd" />
              <img height={60} src={Brend} alt="bernd" />
              <img height={60} src={Brend} alt="bernd" />
              <img height={60} src={Brend} alt="bernd" />
            </div>
            </div>
          </div>
      </div>      
    </div>
  )
}

export default Category