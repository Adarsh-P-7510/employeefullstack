import axios from 'axios'
import React, { useState } from 'react'

const AddEmployee = () => {
    const [data, setdata] = useState(
        {
            "name": "",
            "id": "",
            "dpt": "",
            "salary": ""



        }
    )
        const inputhandler=(event)=>{
            setdata({...data,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
            axios.post("http://localhost:8083/Add" ,data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status ="success" ) {
                        alert("successful")
                        
                    } else {
                        alert("error")
                        
                    }

                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)

                }
            ).finally()
            console.log(data)
        }
    
return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">id</label>
                            <input type="text" className="form-control" name='id' value={data.id} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">dpt</label>
                            <input type="text" className="form-control" name='dpt' value={data.dpt} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form label">salary</label>
                            <input type="text" className="form-control"  name='salary' value={data.salary} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success " onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
)
}

export default AddEmployee