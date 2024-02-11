import React from "react";

function Pagination({ currentQuestion, setCurrentQuestion, size}) {

  const onNext = () => {
    const nextQues = currentQuestion + 1;
    setCurrentQuestion(nextQues);
  };
  const onPrev = () => {
    if(currentQuestion > 0){
        const prevQues = currentQuestion - 1;
        setCurrentQuestion(prevQues);

    }
  };

  return(
    <div className="pagnation__button flex mx-5">
      <div className="previous-btn border-black border-2 rounded-3xl p-2 bg-red-400 hover:bg-red-300 hover:text-black text-white w-24 text-center mr-5">
      <button onClick={onPrev} className="">
            Previous
        </button>
      </div>

      <div className="next-btn  border-black border-2 rounded-3xl p-2 bg-red-400 hover:bg-red-300 hover:text-black text-white w-24 text-center ml-5">
        <button onClick={onNext} className="">{currentQuestion < size-1 ? <p>Next</p> : <p>Result</p>}</button>
      </div>

    </div>
)
}

export default Pagination;
