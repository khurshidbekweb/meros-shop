// import image
import locations from '../assets/icons/locations.svg';
import logo from '../assets/icons/logo.svg';
import catagory from '../assets/icons/category.svg';
import search from '../assets/icons/searchHead.svg';
import profil from '../assets/icons/profil.svg';
import fovorit from '../assets/icons/fovorit.svg'
import shoping from '../assets/icons/shop.svg';
import CategoryModal from '../Modals/Category'
import closeCtg from '../assets/icons/ctgClose.svg'
// Css import
import './components.css'
import { useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
function Header() {
    const categoryShow = useRef();
    const overlay = useRef();
    const imgCtg = useRef();
    const btnCtg =useRef();
    const showCategory = () =>{        
        categoryShow.current.classList.toggle("hidden");
        if(!categoryShow.current.classList.contains("hidden")){
            imgCtg.current.setAttribute("src", closeCtg)
            btnCtg.current.classList.remove("bg-[#32386B]")
            btnCtg.current.classList.add("bg-[#F5921C]")
            overlay.current.classList.remove("hidden")
        }else{
            imgCtg.current.setAttribute("src", catagory)
            btnCtg.current.classList.add("bg-[#32386B]");
            btnCtg.current.classList.remove("bg-[#F5921C]");
            overlay.current.classList.add("hidden")
        }
    }
  return (
    <div className="header bg-white relative z-40">
        <div className="header--inner container">
            <div className="header-top w-[100%] flex justify-between items-center py-2">
                <div className="language w-[220px] flex justify-between items-center">
                    <button>Русский</button>
                    <span className="block w-[1px] h-5 bg-slate-400"></span>
                    <button>O‘zbekcha</button>
                    <span className="block w-[1px] h-5 bg-slate-400"></span>
                    <button>Ўзбекча</button>
                </div>
                <ul className="header-top_informations flex justify-between items-center w-[692px]">
                    <li className="header-top-item"><a href="#" className="header-top-item-link flex"><img src={locations} alt="loc" /> <p>Ташкент</p></a></li>
                    <li className="header-top-item"><a href="#" className="header-top-item-link">Мобильное приложение</a></li>
                    <li className="header-top-item"><a href="#" className="header-top-item-link">Скидки</a></li>
                    <li className="header-top-item"><a href="#" className="header-top-item-link">Помощь</a></li>
                    <li className="header-top-item"><a href="#" className="header-top-item-link">Адреса магазинов</a></li>
                    <li className="header-top-item"><a href="#" className="header-top-item-link">Доставка</a></li>
                </ul>
            </div>
            <hr />
            <div className="header-main w-[100%] flex justify-between items-center p-2">
                    <a href="#" className="header--link-img w-[150px]"><img width={155} src={logo} alt="logo" /></a>
                    <button ref={btnCtg} onClick={showCategory} className="header-catagory bg-[#32386B] flex text-white p-2 rounded px-4 justify-between items-center w-[120px]"><img ref={imgCtg} src={catagory} alt="category" /> <p>Католог</p></button>                    
                    <form className='flex items-center w-[580px]'>
                        <input type="search" name="search-praduct" id="search-praduct" className='p-2 rounded-l-lg w-[370px] border' placeholder='Поиск по товаром...'/>
                        <select className='p-2 px-4 border-t border-b' name="category-select" id="category-select-all">
                            <option value="content"  selected hidden>Все категории</option>
                            <option value="content">Все категории</option>
                        </select>
                        <button className='bg-[#32386B] p-[9px] px-3 rounded-r-[5px]'><img src={search} alt="search-all" /></button>
                    </form>
                    <div className="header--necessary flex justify-between items-center w-[310px]">
                            <NavLink to="login" className='flex w-[75px] justify-between'>
                                <img src={profil} alt="profil" />
                                <p>Войти</p>
                            </NavLink>    
                            <a href="#" className='flex w-[105px] justify-between'>
                                <img src={fovorit} alt="profil" />
                                <p>Избранное</p>
                            </a>
                            <a href="#" className='flex w-[95px] justify-between'>
                                <img src={shoping} alt="profil" />
                                <p>Корзина</p>
                            </a>                    
                    </div>
            </div>
            <nav className="header-bottom">
                <ul className="header--list-botton flex justify-between items-center p-1">
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Книги</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Сувениры</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Для мужчин</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Для женщин</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Для детей</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Атрибутика</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Атрибутика</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Личение и здоровые</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Продукты питания</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Идеи подарка</a>
                    </li>
                    <li className="header--botton-item">
                        <a href="#" className="header-links hover:text-[#114FEF]">Meros Мерч</a>
                    </li>                  
                </ul>
            </nav>
        </div>
        <div ref={categoryShow} className="hidden z-40 absolute w-[100%] top-[100px] bg-white">
            <div className="w-[1280px] mx-auto"><CategoryModal/></div>
        </div>
        <Outlet/>
    <div ref={overlay} className="overlay hidden fixed w-[100%] h-[100vh] z-[-2] top-0"></div>
    </div>
  )
}

export default Header