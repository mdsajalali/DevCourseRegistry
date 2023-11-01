const CoursesCart = () => {
  return (
    <div className="max-w-[310px] h-[500px] mx-auto shadow-lg px-5 rounded-lg mb-6 bg-white ">
      <img
        className="mx-auto my-3"
        src="https://i.ibb.co/SnwsWfp/Rectangle-2-2.png"
        alt=""
      />
      <h1 className="my-2 text-[18px] font-semibold">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
        ullam!
      </h1>
      <p className="text-[15px] ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, autem
        voluptates odit accusantium dolor sunt dicta cumque nemo ullam labore!
      </p>
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center gap-2">22222222</div>
        <div className="flex items-center gap-2">22222222222</div>
      </div>
      <button className="bg-[#2F80ED] hover:bg-sky-700 transition-all  w-full  py-2 rounded-lg text-white text-[18px] my-3">
        Select
      </button>
    </div>
  );
};

export default CoursesCart;
