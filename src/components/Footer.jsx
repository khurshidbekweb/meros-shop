import googlePlay from '../assets/icons/goolePlay.svg';
import appStore from '../assets/icons/appStore.svg'
import instagranm from '../assets/icons/Instagram.svg'
import telegram from '../assets/icons/telegram.svg';
import facebook from '../assets/icons/Facebook.svg';

function Footer() {
  return (
    <div className="footer bg-[#F4F7F8] p-10 mt-10">
        <div className="footer--inner container w-[100%] flex justify-between items-start">
          <ul className="footer-list-offers">
          <strong>Наши предложения</strong>
            <li className="list--offers-item mt-2"><a href="#" className=" hover:[#61A3BA]">Meros Дисконт</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Meros Мерч Бренд</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Cкидки</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Новинки</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Коллекции</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Распродажа</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Популярные товары</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Рекомендуемые товары</a></li>
          </ul>
          <ul className="footer-list-offers">
          <strong>Сервис и поддержка</strong>
            <li className="list--offers-item mt-2"><a href="#" className=" hover:[#61A3BA]">Meros Дисконт</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Meros Мерч Бренд</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Cкидки</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Новинки</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Коллекции</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Распродажа</a></li>
          </ul>
          <ul className="footer-list-offers">
          <strong>О компании</strong>
            <li className="list--offers-item mt-2"><a href="#" className=" hover:[#61A3BA]">Meros Дисконт</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Meros Мерч Бренд</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Cкидки</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Новинки</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:[#61A3BA]">Коллекции</a></li>
          </ul>
          <ul className="footer-list-offers">
          <strong>Для связи</strong>
            <li className="list--offers-item mt-2"><a href="tel:+998979924578" className=" hover:[#61A3BA]">+998 97 992 48 78</a></li>
            <li className="list--offers-item"><a href="tel:+998971082004" className=" hover:[#61A3BA]">+998971082004</a></li>
            <li className="list--offers-item"><a href="#" className=" hover:text-[#61A3BA]">khurshidbeknuriddinov@gmail.com</a></li>
          </ul>
          <ul className="footer-list-offers">
          <strong>Мы в соцсетях</strong>
            <li className="list--offers-item mt-2 flex justify-between">
              <a href="#" className=" hover:text-[#F5921C]"><img src={instagranm} alt="instagram" /></a>
              <a href="#" className=" hover:text-[#61A3BA]"><img src={telegram} alt="instagram" /></a>
              <a href="#" className=" hover:[#61A3BA]"><img src={facebook} alt="instagram" /></a>
            </li>
            <li className="list--offers-item mt-5"><a href="#"><img src={googlePlay} className='bg-[#273142] p-2 rounded-[5px] w-[128px]' alt="insta" /></a></li>
            <li className="list--offers-item"><a href="#"><img src={appStore} className='bg-[#273142] p-2 rounded-[5px] w-[128px] mt-2' alt="appStore" /></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer