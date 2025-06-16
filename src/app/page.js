import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Section from "../components/partners";
import Courses from "../components/courses";
import Leadearboard from "../components/leaderboard";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Section />
      <Courses />
      <Leadearboard />
    </div>
  );
}
