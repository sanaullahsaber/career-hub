import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";
import JobsItem from "./JobsItem";

const AppliedJobs = () => {
  const {cartArray} = useLoaderData();


  // console.log(cartArray);

  return (
    <div className="my-container">
      <div className=" mt-16 mb-12 text-3xl font-extrabold text-center">
        Applied Jobs
      </div>
      <div className="flex items-start justify-start bg-gray-100 text-gray-900">
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
          <h2 className="text-xl font-semibold">
            {cartArray.length ? "Applied Jobs Items" : "Applied Jobs is EMPTY!"}
          </h2>

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
