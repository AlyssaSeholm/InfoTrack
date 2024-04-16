import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setPageTitle } from "../common/headerSlice"
import PostMortemNav from "./components/PostMortemNav"
import PostMortemContent from "./components/PostMortemContent"


function PostMortem() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Documentation" }))
    }, [])


    return (
        <>
            <div className="bg-base-100 flex overflow-hidden rounded-lg document-view">
                <div className="flex-none p-4">
                    <PostMortemNav activeIndex={1} />
                </div>

                <div className="grow pt-12  overflow-y-scroll">
                    <PostMortemContent />
                </div>

            </div>

        </>
    )
}

export default PostMortem