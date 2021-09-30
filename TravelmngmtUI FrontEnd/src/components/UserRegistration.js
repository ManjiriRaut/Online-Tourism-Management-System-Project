import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { FormGroup } from "@mui/material";
import {useHistory} from "react-router-dom";

export default function UserRegistration() {
  let history = useHistory();
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [lname, setLname] = React.useState("");
    const [mobileNumber, setMobileNumber] = React.useState(0);
    const [password, setPassword] = React.useState("");
    const [confirmPassword ,setConfirmPassword] = React.useState("");
    const [role, setRole] = React.useState("");
    const [isDeleted, setIsDeleted] = React.useState("");
    const [ifMatch, setifMatch] = React.useState(true);

    const axios = require('axios');

    const checkValidation=(receivedData)=>{
      if (receivedData.valid !=true){
        history.push("/");
      } else{
        alert("Username already present");
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
           email: email,
           fname: fname,
           lname: lname,
           mobileNumber: mobileNumber,
           password: password,
           role: "user",
           isDeleted: false,

       }
       const url = "http://localhost:9000/login/saveUser";
       sendToApi(formData,url);
    }
  

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password != confirmPassword){
            alert('Passwords dont match');
        } else{
          prepareAttributes()
        }
      };
    
    const handleChange = (event) =>{
        if(event.target.name == "username"){
            setUsername(event.target.value);
            }
        if(event.target.name == "email"){
            setEmail(event.target.value);
            }
        if(event.target.name == "fname"){
            setFname(event.target.value);
            }
        if(event.target.name == "lname"){
            setLname(event.target.value);
            }
        if(event.target.name == "mobileNumber"){
            setMobileNumber(event.target.value);
            }
        if(event.target.name == "password"){
            setPassword(event.target.value);
            }   
        if(event.target.name == "confirmPassword"){
            setConfirmPassword(event.target.value);
            
            }
    }
    
    return (
        <div>
          <form >
            <FormControl variant="standard">
              <FormGroup>

                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="fname"
                    label="First Name"
                    variant="standard"
                   
                    onChange={handleChange}
                    value={fname}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="lname"
                    label="Last Name"
                    variant="standard"
                   
                    onChange={handleChange}
                    value={lname}
                  />
                </Box>
                <br></br>
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
                  <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    name="email"
                    label="Email"
                    variant="standard"
                    type = "email"
                    onChange={handleChange}
                    value={email}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    name="mobileNumber"
                    label="Mobile Number"
                    variant="standard"
                    type="number"
                    onChange={handleChange}
                    value={mobileNumber}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    label="Password"
                    name="password"
                    variant="standard"
                    type="password"
                   
                    onChange={handleChange}
                    value={password}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    id="input-with-sx"
                    label="Confirm Password"
                    name="confirmPassword"
                    variant="standard"
                    type="password"
                   
                    onChange={handleChange}
                    value={confirmPassword}
                  />
                </Box>
                <br></br>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={(event) => {
                    handleSubmit(event);
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