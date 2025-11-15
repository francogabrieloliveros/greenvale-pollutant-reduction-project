import mitigationProjects from "/data/mitigation-projects.js";

export default class Tableau {
  #projects = [...mitigationProjects]; // Arranged in transposed manner
  #selectedProjects;
  #projectsSelector;
  #pollutantReduc;
  #maxImp;
  #tableau = [];

  constructor(projectsSelctor, pollutantReduc, maxImp) {
    this.#projectsSelector = projectsSelctor;
    this.#pollutantReduc = pollutantReduc.map((val) => val * -1); // Multiply bottom row values to -1
    this.#maxImp = maxImp;

    this.#selectProjects();
    this.#tableauSetup();
  }

  #selectProjects() {
    // Use the projectsSelector boolean array
    // Items in projects that have a true value in the same index of projectsSelector will be
    // added to selectedProjects
    this.#selectedProjects = this.#projects.filter(
      (p, ind) => this.#projectsSelector[ind],
    );
  }

  #tableauSetup() {
    // Add pollutantReduction of each projects to the tableau as new row
    this.#selectedProjects.map((project) =>
      this.#tableau.push(project.pollutantReduction),
    );

    // Add a row of zeroes to each row in the tableau
    // Also have a diagonal of -1 to represent slack variables
    this.#tableau = this.#tableau.map((row, ind) => {
      const slackVars = new Array(this.#tableau.length).fill(0);
      slackVars[ind] = -1;
      return [...row, ...slackVars];
    });

    // Add a new row to the tableau
    // Contains goal pollutant reduction and max implementations per project
    this.#tableau.push([
      ...this.#pollutantReduc,
      ...new Array(this.#tableau.length).fill(this.#maxImp),
    ]);

    // Add another row of zeroes to each row in tableau
    // Have a diagonal of 1 to represent x variables
    this.#tableau = this.#tableau.map((row, ind) => {
      const missingVal = new Array(this.#tableau.length).fill(0);
      missingVal[ind] = 1;
      return [...row, ...missingVal];
    });

    // Add the cost of each project to the RHS of the tableau
    // Initialize Z as 0
    this.#tableau = this.#tableau.map((row, ind) =>
      ind < this.#tableau.length - 1
        ? row.concat(this.#selectedProjects[ind].cost)
        : row.concat(0),
    );
  }

  // Returns a duplicate of the tableau to ensure encapsulation
  get tableau() {
    return this.#tableau.map((row) => [...row]);
  }

  // Returns a duplicate of the selectedProjects to ensure encapsulation
  get selectedProjects() {
    return this.#selectedProjects.map((project) => ({ ...project }));
  }
}
