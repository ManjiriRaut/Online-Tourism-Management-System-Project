import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { FormGroup } from "@mui/material";
import {useHistory} from "react-router-dom";

export default function PackageRegistration() {
  let history = useHistory();  
  const [title, setTitle] = React.useState("");
    const [place, setPlace] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [hotel, setHotel] = React.useState("");
    const [hotelAddress, setHotelAddress] = React.useState("");
    const [dateTravel, setDateTravel] = React.useState("");
    const [climate, setClimate] = React.useState("");
    const [packageInfo, setPackageInfo] = React.useState("");
    const [additionalInfo, setAdditionalInfo] = React.useState("");
    const [cost, setCost] = React.useState(0);
  
    const axios = require('axios');

    const checkValidation=()=>{

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
           title: title,
           place: place,
           address: address,
           hotel: hotel,
           hotelAddress: hotelAddress,
           dateTravel: dateTravel,
           cost: cost,
           climate: climate,
           packageInfo: packageInfo,
           additionalInfo: additionalInfo,

       }
       const url = "http://localhost:9001/package/savepackage";
       sendToApi(formData,url);
       history.push("/dashboard");
    }
  

    const handleSubmit = (event) => {
        event.preventDefault();
        prepareAttributes()
      };
    
    const handleChange = (event) =>{
        if(event.target.name == "title"){
            setTitle(event.target.value);
            }
        if(event.target.name == "cost"){
            setCost(event.target.value);
            }
        if(event.target.name == "place"){
            setPlace(event.target.value);
            }
        if(event.target.name == "address"){
            setAddress(event.target.value);
            }
        if(event.target.name == "hotel"){
            setHotel(event.target.value);
            }
        if(event.target.name == "hotelAddress"){
            setHotelAddress(event.target.value);
            }
        if(event.target.name == "dateTravel"){
            setDateTravel(event.target.value);
            }
        if(event.target.name == "climate"){
            setClimate(event.target.value);
            }
        if(event.target.name == "packageInfo"){
            setPackageInfo(event.target.value);
            }
        if(event.target.name == "additionalInfo"){
            setAdditionalInfo(event.target.value);
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
                    name="title"
                    label="Package Title"
                    variant="standard"
                    required = {true}

                    onChange={handleChange}
                    value={title}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="place"
                    label="Place"
                    variant="standard"
                    required = {true}

                    onChange={handleChange}
                    value={place}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="address"
                    label="Address"
                    variant="standard"
                    required = {true}

                    onChange={handleChange}
                    value={address}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="hotel"
                    label="Hotel"
                    variant="standard"
                    required = {true}

                    onChange={handleChange}
                    value={hotel}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="hotelAddress"
                    label="Hotel Address"
                    variant="standard"
                    required = {true}

                    onChange={handleChange}
                    value={hotelAddress}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="dateTravel"
                    variant="standard"
                    type = "date"
                    required = {true}
                    onChange={handleChange}
                    value={dateTravel}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="cost"
                    label="Cost"
                    variant="standard"
                    required = {true}
                    onChange={handleChange}
                    value={cost}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="climate"
                    label="Climate"
                    variant="standard"
                    required = {true}
                    onChange={handleChange}
                    value={climate}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="packageInfo"
                    label="Package Information"
                    variant="standard"

                    onChange={handleChange}
                    value={packageInfo}
                  />
                </Box>
                <br></br>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="input-with-sx"
                    name="additionalInfo"
                    label="Additional Information"
                    variant="standard"

                   
                    onChange={handleChange}
                    value={additionalInfo}
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
                  Add Package
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </div>
      );    

  


}