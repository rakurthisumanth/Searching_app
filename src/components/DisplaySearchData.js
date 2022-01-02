import React ,{useState}from 'react'
import Data from './Data.json'
import TextField from '@mui/material/TextField';

function DisplaySearchData() {
    const [names,setnames]=useState()
    console.log(names)
    return (
        <div>
            <center>
              <h1 style={{"color":"red"}}>Enter Your City</h1>
              <TextField  label="Cityes" id="fullWidth" value={names} onChange={(e)=>setnames(e.target.value)}  />
             
              {/* {
                  Data.filter(res=>res.city.toLowerCase().includes(names.toLowerCase())).map(res=>{
                      return(
                          <div style={{"border":"1px solid black","padding":"10 px","margin":"50px"}}>{res.city}</div>
                      
                      )   
                  })
              } */}
            {
                Data.filter(info=>info.city.toLowerCase().includes(names.toLowerCase())).map(res=>{
                    return(
                        <div style={{"border":"1px solid black","padding":"10px","margin":"50px","color":'blue'}}>
                            {res.city}
                        </div>
                    )
                })
            }
            </center>
        </div>
    )
}

export default DisplaySearchData
