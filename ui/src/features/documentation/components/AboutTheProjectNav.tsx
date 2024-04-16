import { useState } from "react"

function AboutTheProjectNav({ activeIndex }: { activeIndex: number | null }) {

    const SECTION_NAVS = [
        { name: "Intro", isActive: activeIndex === 1 ? true : false },
        { name: "Setup", isActive: false },
        { name: "Tailwind", isActive: false },
        { name: "ChartJS", isActive: false },
        { name: "ReduxToolkit", isActive: false },
        { name: "Icons", isActive: false },
        { name: "Structure", isActive: false },
        { name: "Frontend Map", isActive: false },
        { name: "Backend Map", isActive: false },
    ]
    const [navs, setNavs] = useState(SECTION_NAVS)

    const scrollToSection = (currentIndex: number) => {
        setNavs(navs.map((n, k) => {
            if (k === currentIndex) return { ...n, isActive: true }
            else return { ...n, isActive: false }
        }))
        document.getElementById('abouttheproject' + (currentIndex + 1))?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <ul className="menu w-56 mt-10 text-sm">
            <li className="menu-title"><span className="">Getting Started</span></li>

            {
                navs.map((n, k) => {
                    return (
                        <li key={k} onClick={() => scrollToSection(k)} className={n.isActive ? "bordered" : ""}><a>{n.name}</a></li>
                    )
                })
            }
        </ul>
    )
}

export default AboutTheProjectNav