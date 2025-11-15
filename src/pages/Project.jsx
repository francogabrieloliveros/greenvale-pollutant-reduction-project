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
  const [expandSideBar, setExpandSideBar] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [buttonsPressed, setButtonsPressed] = useState(
    new Array(30).fill(false),
  );
  const [pollutantReducAmount, setPollutantReducAmount] =
    useState(pollutantReduc);
  const [maxImp, setMaxImp] = useState(20);

  const projectsButton = (
    <button
      className="w-5 mb-5"
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
      onClick={() => {
        setShowProjects(false);
        setExpandSideBar(true);
      }}
    >
      <img src={gear} />
    </button>
  );

  const starterMain = (
    <div className={`mt-[calc(50dvh-129px)]  flex-col items-center flex`}>
      <img className="w-60 mb-5" src={greenvale} alt="" />
      <p className="text-gray-500">
        Select mitigation projects and click calculate to start.
      </p>
    </div>
  );
  const [mainDisplay, setMainDisplay] = useState(starterMain);

  const infeasible = (
    <div className={`mt-[calc(50dvh-129px)]  flex-col items-center flex`}>
      <img className="w-60 mb-5" src={greenvale} alt="" />
      <p className="text-gray-500">
        The problem is infeasible, select more mitigation projects or adjust the
        options to fix.
      </p>
    </div>
  );

  const buttons = projects.map((project, i) => (
    <MitigationButton
      pressed={buttonsPressed[i]}
      setButtonsPressed={() => {
        setButtonsPressed((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
        setMainDisplay(starterMain);
      }}
      name={project.name}
      cost={project.cost}
    />
  ));

  const inputs = pollutantReduc.map((pollutant, i) => (
    <Input
      id={pollutant.id}
      name={pollutant.name}
      sub={pollutant.sub}
      name2={pollutant.name2}
      amount={pollutantReducAmount[i].amount}
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

  function calculate() {
    const pollutants = pollutantReducAmount.map((p) => p.amount);
    const tableau = new Tableau(buttonsPressed, pollutants, maxImp);

    try {
      const simplex = new Simplex(tableau.tableau);
      console.log(simplex.resultMatrix);

      return (
        <Table
          data={simplex.resultMatrix}
          iter={simplex.iterations}
          projects={tableau.selectedProjects}
        />
      );
    } catch (e) {
      console.error(e);
      return infeasible;
    }
  }

  return (
    <>
      <Header />

      <aside className="top-[50px] fixed flex z-10">
        <div
          className={`${expandSideBar ? "w-[320px]" : "w-[50px]"} bg-[#F5F5E7] h-[calc(100dvh-50px)]  
                      shadow-xl transition-all p-5 relative`}
        >
          {expandSideBar ? (
            <div>
              <div>
                {showProjects ? (
                  <>
                    <div className="block text-right">{optionsButton}</div>
                    <div
                      className="grid grid-cols-2 gap-4 h-[calc(100%-100px)] absolute overflow-y-auto 
                                 w-[calc(100%-30px)] p-5"
                    >
                      {buttons}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="block text-right">{projectsButton}</div>
                    <h2 className="font-bold text-gray-500 ml-5">
                      Target Pollutant Reduction Amount
                    </h2>
                    <div
                      className="grid grid-cols-2 gap-4 overflow-y-auto 
                                 w-[calc(100%-10px)] px-5 my-2"
                    >
                      {inputs}
                    </div>
                    <h2 className="font-bold text-gray-500 ml-5 mt-10">
                      Maximum Number of Implementations Per Project
                    </h2>
                    <div
                      className="h-10 inline-flex items-center justify-start rounded-full overflow-hidden 
                                 border-gray-400 border-2 w-[calc(100%-30px)] ml-5 mt-2"
                    >
                      <label
                        className="text-white h-full bg-gray-400 px-2 flex items-center text-base/4"
                        for="maxImp"
                      >
                        Max No. Implementation
                      </label>
                      <input
                        className="bg-white w-full h-full text-center font-light text-gray-500"
                        type="number"
                        id="maxImp"
                        value={maxImp}
                        onChange={(e) => {
                          setMaxImp(e.target.value);
                          setMainDisplay(starterMain);
                        }}
                        min={0}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="absolute bottom-0 right-0 pb-5 pr-10">
                <button
                  className="font-bold bg-white px-4 py-2 text-gray-500 rounded-full hover:bg-gray-500 
                        hover:text-white transition-all active:scale-110"
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
                  className="ml-2 font-bold bg-white px-4 py-2 text-gray-500 rounded-full hover:bg-gray-500 
                         hover:text-white transition-all active:scale-110"
                  onClick={() => setButtonsPressed(new Array(30).fill(true))}
                >
                  Select All
                </button>
                <button
                  className="ml-2 font-bold bg-red-400 px-4 py-2 text-white rounded-full hover:bg-white 
                         hover:text-red-400 transition-all active:scale-110"
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
        className={`top-[50px] relative p-5 ${expandSideBar ? "left-[340px] hidden md:block" : "left-[65px] block md:block"}
                    ${expandSideBar ? "w-[calc(100dvw-340px)]" : "w-[calc(100dvw-65px)]"}`}
      >
        {mainDisplay}
      </main>
    </>
  );
}

export default Project;
