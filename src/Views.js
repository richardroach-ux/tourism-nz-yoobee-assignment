import React, { setState } from "react";
import {accomodationOptions, foodOptions} from "./Options";
import TypeIt from "typeit-react";
import PopulateCard from "./Card";

class AccOptions extends React.Component { // Filters array of Card components to be displayed according to user input.
  constructor(props) {
    super(props);
    this.state = {
      nights: 0,
      people: 0,
    }
  }
  render() {
    let numberNights = this.props.nights; // Instantiates variables based on properties (props) passed into it when called.
    let numberPeople = this.props.people;
    const filteredOptions = accomodationOptions.filter(option => { // Filter method uses arrow function to return accommodation options that fit user input
      return option.minNights <= numberNights && option.maxNights >= numberNights && option.minOcc <= numberPeople && option.maxOcc >= numberPeople;
    }) // The algorithm above is derived from the information given by Yoobee on the Summative page.
    return filteredOptions.map((PopulateCard)) // Calls the populate card method imported from the Card module.
  }
}
class FoodOptions extends React.Component { // Same as above, but for the food options; no restriction specified in assessment so no filtering applied.
  render() {
    return foodOptions.map(PopulateCard)
  }
}
class Views extends React.Component { 
  constructor(props){
    super(props);
    this.state = {  // Instantiates component states, left blank initially.
      customerName: "", // Self-explanatory
      startDate: "", // Due to Reacts 'setState' method being asychronous, the 'number of days' value needed to be derived from states rather than being it's own state.
      endDate: "",
      customerNights: 1,
      customerLocation: "", // Made into a state so it can be displayed in summary widget.
      customerNumber: 0, // Refers to number of
      viewNumber: 1, // Ensures page starts at the beginning.
    }
    
    // let filteredOptions = FilterCard(accomodationOptions, this.state.customerNights, this.state.customerNumber);
    // let optionsToArray = Array.from.filteredOptions;
    // let shownOptions = optionsToArray.map(PopulateCard);             Past attempts at 
    // this.changeClickForward = this.changeClickForward.bind(this)
    // this.changeClickBackward = this.changeClickBackward.bind(this)
    
  }
  changeName = (e) => {  // Event handler for the user's name input
    let name = e.target.value;
    name = name.split(" ")[0]; // Allows the first name to be derived from input and displayed in a later greeting.
    if (name.length > 2) { // Disallows single-character inputs, form of verification.
    this.setState({customerName: name});
    }
    else this.setState({customerName: ""}) // Sets name state to blank if conditions are not met.
  }
  changeViewForward = () => { // Function called when 'continue' button is pressed, allowing different web pages (technically, 'views') to be interacted with.
    let stateNumber = this.state.viewNumber + 1 // Function called when progressing through app.
    this.setState({viewNumber: stateNumber});
  }
  changeViewBackward = () => {
    let stateNumber = this.state.viewNumber - 1 // Function called when going back to prior pages.
    this.setState({viewNumber: stateNumber});
  }
  changeLocation = (e) => {
    let location = e.target.value;  // Takes the location input and sets it as the location state.
    this.setState({customerLocation: location})
  }
  changeStartDate = (e) => {
    let startdate = e.target.value;   // Takes the starting date input, sets it to the appropriate state.
    startdate = Date.parse(startdate) // Takes input, formats it as a date (milliseconds since 1/1/1970).
    startdate = startdate / (1000*60*60*24) // Takes milliseconds value, parses it into # of days since 1/1/1970.
    this.setState({startDate: startdate}) // Sets this value as the state.
    let rawDate = this.state.endDate - this.state.startDate // Takes both states and computes the number of days between them.
    this.setState({customerNights: rawDate}, this.setState({customerNights: rawDate}))  // Sets the appropriate state from this result.
  }
  changeEndDate = (e) => {
    let enddate = e.target.value;   // Takes the ending date input, sets it to the appropriate state.
    enddate = Date.parse(enddate)   // Same process as above
    enddate = enddate / (1000*60*60*24)
    this.setState({endDate: enddate})
    let rawDate = this.state.endDate - this.state.startDate
    this.setState({customerNights: rawDate}, this.setState({customerNights: rawDate}))
    
  }
  changeNumber = (e) => {
    let customernumber = e.target.value;  // Integer values were not allowed to be used as the 'value' attribute in JSX input elements below.
    if (customernumber === "1") {         // This function changes string values to integers, enabling later computational logic.
      customernumber = 1
    }
    else if (customernumber === "2") {    // Would not have done it this way if more values needed to be converted.
      customernumber = 2
    }
    else if (customernumber === "3") {
      customernumber = 3
    }
    else {customernumber = 4}
    this.setState({customerNumber: customernumber}) // Sets result as the # of people in travel party state.
  }

