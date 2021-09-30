import React from "react";
import './GlobalVariables'
import PackageTable from './PackageTable'
import {useHistory} from "react-router-dom";

const axios = require('axios');


export function Dashboard(){
    
    let history = useHistory();
    const [receivedDataRes, setReceivedDataRes] = React.useState([]);
    const sendToApi= async ()=>{
        try {
        const url = "http://localhost:9001/package";
        const response = await axios.get(url)
        const receivedData = await response.data;
        // setReceivedDataRes(receivedData);
        return receivedData;
        }
        catch(error){
            console.log("Something went Wrong")
        }
      }
     
     
    const handleClick=()=>{
        global.isadmin=false;
        global.userId = "";
        global.username="";
        history.push("/")
    
    }
return(
    <div > 
        {global.isadmin ? <div>
        <button onClick={()=>{history.push('/userregistration');}}>Add User</button><br/><br/>
       <button onClick={()=>{history.push('/packageregistration');}}>Add Package</button>
        </div> : ""}
        
    <br/><button onClick={()=>{handleClick()}}>logout</button>
        <PackageTable receivedDataRes={sendToApi()} />
        </div>
)
}
