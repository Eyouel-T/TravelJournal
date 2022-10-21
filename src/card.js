import fugi from "./Rectangle 77.png"
import lalibela from "./lalibela.jpg"
import location from "./Path.png"
export default function Card(props){
    return(
        <div className="card">
            <img src={props.card.imageUrl}/>
            <div className="details">
                <img className="cardImage" src={location}/>
                <img src={location} className="path"/>
                <h3>Japan</h3>
                <h1>{props.card.title}</h1>
                <p>{props.card.startDate} -  {props.card.endDate}</p>
                <p> {props.card.description}
                </p>
            </div>

        </div>
    )
}