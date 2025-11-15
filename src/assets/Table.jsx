import { useState } from "react";

import triangle from "/triangle.svg";

function Table(props) {
  const projects = props.projects;
  const data = props.data;
  const iters = props.iter;

  // Controls visibility of iterations
  const [showIters, setShowIters] = useState(false);

  // Create table of results
  const dataDisp = (
    <div className="mb-5 grid grid-cols-3 gap-2 rounded-xl bg-white p-5 text-gray-500 shadow-xl">
      <div className="font-bold">
        <h2>Mitigation Project</h2>
      </div>
      <div className="font-bold">
        <h2>Number of Projects Units</h2>
      </div>
      <div className="font-bold">
        <h2>Cost($)</h2>
      </div>

      {
        // Finds the xvalues at the last row of the result tableau
        projects.map((proj, ind) => (
          <>
            <div className="rounded-xs bg-gray-100 p-2 shadow-xs">
              {proj.name}
            </div>
            <div className="rounded-xs bg-gray-100 p-2 text-center shadow-xs">
              {data[data.length - 1][ind + 10 + data.length - 1].toFixed(2)}
            </div>
            <div className="rounded-xs bg-gray-100 p-2 text-center shadow-xs">
              {(
                proj.cost * data[data.length - 1][ind + 10 + data.length - 1]
              ).toFixed(2)}
            </div>
          </>
        ))
      }
      <div className="rounded-xs bg-gray-100 p-2 font-bold shadow-xs">
        Total
      </div>
      <div className="rounded-xs bg-gray-100 p-2 text-center shadow-xs"></div>
      <div className="rounded-xs bg-gray-100 p-2 text-center font-bold shadow-xs">
        {data[data.length - 1][data[0].length - 1].toFixed(2)}
      </div>
    </div>
  );

  // Creates a table for each iteration tableau
  const itersDisp = iters.map((iter) => {
    const table = iter.map((row) => (
      <tr>
        {row.map((el) => (
          <td className="bg-gray-100 p-2 text-center text-xs shadow-xs">
            {el.toFixed(2)}
          </td>
        ))}
      </tr>
    ));

    const labels = iter[0].map((el, ind) => {
      const slackIndices = 10 + data.length - 1;
      if (ind === data[0].length - 2) {
        return <th>Z</th>;
      } else if (ind === data[0].length - 1) {
        return <th>Sol</th>;
      } else if (ind < slackIndices) {
        return (
          <th>
            s<sub>{ind}</sub>
          </th>
        );
      } else if (ind >= slackIndices || ind < data[0].length - 2) {
        return (
          <th>
            x<sub>{ind - slackIndices}</sub>
          </th>
        );
      }
    });

    return (
      <table className="mb-5 border-separate [border-spacing:5px] rounded-xl bg-white p-5 text-gray-500 shadow-xl transition-all">
        <thead>
          <tr>{labels}</tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    );
  });

  return (
    <>
      <div className="">
        {dataDisp}
        <button
          className="mx-auto mb-5 flex flex-col items-center transition-all"
          onClick={() => setShowIters(!showIters)}
        >
          <p className="text-gray-500 transition-all">
            {showIters ? "Hide" : "Show"} Iterations
          </p>
          <img
            className={`${showIters ? "rotate-270" : "rotate-90"} w-4 transition-all`}
            src={triangle}
            alt=""
          />
        </button>
        {showIters ? itersDisp : undefined}
      </div>
    </>
  );
}

export default Table;
