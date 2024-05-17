import React, { useEffect, useState } from "react";
import axios from "axios";
import { LiaSearchSolid } from "react-icons/lia";

function ViewAllStudents({
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
  setstudentinfo,
}) {
  const [delmsg, setdelmsg] = useState(false);
  const [student, setstudent] = useState([]);
  const [search, setsearch] = useState("");
  const handlegetallstudent = async () => {
    await axios
      .get("http://localhost/test/select_all_students.php")
      .then((result) => {
        setstudent(result.data.result);
      });
  };

  const handleEdit = async (e) => {
    setstudentinfo(e);
    setshowsmspage(false);
    setshoweditpage(true);
    setshowallteacherspage(false);
    setshowaddteacherpage(false);
    setshowappliedprefect(false);
    setshowaddstudentpage(false);
    setshowallstudents(false);
    setshowallparents(false);
    setshowallinfo(false);
    setshowsetting(false);
  };
  const handleDelete = async (id) => {
    axios
      .post(`http://localhost/test/deleteStudent.php/`, { data: { id } })
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
    handlegetallstudent();
  }, [handleDelete]);

  return (
    <div className=" max-sm:px-1 text-white py-8">
      <h1 className=" font-bold text-slate-200 text-xl">View All students </h1>
      <h1 className=" font-semibold text-slate-500 py-2">Manage students</h1>

      <div className=" max-sm:pt-4 pt-10 py-5">
        <h1 className=" max-sm:mb-5 capitalize py-2 bg-slate-600 px-2 rounded-sm ">student info</h1>
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
      <div>
        {delmsg && (
          <h1 className=" text-red-500 font-bold animate-bounce">
            Student has been deleted successfully
          </h1>
        )}
      </div>
      <table className=" w-full text-left">
        <tr className="border-2 border-slate-600">
          <th className="border-r-2 border-r-slate-700">Names</th>
          <th className="border-r-2 border-r-slate-700">Phone</th>
          <th className="border-r-2 border-r-slate-700">Class</th>
          <th className=" max-sm:hidden border-r-2 border-r-slate-700">Email</th>
          <th className=" max-sm:hidden border-r-2 border-r-slate-700">Birthdate</th>
          <th colSpan={2}>Manage</th>
        </tr>

        {student
          .filter((item) => {
            return search.toLowerCase() == ""
              ? item
              : item.firstname.toLowerCase().includes(search.toLowerCase()) ||
                  item.lastname.toLowerCase().includes(search.toLowerCase());
          })
          .map((curl) => {
            return (
              <>
                <tr className=" max-sm:py-2 border-2 border-slate-600 px-2">
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
                  <td className=" max-sm:block border-r-2 border-r-slate-700">
                    <button
                      onClick={() => handleEdit(curl)}
                      className=" bg-green-500 py-2 px-6 rounded-sm text-center"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="  max-sm:block border-r-2 border-r-slate-700">
                    <button
                      onClick={() => handleDelete(curl.id)}
                      className=" bg-red-500 py-2 px-6 rounded-sm text-center"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
}

export default ViewAllStudents;
