const About = () => {
    return (
      <div className="absolute md:-bottom-10 -bottom-20 left-1/2 transform -translate-x-1/2 w-4/5">
        <div className="bg-slate-900 grid grid-cols-3">
          <div className="sec1 p-5 font-bold border-r  text-center">
          <h3 className="md:text-3xl text-xl">140K +</h3>
          <p className="md:text-lg text-sm">Our registerd member</p>
          </div>
          <div className="sec2 p-5 font-bold  text-center"><h3 className="md:text-3xl text-xl">100K +</h3>
          <p className="md:text-lg text-sm">Master chef mentor</p></div>
          <div className="sec3 p-5 font-bold border-l text-center"><h3 className="md:text-3xl text-xl">230K +</h3>
          <p className="md:text-lg text-sm">Vendor platform partner</p></div>
        </div>
      </div>
    );
  };
  
  export default About;
  