import PropTypes from "prop-types";

const CoursesCart = ({ courseTitle, price, credit }) => {
  return (
    <div className="max-w-[310px] h-fit mx-auto shadow-lg px-5 rounded-lg mb-6 bg-white ">
      <h1 className="text-[#2F80ED] font-semibold text-[18px] my-3">
        Every Course purchase Details
      </h1>
      <hr />
      <div>
        <h2 className="font-bold text-[18px] my-2 ">Course Name</h2>
        {courseTitle.map((item, id) => (
          <ul key={id}>
            {id + 1} - {item}
          </ul>
        ))}
      </div>
      <hr className="mt-3" />
      <p className="text[16px] my-2">Total Credit Hour : {credit}</p>
      <hr />
      <p className="text[16px] my-2">Total Price : {price} USD</p>
    </div>
  );
};

CoursesCart.propTypes = {
  courseTitle: PropTypes.array,
  price: PropTypes.number,
  credit: PropTypes.number,
};
export default CoursesCart;
