import { Button } from "@mui/material";
import React from "react";
import KingBedIcon from '@mui/icons-material/KingBed';
import DeleteIcon from '@mui/icons-material/Delete';
import './GlobalVariables'

const axios = require('axios');



export function PackageView(props){
    const sendToApi= async (formData,url)=>{
        try {
        const response = await axios.post(url,formData)
        }
        catch(error){
            console.log("Something went Wrong")
        }
      }
      const prepareAttributes=()=>{
         const formData = {
             packageId: props.data.id,
         }
         const url = "http://localhost:9001/package/deletepackage";
         sendToApi(formData,url);
         window.location.reload();
      }
    
      const handleDelete = (event) => {
        prepareAttributes()
      };

      const handleRegister = (event) => {
        sendToApiRegister();
      };

      const sendToApiRegister= async ()=>{
        try {
        const url = "http://localhost:9001/userpackage/saveuserpackage";
        const formData = {
            packageId: props.data.id,
            userId: global.userId
        }
        const regresponse = await axios.post(url,formData)
        const registerResponse = await regresponse.data;
        if(registerResponse && registerResponse.success){
            alert("Successfully Booked Package....!!!");
        } else{
            alert("Already subscribed to this package");
        }
        
        }
        catch(error){
            console.log("Something went Wrong")
        }
      }


    return (
        // <div className="pkg-view">
        //    <span className="pkg-title"><b>{props.data.title}</b></span><br/>
        //    <span className="pkg-info">{props.data.packageInfo}</span><br/>  
        //    <span className="pkg-location">{props.data.place}</span><br/>
        //    <span className="pkg-hotel"><span><KingBedIcon /></span>{props.data.hotel}</span><br/>
        //    <span className="pkg-address">{props.data.hotelAddress}</span><br/>
        //    <span className="pkg-date">{props.data.dateTravel}</span>
        //    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="pkg-price"><b>INR {props.data.cost}</b></span><br/>
        //    <span className="pkg-register-button"><Button variant="contained" onClick={()=>{handleRegister()}}>Register</Button></span> &nbsp;
        //    <span className="delete-pkg-btn" onClick={()=>{handleDelete()}}>{global.isadmin ? <Button variant="outlined" color="error" size="small"><DeleteIcon /></Button> : ""}</span>
        // </div>
        <div className="pkg-view">
          <div className="title-and-place">
           <div className="pkg-title"><b>{props.data.title}</b></div>
           <div className="pkg-location">{props.data.place}</div>
           </div>
           <div className="title-and-place">
           <div className="pkg-info">{props.data.packageInfo}</div>
           <div className="pkg-date">{props.data.dateTravel}</div>
           
           </div>
            <div className="hotel-addr-and-register">
              <div>
           <div className="pkg-hotel">{props.data.hotel}</div>
           <div className="pkg-address">{props.data.hotelAddress}</div>
           </div>
           <div>
           <span className="pkg-price"><b>INR {props.data.cost}</b></span><br/>
           <span className="pkg-register-button"><Button variant="contained" onClick={()=>{handleRegister()}}>PackBooking</Button></span> &nbsp;
           <span className="delete-pkg-btn" onClick={()=>{handleDelete()}}>{global.isadmin ? <Button variant="outlined" color="error" size="small"><DeleteIcon /></Button> : ""}</span>
           </div>
           </div>
        </div>
    )
}