import React, {useState}  from "react";
import Hog from "./Hog"
import Filter from "./Filter"
import HogForm from "./HogForm"
import hogs from "../porkers_data";


function HogsList(){
    const [hogsArray, setHogsArray] = useState(hogs)
    const [filterCategory, setFilterCategory] = useState("all")
    const [sortBy, setSortBy] = useState("")

    const handleFilter = (e)=>{
        setFilterCategory(e.target.value)
    }

    const handleClick =(e)=>{
        setSortBy(e.target.value)
    }

   
    if (sortBy === "name") {
        hogsArray.sort((a,b) => (a.name > b.name) ? 1: -1);
    }
    if (sortBy === "weight") {
        hogsArray.sort((a,b) => (a.weight > b.weight) ? 1: -1);
    }

    const displayHogs = hogsArray.filter((hog) => {
        if (filterCategory === "not greased") return (!hog.greased)
        else if (filterCategory === "greased") return hog.greased
        return hog

    })

    const renderHogs = displayHogs.map((hog) => <Hog key={hog.name} hog={hog}/>)

    function addPig(newPig) {
        const newPigsArray = [...hogsArray, newPig]
        setHogsArray(newPigsArray)
    }

    return (
        <>
            <Filter handleClick={handleClick} handleFilter={handleFilter} />
            <HogForm addPig={addPig} />
            <ul className="ui grid container">
                {renderHogs}
            </ul>
        </>
    )
}

export default HogsList