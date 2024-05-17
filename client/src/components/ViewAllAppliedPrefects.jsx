import React, { useEffect, useState } from "react";
import axios from "axios";
function ViewAllAppliedPrefects() {
  
  const [applied, setapplied] = useState([]);
  const [formdata, setformdata] = useState([]);
  const handlegetallapplied = async () => {
    await axios
      .get("http://localhost/test/select_allappliedprefects.php")
      .then((result) => {
        setapplied(result.data.result);
      });
  };
  
  const handleAccept = async(e) => {
    
    await axios.post("http://localhost/test/insert_prefect.php", e)
    .then((result)=>{
      if(result.data == 'inserted' || result.data == 'exist'){
        axios.delete("http://localhost/test/deleteappliedPrefect.php" , {data:{id:e.id}})
      }
    })
    // axios.delete("http://localhost/test/deleteappliedPrefect.php" , {data:{id:e.id}})
  };
  const handleDeny = (id) => {
    axios.delete("http://localhost/test/deleteappliedPrefect.php" , {data:{id:id}})
  };
  
  useEffect(() => {
    handlegetallapplied();
  }, []);
  
  return (
    <>
      <div className=" text-white py-8">
        <h1 className=" font-bold text-slate-200 text-xl">
          View All applied Prefects{" "}
        </h1>
        <h1 className=" font-semibold text-slate-500 py-2">Manage Prefects</h1>

        <div className=" pt-10 py-5">
          <h1 className=" py-2 bg-slate-600 px-2 rounded-sm "> Applied prefects info</h1>
        </div>
        <table className=" w-full text-left">
          <tr className="border-2 border-slate-600">
            <th className="border-r-2 border-r-slate-700">Names</th>
            <th className="border-r-2 border-r-slate-700">Email</th>
            <th className="border-r-2 border-r-slate-700">Passwords</th>
            <th colSpan={2}>Manage</th>
          </tr>

          {applied.map((curl) => {
            return (
              <>
                <tr className=" border-2 border-slate-600 px-2">
                  <td className="border-r-2 border-r-slate-700">{curl.name}</td>
                  <td className="border-r-2 border-r-slate-700">
                    {curl.email}
                  </td>
                  <td className="border-r-2 border-r-slate-700">
                    {curl.password}
                  </td>
                  <td className="border-r-2 border-r-slate-700">
                    <button
                      onClick={() => handleAccept(curl)}
                      className=" bg-green-500 py-2 px-6 rounded-sm text-center"
                    >
                      Permit
                    </button>
                  </td>
                  <td className="border-r-2 border-r-slate-700">
                    <button
                      onClick={() => handleDeny(curl.id)}
                      className=" bg-red-500 py-2 px-6 rounded-sm text-center"
                    >
                      Deny
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ViewAllAppliedPrefects;