  render() {  // Render function which displays the JSX elements.
    let viewNumber = this.state.viewNumber;
    let view;
    let numberOfDays = this.state.endDate - this.state.startDate;
    if (numberOfDays === 0) {
      numberOfDays = ""
    }
    if (numberOfDays > 99) {
      numberOfDays = ""
    }
    if (viewNumber === 1) {
      // View 1 - Welcome page
      view = <div className="view-container">
          <div className="interface-wrapper">
            <div className="title-container">
            Welcome to Aotearoa!
            </div>
            <div className="subtitle-container">
            <TypeIt // Inserts an instance of the TypeIt library to render a typewriter-effect subtitle displaying different travel options.
            options={{
              speed: 80, // Slows typing speed slightly
              loop: true // Ensures sequence loops continuously
            }}
              getBeforeInit={(instance) => {
              instance
                  .type("Travel to Auckland!")
                  .pause(2000)
                  .delete(9)
                  .pause(400)
                  .type("Wellington!")
                  .pause(2000)
                  .delete(11)
                  .pause(400)
                  .type("Christchurch!")
                  .pause(2000)
                  .delete(13)
                  .pause(400)
                  .type("Tauranga!")
                  .pause(2000)
                  .delete(9)
                  .pause(400)
                  .type("Queenstown!")
                  .pause(2000)
                  .delete(21)
                  return instance
                }}
            />
            </div> 
            {/* JSX of the progress button, calling the above function. */}
              <button className="forward-button cta-container" onClick={this.changeViewForward}> 
                <p>LET'S GET STARTED</p>
                <img src="./images/progressarrow.png" alt="Call-to-action arrow"/>
              </button>
          </div>
        </div>
        return view
    }
    else if (viewNumber === 2) {
      // View 2 - Details Page
      view = <div className="view-container">
        <div className="interface-wrapper">
        {/* Renders a breadcrumb trail element on screen, showing overall progress through the app. */}
            <div className="breadcrumb-container"> 
            {/* Breadcrumbs are annotated with the title of the page in both English and Te Reo */}
              <div className="crumb"><div></div><h4>Taipitopito Details</h4></div> 
              <div className="line"></div>
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"></div>
            </div>
            <div className="title-container"> 
              Please input your details!
            </div>
            <div className="subtitle-container static">
              This will help us recommend you the best accommodation.
            </div>
            {/* Displays the summary widget, showing the user what they are inputting in a natural-language format  */}
            {/* Displays error messages if inappropriate inputs are made, or if they are outside the range of what the app can offer. */}
            <div className="summary-tracker interface">
              <h2>Hi {this.state.customerName}!</h2>
              <h4><span>Here's your Summary:</span></h4>
              {/* Ternary operators are used to verify inputs, displaying error messages if true. */}
              <h4>{this.state.customerLocation === "" ? null : `You are staying in ${this.state.customerLocation}`}</h4>
              <h4 style={numberOfDays > 15? {color: "red"} : numberOfDays < 0 ? {color: "red"} : {color: "black"}}>{numberOfDays < 0 ? "You can't start your holiday after you've 'finished' it..." : numberOfDays === "" ? null : numberOfDays === 1 ? `for one day,` : numberOfDays > 15 ? `We don't have any options for accommodation longer than 15 days, please choose a shorter duration.` : `for ${numberOfDays} days,`}</h4>
              <h4>{this.state.customerNumber === 0 ? null : this.state.customerNumber === 1 ? `by yourself.` : `with ${this.state.customerNumber} people.`}</h4>
            </div>
            <div className="formContainer">
            {/* This is the container for the input forms */}
            {/* Each input has an event handler attached to call a function (defined above) when invoked. */}
              <input className="details fullName" placeholder="Please enter your full name." onChange={this.changeName}/> 
              <input type="date" className="details startDate" onChange={this.changeStartDate}/>
              <input type="date" className="details endDate" onChange={this.changeEndDate}/>
              <p className="dateWarning">Please select your start and end dates for your trip. <span>Please note: our current options only allow for a 15-night trip at max.</span></p>
              <select className="details location" onChange={this.changeLocation}>
              {/* Displays a placholder value when input form is loaded. */}
                  <option value="" disabled={true} selected>Please select where you will be staying</option>
                  <option value="Auckland" >Auckland</option>
                  <option value="Wellington" >Wellington</option>
                  <option value="Christchurch" >Christchurch</option>
                  <option value="Tauranga" >Tauranga</option>
                  <option value="Queenstown" >Queenstown</option>
              </select>
              <select className="details numberOfPeople" onChange={this.changeNumber}>
              {/* Displays a placholder value when input form is loaded. */}
                  <option value="" disabled={true} selected>How many people are you travelling with?</option>
                  <option value="1" >Just me!</option>
                  <option value="2" >One other</option>
                  <option value="3" >Two others</option>
                  <option value="4" >Three others</option>
              </select>
            </div>
            <div className="cta-container">
            {/* As there is a previous page to navigate to, the back button is brought in to allow user navigation */}
            {/* Calls a similar, but opposite function to the progress button, decrementing the view state, causing the previous page to be rendered */}
              <button className="back-button" onClick={this.changeViewBackward}> 
                <img src="./images/regressarrow.png" alt="Call-to-action arrow"/>
                <p>BACK</p>
              </button>
              <button className="forward-button with-back" onClick={this.changeViewForward}>
                <p>CONTINUE</p>
                <img src="./images/progressarrow.png" alt="Call-to-action arrow"/>
              </button>
            </div>
          </div>
      </div>;
      return view
    }
    else if (viewNumber === 3) {
      // View 3 - Accommodation Options displayed
      view = <div className="view-container">
        <div className="interface-wrapper">
        <div className="breadcrumb-container">
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"><div></div><h4>Tāwharau Accommodation</h4></div>
              <div className="line"></div>
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"></div>
            </div>
            <div className="title-container">
              Here are your options!
            </div>
            <div className="subtitle-container static"> 
            {/* Reminds user that their input filters what options they can choose from. */}
              Our accommodation options rely on the details you have given us.
            </div>
            <div className="summary-tracker interface">
            {/* Same summary widget as before is rendered again in this, and subsequent pages. */}
            <h2>Hi {this.state.customerName}!</h2>
              <h4><span>Here's your Summary:</span></h4>
              <h4>{this.state.customerLocation === "" ? null : `You are staying in ${this.state.customerLocation}`}</h4>
              <h4>{numberOfDays < 0 ? "You can't start your holiday after you've 'finished' it..." : numberOfDays === "" ? null : numberOfDays === 1 ? `for one day,` : numberOfDays > 15 ? `We don't have any options for accommodation longer than 15 days, please choose a shorter duration.` : `for ${numberOfDays} days,`}</h4>
              <h4>{this.state.customerNumber === 0 ? null : this.state.customerNumber === 1 ? `by yourself.` : `with ${this.state.customerNumber} people.`}</h4>
            </div>
            <div className="card-container">
            {/* Calls the Card array object defined at the top of this document.*/}
            {/* States are passed and then computed (to circumvent React's asynchronous approach to rendering) to derive the number of days a user will be travelling.*/}
            {/* The number of people travelling is also passed in. */}
              <AccOptions nights={this.state.endDate - this.state.startDate} people={this.state.customerNumber}/>
            </div>
            <div className="cta-container">
              <button className="back-button" onClick={this.changeViewBackward}>
                <img src="./images/regressarrow.png" alt="Call-to-action arrow"/>
                <p>BACK</p>
              </button>
              <button className="forward-button with-back" onClick={this.changeViewForward}>
                <p>CONTINUE</p>
                <img src="./images/progressarrow.png" alt="Call-to-action arrow"/>
              </button>
            </div>
          </div>
      </div>;
      return view
    }
    else if (viewNumber === 4) {
      // View 4 - Food Options
      view = <div className="view-container">
        <div className="interface-wrapper">
        <div className="breadcrumb-container">
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"><div></div><h4>Kai Food</h4></div>
              <div className="line"></div>
              <div className="crumb"></div>
            </div>
            <div className="title-container">
              Want some kai?
            </div>
            <div className="subtitle-container static">
              You can't holiday on an empty puku!
            </div>
            <div className="summary-tracker interface">
            <h2>Hi {this.state.customerName}!</h2>
              <h4><span>Here's your Summary:</span></h4>
              <h4>{this.state.customerLocation === "" ? null : `You are staying in ${this.state.customerLocation}`}</h4>
              <h4>{numberOfDays < 0 ? "You can't start your holiday after you've 'finished' it..." : numberOfDays === "" ? null : numberOfDays === 1 ? `for one day,` : numberOfDays > 15 ? `We don't have any options for accommodation longer than 15 days, please choose a shorter duration.` : `for ${numberOfDays} days,`}</h4>
              <h4>{this.state.customerNumber === 0 ? null : this.state.customerNumber === 1 ? `by yourself.` : `with ${this.state.customerNumber} people.`}</h4>
            </div>
            <div className="card-container">
            {/* As well as the accommodation options element above, accessing the inner properties was outside of my abilities */}
            {/* The plan was to have the user be able to select which accommodation and food options they wanted, but I didn't know how to allow for this. */}
            {/* The summary widget would have been updated to reflect these choices, and their cost computed and displayed. */}
              <FoodOptions />
            </div>
            <div className="cta-container">
              <button className="back-button" onClick={this.changeViewBackward}>
                <img src="./images/regressarrow.png" alt="Call-to-action arrow"/>
                <p>BACK</p>
              </button>
              <button className="forward-button with-back" onClick={this.changeViewForward}>
                <p>FINISH UP</p>
                <img src="./images/progressarrow.png" alt="Call-to-action arrow"/>
              </button>
            </div>
          </div>
      </div>;
      return view
    }
    else if (viewNumber === 5) {
      // Final view - 5 - Thanks / Exit screen
      view = <div className="view-container">
        <div className="interface-wrapper">
        <div className="breadcrumb-container">
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"></div>
              <div className="line"></div>
              <div className="crumb"><div></div><h4>Matū Summary</h4></div>
            </div>
          <div className="title-container"> 
          {/* Takes customers name state and thanks them for using the app */}
              Thanks {this.state.customerName}!
            </div>
            <div className="subtitle-container static">
              Hope you have a great trip!
            </div>
            <div className="summary-tracker interface last-page">
            {/* Summary widget is expanded to allow for a better view of the booking details. */}
            <h2>Hi {this.state.customerName}!</h2>
              <h4><span>Here's your Summary:</span></h4>
              <h4>{this.state.customerLocation === "" ? null : `You are staying in ${this.state.customerLocation}`}</h4>
              <h4>{numberOfDays < 0 ? "You can't start your holiday after you've 'finished' it..." : numberOfDays === "" ? null : numberOfDays === 1 ? `for one day,` : numberOfDays > 15 ? `We don't have any options for accommodation longer than 15 days, please choose a shorter duration.` : `for ${numberOfDays} days,`}</h4>
              <h4>{this.state.customerNumber === 0 ? null : this.state.customerNumber === 1 ? `by yourself.` : `with ${this.state.customerNumber} people.`}</h4>
            </div>
          <div className="cta-container">
              <button className="back-button at-end" onClick={this.changeViewBackward}>
                <img src="./images/regressarrow.png" alt="Call-to-action arrow"/>
                <p>BACK</p>
              </button>
            </div>
          </div>
          </div>;
      return view
    }
    return view;
};
}
// Exports the View component to be rendered by App.js
export default Views;