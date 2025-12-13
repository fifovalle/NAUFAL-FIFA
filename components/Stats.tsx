import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
      {/* ============== YEARS EXPERIENCE =============== */}
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={2} delay={3} duration={5} className="block w-8.75" />
          <div>+</div>
        </div>
        <span>
          Years <br /> Experience
        </span>
      </div>

      {/* ============== CLIENTS EXPERIENCE =============== */}
      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp
            end={8}
            delay={3}
            duration={7}
            className="block w-16.25 xl:w-8.75"
          />
        </div>
        <span>
          Clients <br /> Organizations
        </span>
      </div>
    </div>
  );
};

export default Stats;
