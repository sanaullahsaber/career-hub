import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const JobsItem = ({ product }) => {
  const {
    img,
    title,
    subTitle,
    location,
    salary,
    id,
    employmentType,
    jobLocation,
  } = product;
  return (
    <div className="card bg-base-100 shadow-xl pr-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:inline-flex md:pl-6 md:pr-4">
          <figure className="w-48">
            <img src={img} alt="google" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <h5>{subTitle}</h5>
            <div className="card-actions flex flex-col md:flex-row">
              <button className="btn btn-outline btn-info btn-xs mr-2 md:mr-0 md:mb-0 mb-2">
                {jobLocation}
              </button>
              <button className="btn btn-outline btn-success btn-xs">
                {employmentType}
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-2 md:mb-0">
                <MapPinIcon className="h-6 w-6 text-gray-400 mr-2"></MapPinIcon>
                <p>{location}</p>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-6 w-6 text-gray-400 mr-2" />
                <p>{salary}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`job/${id}`} className="btn ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsItem;
