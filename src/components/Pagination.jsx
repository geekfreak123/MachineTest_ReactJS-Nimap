import { useState, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [visibleRange, setVisibleRange] = useState({ start: 1, end: 5 });

  useEffect(() => {
    if (totalPages <= 6) {
      setVisibleRange({ start: 1, end: totalPages });
    } else {
      setVisibleRange({ start: 1, end: 5 });
    }
  }, [totalPages]);


  const getVisiblePages = () => {
    const pages = [];
    const { start, end } = visibleRange;
    if (start > 1) {
      pages.push("..."); 
    }
    for (let i = start; i <= Math.min(end, totalPages); i++) {
      pages.push(i);
    }
    if (end < totalPages) {
      pages.push("..."); 
    }
    return pages;
  };

  const handleEllipsisClick = (position) => {
    const { start, end } = visibleRange;

    if (position === "next" && end < totalPages) {
      setVisibleRange({ start: start + 1, end: end + 1 });
    } else if (position === "prev" && start > 1) {
      setVisibleRange({ start: start - 1, end: end - 1 });
    }
  };

  const handlePageClick = (page) => {
    if (page !== "...") {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {getVisiblePages().map((number, index) => (
        <button
          key={index}
          onClick={() =>
            number === "..."
              ? handleEllipsisClick(index === 0 ? "prev" : "next")
              : handlePageClick(number)
          }
          className={`px-4 py-2 rounded-md transition-all ${
            currentPage === number ? "bg-red-600 text-white" : "bg-gray-600"
          } hover:bg-red-500 hover:text-white`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
