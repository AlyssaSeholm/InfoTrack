import Subtitle from "../Typography/Subtitle"

  
  function TitleCard({title, children, topMargin, TopSideButtons}: {title: string, children: React.ReactNode, topMargin?: string, TopSideButtons?: React.ReactNode}){
      return(
          <div className={"card w-full p-6 bg-base-100 shadow-xl " + (topMargin || "mt-6")}>

              <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
                {title}
                
                { TopSideButtons && <div className="inline-block float-right">{TopSideButtons}</div> } {/* Top side button, show only if present */}
              </Subtitle>
              
              <div className="divider mt-2"></div>
          
              {/** Card Body */}
              <div className='h-full w-full pb-6 bg-base-100'> {children} </div>
          </div>
          
      )
  }
  
  
  export default TitleCard