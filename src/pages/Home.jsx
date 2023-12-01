import Card from "../components/Card";
import Header from '../components/Header'
import Footer from '../components/Footer'
// Import images
import advertsing from "../assets/images/advertsingMain.png";
import advertsingIMg1 from "../assets/images/adDeggre1.png";
import advertsingIMg2 from "../assets/images/adDeggre2.png";
import imgBootom from "../assets/images/imgBootom.png";
import adImg1 from "../assets/icons/adImg1.svg";
import adImg2 from "../assets/icons/adImg2.svg";
import adImg3 from "../assets/icons/adImg3.svg";
import aside from "../assets/images/asidePublic.png";
import bannerMidle from "../assets/images/bannerMidle.png";
import asideDiscound from "../assets/images/asideDiscound.png";
import infoAppImg from "../assets/images/infoAppImg.png";
import app from "../assets/images/app.png";
import card from "../assets/images/card.png";
import praductImg from "../assets/images/praductimg.png";
import brendImg from '../assets/images/brendImg.jpg'


// Swiper Import
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Slideimport ;
import "swiper/css/bundle";

function Main() {
  return (
    <>
      <Header/>
      <div className="main">
          <section className="hero container">
            <div className="hero--wrap flex gap-2 mt-5">
              <div className="advertising-mainIMg">
                <img src={advertsing} alt="advertising" />
              </div>
              <div className="last--degre">
                <img src={advertsingIMg1} alt="als" />
                <img src={advertsingIMg2} alt="als" className="mt-2" />
              </div>
            </div>
            <img src={imgBootom} alt="imgBootom" className="mt-2" />
            <div className="advertsing-secound-deggre mt-14">
              <h2 className="text-[24px] font-bold">Специально для вас</h2>
              <div className="advertsing-img flex justify-between items-center mt-5">
                <a
                  href="#"
                  className="adCard1 flex gap-2 p-2 py-5  items-center w-[370px] "
                >
                  <img src={adImg1} alt="img" />
                  <h3 className="card-info text-[30px] w-[220px] font-bold text-center text-white">
                    Meros Мерч Бренд
                  </h3>
                </a>
                <a
                  href="#"
                  className="adCard2 flex gap-2 p-2 py-5 w-[370px] items-center"
                >
                  <img src={adImg2} alt="img" />
                  <h3 className="card-info text-[32px] w-[220px] font-bold text-center text-white">
                    Meros Дисконт
                  </h3>
                </a>
                <a
                  href="#"
                  className="adCard3 flex gap-2 p-2 py-5 items-center w-[370px] bg-[#251669] rounded-[5px]"
                >
                  <img src={adImg3} alt="img" />
                  <h3 className="card-info text-[30px] w-[220px] font-bold text-center text-white">
                    Лучший Подарок
                  </h3>
                </a>
              </div>
            </div>
          </section>
          <section className="deals container">
            <div className="deals--inner mt-16">
              <h3 className="deals-title text-[24px] font-bold">
                Лучшие предложения!
              </h3>
              <div className="deals-wrap-card mt-4 flex justify-between items-start">
                <div className="aside--deals-publicity">
                  <img width={270} src={aside} alt="aside" />
                </div>
                <div className="main-praduct">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </div>
          </section>
          <div className="banner container">
            <img src={bannerMidle} alt="banner-midle" className="mt-10" />
          </div>
          <section className="all-discound container">
            <div className="deals--inner mt-16">
              <h3 className="deals-title text-[24px] font-bold">
                Лучшие предложения!
              </h3>
              <div className="deals-wrap-card mt-4 flex justify-between items-start">
                <div className="main-praduct">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className="aside--deals-publicity">
                  <img width={270} src={asideDiscound} alt="aside" />
                </div>
              </div>
            </div>
          </section>
          <section className="application-pars bg-[#F4F7F8] mt-10 py-12">
            <div className="application-inner container flex justify-between items-center">
              <div className="install-app w-[410px] border flex items-center">
                <div className="app-info w-[220px] ml-5">
                  <h3 className="app-name text-[20px] font-bold">
                    Доставка по всему Узбекистану
                  </h3>
                  <a
                    href="#"
                    className="text-[#8D909B] text-[16px] font-mideum mt-10 block"
                  >
                    Условия доставки
                  </a>
                </div>
                <img src={infoAppImg} alt="img" />
              </div>
              <div className="install-app w-[410px] border flex items-center">
                <div className="app-info w-[230px] ml-5">
                  <h3 className="app-name text-[18px] font-bold">
                    Установите мобильное приложение
                  </h3>
                  <a
                    href="#"
                    className="text-[#8D909B] text-[16px] font-mideum mt-10 block"
                  >
                    Установить
                  </a>
                </div>
                <img src={app} alt="img" />
              </div>
              <div className="install-app w-[410px] border flex items-center relative">
                <div className="app-info w-[200px] ml-4 absolute">
                  <h3 className="app-name text-[19px] font-bold">
                    Оплата наличными или картой
                  </h3>
                  <a
                    href="#"
                    className="text-[#8D909B] text-[16px] font-mideum mt-10 block"
                  >
                    Условия оплаты
                  </a>
                </div>
                <img className="mt-[27px] ml-auto" src={card} alt="img" />
              </div>
            </div>
          </section>
          <section className="praduct-swiper">
            <div className="container">
              <div className="praduct-sec-inner mt-10 relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[24px] font-bold">Популярные категории</h3>
                  <div className="swiper-navigation">
                    <span className="swiper-next-button btn-countrol-next ml-3"></span>
                    <span className="swiper-prev-button btn-countrol-prev"></span>
                  </div>
                </div>
                <hr />
                <Swiper
                  className="mt-5"
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={30}
                  slidesPerView={5}
                  navigation={{
                    enabled: true,
                    prevEl: ".swiper-prev-button",
                    nextEl: ".swiper-next-button",
                  }}
                >
                  <SwiperSlide>
                    <a
                      href="#"
                      className="praduct-category block text-center w-[246px] bg-[#F4F7F8] p-10 px-[66px] rounded-[5px]"
                    >
                      <img
                        className="mx-auto"
                        width={133}
                        height={130}
                        src={praductImg}
                        alt="img"
                      />
                      <h3 className="praduct-neme mt-11 text-[24px] font-bold">
                        Книги
                      </h3>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="#"
                      className="praduct-category block text-center w-[246px] bg-[#F4F7F8] p-10 px-[66px] rounded-[5px]"
                    >
                      <img
                        className="mx-auto"
                        width={133}
                        height={130}
                        src={praductImg}
                        alt="img"
                      />
                      <h3 className="praduct-neme mt-11 text-[24px] font-bold">
                        Книги
                      </h3>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="#"
                      className="praduct-category block text-center w-[246px] bg-[#F4F7F8] p-10 px-[66px] rounded-[5px]"
                    >
                      <img
                        className="mx-auto"
                        width={133}
                        height={130}
                        src={praductImg}
                        alt="img"
                      />
                      <h3 className="praduct-neme mt-11 text-[24px] font-bold">
                        Книги
                      </h3>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="#"
                      className="praduct-category block text-center w-[246px] bg-[#F4F7F8] p-10 px-[66px] rounded-[5px]"
                    >
                      <img
                        className="mx-auto"
                        width={133}
                        height={130}
                        src={praductImg}
                        alt="img"
                      />
                      <h3 className="praduct-neme mt-11 text-[24px] font-bold">
                        Книги
                      </h3>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="#"
                      className="praduct-category block text-center w-[246px] bg-[#F4F7F8] p-10 px-[66px] rounded-[5px]"
                    >
                      <img
                        className="mx-auto"
                        width={133}
                        height={130}
                        src={praductImg}
                        alt="img"
                      />
                      <h3 className="praduct-neme mt-11 text-[24px] font-bold">
                        Книги
                      </h3>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="#"
                      className="praduct-category block text-center w-[246px] bg-[#F4F7F8] p-10 px-[66px] rounded-[5px]"
                    >
                      <img
                        className="mx-auto"
                        width={133}
                        height={130}
                        src={praductImg}
                        alt="img"
                      />
                      <h3 className="praduct-neme mt-11 text-[24px] font-bold">
                        Книги
                      </h3>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href="#"
                      className="praduct-category block text-center w-[246px] bg-[#F4F7F8] p-10 px-[66px] rounded-[5px]"
                    >
                      <img
                        className="mx-auto"
                        width={133}
                        height={130}
                        src={praductImg}
                        alt="img"
                      />
                      <h3 className="praduct-neme mt-11 text-[24px] font-bold">
                        Книги
                      </h3>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
          <section className="praduct-recommudent">
            <div className="container">
              <div className="recommudet-inner relative mt-10">
                <div className="recommudetion-praduct-title flex justify-between items-center mb-5">
                  <h3 className="recommudetion-text text-[24px] font-bold">Рекомендации для вас</h3>
                  <div className="navigetion-recommudet">
                    <span className="swiper-prev-button-rec btn-countrol-prev"></span>
                    <span className="swiper-next-button-rec btn-countrol-next"></span>
                  </div>
                </div>
                <hr />
                <Swiper
                    className="mt-10 py-4"
                    modules={[Navigation, A11y]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation ={{
                        enabled: true,
                        prevEl: '.swiper-prev-button-rec',
                        nextEl: '.swiper-next-button-rec'
                    }}
                    >
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>
                    <SwiperSlide><Card/></SwiperSlide>                
                </Swiper>
              </div>
            </div>
          </section>
          <section className="brends">
            <div className="container">
                <div className="brends-inner mt-10 relative">
                    <div className=" flex justify-between items-center mb-5"> 
                        <h3 className="text-[22px] font-bold">Бренды</h3>
                        <div className="control">
                            <span className="swiper-prev-brend btn-countrol-prev"></span>
                            <span className="swiper-next-brend btn-countrol-next"></span>
                        </div>
                    </div>
                    <hr />
                    <Swiper
                    className="mt-10"
                        modules={[Navigation, A11y]}
                        spaceBetween={104}
                        slidesPerView={7}
                        navigation = {{
                            enabled: true,
                            prevEl: ".swiper-prev-brend",
                            nextEl: ".swiper-next-brend"
                        }}
                        >
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#" className="brend-link">
                                <img src={brendImg} alt="brend-img" />
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
          </section>
    </div>
      <Footer/>
    </>
  );
}

export default Main;
