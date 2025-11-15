import Header from "/src/assets/Header.jsx";
import planting from "/planting.jpeg";
import hand from "/hand.jpg";

function Landing() {
  return (
    <>
      <Header />

      <main className="relative top-[50px] z-0">
        <div className="relative h-140">
          <div className="absolute h-full w-full bg-black opacity-70"></div>
          <img src={planting} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="absolute top-0 flex h-140 w-full flex-col items-center justify-evenly">
          <h1 className="block text-center font-[Helvetica] text-7xl font-bold text-white">
            AERIO KATHAROS
          </h1>
          <div className="mr-auto ml-auto w-4/5 max-w-[730px]">
            <p className="block text-center text-2xl font-light text-white">
              Committed to improving lives by ensuring clean air, preserving our
              natural environment, and fostering healthier communities for
              generations to come.
            </p>
          </div>

          <button className="h-15 w-50 rounded-2xl bg-[#428F47] text-xl text-white transition-all hover:bg-white hover:text-[#428F47]">
            <a href="/project">Try Project</a>
          </button>
        </div>

        <div className="p-10">
          <h2 className="text-4xl font-bold">The Project</h2>
          <div className="mt-10 flex h-80">
            <p className="mr-10 text-justify text-2xl md:line-clamp-10">
              This optimization tool empowers Greenvale City to make smarter,
              data-driven decisions that significantly reduce pollutant
              emissions while maximizing the efficiency of public resources. By
              simulating different mitigation strategies—such as retrofits,
              transportation improvements, or energy-saving initiatives—the
              system identifies the most cost-effective combination that meets
              environmental targets without overspending. It helps planners
              visualize trade-offs, quantify potential emission reductions, and
              confidently choose interventions that deliver the greatest
              environmental impact. With this solution, Greenvale City can
              progress toward cleaner air, healthier communities, and a more
              sustainable future.
            </p>
            <img
              src={hand}
              alt=""
              className="hidden h-full w-full max-w-[1000px] shrink-0 rounded-4xl object-cover md:block md:w-[50dvw]"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
