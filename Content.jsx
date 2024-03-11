import React from "react";
import logo2 from "./images/logo2.webp"
import Api from "./Api";


const Content = () => {
  console.log(Api[0].name)
  return (
    <>
    <div className="mainDiv">
      <div>
        <img className="pic1" src={logo2} alt="pic1"></img>
      </div>
      <div className="formDiv">
        
        <form action="search_results.php" method="get">
        <h2>BOOK TICKET</h2>
          <label for="departure">Departure Station:</label>
          <input className="dep" type="text" id="departure" name="departure" required /><br />

          <label for="destination">Destination Station:</label>
          <input className="To" type="text" id="destination" name="destination" required  ></input><br />

          <label for="date">Date of Travel:</label>
          <input type="date" id="date" name="date" required /><br />

          <label for="Quota">Quota:</label>
    
          <select id="Quota" name="Quota" required>
            <option value="GENERAL">GENERAL</option>
            <option value="LADIES">LADIES</option>
            <option value="LOWER BIRTH">LOWER BIRTH</option>
            <option value="PERSON WITH DISABILITY">PERSON WITH DISABILITY</option>
            <option value="DUTY PASS">DUTY PASS</option>
            <option value="TATKAL">TATKAL</option>
            <option value="PREMIUM TATKAL">PREMIUM TATKAL</option>

          </select><br />
          

          <label for="coach">COACH:d</label>
          <select id="coach" name="coach" required>
          <option value="All Classes">All Classes</option>
            <option value="Anubhuti Class(EA)">Anubhuti Class(EA)</option>
            <option value="AC First Class(1A)">AC First Class(1A)</option>
            <option value="AC 3 Tier(3AC)">AC 3 Tier(3AC)</option>
            <option value="AC 2 Tier(2AC)">AC 2 Tier(2AC)</option>
            <option value="Sleeper(SL)">Sleeper(SL)</option>
            <option value="First Class">First Class(FC)</option>

          </select><br />

          <button type="submit">Search</button>
        </form>
      </div>
    </div>  
    </>
  )
}
export default Content