import React, {useState} from "react";
function Hogs({hog}) {
    const [isHidden, setIsHidden] = useState(true)
    function showDetails(){
        setIsHidden(!isHidden)
    }
    return (
        <div className="ui eight wide column">
            <li className="pigTile" onClick={showDetails}>
                <h3>{hog.name}</h3>
                <img className="ui fluid image" src={hog.image} alt={hog.name}/>
                {isHidden ? <></> : <p>Specialty: {hog.specialty} <br/> Weight: {hog.weight} <br/> Highest Medal Achieved: {hog["highest medal achieved"]}</p>}
            </li>
        </div>
    )
}

export default Hogs