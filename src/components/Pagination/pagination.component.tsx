import React from "react";
import { Button } from "antd";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const PaginationButton: React.FC<{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: { next?: any };
}> = ({ page, setPage, data }) => {
  return (
    <div className="flex items-center justify-center">
      {page === 1 ? (
        <div />
      ) : (
        <Button
          className="w-10 h-10 rounded border-none flex items-center justify-center bg-gray-300 text-gray-600"
          onClick={() => setPage(page - 1)}
        >
          <MdArrowBackIosNew />
        </Button>
      )}

      {page < 3 ? (
        <>
          <Button
            className={`w-10 h-10 rounded border-none flex items-center justify-center bg-gray-300 text-gray-600${
              page === 1 ? " bg-gray-500 text-white" : ""
            }`}
            onClick={() => setPage(1)}
          >
            1
          </Button>
          <Button
            className={`w-10 h-10 rounded border-none flex items-center justify-center bg-gray-300 text-gray-600${
              page === 2 ? " bg-gray-500 text-white" : ""
            }`}
            onClick={() => setPage(2)}
          >
            2
          </Button>
          <Button
            className={`w-10 h-10 rounded border-none flex items-center justify-center bg-gray-300 text-gray-600${
              page === 3 ? " bg-gray-500 text-white" : ""
            }`}
            onClick={() => setPage(3)}
          >
            3
          </Button>
        </>
      ) : (
        <>
          <Button
            className="w-10 h-10 rounded border-none flex items-center justify-center bg-gray-300 text-gray-600"
            onClick={() => setPage(page - 1)}
          >
            {page - 1}
          </Button>
          <Button className="w-10 h-10 rounded border-none flex items-center justify-center bg-gray-500 text-white">
            {page}
          </Button>
          {data?.next && (
            <Button
              className="w-10 h-10 rounded border-none flex items-center justify-center bg-gray-300 text-gray-600"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </Button>
          )}
        </>
      )}

      {!data?.next ? (
        <div />
      ) : (
        <Button
          className="w-10 h-10 rounded border-none flex items-center justify-center bg-gray-300 text-gray-600"
          onClick={() => setPage(page + 1)}
        >
          <MdArrowForwardIos />
        </Button>
      )}
    </div>
  );
};

export default PaginationButton;
