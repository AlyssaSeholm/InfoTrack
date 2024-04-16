import { Link } from 'react-router-dom'
import PostMortemNav from '../features/documentation/components/PostMortemNav'
import AboutTheProjectContent from '../features/documentation/components/AboutTheProjectContent'
import AboutTheProjectNav from '../features/documentation/components/AboutTheProjectNav'
import DocComponentsNav from '../features/documentation/components/DocComponentsNav'
import PostMortemContent from '../features/documentation/components/PostMortemContent'
import DocComponentsContent from '../features/documentation/components/DocComponentsContent'

function Documentation() {
    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center">
                <div className="card mx-auto w-full max-w-4xl  bg-base-100 shadow-xl">
                    <div className="py-12 p-10 h-screen flex overflow-hidden  bg-base-100 rounded-xl" >
                        <div className="flex-none p-4 overflow-y-scroll gap-6 ">
                            <h1 className='text-3xl font-bold mb-2'>Cat-A-Log SEO</h1>
                            <Link to="/login">
                                <button type="submit" className={"btn normal-case btn-xs btn-primary"}>
                                    Live Preview
                                </button>
                            </Link>

                            <AboutTheProjectNav activeIndex={null} />
                            <PostMortemNav activeIndex={null} />
                            <DocComponentsNav activeIndex={null} />
                        </div>

                        <div className="grow pt-12  overflow-y-scroll">
                            <AboutTheProjectContent />
                            <PostMortemContent />
                            <DocComponentsContent />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Documentation