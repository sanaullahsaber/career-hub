import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const FeaturedJobs = ({ featuredJob }) => {
  const { img, title, subTitle, salary, location, id, employmentType,jobLocation } = featuredJob;

 

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="google" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h5>{subTitle}</h5>
        <div className="card-actions">
          <button className="btn btn-outline btn-info btn-xs">{jobLocation}</button>
          <button className="btn btn-outline btn-success btn-xs">{employmentType}</button>
        </div>
        <div className="flex gap-4">
          <div className="flex">
            <MapPinIcon className="h-6 w-6 text-gray-400"></MapPinIcon>
            <p>{location}</p>
          </div>
          <div className="flex">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
            <p>{salary}</p>
          </div>
        </div>

        <div>
          <Link to={`/${id}`} className="text-left btn btn-outline btn-accent btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
