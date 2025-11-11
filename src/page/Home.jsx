import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import Contact from "../components/Contact";
import VideoHome from "../components/VideoHome";
import Working_with from "../components/Homes/workingwith";

function Home() {
  return (
    <main>
      <Hero />
      <VideoHome />
      <Services />
      <Working_with />
      <Team />
      <Contact />
    </main>
  );
}

export default Home;
