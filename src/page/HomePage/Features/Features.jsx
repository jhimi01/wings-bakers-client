import './Features.css'

const Features = () => {
    return (

        <>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-9 text-yellow-50">How we work</h1>
        <div className="relative">
      <div className="md:flex items-center justify-center gap-10 px-3 text-center md:w-3/4 w-full mx-auto md:mt-10 md:mb-20 my-10">
        <div
          style={{ boxShadow: "6px 6px 30px 0px #f3d9983e" }}
          className="border group rounded-lg hoverEffect hover:text-white flex items-center px-5 py-8 space-y-7 flex-col"
        >
          <h1 className="textBorder text-8xl font-bold group-hover:text-white">
            01
          </h1>
          <h2 className="font-bold text-2xl text-[#ffbe76] group-hover:text-white">
            Make Appointment
          </h2>
          <p className="text-gray-600 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <button className="text-xl rounded-none btn border-none bg-[#e08c68] text-white hover:bg-[#f2a17d]">
            Read More
          </button>
        </div>

        <div
           style={{ boxShadow: "6px 6px 30px 0px #f3d9983e" }}
          className="bg-slate-900 rounded-lg flex items-center px-5 py-8 space-y-7 flex-col"
        >
          <h1 className="textBorder textBorder-middle text-9xl font-bold">
            02
          </h1>
          <h2 className="font-bold text-2xl text-[#fff]">Take Treatment</h2>
          <p className="text-gray-600 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <button className="text-xl rounded-none btn border-none text-[#ffbe76] bg-white hover:bg-[#e08c6800] hover:text-[#fff]">
            Read More
          </button>
        </div>
        <div
            style={{ boxShadow: "6px 6px 30px 0px #f3d9983e" }}
          className="border group hoverEffect rounded-lg flex items-center px-5 py-8 space-y-7 flex-col"
        >
          <h1 className="textBorder text-8xl font-bold group-hover:text-white">
            03
          </h1>
          <h2 className="font-bold text-2xl text-[#ffbe76] group-hover:text-white">
            Registration
          </h2>
          <p className="text-gray-600 text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of.
          </p>
          <button className="text-xl btn rounded-none border-none bg-[#e08c68] text-white hover:bg-[#f2a17d]">
            Read More
          </button>
        </div>
      </div>
    </div>
        </>

    );
};

export default Features;