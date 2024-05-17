import React, { useState } from "react";
import adminloginimage from "../images/adminloginimage.jpg";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
function PrefectSignUp() {
  const goto = useNavigate();
  const [fillinput, setfillinput] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlesubmit = async () => {
    if (
      formdata.name == "" ||
      formdata.email == "" ||
      formdata.password == ""
    ) {
      setfillinput(true);
      setTimeout(() => {
        setfillinput(false);
      }, 3000);
    } else {
      await axios
        .post("http://localhost/test/insert_appliedprefect.php", formdata)
        .then((result) => {
          alert(
            "wait , once your are verified by admin you will be able to continue as prefect"
          );
        });
      goto("/login-prefect");
    }
  };
  return (
    <>
      <div className="adminlogin">
        <div className=" pt-12">
          <h1 className=" font-bold text-center text-slate-600 text-2xl mb-4">
            Sign up as Prefect
          </h1>
        </div>
        <section className="max-sm:w-screen max-sm:px-4 max-sm:pt-3 max-sm:block w-2/3 mx-auto flex justify-between pt-12">
          <div className="max-sm:w-full w-1/2">
            {fillinput && (
              <h1 className=" font-bold text-red-500 animate-bounce">
                All inputs must be filled
              </h1>
            )}
            <div className=" pt-2">
              <label
                htmlFor="uname"
                className="block font-semibold text-slate-600"
              >
                Enter full names
              </label>
              <input
                onChange={handlechange}
                value={formdata.name}
                type="text"
                id="uname"
                name="name"
                className=" border-2 border-slate-200 w-full px-2 py-2 rounded-md outline-none"
                required
              />
            </div>

            <div className=" pt-2">
              <label
                htmlFor="email"
                className="block font-semibold text-slate-600"
              >
                Email Address
              </label>
              <input
                onChange={handlechange}
                value={formdata.email}
                type="email"
                id="email"
                name="email"
                className=" border-2 border-slate-200 w-full px-2 py-2 rounded-md outline-none"
                required
              />
            </div>

            <div className=" pt-2">
              <label
                htmlFor="password"
                className="block font-semibold text-slate-6 00"
              >
                Password
              </label>
              <input
                onChange={handlechange}
                value={formdata.password}
                type="password"
                name="password"
                id="password"
                className=" border-2 border-slate-200 w-full px-2 py-2 rounded-md outline-none"
                required
              />
            </div>
            <div className=" pt-2">
              <button
                className=" font-semibold py-2 px-10 w-full bg-orange-300 rounded-md"
                onClick={handlesubmit}
              >
                Register
              </button>
            </div>
            <div>
              <h1>
                Already have account ?
                <a href="/login-prefect" className=" hover:underline">
                  <span className=" text-blue-700 font-semibold px-4">
                    sign in{" "}
                  </span>
                </a>
              </h1>
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

export default PrefectSignUp;
