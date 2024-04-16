import { useState } from "react"

function PostMortemNav({ activeIndex }: { activeIndex: number | null }) {

    const SECTION_NAVS = [
        { name: "Accomplishments", isActive: activeIndex === 1 ? true : false },
        { name: "Improvements", isActive: false },
        { name: "Incomplete", isActive: false },
    ]
    const [navs, setNavs] = useState(SECTION_NAVS)

    const scrollToSection = (currentIndex: number) => {
        setNavs(navs.map((n, k) => {
            if (k === currentIndex) return { ...n, isActive: true }
            else return { ...n, isActive: false }
        }))
        document.getElementById('feature' + (currentIndex + 1))?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <ul className="menu w-56 mt-10 text-sm">
            <li className="menu-title"><span className="">Features</span></li>

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

export default PostMortemNav