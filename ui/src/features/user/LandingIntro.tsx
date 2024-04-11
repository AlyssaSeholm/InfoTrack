import TemplatePointers from "./components/TemplatePointers"
import logo from "../../assets/images/images"


function LandingIntro(){

    return(
        <div className="hero min-h-full rounded-l-xl bg-base-200">
            <div className="hero-content py-12">
              <div className="max-w-md">

              <h1 className='text-3xl text-center font-bold'>CAT-O-LOG: SEO Solutions!</h1>
              <h3 className='text-center text-lg font-semibold'>A one-stop solution for all your SEO needs!</h3>


              <img src={'/logo.png'} alt="My Image" />
              {/* <h1 className='text-3xl text-center font-bold '><img src="/logo192.png" className="w-12 inline-block mr-2 mask mask-circle" alt="dashwind-logo" />DashWind</h1> */}

              {/* <div className="text-center mt-12"><img src="./intro.png" alt="Dashwind Admin Template" className="w-48 inline-block"></img></div> */}
              
              {/* Importing pointers component */}
              {/* <TemplatePointers /> */}
              
              </div>

            </div>
          </div>
    )
      
  }
  
  export default LandingIntro