import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
