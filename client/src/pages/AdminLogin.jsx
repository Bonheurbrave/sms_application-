import React, { useState } from "react";
import adminloginimage from "../images/adminloginimage.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const goto = useNavigate();
  const [fillinput, setfillinput] = useState(false);
  const [success, setsuccess] = useState(false);
  const [invalid, setinvalid] = useState(false);
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async () => {
    if (formdata.password == "" || formdata.email == "") {
      setfillinput(true);
      setTimeout(() => {
        setfillinput(false);
      }, 3000);
    } else {
      axios
        .post("http://localhost/test/adminLogin.php", formdata)
        .then((result) => {
          if (result.data == "exist") {
            localStorage.setItem("logged",true)
            setsuccess(true);
            setTimeout(() => {
              setsuccess(false);
              goto("/admin-dashboard");
            }, 2000);
            
          } else if (result.data == "notexist") {
            setinvalid(true);
            setTimeout(() => {
              setinvalid(false);
            }, 3000);
          }
        });
    }
  };
  return (
    <>
      <div className="adminlogin">
        <div className=" pt-12">
          <h1 className=" font-bold text-center text-slate-600 text-2xl mb-4">
            Sign in as Admin
          </h1>
        </div>

        <section className=" max-sm:w-screen max-sm:px-4 max-sm:pt-3 max-sm:block w-2/3 mx-auto flex justify-between pt-12">
          <div className=" max-sm:w-full w-1/2">
            {success && (
              <h1 className="font-bold text-blue-600 text-center animate-bounce text-xl">
                Welcome to the dashboard
              </h1>
            )}
            {invalid && (
              <h1 className="font-bold text-red-600 text-center animate-bounce text-xl">
                Invalid Email or Password
              </h1>
            )}

            {fillinput && (
              <h1 className="font-bold text-red-600 text-center animate-bounce text-xl">
                All inputs must be filled
              </h1>
            )}

            <div className=" pt-7">
              <label
                htmlFor="email"
                className="block font-semibold text-slate-600"
              >
                Email Address
              </label>
              <input
                value={formdata.email}
                type="email"
                id="email"
                name="email"
                className=" border-2 border-slate-200 w-full px-2 py-2 rounded-md outline-none"
                onChange={handlechange}
                required
              />
            </div>

            <div className=" pt-7">
              <label
                htmlFor="password"
                className="block font-semibold text-slate-6 00"
              >
                Password
              </label>
              <input
                value={formdata.password}
                type="password"
                name="password"
                id="password"
                className=" border-2 border-slate-200 w-full px-2 py-2 rounded-md outline-none"
                onChange={handlechange}
                required
              />
            </div>
            <div className=" pt-6">
              <button
                className=" font-semibold py-2 px-10 w-full bg-orange-300 rounded-md"
                onClick={handlesubmit}
              >
                Continue
              </button>
            </div>
          </div>

          <div>
            <img
              src={adminloginimage}
              alt="no internet connection"
              width={400}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default AdminLogin;
