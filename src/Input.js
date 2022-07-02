import React from "react";

function InputForm() {
    return (
        <div className="formContainer">
            <input className="details fullName" placeholder="Please enter your full name."/>
            <input type="date" className="details startDate" placeholder=""/>
            <input type="date" className="details endDate" placeholder=""/>
            <p className="dateWarning">Please select your start and end dates for your trip. <span>Please note: our current options only allow for a 15-night trip at max.</span></p>
            <select className="details location">
                <option value="" disabled selected hidden>Please select where you are travelling to.</option>
                <option value="Auckland" >Auckland</option>
                <option value="Wellington" >Wellington</option>
                <option value="Christchurch" >Christchurch</option>
                <option value="Tauranga" >Tauranga</option>
                <option value="Queenstown" >Queenstown</option>
            </select>
            <select className="details numberOfPeople">
                <option value="" disabled selected hidden>How many people in your party?</option>
                <option value="one" >Just me!</option>
                <option value="two" >One other</option>
                <option value="three" >Two others</option>
                <option value="four" >Three others</option>
            </select>
        </div>
    )
}

export default InputForm;