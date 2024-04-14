import Header from "./Header"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from '../routes'
import { Suspense, lazy,  useEffect, useRef } from 'react'
import LoadingContent from "./LoadingContent"
import { useSelector } from 'react-redux'

// import { RootState } from '../app/store'; // Import RootState type
// import { HeaderState } from "../features/common/headerSlice"
import { RootState } from "../app/store"
import Footer from "../components/Footer/Footer"
import Loading from "../features/common/components/Loading"

const Page404 = lazy(() => import('../pages/protected/404'))


function PageContent(){
    // const mainContentRef = useRef(null);
    // const {pageTitle} = useSelector(state => state.header)


    // Scroll back to top on new page load
    // useEffect(() => {
    //     mainContentRef.current.scroll({
    //         top: 0,
    //         behavior: "smooth"
    //       });
    //   }, [pageTitle])

    const mainContentRef = useRef<HTMLElement | null>(null);
    const pageTitle = useSelector((state: RootState) => state.header);

    // Scroll back to top on new page load
    useEffect(() => {
        mainContentRef.current?.scroll({
            top: 0,
            behavior: "smooth"
        });
    }, [pageTitle])

    return(
        <div className="drawer-content flex flex-col ">

            <Header/>
            <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6  bg-base-300" ref={mainContentRef}>
                <Suspense fallback={<LoadingContent />}>
                        <Routes>
                            {
                                routes.map((route, key) => {
                                    return(
                                        <Route
                                            key={key}
                                            // exact={true}
                                            path={`${route.path}`}
                                            element={<route.component />}
                                        />
                                    )
                                })
                            }

                            {/* Redirecting unknown url to 404 page */}
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                </Suspense>
                <div className="h-16"></div>
            </main>
            <Footer />
        </div> 
    )
}


export default PageContent
