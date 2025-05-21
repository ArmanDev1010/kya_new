import Left from "./Left";
import Right from "./Right";

export default function Index({ video, title, text, course, testimonials }) {
  return (
    <div className="course sticky top-0 h-screen overflow-hidden bg-white flex flex-[1_1_auto]">
      <Left video={video} title={title} text={text} />
      <Right course={course} testimonials={testimonials} />
    </div>
  );
}
