import Header from "/src/assets/Header.jsx";
import planting from "/planting.jpeg";
import hand from "/hand.jpg";

function Landing() {
  return (
    <>
      <Header />

      <main className="z-0 relative top-[50px]">
        <div className="relative h-140">
          <div className="absolute w-full h-full bg-black opacity-70"></div>
          <img src={planting} alt="" className="object-cover h-full w-full" />
        </div>

        <div className="absolute h-140 top-0 w-full flex flex-col justify-evenly items-center">
          <h1 className="text-white block text-center font-bold text-7xl font-[Helvetica]">
            AERIO KATHAROS
          </h1>
          <div className="w-4/5 mr-auto ml-auto max-w-[730px]">
            <p className="font-light text-white block text-center text-2xl">
              Committed to improving lives by ensuring clean air, preserving our
              natural environment, and fostering healthier communities for
              generations to come.
            </p>
          </div>

          <button
            className="bg-[#428F47] text-white h-15 w-50 text-xl rounded-2xl 
            hover:bg-white hover:text-[#428F47] transition-all"
          >
            <a href="/project">Try Project</a>
          </button>
        </div>

        <div className="p-10">
          <h2 className="text-4xl font-bold">The Project</h2>
          <div className="mt-10 flex h-80">
            <p className="text-2xl mr-10 text-justify md:line-clamp-10">
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
              className="object-cover w-full h-full rounded-4xl md:block max-w-[1000px] md:w-[50dvw] shrink-0 hidden"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Landing;
