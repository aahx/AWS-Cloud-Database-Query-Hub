/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import StudentGet from '../../components/RightPanel/StudentCrud/StudentGet';
import StudentPost from '../../components/RightPanel/StudentCrud/StudentPost';
import StudentPatch from '../../components/RightPanel/StudentCrud/StudentPatch';
import StudentDelete from '../../components/RightPanel/StudentCrud/StudentDelete';

export default function RightPanel() {
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedCRUD, setSelectedCRUD] = useState("");

  const handleTableChange = (event) => {
    setSelectedTable(event.target.value);
  };

  const handleCRUDChange = (event) => {
    setSelectedCRUD(event.target.value);
  };

  const renderForm = () => {
    if (selectedTable === "student") {
      if (selectedCRUD === "GET") {
        return <StudentGet />
      }
      else if (selectedCRUD === "POST") {
        return <StudentPost />
      }
      else if (selectedCRUD === "PATCH") {
        return <StudentPatch />
      }
      else if (selectedCRUD === "DELETE") {
        return <StudentDelete />
      }
      else {
        return null;
      }
    }
    return null;
  }

  return (
    <section id="right-panel">
      <div>
        <h1> RightPanel.jsx</h1>
        <select id="table" value={selectedTable} onChange={(handleTableChange)}>
          <option value="">Select A Table</option>
          <option value="student">Student</option>
        </select>
      </div>
      <div>
        <select id="crud" value={selectedCRUD} onChange={handleCRUDChange}>
          <option value="">Select Form</option>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div>
        {renderForm()}
      </div>
    </section>
  );
}