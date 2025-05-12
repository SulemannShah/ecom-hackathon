import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-4 mt-8 mb-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination__btn hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        Previous
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`pagination__btn ${
            pageNum === currentPage ? 'pagination__btn--active' : ''
          }`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination__btn hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination; 