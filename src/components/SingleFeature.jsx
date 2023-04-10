import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const SingleFeature = () => {
  const [jobs, setJobs] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const jobsId = jobs.find((job) => job.id == id);
  // console.log(jobsId);
  return (
    <div>
      <div className=" mt-16 mb-12 text-3xl font-extrabold text-center">
        Job Details
      </div>
      <div className="my-container">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-2xl font-bold">Job Description:</span>
            {jobsId?.description} <br />
            <span className="text-2xl font-bold">Job Responsibility:</span>
            {jobsId?.responsibility} <br />
            <span className="text-2xl font-bold">
              Educational Requirements:
            </span>
            {jobsId?.requirements} <br />
            <span className="text-2xl font-bold">Experiences:</span>
            {jobsId?.experiences} <br />
          </div>
          <div className="bg-purple-100 p-5 rounded-lg">
            <div>
              <h1 className="text-3xl mb-3">Job Details</h1>
              <div className="flex">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
                <p> Salary: {jobsId?.salary}</p>
              </div>
              <div className="flex">
                <CalendarDaysIcon className="h-6 w-6 text-gray-500" />
                <p> Salary: {jobsId?.title}</p>
              </div>
            </div>

            <div>
              <h1 className="text-3xl mb-3">Contact Information</h1>
              <div className="flex">
                <PhoneIcon className="h-6 w-6 text-gray-500" />
                <p>Phone : {jobsId?.phone}</p>
              </div>
              <div className="flex">
                <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                <p>Email : {jobsId?.email}</p>
              </div>
              <div className="flex">
                <MapPinIcon className="h-6 w-6 text-gray-500" />
                <p>Address : {jobsId?.address}</p>
              </div>
              <button className="btn bg-gradient-to-r from-blue-500 to-purple-500  mt-5">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
