import React, { useEffect } from "react";
import MaterialTable from 'material-table';
import { PackageView } from "./PackageView";
import {useHistory} from "react-router-dom";



export default function BasicSelection(Props) {
    const [data, setData] = React.useState([]);
    
    const getData=()=>{
      Props.receivedDataRes.then((metadata)=>{
        console.log(metadata);
        setData(metadata);
      });
      
    }
    useEffect(()=>{getData()});
    

    let history = useHistory();
    return (
      <MaterialTable
        title="Package List"
        columns={[
          {  
          field: 'name',
          render: (rowData) => {
            return (
                <span ><PackageView data={rowData}/></span>
            );
        }
        }
        ]}
        data={data}      
        options={{
          selection: false,
          search:false,
          
        }}
        // onRowClick={()=>{history.push("/packageview")}}
      />
    )
  }

  