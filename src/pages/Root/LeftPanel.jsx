/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function LeftPanel() {
  const invokeURL = "https://feuzl6d9yk.execute-api.us-west-1.amazonaws.com/test";

  const [selectedDatabase, setSelectedDatabase] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleDatabaseChange = (event) => {
    setSelectedDatabase(event.target.value);
  };

  const handleLoadClick = async () => {
    if (!selectedDatabase) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(invokeURL + `/${selectedDatabase}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <h1> Left.jsx</h1>
      <select value={selectedDatabase} onChange={handleDatabaseChange}>
        <option value="">Select a database</option>
        <option value="students">Students</option>
      </select>
      <button onClick={handleLoadClick} disabled={!selectedDatabase || loading}>
        {loading ? 'Loading...' : 'Load'}
      </button>
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}