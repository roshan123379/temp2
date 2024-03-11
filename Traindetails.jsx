import React from "react";
 


const Traindetails=(props)=>{
    const{trainName,trainNum,mon,tue,wed,thu,fri,sat,sun} = props;
    
    return(
        <>
        <div className="timetable">
            <div className="trainname">
                <div className="tag">{trainName}{trainNum}</div>
                <div>Run on:{mon} {tue} {wed} {thu} {fri} {sat} {sun}</div>
                <div className="timediv">Train Schedule</div>
            </div>
            <div className="journey">
                <div><span>11:30</span> | <span>LOKMANYATILAK T</span> | <span>Sun,24 Dec</span></div>
                <div><span>____24:55____</span></div>
                <div><span>12:30</span> | <span>VARANASI JNC</span> | <span>Mon,25 Dec</span></div>
                
            </div>
            <div className="refresh">
            <div className="SL">
                <div>Sleeper (SL)</div>
                <div>176 Seat Available</div>
            </div>
            <div className="ThreeAC">
                <div>AC 3 Tier (3AC)</div>
                <div>80 Seat Available</div>
            </div>
            <div className="SecondAC">
                <div>AC 2 Tier (2AC)</div>
                <div>40 Seat Available</div>
            </div>
           
            </div>
            <div className="Schedule">
                <div className="book"><div>BOOK NOW</div></div>
                <div className="dates"><div>OTHER DATES</div></div>
            </div>
        </div>
        
        </>
    )
}
export default Traindetails