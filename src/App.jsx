import { useState } from "react";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import CoursesCart from "./components/coursesCart/coursesCart";

const App = () => {
  const [courseTitle, setCourseTitle] = useState([]);
  const [price, setPrice] = useState(0);
  const [credit, setCredit] = useState(0);

  const handleCourseTitle = (title, price, credit) => {
    const newCourseTitle = [...courseTitle, title];

    setCourseTitle(newCourseTitle);
    setPrice((prevPrice) => prevPrice + price);
    setCredit((prevCredit) => prevCredit + credit);
  };

  return (
    <div className="bg-[#F3F3F3] ">
      <Header />
      <div className="xl:w-[1450px] mx-auto min-h-screen ">
        <div className="md:flex justify-center px-5 md:px-10 py-5">
          <Courses handleCourseTitle={handleCourseTitle} />
          <CoursesCart
            courseTitle={courseTitle}
            price={price}
            credit={credit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
