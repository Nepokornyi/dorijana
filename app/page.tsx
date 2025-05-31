import { Landing } from './components/Landing/Landing'
import { About } from './components/About'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export default function Home() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <Landing />
            <About />
            <Work />
            <Projects />
            <Contact />
        </div>
    )
}
