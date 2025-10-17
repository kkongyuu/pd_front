import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Contact from '../components/Contact'
import VideoHome from '../components/VideoHome'

function Home() {
  return (
    <main>
      <Hero />
      <VideoHome/>
      <Services />
      <Team />
      <Contact />
    </main>
  )
}

export default Home