import React, { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaChevronCircleDown } from "react-icons/fa";
import axios from "axios";

function AddNewTeacher() {
  const [fill, setfill] = useState(false);
  const [success, setsuccess] = useState(false);
  const [formdata, setformdata] = useState({
    fname: "",
    lname: "",
    number: "",
    course: "",
    city: "",
    email: "",
    degree: "",
  });
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlesubmit = async () => {
    if (
      formdata.fname == "" ||
      formdata.lname == "" ||
      formdata.number == "" ||
      formdata.course == "" ||
      formdata.city == "" ||
      formdata.email == "" ||
      formdata.degree == ""
    ) {
      setfill(true);
      setTimeout(() => {
        setfill(false);
      }, 2000);
    } else {
      await axios.post("http://localhost/test/insert_newteacher.php", formdata);
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
            <div className=" max-sm:px-1 px-4">
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
            Add new Teacher
          </h1>
        </div>
        <div className="flex  justify-between py-2 px-4 border-2 bg-slate-500 border-slate-600 rounded-md">
          <h1 className=" font-bold text-xl">Basic information of teachers</h1>
          <h1>
            <FaChevronCircleDown size={25} className=" text-slate-200" />
          </h1>
        </div>
        {success && (
          <h1 className=" font-bold text-blue-500 animate-bounce">
            new teacher added successfully
          </h1>
        )}
        {fill && (
          <h1 className=" font-bold text-red-500 animate-bounce">
            All inputs must be filled
          </h1>
        )}
        <div className=" py-3">
          {/* block level */}
          <div className=" flex ">
            <div className=" py-2">
              <label htmlFor="fname" className="block">
                Firstname
              </label>
              <input
                value={formdata.fname}
                onChange={handlechange}
                className=" outline-none bg-transparent border-b-2 text-orange-500 px-10 py-2  w-full rounded-sm"
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
                className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                type="text"
                name="lname"
                id="lname"
                placeholder="Ex: Doe"
              />
            </div>
          </div>
          {/* block level */}
          <div className=" flex py-2">
            <div>
              <label htmlFor="city" className="block">
                Phone Number
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
              <label htmlFor="course" className="block">
                Course
              </label>
              <input
                value={formdata.course}
                onChange={handlechange}
                className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                type="text"
                name="course"
                id="course"
                placeholder="Ex: english , maths"
              />
            </div>
          </div>

          {/* block level */}
          <div className=" flex py-2 ">
            <div>
              <label htmlFor="city" className="block">
                City
              </label>
              <input
                value={formdata.city}
                onChange={handlechange}
                className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                type="text"
                name="city"
                id="city"
                placeholder="Ex: kigali city , muhanga"
              />
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
            <label htmlFor="degree" className="block">
              Teacher's Degree
            </label>
            <input
              value={formdata.degree}
              onChange={handlechange}
              className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 py-2 w-3/4 px-10 rounded-sm"
              type="text"
              name="degree"
              id="degree"
              placeholder="Ex: masters , bachelors , A2 , diploma , PhD ,..."
            />
          </div>
          <div className=" py-3">
            <button
              onClick={handlesubmit}
              className=" w-3/4 font-bold py-3 px-4 bg-blue-600 rounded-md"
            >
              Add Teacher
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewTeacher;
