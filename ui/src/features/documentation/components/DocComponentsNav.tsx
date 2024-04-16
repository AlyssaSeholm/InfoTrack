import { useState } from "react"

function DocComponentsNav({ activeIndex }: { activeIndex: number | null }) {

    const SECTION_NAVS = [
        { name: "Overview", isActive: activeIndex === 1 ? true : false },
        { name: "Input", isActive: false },
        { name: "Tooltip", isActive: false },
        { name: "DDL Button", isActive: activeIndex === 1 ? true : false },
        { name: "DaisyUI & MTW", isActive: false },
        { name: "Credits", isActive: false },
    ]
    const [navs, setNavs] = useState(SECTION_NAVS)

    const scrollToSection = (currentIndex: number) => {
        setNavs(navs.map((n, k) => {
            if (k === currentIndex) return { ...n, isActive: true }
            else return { ...n, isActive: false }
        }))
        document.getElementById('component' + (currentIndex + 1))?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <ul className="menu w-56 mt-10 text-sm">
            <li className="menu-title"><span className="">Components</span></li>

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

export default DocComponentsNav