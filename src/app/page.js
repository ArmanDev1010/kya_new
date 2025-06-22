import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Section from "../components/partners";
import Courses from "../components/courses";
import Leadearboard from "../components/leaderboard";
import Advantages from "../components/advantages";
import Team from "../components/team";
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Section />
      <Courses />
      <Leadearboard />
      <Advantages />
      <Team />
      <Footer />
    </div>
  );
}
