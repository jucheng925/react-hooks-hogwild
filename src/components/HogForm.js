import React, { useState } from 'react'

// name: "Piggy smalls",
//     specialty: "Rapping",
//     greased: true,
//     weight: 5.1,
//     "highest medal achieved": "platinum",
//     image:
//       "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piggy_smalls.jpg",
//   },
function HogForm({addPig}) {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: false,
        weight: 0,
        "highest medal achieved" : "",
        image: ""
    })

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.type === "checkbox" ? e.target.checked: e.target.value;
        setFormData({ ...formData, [name]: value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        addPig(formData)
        console.log("submit")
        setFormData({
            name: "",
            specialty: "",
            greased: false,
            weight: 0,
            "highest medal achieved" : "",
            image: ""
        })
    }
  return (

    <form onSubmit={handleSubmit} style={{padding: "20px"}}>
        <label htmlFor="name">Enter Pig's Name </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>

        <label htmlFor="specialty">Enter Pig's Specialty</label>
        <input type="text" name="specialty" value={formData.specialty} onChange={handleChange}/>

        <label htmlFor="greased">Greased? </label>
        <input type="checkbox" name="greased" checked={formData.greased} onChange={handleChange}/>

        <br/>

        <label htmlFor="weight">Enter Pig's Weight </label>
        <input type="number" name="weight" value={formData.weight} onChange={handleChange}/>

        <label htmlFor="highest medal achieved">Highest medal achieved </label>
        <input type="text" name="highest medal achieved" value={formData["highest medal achieved"]} onChange={handleChange}/>

        <label htmlFor="image">Enter Pig's image </label>
        <input type="text" name="image" value={formData.image} onChange={handleChange}/>

        <br/>
        <input type="submit" value="Add New Pig"/>

    </form>
  )
}

export default HogForm