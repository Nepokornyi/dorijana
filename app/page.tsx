import { Landing } from './components/Landing/Landing'
import { Intro } from './components/Intro'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Carousel } from './components/Carousel'

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-mono)]">
            <Landing />
            <Intro />
            <About />
            <Work />
            <Carousel />
            <Projects />
            <Footer />
        </div>
    )
}
