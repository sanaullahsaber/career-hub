import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import JobsItem from "./JobsItem";

const AppliedJobs = () => {
  const {cartArray} = useLoaderData();


  const handleFilter = () => {
    const sortedData = data.sort((a, b) =>{
      return new Data(a.employmentType) - new Data(b.employmentType)
    })
    cartArray([...data ,sortedData])
  }

  return (
    <div className="my-container">
      <div className=" text-3xl font-extrabold text-center">Applied Jobs</div>
      <div>
        <div>
          <div className="flex justify-between mb-16">
            <h2 className="text-xl font-semibold">
              {cartArray.length
                ? "Applied Jobs Items"
                : "Applied Jobs is EMPTY!"}
            </h2>
            <div>
              <div className="dropdown dropdown-end dropdown-hover">
                <label tabIndex={0} className="btn m-1">
                  Filleter By
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={handleFilter}>Show Full Time Jobs</a>
                  </li>
                  <li>
                    <a>Show Part Time Jobs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" grid w-min-screen gap-6 mb-8 lg:grid-cols-1 sm:grid-cols-1 ml-40">
            {cartArray.map((product) => (
              <JobsItem key={product.id} product={product}></JobsItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
