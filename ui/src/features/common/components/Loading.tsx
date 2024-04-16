//#DevNote: This is the silly/fun loading screen animation =D
function Loading() {

    return (
        <>
            <div className="loading-mouse-container">
                <div className="loading-mouse-background">
                    <img src={'/loading-mouse.gif'} alt="loading..." className="w-1/2 mx-auto loading-mouse-gif" />
                    <h1 className="loading-text text-accent">Loading...</h1>
                </div>
            </div>
        </>
    )
}

export default Loading