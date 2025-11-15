import { useState } from "react";

import triangle from "/triangle.svg";

function Table(props) {
  const projects = props.projects;
  const data = props.data;
  const iters = props.iter;

  const [showIters, setShowIters] = useState(false);

  const dataDisp = (
    <div className="grid grid-cols-3 gap-2 bg-white rounded-xl shadow-xl mb-5 p-5 text-gray-500">
      <div className="font-bold">
        <h2>Mitigation Project</h2>
      </div>
      <div className="font-bold">
        <h2>Number of Projects Units</h2>
      </div>
      <div className="font-bold">
        <h2>Cost($)</h2>
      </div>
      {projects.map((proj, ind) => (
        <>
          <div className="bg-gray-100 p-2 shadow-xs rounded-xs">
            {proj.name}
          </div>
          <div className="bg-gray-100 p-2 text-center shadow-xs rounded-xs">
            {data[data.length - 1][ind + 10 + data.length - 1].toFixed(2)}
          </div>
          <div className="bg-gray-100 p-2 text-center shadow-xs rounded-xs">
            {(
              proj.cost * data[data.length - 1][ind + 10 + data.length - 1]
            ).toFixed(2)}
          </div>
        </>
      ))}
      <div className="bg-gray-100 p-2 shadow-xs rounded-xs font-bold">
        Total
      </div>
      <div className="bg-gray-100 p-2 text-center shadow-xs rounded-xs"></div>
      <div className="bg-gray-100 p-2 text-center shadow-xs rounded-xs font-bold">
        {data[data.length - 1][data[0].length - 1].toFixed(2)}
      </div>
    </div>
  );

  const itersDisp = iters.map((iter) => {
    const table = iter.map((row) => (
      <tr>
        {row.map((el) => (
          <td className="text-xs p-2 text-center shadow-xs bg-gray-100">
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
      <table className="border-separate [border-spacing:5px] bg-white shadow-xl p-5 rounded-xl text-gray-500 mb-5 transition-all">
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
          className="flex flex-col items-center mx-auto mb-5 transition-all"
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
