import React, { useState, useEffect } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { Link, redirect } from "react-router-dom";
import { FaChevronCircleDown } from "react-icons/fa";
import axios from "axios";
function EditTeacherpage({ studentinfo }) {
  const [fill, setfill] = useState(false)
  const [success, setsuccess] = useState(false)
  const [formdata, setformdata] = useState({
    fname: studentinfo.firstname,
    lname: studentinfo.lastname,
    number: studentinfo.phone,
    course: studentinfo.course,
    city: studentinfo.city,
    email: studentinfo.email,
    degree: studentinfo.degree,
    id: studentinfo.id,
  });
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  console.log(studentinfo);
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
      setfill(true)
      setTimeout(() => {
        setfill(false)
      }, 3000);
    } else {
      await axios
        .patch("http://localhost/test/updateTeacherinfo.php", formdata)
        .then((result) => {
          if(result.data == 'update'){
            setsuccess(true)
            setTimeout(() => {
              setsuccess(false)
            }, 3000);
          }
        });
    }
  };
  return (
    <>
      <div className="">
        <div className=" text-white py-16">
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
              Update Teacher's info
            </h1>
          </div>
          <div className="flex  justify-between py-2 px-4 border-2 bg-slate-500 border-slate-600 rounded-md">
            <h1 className=" font-bold text-xl"> Edit Basic information</h1>
            <h1>
              <FaChevronCircleDown size={25} className=" text-slate-200" />
            </h1>
          </div>
          <div className=" py-3">
            {/* block level */}
              {
                fill && 
                <h1 className=" font-bold text-red-500 text-xl animate-bounce">All inputs must be filled</h1>
              }
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
                  City
                </label>
                <input
                  value={formdata.course}
                  onChange={handlechange}
                  className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                  type="text"
                  name="course"
                  id="course"
                  placeholder="Ex: English, Kigali , Rubavu , ..."
                />
              </div>
            </div>

            {/* block level */}
            <div className=" flex py-2 ">
              <div>
                <label htmlFor="section" className="block">
                  City
                </label>
                <input
                  value={formdata.city}
                  onChange={handlechange}
                  className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 px-10 py-2  w-full rounded-sm"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Ex: Muhanga , Kigali , ..."
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
              <label htmlFor="bd" className="block">
                Teacher's Degree
              </label>
              <input
                value={formdata.degree}
                onChange={handlechange}
                className=" outline-none bg-transparent border-b-2 text-orange-500 border-b-slate-400 py-2 w-3/4 px-10 rounded-sm"
                type="text"
                name="degree"
                id="degree"
                placeholder="ex: masters , phd , A2 , ..."
              />
            </div>
            <div className=" py-3">
              <button
                onClick={handlesubmit}
                className=" w-3/4 font-bold py-2 px-4 bg-blue-600 rounded-md"
              >
                Update student
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTeacherpage;
