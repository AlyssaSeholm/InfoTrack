import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPageTitle } from "../common/headerSlice"
import AboutTheProjectNav from "./components/AboutTheProjectNav"
// import ReadMe from "./components/GettingStartedContent"
import AboutTheProjectContent from "./components/AboutTheProjectContent"



function GettingStarted() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Documentation" }))
    }, [])


    return (
        <>
            <div className="bg-base-100  flex overflow-hidden  rounded-lg  document-view">
                <div className="flex-none p-4">
                    <AboutTheProjectNav activeIndex={1} />
                </div>

                <div className="grow pt-12  overflow-y-scroll">
                    <AboutTheProjectContent />
                </div>

            </div>

        </>
    )
}

export default GettingStarted