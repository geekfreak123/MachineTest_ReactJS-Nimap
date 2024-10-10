// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex justify-center mt-8">
      {pages.map((page) => (
        <button
          key={page}
          className={`mx-1 px-4 py-2 ${
            page === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
