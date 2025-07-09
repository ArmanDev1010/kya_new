import Hero from "../../../components/Course/hero";
import Cards from "../../../components/Course/cards";

import courseData from "../../../common/data/courses.json";

export async function generateStaticParams() {
  return courseData.map(({ course }) => ({ course }));
}

export default async function Course({ params }) {
  const { course } = await params;

  const courseInfo = courseData.find((c) => c.course === course);

  if (!courseInfo) {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-white z-[999999999999999999] flex justify-center items-center">
        <p className="text-[4vw] pointer-events-none">Course not found</p>
      </div>
    );
  }

  const { title, description } = courseInfo;

  return (
    <div className="relative">
      <Hero course={course} title={title} description={description} />
      <Cards course={course} />
    </div>
  );
}
