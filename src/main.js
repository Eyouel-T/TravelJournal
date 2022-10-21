import Card from "./card"
import Data from "./data"
export default function Main(){
    const newData = Data.map(card=>{
        return (
            <Card card={card}/>
        )
    })
    return(
        <div className="main">
            {newData}
        </div>
    )
}