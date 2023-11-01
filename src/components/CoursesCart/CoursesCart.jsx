const CoursesCart = () => {
  return (
    <div className="max-w-[310px] h-fit mx-auto shadow-lg px-5 rounded-lg mb-6 bg-white ">
      <h1 className="text-[#2F80ED] font-semibold text-[18px] my-3">
        Credit Hour Remaining 7 hr
      </h1>
      <hr />
      <div>
        <h2 className="font-bold text-[18px] my-2">Course Name</h2>
        <p>
          1. Introduction to c programming <br />
          2. Introduction to C++ for DSA <br />
          3. Software Engineering <br />
          4. Introduction to c programming <br />
          5. Introduction to C++ for DSA <br />
          6. Software Engineering <br />
          7. Introduction to c programming <br />
          8. Introduction to C++ for DSA <br />
          9. Software Engineering
        </p>
      </div>
      <hr className="mt-3" />
      <p className="text[16px] my-2">Total Credit Hour : 13</p>
      <hr />
      <p className="text[16px] my-2">Total Price : 48000 USD</p>
    </div>
  );
};

export default CoursesCart;
