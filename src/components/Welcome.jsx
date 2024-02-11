import React from "react";
import { Link } from "react-router-dom";

function Welcome() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center items-center p-5 justify-center m-auto max-w-[40vw]">
        <div className="text-3xl m-5 font-sans border-4 border-black rounded-xl p-10 min-w-[40vh]">
          Welcome to Quiz App
        </div>
      </div>

      <div className=" border-white border-2 rounded-3xl p-2 bg-black hover:bg-gray-800 hover:border-black text-white w-24 text-center mr-5">
        <Link to="/questions" title="Start Quiz">
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
