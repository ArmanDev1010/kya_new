import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Section from "../components/section";
import Courses from "../components/courses";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Section />
      <Courses />
    </div>
  );
}
