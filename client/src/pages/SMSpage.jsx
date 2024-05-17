import React, { useState } from "react";
import axios from "axios";
// import { useLocation } from "react-router-dom";

function SMSpage({
  setshowsmspage,
  setshowappliedprefect,
  setshowaddteacherpage,
  setshowallstudents,
  setshowallinfo,
  setshowallteacherspage,
  setshowallparents,
  setshowsetting,
  setshowaddstudentpage,
  select , setselect
})
 


{
  // const location =  useLocation()
  const handlecancel = () => {
    setshowsmspage(false);
    setshowallinfo(true);
  };
  // console.log(select)
  const [formdata , setformdata] = useState({
    subject:"" ,
    message:"",
    number:select
  })
  
  const handlechange = (e)=>{
    setformdata({...formdata , [e.target.name]:e.target.value})
  }
  const handlesubmit = async()=>{
    await axios.post("http://localhost/test/sendmessage.php" , formdata)
    // alert("hello")
  }
  
  return (
    <div className="block py-24">
      <div className=" max-sm:w-full w-2/3 rounded-sm mx-auto">
        <h1 className=" font-bold text-slate-400  mb-4 text-2xl capitalize">
          compose your SMS
        </h1>
        <h1 className=" text-white bg-slate-400 py-2 px-2 mb-3">New message</h1>
        <input
          value={formdata.subject}
          onChange={handlechange}
          type="text"
          placeholder="Subject ..."
          name="subject"
          className=" w-full outline-none py-2 px-2  bg-transparent text-white"
        />
        <textarea
          value={formdata.message}
          onChange={handlechange}
          className="w-full resize-none outline-none px-2"
          placeholder="Write your message ..."
          rows={10}
          name="message"
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
  );
}

export default SMSpage;
