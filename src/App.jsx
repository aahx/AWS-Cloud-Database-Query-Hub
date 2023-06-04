/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState();
  const [sData, setSData] = useState([]);

  const invokeURL = "https://feuzl6d9yk.execute-api.us-west-1.amazonaws.com/test";

  async function test() {
    let res = await fetch(invokeURL + "/health");
    let jsonData = await res.json();
    console.log("********* jsonData **********");
    console.log(jsonData);

    setData(jsonData);

    console.log("********* data **********");
    console.log(data);
  }

  async function getStudents() {
    let res = await fetch(invokeURL + "/students");
    let jsonData = await res.json();
    console.log("********* jsonData **********");
    console.log(jsonData);

    setSData(jsonData);

    console.log("********* data **********");
    console.log(sData);
  }

  return (
    <>
      <h1>App.jsx</h1>
      <button onClick={test}>Test</button>
      <br />
      {data}
      <br />
      <button onClick={getStudents}>Students</button>
      <br />
      {sData.length > 1 ? (
          sData.map((student) => {
            return(
              <>
                <h3>{student.first_name}</h3>
                <h3>{student.last_name}</h3>
                <h3>{student.email}</h3>
              </>
            )
        })
      ) : (
        <p>No student data available.</p>
      )
      }
    </>
  );
}

export default App;
