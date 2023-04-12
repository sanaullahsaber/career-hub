import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
const JobsItem = ({ product }) => {
  const { img, title, subTitle, location, salary , id, employmentType,jobLocation  } = product;
  return (
    <div className="card  bg-base-100 shadow-xl pr-10">
      <div className="flex items-center justify-between">
        <div className="inline-flex pl-6 pr-4 ">
          <figure className='w-48'>
            <img src={img} alt="google" />
          </figure>
          <div className="card-body ">
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
          </div>
        </div>
        <div>
          <Link to={`/${id}`} className="btn ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsItem;