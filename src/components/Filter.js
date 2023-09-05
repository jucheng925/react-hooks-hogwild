import React from 'react'

function Filter({handleFilter, handleClick}) {
  return (
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
  )
}


export default Filter