import Cards from "../../../components/Course/cards";

import courseData from "../../../common/data/courses.json";

export async function generateStaticParams() {
  return courseData.map(({ course }) => ({ course }));
}

export default async function Course({ params }) {
  const { course } = await params;

  return (
    <div className="relative">
      <Cards />
    </div>
  );
}
