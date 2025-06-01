import { Landing } from './components/Landing/Landing'
import { Intro } from './components/Intro'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { About } from './components/About'

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <Landing />
            <Intro />
            <About />
            <Work />
            <Projects />
            <Contact />
        </div>
    )
}
