import React from "react";

function Result({ totalQuestions, score }) {
  const maxMarks = totalQuestions * 1;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        <h2 className="text-lg font-bold mb-6 text-center">Quiz Result</h2>
        <div className="result-table">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-4">Number of Questions</th>
                <th className="px-4 py-4">Maximum Marks</th>
                <th className="px-4 py-4">Marks Scored</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-4 text-center">{totalQuestions}</td>
                <td className="px-4 py-4 text-center">{maxMarks}</td>
                <td className="px-4 py-4 text-center">{score}/{maxMarks}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-4 py-4 text-center">You got {(score / maxMarks) * 100}% in your quiz.</div>
      </div>
    </div>
  );
}

export default Result;
