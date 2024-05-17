import React, { useState } from "react";
import { MdGirl } from "react-icons/md";
import { MdOutlineBoy } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import { RiProgress3Fill } from "react-icons/ri";
import { SiProgress } from "react-icons/si";
import { RiProgress8Line } from "react-icons/ri";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import Calendar from "react-calendar";
function AllInfoDashboard() {
  const data = [
    {
      name: "Year 2018",
      boys: 200,
      girls: 170,
      teachers: 6,
    },
    {
      name: "Year 2019",
      boys: 180,
      girls: 201,
      teachers: 6,
    },
    {
      name: "Year 2020",
      boys: 210,
      girls: 218,
      teachers: 7,
    },
    {
      name: "Year 2021",
      boys: 150,
      girls: 200,
      teachers: 7,
    },
    {
      name: "Year 2022",
      boys: 172,
      girls: 203,
      teachers: 7,
    },
    {
      name: "Year 2023",
      boys: 240,
      girls: 238,
      teachers: 9,
    },
    {
      name: "Year 2024",
      boys: 260,
      girls: 301,
      teachers: 9,
    },
  ];

  return (
    <>
      <div className=" py-4">
        <div>
          <h1 className=" font-bold text-xl text-slate-200">DASHBOARD</h1>
          <h1 className=" text-green-700 font-semibold">
            Welcome to your dashboard
          </h1>
        </div>
        <div className=" text-white flex justify-between py-2">
          <div className=" py-5 px-3 max-sm:px-1 w-1/5 bg-slate-800 border-2 border-slate-800 rounded-md">
            <div className=" flex justify-between">
              <h1>
                <MdOutlineBoy size={23} />
              </h1>
              <h1>
                <GiProgression className=" text-violet-600" />
              </h1>
            </div>
            <div className=" max-sm:block max-sm:text-center flex justify-between">
              <h1 className=" font-bold">200+</h1>
              <h1 className=" text-green-700">Boys</h1>
            </div>
          </div>
          <div className=" py-2 px-3 max-sm:px-1 w-1/5 bg-slate-800 border-2 border-slate-800 rounded-md">
            <div className=" flex justify-between">
              <h1>
                <MdGirl size={23} />
              </h1>
              <h1>
                <RiProgress3Fill className=" text-violet-600" />
              </h1>
            </div>
            <div className=" max-sm:block max-sm:text-center flex justify-between">
              <h1 className=" font-bold">270+</h1>
              <h1 className=" text-green-700">Girls</h1>
            </div>
          </div>
          <div className=" py-2 px-3 max-sm:px-1 w-1/5 bg-slate-800 border-2 border-slate-800 rounded-md">
            <div className=" flex justify-between">
              <h1>
                <FaChalkboardTeacher size={23} />
              </h1>
              <h1>
                <SiProgress className=" text-violet-600" />
              </h1>
            </div>
            <div className="max-sm:block max-sm:text-center flex justify-between">
              <h1 className=" font-bold">8+</h1>
              <h1 className=" text-green-700">Teachers</h1>
            </div>
          </div>
          <div className=" py-2 px-3 max-sm:px-1 w-1/5 bg-slate-800 border-2 border-slate-800 rounded-md">
            <div className=" flex justify-between">
              <h1>
                <GrUserAdmin size={23} />
              </h1>
              <h1>
                <GiProgression className=" text-violet-600" />
              </h1>
            </div>
            <div className=" max-sm:block max-sm:text-center flex justify-between">
              <h1 className=" font-bold">2+</h1>
              <h1 className=" text-green-700">Prefects</h1>
            </div>
          </div>
        </div>
      </div>

      {/* grid view for boys-girls-teachers */}

      <div>
        {/* grid view */}
        <div className=" text-white bg-slate-800 rounded-md py-2 px-2">
          <h1 className=" font-bold text-slate-300">Boy-Girls Chart</h1>
          <div className="flex">
            <AreaChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorTc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="boys"
                stroke="#8884d8"
                fillOpacity={0.1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="girls"
                stroke="#82ca9d"
                fillOpacity={0.1}
                fill="url(#colorPv)"
              />
              <Area
                type="monotone"
                dataKey="teacher"
                stroke="#82c6d"
                fillOpacity={1}
                fill="url(#colorTc)"
              />
            </AreaChart>
            <h1 className=" text-white pt-3 vt">
              Developed by{" "}
              <span className=" text-emerald-700 font-extrabold">Bobo dev</span>
            </h1>
          </div>
        </div>

        {/* calendar */}
        <div className="flex justify-between py-12">
          <RiProgress8Line
            size={20}
            className=" animate-pulse text-neutral-50"
          />
          <RiProgress8Line
            size={20}
            className=" animate-ping text-orange-600"
          />
          <RiProgress8Line size={20} className=" animate-ping text-lime-500" />
          <RiProgress8Line size={20} className=" animate-ping text-green-500" />
          <RiProgress8Line size={20} className=" animate-ping text-blue-700" />
          <RiProgress8Line
            size={20}
            className=" animate-ping text-purple-800"
          />
          <RiProgress8Line size={20} className=" animate-ping text-pink-300" />
          <RiProgress8Line size={20} className=" animate-pulse text-zinc-50" />
        </div>
      </div>
    </>
  );
}

export default AllInfoDashboard;
