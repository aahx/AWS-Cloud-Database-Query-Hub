/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import { useState, useEffect } from 'react';


export default function LeftPanel() {
  const [selectedDatabase, setSelectedDatabase] = useState(''); // for dropdown
  const [loading, setLoading] = useState(false); // loading / pending state
  const [data, setData] = useState(null); // data

  // Once you select a db from dropdown, handlDBChange -> setSDB
  const handleDatabaseChange = (event) => {
    setSelectedDatabase(event.target.value);
  };

  const handleLoadClick = async () => {
    const invokeURL = "https://feuzl6d9yk.execute-api.us-west-1.amazonaws.com/test";

    // Base
    if (!selectedDatabase) {
      return;
    }

    setLoading(true); // while Loading = true, button to fetch is disabled

    try {
      const response = await axios.get(`${invokeURL}/${selectedDatabase}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
      setData(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="left-panel">
      <div className="select-form">
        <h1> Database </h1>
        <select value={selectedDatabase} onChange={handleDatabaseChange}>
          <option value="">Select a database</option>
          <option value="health">API Health Check</option>
          <option value="students">Students</option>
        </select>
        <button onClick={handleLoadClick} disabled={!selectedDatabase || loading}>
          {loading ? 'Loading...' : 'Load'}
        </button>
      </div>

      <div className="db-data">
        <h2>Data:</h2>
        {data && (
          <div id="db-data-div">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </section>
  );
}