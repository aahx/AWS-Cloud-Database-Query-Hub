/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useState } from "react";

export default function StudentDelete() {
    const [studentId, setStudentId] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setStudentId(e.target.value);
    };

    const fetchData = async () => {
        const invokeURL = "https://feuzl6d9yk.execute-api.us-west-1.amazonaws.com/test/students";

        setLoading(true);

        try {
            const response = await axios.delete(`${invokeURL}/${studentId}`);
            setData(response.data);
        } catch (error) {
            console.error(error);
            setData(error.message);
        } finally {
            setLoading(false);
            setStudentId("");
        }
    };

    return (
        <>
            <div className="crud-form">
                <h2> Student DELETE Form</h2>
                <span className="crud-det">
                    Deletion Permanent<br />
                    To view changes , Reload left panel
                </span>

                <form>
                    <label htmlFor="studentId">Enter Student ID:</label><br />
                    <input type="text" name="studentId" value={studentId} onChange={handleInputChange} placeholder="1" required />
                    <button type="button" onClick={fetchData} disabled={!studentId || loading}>
                        {loading ? 'Loading...' : 'Return'}
                    </button>
                </form>
            </div>

            <div className="crud-res">
                <h2>Data:</h2>
                {data && (
                    <div>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )}
            </div>

        </>
    )
}