import { useState } from "react";

function Form(){
    const [formdata, setFormData] =  useState({
        name:"",
        email:""
    });

    const [SubmittedData, SetSubmitData] = useState({
        name:"",
        email:""
    }); 

    const handleChange = (e)=> {
        const {name, value} =  e.target;
        setFormData((predata)=>({
            ...predata,
            [name]:value
        }))

    }

    const HandleSubmit = (event)=> {
        event.preventDefault();
        SetSubmitData(formdata);
    }


    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-green-200 bg-gradient-to-r from-teal-400 to-yellow-200">
                <div className="w-full p-10 max-w-md bg-white rounded-lg shadow-lg  bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                    <h1 className="text-2xl font-bold shadow-sm text-center">Login Form</h1>

                    <form>
                        <div className="mt-6">
                            <label className="block text-lg font-bold text-gray-700">Name:</label>
                            <input onChange={handleChange} type="text" placeholder="Enter Your Name" className="mt-1 block w-full  px-3 py-2 border border-gray-300 rounded-md shadow-sm" name="name" value={formdata.name} />
                        </div>
                        <div className="mt-2">
                            <label className="block  text-lg font-bold text-gray-700 ">Email:</label>
                            <input onChange={handleChange} type="text" placeholder="Enter Your Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" name="email" value={formdata.email} />
                        </div>
                        <div className="mt-2">
                            <label className="block text-lg font-bold text-gray-700">Password:</label>
                            <input type="password" placeholder="Enter Your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                        </div>

                        <button onClick={HandleSubmit} type="submit" className="w-full bg-indigo-600 text-white p-2 mt-2 rounded-md hover:bg-pink-600 hover:text-black font-bold">Login</button>
                    </form>

                    <div>
                        <h2 className="text-center mt-5 font-semibold">User Information</h2>
                        <p className="text-gray-800">Name: {SubmittedData.name}</p>
                        <p className="text-gray-800">Email:{SubmittedData.email} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form; 