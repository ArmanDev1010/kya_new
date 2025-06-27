import courseData from "../../../common/data/courses.json";

export async function generateStaticParams() {
  return courseData.map(({ course }) => ({ course }));
}

export default async function Course({ params }) {
  const { course } = await params;

  return (
    <div className="relative h-screen">
      <p>{course}</p>
    </div>
  );
}
