import Card from "../components/Card"
import Footer from "../components/Footer"
import Header from "../components/Header"


function Favorites() {
  return (
    <>
     <Header/>
      <div className="favorites">
        <div className="container">
            <div className="favorites_inner mt-5 flex flex-wrap items-start gap-6">
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
       <Footer/>
    </>
  )
}

export default Favorites