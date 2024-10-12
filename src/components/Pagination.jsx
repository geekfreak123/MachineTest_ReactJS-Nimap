
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.min(10, totalPages); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
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
