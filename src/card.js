import fugi from "./Rectangle 77.png"
import location from "./Path.png"
export default function Card(props){
    return(
        <div className="card">
            <img src={fugi}/>
            <div className="details">
                <img className="cardImage" src={location}/>
                <h3>Japan</h3>
                <h1>Mount Fugi</h1>
                <p>12 jan, 2021 -  24 jan, 2021</p>
                <p> Mount Fuji is the tallest mountain in Japan, 
                    standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan,
                    for both Japanese and foreign tourists.
                </p>
            </div>

        </div>
    )
}