import React, {useState}  from "react";
import Hog from "./Hog"

function HogsList({hogs}){
    const [filterCategory, setFilterCategory] = useState("all")
    const [sortBy, setSortBy] = useState("")

    const handleFilter = (e)=>{
        setFilterCategory(e.target.value)
    }

    const handleClick =(e)=>{
        setSortBy(e.target.value)
    }

    let sortedHogs = hogs
    if (sortBy === "name") {
        sortedHogs.sort((a,b) => (a.name > b.name) ? 1: -1);
    }
    if (sortBy === "weight") {
        sortedHogs.sort((a,b) => (a.weight > b.weight) ? 1: -1);
    }

    const displayHogs = hogs.filter((hog) => {
        if (filterCategory === "not greased") return (!hog.greased)
        else if (filterCategory === "greased") return hog.greased
        return hog

    })


    const renderHogs = displayHogs.map((hog) => <Hog key={hog.name} hog={hog}/>)
    return (
        <>
            <div className="filterWrapper" >
                <label htmlFor="greased">Filter by: </label>
                <select name="greased" id="greased" onChange={handleFilter}>
                    <option value="all">All</option>
                    <option value="greased">Greased</option>
                    <option value="not greased">Not Greased</option>
                </select>
                <br/>
                <label htmlFor="sortBy">Sort By: </label>
                <button name="sortBy" value="name" onClick={handleClick}>Name</button>
                <button name="sortBy" value="weight" onClick={handleClick}>Weight</button>
            </div>

            <ul className="ui grid container">
                {renderHogs}
            </ul>
        </>
    )
}

export default HogsList