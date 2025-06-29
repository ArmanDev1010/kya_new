import Hero from "../components/Home/hero";
import Section from "../components/Home/partners";
import Courses from "../components/Home/courses";
import Leadearboard from "../components/Home/leaderboard";
import Advantages from "../components/Home/advantages";
import Team from "../components/Home/team";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Section />
      <Courses />
      <Leadearboard />
      <Advantages />
      <Team />
    </div>
  );
}
