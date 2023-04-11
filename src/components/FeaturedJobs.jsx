import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const FeaturedJobs = ({ featuredJob }) => {
  const { img, title, subTitle, salary, location, id } = featuredJob;

 

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="google" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h5>{subTitle}</h5>
        <div className="card-actions">
          <button className="badge badge-outline">Remote</button>
          <button className="badge badge-outline">Full Time</button>
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
          <Link to={`/${id}`} className="text-left btn btn-outline btn-accent ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
