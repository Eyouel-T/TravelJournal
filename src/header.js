import globe from "./Globe.png"
export default function Header(){
    return(
        <div className="header">
            <img className = "headerImage" src={globe}></img>
            <h3>my travel journal</h3>
        </div>
    )
}