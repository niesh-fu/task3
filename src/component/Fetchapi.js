import React, { useState, useEffect } from "react";

function Fetchapi() {
  const [data, setData] = useState([]);
  //const [inputs, setInputs] = useState({});

  //Get Method
  const apiGet = () => {
    fetch(" https://api.github.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
    }
    
 useEffect(() => {
      apiGet();
    }, []);
    return (
        <div>
          myapi <br/>
          <button onClick={apiGet}>FetchAPI</button>
          <br/>
          <pre>{JSON.stringify(data,null,2)}</pre>
          <br/>
          {/* <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.userId},{item.title}
            </li>
          ))}
        </ul>
      </div> */}
        </div>
        
      );
    }
    export default Fetchapi;