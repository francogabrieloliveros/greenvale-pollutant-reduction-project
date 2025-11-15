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

  #lastRowMin() {
    return Math.min(...this.#matrix[this.#lastRowInd].slice(0, -1));
  }

  #pivotColInd() {
    return this.#matrix[this.#lastRowInd].indexOf(this.#lastRowMin());
  }

  #pivotRowInd() {
    const ratios = this.#matrix
      .slice(0, this.#lastRowInd)
      .map((row) => row[this.#lastColInd] / row[this.#pivotColInd()]);

    const minPosRatio = Math.min(...ratios.filter((num) => num > 0));

    if (!isFinite(minPosRatio)) {
      throw new Error("Problem is infeasible");
    }

    return ratios.indexOf(minPosRatio);
  }

  #pivotElem() {
    return this.#matrix[this.#pivotRowInd()][this.#pivotColInd()];
  }

  #normalizePivotRow() {
    this.#matrix[this.#pivotRowInd()] = this.#matrix[this.#pivotRowInd()].map(
      (elem) => elem / this.#pivotElem(),
    );
  }

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

  #simplex() {
    this.#iterations.push(this.#matrix.map((row) => [...row]));
    while (this.#lastRowMin() < 0) {
      this.#gaussElimination();
      this.#iterations.push(this.#matrix.map((row) => [...row]));
    }
  }

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
