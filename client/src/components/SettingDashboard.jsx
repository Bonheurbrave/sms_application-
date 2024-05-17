import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SettingDashboard({
  setshowaddteacherpage,
  setshowappliedprefect,
  setshowaddstudentpage,
  setshowallstudents,
  setshowallinfo,
  setshowallteacherspage,
  setshowallparents,
  setshowsetting,
  setshowsmspage,
  setshoweditpage,
}) {
  const time = new Date();
  let greeting;
  if (time.getHours() > 12) {
    greeting = "Good Afternoon";
  } else if (time.getHours() < 12) {
    greeting = "Good Morning";
  } else if (time.getHours == 12) {
    greeting = " Have a nice Day ";
  } else if (time.getHours() > 18) {
    greeting = "Good Evening";
  }

  const handleshowallstudents = () => {
    setshoweditpage(false);
    setshowallstudents(true);
    setshowsmspage(false);
    setshowallteacherspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };

  const handleshowaddstudentpage = () => {
    setshowsmspage(false);
    setshoweditpage(false);
    setshowallteacherspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(true);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };
  const handleshowappliedprefects = () => {
    setshoweditpage(false);
    setshowsmspage(false);
    setshowallteacherspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(true);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };

  const handleshowaddteacherpage = () => {
    setshowallteacherspage(false);
    setshoweditpage(false);
    setshowaddteacherpage(true);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
    setshowsmspage(false);
  };

  const handleshowteacherspage = () => {
    setshoweditpage(false);
    setshowallteacherspage(true);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
    setshowsmspage(false);
  };

  return (
    <>
      <div className=" text-white pt-10 py-11">
        <h1 className=" font-bold text-slate-200 text-xl py-2">{greeting}</h1>
        <h1 className=" text-slate-400 py-1">
          Simplified School management system
        </h1>
        <div className=" py-3">
          <h1
            className=" font-semibold border-2 py-2 px-5 border-slate-600 rounded-md text-center capitalize bg-orange-600 hover:bg-slate-600 ease-in-out duration-300 cursor-pointer"
            onClick={handleshowappliedprefects}
          >
            view all applied prefects{" "}
          </h1>
          <div className=" flex justify-between py-10">
            <h1
              className=" font-semibold border-2 py-2 px-5 border-slate-600 rounded-md text-center capitalize bg-blue-600 hover:bg-slate-600 ease-in-out duration-300 cursor-pointer"
              onClick={handleshowaddteacherpage}
            >
              {" "}
              add new Teacher
            </h1>
            <h1
              className=" font-semibold border-2 py-2 px-5 border-slate-600 rounded-md text-center capitalize bg-blue-600 hover:bg-slate-600 ease-in-out duration-300 cursor-pointer"
              onClick={handleshowaddstudentpage}
            >
              add new student
            </h1>
          </div>
          <h1
            className=" font-semibold border-2 py-2 px-5 border-slate-600 rounded-md text-center capitalize bg-emerald-600 hover:bg-slate-600 ease-in-out duration-300 cursor-pointer"
            onClick={handleshowallstudents}
          >
            get all students
          </h1>
          <h1
            className=" capitalize gte bg-green-700 text-center pt-20 hover:bg-slate-600 ease-in-out duration-300 cursor-pointer"
            onClick={handleshowteacherspage}
          >
            get all teachers
          </h1>
        </div>
        <h1 className=" font-extralight c text-center">
          &copy; copyright acodesmushishiro 2024
        </h1>
      </div>
    </>
  );
}

export default SettingDashboard;
