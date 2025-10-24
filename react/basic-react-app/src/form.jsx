import {useState} from "react";

export default function form () {
    let [formData, setFormData]=useState({
        fullName: "",
        username: "",
        password:""
    });

    let handleInputChange = (event) => {
        setFormData((currData)=>{
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit=((event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            username: "",
            password: ""
        });
    });

    return (
        <form onSubmit={handleSubmit}>
            <h3>PLIJJ FILL UP THE FORM</h3>
            <label htmlFor="fullname">Full Name </label>
            <input
            placeholder="enter full name" 
            type="text" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="fullname"
            name="fullName"
            />
            <br></br> 
            <br></br>
            <label htmlFor="username">Username </label>
            <input 
            placeholder="enter username" 
            type="text" 
            value={formData.username} 
            onChange={handleInputChange}
            id="username"
            name="username"
            />
            <br></br> 
            <br></br>
            <label htmlFor="password">Password </label>
            <input 
            placeholder="enter password" 
            type="password" 
            value={formData.password} 
            onChange={handleInputChange}
            id="password"
            name="password"
            />
            <br></br>
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
    );
}