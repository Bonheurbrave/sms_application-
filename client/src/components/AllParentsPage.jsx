import axios from "axios";
import React, { useState, useEffect } from "react";
import { LiaSearchSolid } from "react-icons/lia";

function AllParentsPage({
  setshowsmspage,
  setshowappliedprefect,
  setshowaddteacherpage,
  setshowallstudents,
  setshowallinfo,
  setshowallteacherspage,
  setshowallparents,
  setshowsetting,
  setshowaddstudentpage,
  select, setselect
}) {
  const [allstudents, setallstudents] = useState([]);
  const [search, setsearch] = useState("");
  const handlegetallstudents = async () => {
    const result = await axios.get(
      "http://localhost/test/select_all_students.php"
    );
    setallstudents(result.data.result);
  };

  useEffect(() => {
    handlegetallstudents();
  }, []);

  const handleselectall = () => {};
  
 const handleselect = (e)=>{
  setselect([...select, e])
 }
//  console.log(select)
    const handleshowsmspage = () => {
    setshowsmspage(true);
    setshowallteacherspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };
  return (
    <>
      <div className=" py-6">
        <h1 className=" text-white font-semibold text-xl">
          SELECT PARENTS TO BE NOTIFIED
        </h1>
      </div>
      <div className=" py-3 text-white">
        <h1 className=" font-bold text-xl">All Parents</h1>
        <div className=" flex border-2 border-slate-500 py-2 rounded-md">
          <LiaSearchSolid size={30} />
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            className=" bg-transparent w-full px-4 outline-none border-none"
            placeholder="Search the student's name..."
          />
        </div>
      </div>
      <div className=" py-2">
        <input type="checkbox" id="all" className=" text-left" />
        <label htmlFor="all" className=" px-3 text-white">
          Send to all Parents
        </label>
      </div>
      <table className=" w-full text-center text-white">
        <tr className=" text-left border-2 border-slate-600">
          <th className=" border-r-2 border-r-slate-600">Select</th>
          <th className=" border-r-2 border-r-slate-600">Student Names</th>
          <th className=" border-r-2 border-r-slate-600">Class </th>
          <th className=" max-sm:hidden border-r-2 border-r-slate-600">Email</th>
          <th className=" border-r-2 border-r-slate-600">Parent's number</th>
        </tr>

        {allstudents
          .filter((item) => {
            return search.toLowerCase() == ""
              ? item
              : item.firstname.toLowerCase().includes(search.toLowerCase()) ||
                  item.lastname.toLowerCase().includes(search.toLowerCase());
          })
          .map((data) => {
            return (
              <tr className=" text-left border-2 border-slate-600">
                <td className=" border-slate-600 border-r-2">
                  <input
                    type="checkbox"
                    onClick={() => {
                      handleselect(data.phone);
                    }}
                  />
                </td>
                <td className=" border-r-2 border-r-slate-600">
                  {data.firstname} {data.lastname}
                </td>
                <td className=" border-r-2 border-r-slate-600">
                  L{data.year}
                  {data.section}{" "}
                </td>
                <td className=" max-sm:hidden border-r-2 border-r-slate-600">{data.email}</td>
                <td className=" border-r-2 border-r-slate-600">
                  +{data.phone}
                </td>
              </tr>
            );
          })}
      </table>

      <div className=" py-5">
        <button
          className=" font-bold py-2 px-10 w-full rounded-md bg-blue-500"
          onClick={handleshowsmspage}
        >
          Continue
        </button>
      </div>
      <div className=" text-white text-center py-7">
        <h1 className=" font-extralight c">
          &copy; copyright acodesmushishiro 2024
        </h1>
      </div>
    </>
  );
}

export default AllParentsPage;
