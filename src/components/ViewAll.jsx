import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ViewAll = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8083/ViewAll")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                // Optional: Perform cleanup tasks if needed
            });
    }

    useEffect(() => {
        fetchData()},[]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">id</th>
                                    <th scope="col">department</th>
                                    <th scope="col">salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.id}</td>
                                        <td>{value.dpt}</td>
                                        <td>{value.salary}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAll;
