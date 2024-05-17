import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { Link, redirect } from "react-router-dom";
import { FaChevronCircleDown } from "react-icons/fa";
import axios from "axios";

function AddNewStudent() {
  const [fill , setfill] = useState(false)
  const [success, setsuccess] = useState(false);
  const [formdata, setformdata] = useState({
    fname: "",
    lname: "",
    number: "",
    year: "",
    section: "",
    email: "",
    birthdate: "",
  });
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlesubmit = async () => {
    if (
      formdata.fname == "" ||
      formdata.lname == "" ||
      formdata.number == "" ||
      formdata.year == "" ||
      formdata.section == "" ||
      formdata.email == "" ||
      formdata.birthdate == ""
    ) {
      setfill(true)
      setTimeout(() => {
        setfill(false)
      }, 2000);
    } else {
      await axios.post("http://localhost/test/insert_newstudent.php", formdata);
      setsuccess(true);
      setTimeout(() => {
        setsuccess(false);
      }, 3000);
    }
  };
  return (
    <>
      <div className=" text-white py-5">
        <div className=" flex justify-between">
          <div className=" flex">
            <h1>
              <FaUserGraduate size={55} />{" "}
            </h1>
            <div className=" px-4">
              <h1 className=" font-semibold text-green-500 text-xl">
                Acodes Mushishiro
              </h1>
              <h1 className=" font-semibold text-orange-500 text-xl">Tss</h1>
            </div>
          </div>

          <div className=" text-right">
            <h1 className=" text-left text-xl font-semibold text-slate-600">
              Acodes mushishiro Tss
            </h1>
            <address>Muhanga , Southern , Rwanda</address>
            <address>acodesmushishiro@gmail.com</address>
            <address>
              <Link target="_blank" to={"https://acodesmushishiro.ac.rw"}>
                https://acodesmushishiro.ac.rw
              </Link>
            </address>
            <address>+250712345689</address>
          </div>
        </div>
        
        <div className=" py-4">
          <h1 className=" text-3xl py-2 font-bold text-slate-400">
            Add new student
          </h1>
        </div>
        <div className="flex  justify-between py-2 px-4 border-2 bg-slate-500 border-slate-600 rounded-md">
          <h1 className=" font-bold text-xl">Basic information</h1>
          <h1>
            <FaChevronCircleDown size={25} className=" text-slate-200" />
          </h1>
        </div>
        {success && (
          <h2 className=" animate-bounce py-3 font-bold text-blue-500">
            new student inserted successfully
          </h2>
        )}
        {
          fill && 
          <h1 className=" animate-bounce py-2 font-bold text-red-500">
            All inputs must be filled
          </h1>
        }
        <div className=" py-3">
          {/* block level */}
          <div className=" max-sm:block flex ">
            <div className=" py-2">
              <label htmlFor="fname" className="block">
                Firstname
              </label>
              <input
                value={formdata.fname}
                onChange={handlechange}
                className=" max-sm:px-3 outline-none bg-transparent border-b-2 text-orange-500 px-10 py-2  w-full rounded-sm"
                type="text"
                name="fname"
                id="fname"
                placeholder="Ex: john"
              />
            </div>
            <div className=" py-2 pl-20">
              <label htmlFor="lname" className="block">
                Lastname
              </label>
              <input
                value={formdata.lname}
                onChange={handlechange}
                className=" max-sm:px-3 outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                type="text"
                name="lname"
                id="lname"
                placeholder="Ex: Doe"
              />
            </div>
          </div>
          {/* block level */}
          <div className=" max-sm:block flex py-2">
            <div>
              <label htmlFor="city" className="block">
                Parent Number
              </label>
              <input
                value={formdata.number}
                onChange={handlechange}
                className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                type="number"
                name="number"
                id="number"
                placeholder="Ex: +250788888888"
              />
            </div>
            <div className=" pl-20">
              <label htmlFor="class" className="block">
                Year / Level
              </label>
              <select
                value={formdata.year}
                onChange={handlechange}
                name="year"
                id="year"
                className=" max-sm:px-2 px-20 w-full py-2 bg-transparent outline-none text-orange-500"
              >
                <option >Select Year</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          {/* block level */}
          <div className=" max-sm:block flex py-2 ">
            <div>
              <label htmlFor="section" className="block">
                Section
              </label>
              <select
                value={formdata.section}
                onChange={handlechange}
                name="section"
                id="section"
                className=" max-sm:px-2 w-full py-2 px-20 bg-transparent text-orange-600 outline-none"
              >
                <option>select section</option>
                <option value="SOD">SOD</option>
                <option value="accounting">Accounting</option>
                <option value="NIT">NIT</option>
              </select>
            </div>
            <div className=" pl-20">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                value={formdata.email}
                onChange={handlechange}
                className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                type="email"
                name="email"
                id="email"
                placeholder="Ex: example@gmail.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="bd" className="block">
              Birth Date
            </label>
            <input
              value={formdata.birthdate}
              onChange={handlechange}
              className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 py-2 w-3/4 px-10 rounded-sm"
              type="date"
              name="birthdate"
              id="bd"
            />
          </div>
          <div className=" py-3">
            <button
              onClick={handlesubmit}
              className=" w-3/4 font-bold py-2 px-4 bg-blue-600 rounded-md"
            >
              Add student
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewStudent;
