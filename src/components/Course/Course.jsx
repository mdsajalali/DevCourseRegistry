import { BsBook } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

const Course = ({ course }) => {
  const { cover, title, description, price, credit } = course;
  return (
    <div className="max-w-[310px] mx-auto shadow-lg px-5 rounded-lg mb-6 bg-white">
      <img className="mx-auto my-3" src={cover} alt={title} />
      <h1 className="my-2 text-[18px] font-semibold">{title}</h1>
      <p className="text-[15px] ">{description}</p>
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center gap-2">
          <FiDollarSign /> Price: {price}
        </div>
        <div className="flex items-center gap-2">
          <BsBook /> Credit: {credit}
        </div>
      </div>
      <button className="bg-[#2F80ED] hover:bg-sky-700 transition-all  w-full  py-2 rounded-lg text-white text-[18px] my-3">
        Select
      </button>
    </div>
  );
};

export default Course;
