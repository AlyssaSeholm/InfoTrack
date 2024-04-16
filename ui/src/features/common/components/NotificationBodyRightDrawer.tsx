function NotificationBodyRightDrawer(){
    return(
        <>
             {
                // Quickly rendering a list of notifications for demo
                [...Array(15)].map((_, i) => {
                    return <div key={i} className={"grid mt-3 card bg-base-100 rounded-box p-3" + (i < 5 ? " bg-blue-100" : "")}>
                            {i % 2 === 0 
                                ? `Your sales have increased 30% more than from yesterday` 
                                : `Total likes for instagram post - New launch this week,  has crossed 100k `}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationBodyRightDrawer