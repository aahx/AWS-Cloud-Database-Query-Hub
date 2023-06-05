/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useState } from "react";

export default function StudentPatch() {
    const [studentData, setStudentData] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });
    const [studentId, setStudentId] = useState("");
    const [responseData, setResponseData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleIdChange = (e) => {
        const value = e.target.value;
        setStudentId(value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const invokeURL = "https://feuzl6d9yk.execute-api.us-west-1.amazonaws.com/test/students";
        setLoading(true);

        try {
            const updatedData = {};
            for (const key in studentData) {
                if (studentData[key] !== "") {
                    updatedData[key] = studentData[key];
                }
            }

            const response = await axios.patch(`${invokeURL}/${studentId}`, updatedData);
            setResponseData(response.data);
        } catch (error) {
            console.error(error);
            setResponseData(error.message);
        } finally {
            setLoading(false);
            setStudentData({
                first_name: "",
                last_name: "",
                email: ""
            });
            setStudentId("");
        }
    };

    return (
        <>
            <div className="crud-form">
                <h2>Student PATCH Form</h2>
                <span className="crud-det">
                    Enter (one or all) Fields To Update - ID required*
                </span>
                <form>

                    <label htmlFor="studentId">Student ID*:</label>
                    <input
                        type="text"
                        name="studentId"
                        value={studentId}
                        onChange={handleIdChange}
                        placeholder="Enter student ID"
                        required
                    /><br />

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={studentData.first_name}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                    /><br />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={studentData.last_name}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                    /><br />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={studentData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                    />

                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={!studentId || loading}
                    >
                        {loading ? "Loading..." : "Return"}
                    </button>
                </form>
            </div>

            <div className="crud-res">
                <h2>Data:</h2>
                {responseData && (
                    <div>
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </>
    );
}
