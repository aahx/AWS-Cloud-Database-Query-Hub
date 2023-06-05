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
            <div>
                <h2>Student PATCH Form</h2>
                <form>
                    <h3>Enter Field To Update</h3>
                    <h5>One or All</h5>

                    <label htmlFor="studentId">StudentId:</label>
                    <h6>* required</h6>
                    <input
                        type="text"
                        name="studentId"
                        value={studentId}
                        onChange={handleIdChange}
                        placeholder="Enter student ID"
                    />

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={studentData.first_name}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={studentData.last_name}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                    />

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
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </form>
            </div>

            <div>
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
