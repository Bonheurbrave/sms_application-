import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
function AllTeacherspage({
  setshowsmspage,
  setshowappliedprefect,
  setshowaddteacherpage,
  setshowallstudents,
  setshowallinfo,
  setshowallteacherspage,
  setshowallparents,
  setshowsetting,
  setshowaddstudentpage,
  setshoweditteacherpage,
  setstudentinfo,
}) {
  const [delmsg, setdelmsg] = useState(false);
  const [search, setsearch] = useState("");
  const [teachers, setteachers] = useState([]);
  const handlecheck = () => {};
  const handlegetallteachers = async () => {
    await axios
      .get("http://localhost/test/select_all_teachers.php")
      .then((result) => {
        setteachers(result.data.result);
      });
  };
  const handleshoweditteacherpage = (e) => {
    setstudentinfo(e);
    setshoweditteacherpage(true);
    setshowsmspage(false);
    setshowallteacherspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };

  const handleshowsmspage = () => {
    setshowsmspage(true);
    setshoweditteacherpage(false);
    setshowallteacherspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };

  const handleselectall = () => {};
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost/test/deleteTeacher.php", { data: { id: id } })
      .then((result) => {
        if (result.data == "delete") {
          setdelmsg(true);
          setTimeout(() => {
            setdelmsg(false);
          }, 3000);
        }
      });
  };
  useEffect(() => {
    handlegetallteachers();
  }, []);
  return (
    <>
      <div className=" py-3 text-white">
        <h1 className=" font-bold text-xl">All Teachers</h1>
        <div className=" flex border-2 border-slate-500 py-2 rounded-md">
          <LiaSearchSolid size={30} />
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            className=" bg-transparent w-full px-4 outline-none border-none"
            placeholder="Search the teacher..."
          />
        </div>
      </div>
      <div>
        {delmsg && (
          <h1 className=" font-bold text-red-500 animate-bounce">
            Teacher has been deleted successfully
          </h1>
        )}
      </div>
      <table className=" text-center text-white w-full">
        <tr className=" text-left border-2 border-slate-600">
          <th>
            <input type="checkbox" onClick={handleselectall} />
          </th>
          <th className=" border-r-2 border-slate-600">Names</th>
          <th className=" border-r-2 border-slate-600">Lecture</th>
          <th className=" max-sm:hidden border-r-2 border-slate-600">Email</th>
          <th className=" max-sm:hidden border-r-2 border-slate-600">City</th>
          <th className=" border-r-2 border-slate-600">Phone</th>
          <th className=" border-r-2 border-slate-600">Degree</th>

          <th colSpan={2} className=" text-white">
            Manage
          </th>
        </tr>

        {teachers
          .filter((item) => {
            return search.toLowerCase() == ""
              ? item
              : item.firstname.toLowerCase().includes(search.toLowerCase()) ||
                  item.lastname.toLowerCase().includes(search.toLowerCase());
          })
          .map((data) => {
            return (
              <tr className=" text-left border-2 border-slate-600">
                <input
                  type="checkbox"
                  onClick={() => {
                    handlecheck(data.name);
                  }}
                />
                <td className=" border-r-2 border-slate-600 capitalize">
                  {data.firstname} {data.lastname}
                </td>
                <td className=" border-r-2 border-slate-600 capitalize">
                  {data.course}
                </td>
                <td className=" max-sm:hidden border-r-2 border-slate-600 ">{data.email}</td>
                <td className=" max-sm:hidden border-r-2 border-slate-600 capitalize">
                  {data.city}
                </td>
                <td className=" border-r-2 border-slate-600">{data.phone}</td>
                <td className=" border-r-2 border-slate-600 uppercase">
                  {data.degree}
                </td>
                <td className="border-r-2 border-r-slate-700">
                  <button
                    onClick={() => handleshoweditteacherpage(data)}
                    className=" bg-green-500 py-2 px-6 rounded-sm text-center"
                  >
                    <AiFillEdit />
                  </button>
                </td>
                <td className="border-r-2 border-r-slate-700">
                  <button
                    onClick={() => handleDelete(data.id)}
                    className=" bg-red-500 py-2 px-6 rounded-sm text-center"
                  >
                    <MdOutlineDelete />
                  </button>
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

export default AllTeacherspage;
