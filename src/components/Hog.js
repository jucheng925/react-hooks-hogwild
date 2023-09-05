import React, {useState} from "react";
function Hog({hog}) {
    const [isHidden, setIsHidden] = useState(true)
    const [isShy, setIsShy] = useState(false)
    function showDetails(){
        setIsHidden(!isHidden)
    }
    return (
        <div className="ui eight wide column">
            <button style={{marginBottom : "5px"}} onClick={() => setIsShy(!isShy)}>Hide Pig!</button>
            {isShy ? null : 
            <li className="pigTile" onClick={showDetails}>
                <h3>{hog.name}</h3>
                <img className="ui fluid image" src={hog.image} alt={hog.name}/>
                {isHidden ? null : <p>Specialty: {hog.specialty} <br/> Weight: {hog.weight} <br/> Highest Medal Achieved: {hog["highest medal achieved"]}</p>}
            </li>
            }
        </div>
    )
}

export default Hog