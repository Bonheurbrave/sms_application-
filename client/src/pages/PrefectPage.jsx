import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import qr from "../images/qr.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { SlClose } from "react-icons/sl";
import axios from "axios";
import { CiWarning } from "react-icons/ci";
function PrefectPage() {
  const goto = useNavigate();
  const [selected , setselected ] = useState([])
  const [search, setsearch] = useState("");
  const [showmenu, setshowmenu] = useState(false);
  const [student, setstudent] = useState([]);
  const handleshowmenu = () => {
    setshowmenu(true);
  };
  const handlehidemenu = () => {
    setshowmenu(false);
  };
  
  const handleselect = (e)=>{
  setselected([...selected , e])
  }

  console.log(selected)

  const handlelogout = ()=>{
    localStorage.clear()
    goto('/')
  }

  const handlecancel = ()=>{
   goto('/')
  }
  
  const handlereturntologin = ()=>{
    goto('/login-prefect')
  }
  const handlegetallstudent = async () => {
    await axios
      .get("http://localhost/test/select_all_students.php")
      .then((result) => {
        setstudent(result.data.result);
      });
  };
  useEffect(() => {
    handlegetallstudent();
  }, []);
  const handlecontinue = () => {
    goto("/sms-page" , {state:selected});
  };
  
  return (
    <>
    {
      localStorage.getItem('prefect') ?

      <div>

      
    
      {showmenu && (
        <div className=" bg-black w-screen h-screen fixed py-10">
          <h1 className=" px-10 mb-10">
            <SlClose
              size={50}
              onClick={handlehidemenu}
              className=" text-orange-500 float-right"
            />
          </h1>

          <div className="w-2/6 pt-10 mx-auto">
            <h1 className=" text-white text-2xl text-center px-5 cursor-pointer" onClick={handlelogout}>
              Logout
            </h1>
          </div>
        </div>
      )}
      <div className=" w-screen max-sm:px-2 bg-slate-300 flex justify-between px-10">
        <div></div>
        <div className=" max-sm:w-screen w-2/3 mx-auto ">
          <div className=" pt-3">
            <h1>
              <MdMenu
                size={30}
                onClick={handleshowmenu}
                className=" cursor-pointer"
              />
            </h1>
          </div>
          <div className=" py-3">
          <div>
            <h1 className=" font-semibold">Acodes Mushishiro Tss</h1>
          </div>
            <h1 className=" font-bold text-2xl py-2 text-slate-800">
              All Students
            </h1>
            <h1 className=" max-sm:py-1 max-sm:w-3/4 flex justify-between border-2 border-slate-700 w-1/2 px-4 py-2 rounded-md mb-8 text-center bg-slate-400 cursor-pointer ease-in-out duration-300 hover:bg-slate-300 font-semibold">
              Student Informations
              <span>
                <IoIosArrowDropdownCircle
                  size={25}
                  className=" text-slate-300"
                />
              </span>
            </h1>
            <div className=" max-sm:py-1 max-sm:w-3/4 flex border-2 border-slate-800 active:w-full py-2 rounded-md w-1/2 hover:w-full ease-in-out duration-1000">
              <LiaSearchSolid size={30} />
              <input
                type="search"
                value={search}
                onChange={(e) => {
                setsearch(e.target.value);
                }}
                className=" bg-transparent w-full px-4 outline-none border-none"
                placeholder="Search the student..."
              />
            </div>
          </div>
          <div>
            <h1 className=" font-semibold text-xl text-orange-400 py-3">
              Select students to be notified
            </h1>
          </div>
          <table className=" w-full text-center ">
            <tr className="border-2 border-slate-600">
              <th className="border-r-2 border-r-slate-700">
                <input type="checkbox" checked={true}/>
              </th>
              <th className="border-r-2 border-r-slate-700">Names</th>
              <th className="border-r-2 border-r-slate-700">Phone</th>
              <th className="border-r-2 border-r-slate-700">Class</th>
              <th className=" max-sm:hidden border-r-2 border-r-slate-700">Email</th>
              <th className=" max-sm:hidden border-r-2 border-r-slate-700">Birthdate</th>
            </tr>

            {student
              .filter((item) => {
                return search.toLowerCase() == ""
                  ? item
                  : item.firstname
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                      item.lastname
                        .toLowerCase()
                        .includes(search.toLowerCase());
              })
              .map((curl) => {
                return (
                  <tr className=" border-2 border-slate-600 px-2">
                    <td className="border-r-2 border-r-slate-700 capitalize">
                      <input type="checkbox" onClick={()=>handleselect(curl.phone)} />
                    </td>
                    <td className="border-r-2 border-r-slate-700 capitalize">
                      {curl.firstname} {curl.lastname}
                    </td>
                    <td className="border-r-2 border-r-slate-700">
                      {curl.phone}
                    </td>
                    <td className="border-r-2 border-r-slate-700 uppercase">
                      L{curl.year} {curl.section}
                    </td>
                    <td className=" max-sm:hidden border-r-2 border-r-slate-700">
                      {curl.email}
                    </td>
                    <td className=" max-sm:hidden border-r-2 border-r-slate-700">
                      {curl.birthdate}
                    </td>
                  </tr>
                );
              })}
          </table>

          <div className=" py-5">
            <button
              className=" max-sm:w-full font-bold py-2 px-10 w-2/3 rounded-md bg-blue-500"
              onClick={handlecontinue}
            >
              Continue
            </button>
            <div className=" max-sm:block  py-3 hidden">
            <img className=" max-sm:w-full" src={qr} alt="no internet connection" width={300} />
          <h1 className=" font-semibold text-blue-600 text-xl">
            <Link to={"https://acodesmushishiro.ac.rw/"} target="_blank">
              acodesmushishiro.ac.rw
            </Link>
          </h1>
            </div>
          
          </div>
          <div className=" text-red-500 text-right py-7">
            <h1 className=" font-extralight c">
              &copy; copyright acodesmushishiro 2024
            </h1>
          </div>
        </div>
        <div className=" max-sm:hidden w-1/3 pt-32">
          <div className=" text-right">
            <h1 className=" text-xl font-semibold text-slate-900">
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
          <img src={qr} alt="no internet connection" width={300} />
          <h1 className=" font-semibold text-blue-600 text-xl">
            <Link to={"https://acodesmushishiro.ac.rw/"} target="_blank">
              acodesmushishiro.ac.rw
            </Link>
          </h1>
          
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

export default PrefectPage;
