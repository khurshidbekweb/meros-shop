import Card from './Card';

// Import images
import advertsing from '../assets/images/advertsingMain.png'
import advertsingIMg1 from '../assets/images/adDeggre1.png';
import advertsingIMg2 from '../assets/images/adDeggre2.png';
import imgBootom from '../assets/images/imgBootom.png';
import adImg1 from '../assets/icons/adImg1.svg'
import adImg2 from '../assets/icons/adImg2.svg'
import adImg3 from '../assets/icons/adImg3.svg'
import aside from '../assets/images/asidePublic.png'
function Main() {
  return (
    <div className="main container">
        <section className="hero mt-10">
            <div className="hero--wrap flex gap-2">
                <div className="advertising-mainIMg">
                    <img src={advertsing} alt="advertising" />
                </div>
                <div className="last--degre">
                    <img src={advertsingIMg1} alt="als" />
                    <img src={advertsingIMg2} alt="als" className='mt-2' />
                </div>
            </div>
            <img src={imgBootom} alt="imgBootom" className='mt-2' />
            <div className="advertsing-secound-deggre mt-4">
                <h2 className='text-[24px] font-bold'>Специально для вас</h2>
                <div className="advertsing-img flex justify-between items-center mt-5">
                    <a href='#' className="adCard1 flex gap-2 p-2 py-5  items-center w-[370px] ">
                        <img src={adImg1} alt="img" />
                        <h3 className="card-info text-[30px] w-[220px] font-bold text-center text-white">Meros Мерч Бренд</h3>
                    </a>
                    <a href='#' className="adCard2 flex gap-2 p-2 py-5 w-[370px] items-center">
                        <img src={adImg2} alt="img" />
                        <h3 className="card-info text-[32px] w-[220px] font-bold text-center text-white">Meros Дисконт</h3>
                    </a>
                    <a href='#' className="adCard3 flex gap-2 p-2 py-5 items-center w-[370px] bg-[#251669] rounded-[5px]">
                        <img src={adImg3} alt="img" />
                        <h3 className="card-info text-[30px] w-[220px] font-bold text-center text-white">Лучший Подарок</h3>
                    </a>
                </div>
            </div>
        </section>
        <section className='deals mt-12'>
            <div className="deals--inner">
                <h3 className="deals-title text-[24px] font-bold">Лучшие предложения!</h3>
                <div className="deals-wrap-card mt-4 flex justify-between items-start">
                    <div className="aside--deals-publicity">
                        <img width={280} height={820} src={aside} alt="aside" />
                    </div>
                    <div className="main-praduct">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Main