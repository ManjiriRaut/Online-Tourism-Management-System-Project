import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Button from "@mui/material/Button";
import { FormGroup } from "@mui/material";
import {useHistory} from "react-router-dom";
import './GlobalVariables';



export default function LoginPage() {
  let history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const axios = require('axios');

  const checkValidation=(receivedData)=>{
      if (receivedData.valid ==true){
      global.userId = receivedData.userId
      if (receivedData.role=="admin"){
          global.isadmin=true;
      }
      else{
        global.isadmin=false;
      }
      history.push("/dashboard")
      }
      else{
          alert("Invalid Credentials");
      }

  }

  const sendToApi= async (formData,url)=>{
    try {
    const response = await axios.post(url,formData)
    const receivedData = await response.data;

    checkValidation(receivedData)
    }
    catch(error){
        console.log("Something went Wrong")
    }
  }
  const prepareAttributes=()=>{
     const formData = {
         username: username,
         password: password,
     }
     const url = "http://localhost:9000/login/getLogin";
     sendToApi(formData,url);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    prepareAttributes()
  };

  const handleChange = (event) =>{
      if(event.target.name == "username"){
          setUsername(event.target.value);
          global.username=event.target.value
          }
      else{
         setPassword(event.target.value);
      }   
  }
  return (
    <div>
       <h2>Online Tourism Management System</h2>
      <form >
        <FormControl variant="standard">
          <FormGroup>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                name="username"
                label="Username"
                variant="standard"
                onChange={handleChange}
                value={username}
              />
            </Box>
            <br></br>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="password"
                name="password"
                variant="standard"
                type="password"
                onChange={handleChange}
                value={password}
              />
            </Box><br/>
            <Button
              variant="contained"
              type="submit"
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              login
            </Button><br/>
            <Button
              variant="contained"
              type="submit"
              onClick={(event) => {
                history.push('/userregistration');
              }}
            >
              Register
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
