import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import img from "../assets/All Images/P3OLGJ1 copy 1.png";
import JobCategoryList from "./JobCategoryList";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
    const jobCategoryList = useLoaderData();

  const [featuredJobs, setFeaturedJobs] = useState([])
  useEffect(() => {
    fetch("featuredJobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  },[])

    

  return (
    <>
      <div className="my-container flex flex-col items-center justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              One Step <br className="hidden md:block" /> Closer To Your <br />
              <span className="inline-block text-blue-400">Dream Job</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      {/* Job Category List */}
      <div className="mt-20 lg:mt-20">
        <h6 className="text-center font-extrabold text-3xl tracking-wide">
          Job Category List
        </h6>
        <p className="text-center font-medium text-base mb-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="my-container">
        <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          {jobCategoryList.map((job) => (
            <JobCategoryList key={job.id} job={job}></JobCategoryList>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="mt-20 lg:mt-20">
        <h6 className="text-center font-extrabold text-3xl tracking-wide">
          Featured Jobs
        </h6>
        <p className="text-center font-medium text-base mb-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="my-container">
        <div className="grid gap-6 mb-8 lg:grid-cols-2 sm:grid-cols-2">
          {featuredJobs.map((featuredJob) => (
            <FeaturedJobs
              key={featuredJob.id}
              featuredJob={featuredJob}
            ></FeaturedJobs>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-outline btn-accent">See All Jobs</button>
      </div>
    </>
  );
};

export default Home;