import { useState } from "react";
import greenvale from "/greenvale-gray.svg";
import triangle from "/triangle.svg";

function Infeasible(props) {
  const [showIters, setShowIters] = useState(false);

  const iters = props.iter;

  // Creates a table for each iteration tableau
  const itersDisp = iters.map((iter) => {
    const table = iter.map((row, ind) => (
      <tr>
        {row.map((el) => (
          <td
            className={`${ind == iter.length - 1 ? "bg-gray-300" : "bg-gray-100"} p-2 text-center text-xs shadow-xs`}
          >
            {el.toFixed(2)}
          </td>
        ))}
      </tr>
    ));

    const labels = iter[0].map((el, ind) => {
      const slackIndices = 10 + iter[0].length - 1;
      if (ind === iter[0][0].length - 2) {
        return <th>Z</th>;
      } else if (ind === iter[0][0].length - 1) {
        return <th>Sol</th>;
      } else if (ind < slackIndices) {
        return (
          <th>
            s<sub>{ind}</sub>
          </th>
        );
      } else if (ind >= slackIndices || ind < iter[0][0].length - 2) {
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
    <div className={`mt-[calc(50dvh-129px)] flex flex-col items-center`}>
      <img className="mb-5 w-60" src={greenvale} alt="" />
      <p className="text-gray-500">
        The problem is infeasible, select more mitigation projects or adjust the
        options to fix.
      </p>

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
  );
}

export default Infeasible;
