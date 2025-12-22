import Hero from "../components/Hero";
import Services from "../components/Services";
import Team from "../components/Team";
import Contact from "../components/Contact";
import VideoHome from "../components/VideoHome";
import Working_with from "../components/content/Homes/workingwith";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Working_with />
      <VideoHome />
      <Team />
      <Contact />
    </main>
  );
}

export default Home;
