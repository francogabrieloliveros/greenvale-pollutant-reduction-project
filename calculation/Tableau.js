import mitigationProjects from "/data/mitigation-projects.js";

export default class Tableau {
  #projects = [...mitigationProjects];
  #selectedProjects;
  #projectsSelector;
  #pollutantReduc;
  #maxImp;
  #tableau = [];

  constructor(projectsSelctor, pollutantReduc, maxImp) {
    this.#projectsSelector = projectsSelctor;
    this.#pollutantReduc = pollutantReduc.map((val) => val * -1);
    this.#maxImp = maxImp;

    this.#selectProjects();
    this.#tableauSetup();
  }

  #selectProjects() {
    this.#selectedProjects = this.#projects.filter(
      (p, ind) => this.#projectsSelector[ind],
    );
  }

  #tableauSetup() {
    this.#selectedProjects.map((project) =>
      this.#tableau.push(project.pollutantReduction),
    );

    this.#tableau = this.#tableau.map((row, ind) => {
      const slackVars = new Array(this.#tableau.length).fill(0);
      slackVars[ind] = -1;
      return [...row, ...slackVars];
    });

    this.#tableau.push([
      ...this.#pollutantReduc,
      ...new Array(this.#tableau.length).fill(this.#maxImp),
    ]);

    this.#tableau = this.#tableau.map((row, ind) => {
      const missingVal = new Array(this.#tableau.length).fill(0);
      missingVal[ind] = 1;
      return [...row, ...missingVal];
    });

    this.#tableau = this.#tableau.map((row, ind) =>
      ind < this.#tableau.length - 1
        ? row.concat(this.#selectedProjects[ind].cost)
        : row.concat(0),
    );
  }

  get tableau() {
    return this.#tableau.map((row) => [...row]);
  }

  get selectedProjects() {
    return this.#selectedProjects.map((project) => ({ ...project }));
  }
}
