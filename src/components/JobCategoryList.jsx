import React from "react";

const JobCategoryList = ({ job }) => {
  const { img, name, jobs } = job;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{jobs}</p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default JobCategoryList;
