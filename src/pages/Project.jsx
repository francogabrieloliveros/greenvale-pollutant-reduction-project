// React Methods
import { useState } from "react";

// Components
import Header from "/src/assets/Header.jsx";
import MitigationButton from "/src/assets/MitigationButton.jsx";
import Input from "/src/assets/Input.jsx";
import Table from "/src/assets/Table.jsx";

// Images
import triangle from "/triangle.svg";
import hamburger from "/hamburger2.svg";
import greenvale from "/greenvale-gray.svg";
import gear from "/gear.svg";

// Data
import projects from "/data/mitigation-projects.js";
import pollutantReduc from "/data/pollutant-reduction.js";

// Classes
import Simplex from "/calculation/Simplex.js";
import Tableau from "/calculation/Tableau.js";

function Project() {
  // Variables with monitored changes
  const [expandSideBar, setExpandSideBar] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [buttonsPressed, setButtonsPressed] = useState(
    new Array(30).fill(false),
  );
  const [pollutantReducAmount, setPollutantReducAmount] =
    useState(pollutantReduc);
  const [maxImp, setMaxImp] = useState(20);

  // Elements with preset structure
  const projectsButton = (
    <button
      className="mb-5 w-5"
      // Clicking expands sidebar and shows mitigation projects
      onClick={() => {
        setShowProjects(true);
        setExpandSideBar(true);
      }}
    >
      <img src={hamburger} />
    </button>
  );

  const optionsButton = (
    <button
      className="w-5"
      // CLicking expands sidebar and shows pollutant reductions
      onClick={() => {
        setShowProjects(false);
        setExpandSideBar(true);
      }}
    >
      <img src={gear} />
    </button>
  );

  const starterMain = (
    <div className={`mt-[calc(50dvh-129px)] flex flex-col items-center`}>
      <img className="mb-5 w-60" src={greenvale} alt="" />
      <p className="text-gray-500">
        Select mitigation projects and click calculate to start.
      </p>
    </div>
  );
  const [mainDisplay, setMainDisplay] = useState(starterMain);

  const infeasible = (
    <div className={`mt-[calc(50dvh-129px)] flex flex-col items-center`}>
      <img className="mb-5 w-60" src={greenvale} alt="" />
      <p className="text-gray-500">
        The problem is infeasible, select more mitigation projects or adjust the
        options to fix.
      </p>
    </div>
  );

  // Iterate through projects and add data to MitigationButton component
  const buttons = projects.map((project, i) => (
    <MitigationButton
      pressed={buttonsPressed[i]}
      // Clicking set the buttons index as pressed and shows starter message
      setButtonsPressed={() => {
        setButtonsPressed((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
        setMainDisplay(starterMain);
      }}
      name={project.name}
      cost={project.cost}
    />
  ));

  // Iterate through pollutants and add data to Input component
  const inputs = pollutantReduc.map((pollutant, i) => (
    <Input
      id={pollutant.id}
      name={pollutant.name}
      sub={pollutant.sub}
      name2={pollutant.name2}
      amount={pollutantReducAmount[i].amount}
      // Editing changes pollutant reductions and shows starter message
      setAmount={(e) => {
        setPollutantReducAmount((prev) =>
          prev.map((v, idx) =>
            idx === i ? { ...v, amount: parseInt(e.target.value) } : v,
          ),
        );
        setMainDisplay(starterMain);
      }}
    />
  ));

  // Create a tableau and simplex object to perform calculations
  function calculate() {
    const pollutants = pollutantReducAmount.map((p) => p.amount);
    const tableau = new Tableau(buttonsPressed, pollutants, maxImp);

    try {
      const simplex = new Simplex(tableau.tableau);
      console.log(simplex.resultMatrix);

      // Render table if calculation is successful
      return (
        <Table
          data={simplex.resultMatrix}
          iter={simplex.iterations}
          projects={tableau.selectedProjects}
        />
      );
    } catch (e) {
      // Renders infeasible message in case of error
      console.error(e);
      return infeasible;
    }
  }

  // Contains a lot of conditional rendering (to long to explain)
  return (
    <>
      <Header />

      <aside className="fixed top-[50px] z-10 flex">
        <div
          className={`${expandSideBar ? "w-[320px]" : "w-[50px]"} relative h-[calc(100dvh-50px)] bg-[#F5F5E7] p-5 shadow-xl transition-all`}
        >
          {expandSideBar ? (
            <div>
              <div>
                {showProjects ? (
                  <>
                    <div className="block text-right">{optionsButton}</div>
                    <div className="absolute grid h-[calc(100%-100px)] w-[calc(100%-30px)] grid-cols-2 gap-4 overflow-y-auto p-5">
                      {buttons}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="block text-right">{projectsButton}</div>
                    <h2 className="ml-5 font-bold text-gray-500">
                      Target Pollutant Reduction Amount
                    </h2>
                    <div className="my-2 grid w-[calc(100%-10px)] grid-cols-2 gap-4 overflow-y-auto px-5">
                      {inputs}
                    </div>
                    <h2 className="mt-10 ml-5 font-bold text-gray-500">
                      Maximum Number of Implementations Per Project
                    </h2>
                    <div className="mt-2 ml-5 inline-flex h-10 w-[calc(100%-30px)] items-center justify-start overflow-hidden rounded-full border-2 border-gray-400">
                      <label
                        className="flex h-full items-center bg-gray-400 px-2 text-base/4 text-white"
                        for="maxImp"
                      >
                        Max No. Implementation
                      </label>
                      <input
                        className="h-full w-full bg-white text-center font-light text-gray-500"
                        type="number"
                        id="maxImp"
                        value={maxImp}
                        // Changes maximum number of implementation per project
                        // Shows starter message when changed
                        onChange={(e) => {
                          setMaxImp(parseInt(e.target.value));
                          setMainDisplay(starterMain);
                        }}
                        min={0}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="absolute right-0 bottom-0 pr-10 pb-5">
                <button
                  className="rounded-full bg-white px-4 py-2 font-bold text-gray-500 transition-all hover:bg-gray-500 hover:text-white active:scale-110"
                  // Sets all project buttons to false
                  // Resets pollutant reductions and max implementation
                  // Shows starter message
                  onClick={() => {
                    setButtonsPressed(new Array(30).fill(false));
                    setPollutantReducAmount([...pollutantReduc]);
                    setMaxImp(20);
                    setMainDisplay(starterMain);
                  }}
                >
                  Reset
                </button>
                <button
                  className="ml-2 rounded-full bg-white px-4 py-2 font-bold text-gray-500 transition-all hover:bg-gray-500 hover:text-white active:scale-110"
                  // Sets all project buttons to true
                  onClick={() => setButtonsPressed(new Array(30).fill(true))}
                >
                  Select All
                </button>
                <button
                  className="ml-2 rounded-full bg-red-400 px-4 py-2 font-bold text-white transition-all hover:bg-white hover:text-red-400 active:scale-110"
                  // Performs calculations
                  onClick={() => setMainDisplay(calculate())}
                >
                  Calculate
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              {projectsButton}
              {optionsButton}
            </div>
          )}
        </div>

        <button
          className="ml-2.5 w-5"
          onClick={() => setExpandSideBar(!expandSideBar)}
        >
          <img src={triangle} />
        </button>
      </aside>

      <main
        className={`relative top-[50px] p-5 ${expandSideBar ? "left-[340px] hidden md:block" : "left-[65px] block md:block"} ${expandSideBar ? "w-[calc(100dvw-340px)]" : "w-[calc(100dvw-65px)]"}`}
      >
        {mainDisplay}
      </main>
    </>
  );
}

export default Project;
