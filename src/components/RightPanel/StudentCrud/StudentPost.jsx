/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useState } from "react";

export default function StudentPost() {
    const [studentData, setStudentData] = useState({
        "first_name": "",
        "last_name": "",
        "email": ""
    });
    const [responseData, setResponseData] = useState({});
    const [loading, setLoading] = useState(false);

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
            const response = await axios.post(invokeURL, studentData);
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
        }
    };


    return (
        <>
            <div>
                <h2> Student POST Form</h2>
                <form>
                    <h3>Enter Student Info</h3>
                    <h5>All inputs required</h5>

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={studentData.first_name}
                        onChange={handleInputChange}
                        placeholder="Michael"
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={studentData.last_name}
                        onChange={handleInputChange}
                        placeholder="Kim"
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={studentData.email}
                        onChange={handleInputChange}
                        placeholder="michael.dev.kim@gmail.com"
                        required
                    />

                    <button type="button" onClick={handleSubmit}
                        disabled={!studentData.first_name || !studentData.last_name || !studentData.email || loading}
                    >
                        {loading ? 'Loading...' : 'Return'}
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
    )
}