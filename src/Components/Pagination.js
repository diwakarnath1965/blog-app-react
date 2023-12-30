import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page,  totalPages,  handlePageChange } =
    useContext(AppContext);
  return (
    <div className="w-[30%] ml-4 justify-between flex mb-14">
      <div>
        {page > 1 && (
          <button className="bg-slate-600 text-white px-5 py-2 rounded-3xl" onClick={() => handlePageChange(page - 1)}>Previous</button>
        )}
        {
          page < totalPages && (
            
              <button className="ml-7 text-white bg-slate-600 px-5 py-2 rounded-3xl" onClick={() => handlePageChange(page + 1)}>Next</button>
            
          )
        }
      </div>

      <p>
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
