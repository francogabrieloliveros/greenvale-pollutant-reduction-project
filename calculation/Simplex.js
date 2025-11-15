export default class SimplexMinimization {
  #iterations = [];
  #matrix;
  #lastRowInd;
  #lastColInd;

  constructor(matrix) {
    this.#matrix = matrix;
    this.#lastRowInd = matrix.length - 1;
    this.#lastColInd = matrix[0].length - 1;

    this.#simplex();
  }

  // Get the negative number with highest magnitude in last row
  #lastRowMin() {
    return Math.min(...this.#matrix[this.#lastRowInd].slice(0, -1));
  }

  // Find index of lastRowMin in the last row
  #pivotColInd() {
    return this.#matrix[this.#lastRowInd].indexOf(this.#lastRowMin());
  }

  // Find the smallest positive ratio in the pivotColumn
  #pivotRowInd() {
    // Creates an array of ratios of lastColElement / pivotColElement
    const ratios = this.#matrix
      .slice(0, this.#lastRowInd)
      .map((row) => row[this.#lastColInd] / row[this.#pivotColInd()]);

    // Removes non-positive ratios and find the smallest
    const minPosRatio = Math.min(...ratios.filter((num) => num > 0));

    // If Math.min is infinite, there are no positve ratios
    // This implies an infeasible problem
    if (!isFinite(minPosRatio)) {
      throw new Error("Problem is infeasible");
    }

    return ratios.indexOf(minPosRatio);
  }

  // Returns the element in the pivotColumn with the smallest ratio
  #pivotElem() {
    return this.#matrix[this.#pivotRowInd()][this.#pivotColInd()];
  }

  // Divides all elements in the pivot row with the pivot element
  #normalizePivotRow() {
    this.#matrix[this.#pivotRowInd()] = this.#matrix[this.#pivotRowInd()].map(
      (elem) => elem / this.#pivotElem(),
    );
  }

  // Multiplies elements of each row thats in the pivot column to each element of the pivot row
  // Subtracts the elemets of each row to the updated pivot row
  #gaussElimination() {
    this.#normalizePivotRow();

    const pivotRowInd = this.#pivotRowInd();
    const pivotColInd = this.#pivotColInd();
    const pivotRow = this.#matrix[pivotRowInd];

    this.#matrix = this.#matrix.map((row, index) => {
      if (index === pivotRowInd) return row;

      return row.map((elem, ind) => elem - row[pivotColInd] * pivotRow[ind]);
    });
  }

  // Adds the initial tableau and the following iterations to an array
  // performs gaussElimination until no negative values are in the last row
  #simplex() {
    this.#iterations.push(this.#matrix.map((row) => [...row]));
    while (this.#lastRowMin() < 0) {
      this.#gaussElimination();
      this.#iterations.push(this.#matrix.map((row) => [...row]));
    }
  }

  // Getters return duplicates of objects and arrays to ensure encapsulation
  get iterations() {
    return this.#iterations.map((iteration) =>
      iteration.map((row) => [...row]),
    );
  }

  get resultMatrix() {
    return this.#matrix.map((row) => [...row]);
  }

  get basicSol() {
    return [
      ...this.#matrix[this.#lastRowInd]
        .slice(0, -2)
        .concat(this.#matrix[this.#lastRowInd].slice(-1)),
    ];
  }

  get z() {
    return this.#matrix[this.#lastRowInd][this.#lastColInd];
  }
}
