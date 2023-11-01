import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import CoursesCart from "./components/coursesCart/coursesCart";

const App = () => {
  return (
    <div className="bg-[#F3F3F3] ">
      <Header />
      <div className="xl:w-[1450px] mx-auto min-h-screen ">
        <div className="md:flex justify-center px-5 md:px-10 py-5">
          <Courses />
          <CoursesCart />
        </div>
      </div>
    </div>
  );
};

export default App;
