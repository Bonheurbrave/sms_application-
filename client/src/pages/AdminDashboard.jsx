import React, { useState } from "react";
import { FaUser, FaUserAlt } from "react-icons/fa";
import AllInfoDashboard from "../components/AllInfoDashboard";
import { AiFillNotification } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { HiInformationCircle } from "react-icons/hi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import AllTeacherspage from "../components/AllTeacherspage";
import SettingDashboard from "../components/SettingDashboard";
import ViewAllStudents from "../components/ViewAllStudents";
import ViewAllAppliedPrefects from "../components/ViewAllAppliedPrefects";
import AddNewStudent from "../components/AddNewStudent";
import AddNewTeacher from "../components/AddNewTeacher";
import SMSpage from "./SMSpage";
import AllParentsPage from "../components/AllParentsPage";
import EditStudentPage from "../components/EditStudentPage";
import EditTeacherpage from "../components/EditTeacherpage";
import { BiCloset, BiMenu } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { GoUnverified } from "react-icons/go";
function AdminDashboard() {
  const [select , setselect] = useState([])
  const [menu , setmenu] = useState(false)
  const [studentinfo, setstudentinfo] = useState([]);
  const [showeditteacherpage, setshoweditteacherpage] = useState(false);
  const [showeditpage, setshoweditpage] = useState(false);
  const [showsmspage, setshowsmspage] = useState(false);
  const [showallinfo, setshowallinfo] = useState(true);
  const [showallteacherspage, setshowallteacherspage] = useState(false);
  const [showallparents, setshowallparents] = useState(false);
  const [showsetting, setshowsetting] = useState(false);
  const [showallstudents, setshowallstudents] = useState(false);
  const [showappliedprefects, setshowappliedprefect] = useState(false);
  const [showallsteachers, setshowallteachers] = useState(false);
  const [showaddstudentpage, setshowaddstudentpage] = useState(false);
  const [showaddteacherpage, setshowaddteacherpage] = useState(false);
  const [selectedteachers, setselectedteachers] = useState([]);

  const handlecancel = ()=>{
    goto("/")
  }
  const handlereturntologin = ()=>{
    goto("/login-admin")
  }
  const goto = useNavigate()
  const handleshowmenu = ()=>{
    setmenu(!menu)
    setshowallinfo(!showallinfo)
  }
  const logout = ()=>{
   window.location.href = '/'
   localStorage.clear()
  }
  // const handlehidemenu = ()=>{
  //   setshowallinfo()
  //   setmenu(!menu)
  // }
  const handleshowsetting = () => {
    setmenu(false)
    setshoweditpage(false);
    setshoweditteacherpage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallinfo(false);
    setshowallteacherspage(false);
    setshowallparents(false);
    setshowsetting(true);
  };

  const handleshowallinfor = () => {
    setmenu(false)
    setshoweditteacherpage(false);
    setshoweditpage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallinfo(true);
    setshowallteacherspage(false);
    setshowallparents(false);
    setshowsetting(false);
  };

  const handleshowteacherspage = () => {
    setmenu(false)
    setshoweditteacherpage(false);
    setshoweditpage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallteacherspage(true);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };
  const handleshowallparents = () => {
    setmenu(false)
    setshoweditteacherpage(false);
    setshoweditpage(false);
    setshowallparents(true);
    setshowsmspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallteacherspage(false);
    setshowallinfo(false);
    setshowsetting(false);
  };


  const handleredirect = ()=>{
    goto('/admin-login')
  }
  return (
    <>
    {
      localStorage.getItem('logged') ?
      <div>

    
      <div className=" bg-black">
        <div className=" max-sm:flex hidden text-white py-2 px-3 bg-menu w-screen">
          <BiMenu size={40} onClick={handleshowmenu}/>
        </div>
        <div className=" max-sm:block hidden w-screen text-white px-2 py-5">
          {
            menu && 
            <>
            <div className=" w-screen h-screen bg-black text-white">
              
        <div className=" text-white">
            <FaUser className="mx-auto" size={50} />
            <h1 className=" text-center font-bold">Mary Gueritte</h1>
            <h1 className=" text-green-500 text-center font-semibold">Admin</h1>
          </div>
          <div className=" pt-6">
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowallinfor}
            >
              <span>
                <HiInformationCircle size={25} />
              </span>
              All info
            </h1>
            <h1 className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex">
              <span>
                <PiStudentFill size={25} />
              </span>
              Students marks
            </h1>
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowteacherspage}
            >
              <span>
                <AiFillNotification size={25} />
              </span>
              Notify Teachers
            </h1>
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowallparents}
            >
              <span>
                <AiFillNotification size={25} />
              </span>
              Notify Parents
            </h1>
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowsetting}
            >
              <span>
                <IoMdSettings size={25} />
              </span>
              Setting
            </h1>
            <h1 onClick={logout} className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex">
              <span>
                <RiLogoutCircleLine size={25} />
              </span>
              Logout
            </h1>
          </div>
          </div>

          </>
          }
        </div>
        <section className=" max-sm:hidden h-screen bg-slate-800 w-1/6 fixed cursor-pointer pt-8">

          <div className=" text-white">
            <FaUser className="mx-auto" size={50} />
            <h1 className=" text-center font-bold">Mary Gueritte</h1>
            <h1 className=" text-green-500 text-center font-semibold">Admin</h1>
          </div>
          <div className=" pt-6">
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowallinfor}
            >
              <span>
                <HiInformationCircle size={25} />
              </span>
              All info
            </h1>
            <h1 className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex">
              <span>
                <PiStudentFill size={25} />
              </span>
              Students marks
            </h1>
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowteacherspage}
            >
              <span>
                <AiFillNotification size={25} />
              </span>
              Notify Teachers
            </h1>
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowallparents}
            >
              <span>
                <AiFillNotification size={25} />
              </span>
              Notify Parents
            </h1>
            <h1
              className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex"
              onClick={handleshowsetting}
            >
              <span>
                <IoMdSettings size={25} />
              </span>
              Setting
            </h1>
            <h1 onClick={logout} className="p-3 text-center text-slate-50 hover:text-slate-400 border-b-2 border-b-slate-500 flex">
              <span>
                <RiLogoutCircleLine size={25} />
              </span>
              Logout
            </h1>
          </div>
          
          
        </section>
        <div className=" max-sm:w-screen max-sm:px-2 w-2/3 mx-auto px-6 ">
          {showallinfo && (
            <div>
              <AllInfoDashboard />
            </div>
          )}
          {showallteacherspage && (
            <div className=" pt-14 ">
              <h1 className=" font-bold text-white text-2xl mb-3">
                Select Teachers to Notify
              </h1>
              <AllTeacherspage
                setshoweditpage={showeditpage}
                selectedteachers={selectedteachers}
                setselectedteachers={setselectedteachers}
                setshowappliedprefect={setshowappliedprefect}
                setshowaddteacherpage={setshowaddteacherpage}
                setshowallstudents={setshowallstudents}
                setshowallinfo={setshowallinfo}
                setshowallteacherspage={setshowallteacherspage}
                setshowallparents={setshowallparents}
                setshowsetting={setshowsetting}
                setshowaddstudentpage={setshowaddstudentpage}
                setshoweditteacherpage={setshoweditteacherpage}
                setstudentinfo={setstudentinfo}
                setshowsmspage={setshowsmspage}
                />
            </div>
          )}
          {showsetting && (
            <div>
              <SettingDashboard
                setshoweditpage={setshoweditpage}
                setshoweditteacherpage={setshoweditteacherpage}
                setshowappliedprefect={setshowappliedprefect}
                setshowaddteacherpage={setshowaddteacherpage}
                setshowallstudents={setshowallstudents}
                setshowallinfo={setshowallinfo}
                setshowallteacherspage={setshowallteacherspage}
                setshowallparents={setshowallparents}
                setshowsetting={setshowsetting}
                setshowaddstudentpage={setshowaddstudentpage}
                setshowsmspage={setshowsmspage}
              />
            </div>
          )}
          {showsmspage && (
            <div>
              <SMSpage
                select={select}
                setselect={setselect}
                setshoweditteacherpage={setshoweditteacherpage}
                setstudentinfo={setstudentinfo}
                setshoweditpage={setshoweditpage}
                setshowappliedprefect={setshowappliedprefect}
                setshowaddteacherpage={setshowaddteacherpage}
                setshowallstudents={setshowallstudents}
                setshowallinfo={setshowallinfo}
                setshowallteacherspage={setshowallteacherspage}
                setshowallparents={setshowallparents}
                setshowsetting={setshowsetting}
                setshowaddstudentpage={setshowaddstudentpage}
                setshowsmspage={setshowsmspage}
              />
            </div>
          )}
          {showallparents && (
            <div>
              <AllParentsPage
                select={select}
                setselect={setselect}
                setshoweditteacherpage={setshoweditteacherpage}
                setstudentinfo={setstudentinfo}
                setshoweditpage={setshoweditpage}
                setshowappliedprefect={setshowappliedprefect}
                setshowaddteacherpage={setshowaddteacherpage}
                setshowallstudents={setshowallstudents}
                setshowallinfo={setshowallinfo}
                setshowallteacherspage={setshowallteacherspage}
                setshowallparents={setshowallparents}
                setshowsetting={setshowsetting}
                setshowaddstudentpage={setshowaddstudentpage}
                setshowsmspage={setshowsmspage}
              />
            </div>
          )}
          {showallstudents && (
            <div>
              <ViewAllStudents
                setstudentinfo={setstudentinfo}
                setshoweditteacherpage={setshoweditteacherpage}
                setshoweditpage={setshoweditpage}
                setshowappliedprefect={setshowappliedprefect}
                setshowaddteacherpage={setshowaddteacherpage}
                setshowallstudents={setshowallstudents}
                setshowallinfo={setshowallinfo}
                setshowallteacherspage={setshowallteacherspage}
                setshowallparents={setshowallparents}
                setshowsetting={setshowsetting}
                setshowaddstudentpage={setshowaddstudentpage}
                setshowsmspage={setshowsmspage}
                />
            </div>
          )}
          {showappliedprefects && (
            <div>
              <ViewAllAppliedPrefects />
            </div>
          )}
          {showallsteachers && (
            <div>
              <AllTeacherspage
                setstudentinfo={setstudentinfo}
                setshoweditteacherpage={setshoweditteacherpage}
                setshoweditpage={setshoweditpage}
                setshowappliedprefect={setshowappliedprefect}
                setshowaddteacherpage={setshowaddteacherpage}
                setshowallstudents={setshowallstudents}
                setshowallinfo={setshowallinfo}
                setshowallteacherspage={setshowallteacherspage}
                setshowallparents={setshowallparents}
                setshowsetting={setshowsetting}
                setshowaddstudentpage={setshowaddstudentpage}
                setshowsmspage={setshowsmspage}
              />
            </div>
          )}
          {showaddstudentpage && (
            <div>
              <AddNewStudent />
            </div>
          )}
          {showaddteacherpage && (
            <div>
              <AddNewTeacher />
            </div>
          )}
          {showeditpage && (
            <div>
              <EditStudentPage studentinfo={studentinfo} />
            </div>
          )}
          {showeditteacherpage && (
            <div>
              <EditTeacherpage studentinfo={studentinfo} />
            </div>
          )}
        </div>
      </div>
      </div>
      :
      <div className=" pt-20">

        <h1><CiWarning size={50} className=" mx-auto"/></h1>

        <h1 className=" font-bold text-center text-3xl">please you have to login first </h1>

        <div className=" max-sm:w-2/5 w-1/6 mx-auto pt-10">
          <button className=" capitalize py-2 px-3 rounded-md font-bold bg-black text-white" onClick={handlereturntologin}>go login page</button>
        </div>
        <div className=" pt-4">
          <h1 onClick={handlecancel} className=" cursor-pointer text-center text-red-500">cancel</h1>
        </div>
      </div>
    }
    </>
  );
}

export default AdminDashboard;
