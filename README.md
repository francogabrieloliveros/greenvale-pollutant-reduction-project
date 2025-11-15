<img src="/public/aerokatharos.png" alt="" style="width: 100%;">

## City of Greenvale Pollutant Reduction Project

This project aims to aid the pollutant reduction project of City of Greenvale by approximating the smallest cost to meet the City's goals pollutant reduction. A list of mitigation projects and their corresponding cost can be selected and the program will display the optimum number of implementations per project.

## Calculations

### Mitigation Projects

Each project reduces a certain amount of gas pollutant. Selected projects by the user are used for the calculation.

### Options

In the options, you can change how much tons of gas pollutant is aimed to be reduced by the program. Pollutants to be reduced are:

- CO2
- NOx
- SO2
- PM2.5
- CH4
- VOC
- CO
- NH3
- Black Carbon (BC)
- N2O

### Tableau

All selected projects and the values of gas pollutants to be reduced are added to a Tableau class. This class setups a two-dimensional array to be used in the Simplex calculation.

### Simplex

The Tableau object is utilized by the Simplex class. Dual Simplex Minimization is performed in the tableau, where the final solution is contained in the last row of the tableau. The Simplex class also contains all the iterations and solutions of the resulting tableau.

## Installation

Try out the website with this link:

    https://greenvale-pollutant-reduction-proje.vercel.app/

or create a local copy:

    git clone https://github.com/francogabrieloliveros/greenvale-pollutant-reduction-project.git .

    npm install

    npm run dev

take note that you should have nodeJS and npm installed in your local machine.
