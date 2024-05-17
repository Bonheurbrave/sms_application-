import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function PrefectSMSpage() {
  const location = useLocation()
  const goto = useNavigate(
  );

   const [formdata , setformdata] = useState({
    subject:"" , message:""
   })
  
  const handlesubmit = ()=>{
   axios.post('http://localhost/test/sendmessage.php', formdata)
  
  }
  const handlechange = (e)=>{
    setformdata({...formdata , [e.target.name]:e.target.value})
  }
  const handlecancel = () => {
    goto("/prefect-page");
  };
  console.log(location.state)
  return (
    <>
      <div className="block py-24">
        <div className=" w-2/3 rounded-sm mx-auto">
          <h1 className=" font-bold text-slate-400  mb-4 text-2xl capitalize">
            compose your SMS
          </h1>
          <h1 className=" bg-slate-400 py-2 px-2 mb-3">New message</h1>
          <input
            type="text"
            placeholder="Subject ..."
            name="subject"
            className=" font-semibold w-full outline-none py-2 px-2  bg-transparent"
            value={formdata.subject}
            onChange={handlechange}
          />
          <textarea
            className="w-full resize-none outline-none px-2 border-2 border-slate-400"
            placeholder="Write your message ..."
            rows={10}
            name="message"
            value={formdata.message}
            onChange={handlechange}
          ></textarea>
          <div className=" flex justify-between">
            <button onClick={handlesubmit} className="bg-green-600 py-2 px-2 w-1/2 rounded-sm font-extrabold">
              send sms
            </button>
            <button
              className=" font-extralight text-red-600"
              onClick={handlecancel}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrefectSMSpage;
