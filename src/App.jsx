import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import CoursesCart from "./components/coursesCart/coursesCart";

const App = () => {
  return (
    <div className="bg-[#F3F3F3] w-full min-h-screen">
      <Header />
      <div className="md:flex md:px-20 md:pt-5 md:pb-16">
        <Courses />
        <CoursesCart />
      </div>
    </div>
  );
};

export default App;
