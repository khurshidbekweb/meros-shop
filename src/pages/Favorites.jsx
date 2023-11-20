import Card from "../components/Card"


function Favorites() {
  return (
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
  )
}

export default Favorites