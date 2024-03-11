import React, { useEffect, useState } from "react";
import Header from "./Header";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Traindetails from "./Traindetails"

  


const App =()=>{
  const [info, setinfo] = useState([]);

    const loadData = async () => {
        try {
            let response = await fetch("http://localhost:5000/api/displayData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            response = await response.json();


            if (Array.isArray(response) && response.length > 0) {
                setinfo(response);
            } else {
                console.error("Invalid response format:", response);
            }
        } catch (error) {
            console.error("Error fetching data:",error)
        }
      }

      useEffect(()=>{
        loadData()
      },[])
    
    
    return(
        <>
        <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Header/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>


      </Routes>
    </div>
   </Router>
   { info.map((data) => {
                 return (
                    <>
                        <div className='row mb-3 d-flex'>
                            <div className='col-12 col-md-6 col-lg-3'>
                            <Traindetails 
                            trainNum={data.train_num}
                            trainName={data.name}
                            mon= {data.data.days.Mon}
                            tue={data.data.days.Tue}
                            wed={data.data.days.Wed}
                            thu={data.data.days.Thu}
                            fri={data.data.days.Fri}
                            sat={data.data.days.Sat}
                            sun={data.data.days.Sun}


                                />
                            </div>

                        </div>

                    </>
                );

            })}
     
       
        
        
        
        </>
    )
}
export default App