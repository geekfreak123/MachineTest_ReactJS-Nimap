import { useState, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    setVisiblePages(getVisiblePages(currentPage, totalPages));
  }, [currentPage, totalPages]);

  const getVisiblePages = (current, total) => {
    const pages = [];

    if (total <= 5) {
      return [...Array(total).keys()].map((i) => i + 1); 
    }

    if (current === 1) {
      pages.push(1, 2, 3, 4, 5, "...");
    } else if (current === total) {
      pages.push("...", total - 4, total - 3, total - 2, total - 1, total);
    } else {
      pages.push("...");
      for (let i = current - 1; i <= current + 1; i++) {
        if (i > 0 && i <= total) pages.push(i);
      }
      pages.push("...");
    }

    return pages;
  };

  const handleEllipsisClick = (direction) => {
    if (direction === "next") {
      const nextPage = Math.min(currentPage + 1, totalPages);
      onPageChange(nextPage);
      setVisiblePages(getVisiblePages(nextPage, totalPages));
    } else if (direction === "prev") {
      const prevPage = Math.max(currentPage - 1, 1);
      onPageChange(prevPage);
      setVisiblePages(getVisiblePages(prevPage, totalPages));
    }
  };

  const handlePageClick = (page) => {
    if (page !== "...") {
      onPageChange(page);
      setVisiblePages(getVisiblePages(page, totalPages));
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {visiblePages.map((number, index) => (
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
