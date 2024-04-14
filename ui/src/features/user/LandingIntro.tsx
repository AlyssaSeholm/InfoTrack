import TemplatePointers from "./components/TemplatePointers"
import catalogLogo from "../../assets/images/images"


function LandingIntro() {

  return (
    <div className="hero min-h-full rounded-l-xl">
      <div className="hero-content py-12 h-full">
        <div className="max-w-md h-full logo-large">



          <div className="m-auto flex logo-bg" >
            <img src={'/logo.png'} alt="My Image"/>  
          </div>
          <h1 className='text-4xl text-center text-accent logo-subtext'>SEO Solutions</h1>
          <h3 className='text-center text-4xl pt-6 text-primary flex'>A one-stop solution for all your SEO needs!</h3>
          {/* <h1 className='text-3xl text-center font-bold '><img src="/logo192.png" className="w-12 inline-block mr-2 mask mask-circle" alt="dashwind-logo" />DashWind</h1> */}

          {/* <div className="text-center mt-12"><img src="./intro.png" alt="Dashwind Admin Template" className="w-48 inline-block"></img></div> */}

          {/* Importing pointers component */}
          {/* <TemplatePointers /> */}

        </div>

      </div>
    </div>
  )

}


// margin-top: -5.5rem;
// color: white;
// font-weight: 600;
// text-transform: uppercase;
// font-size: 1.75rem;
// /* text-shadow: -2px -2px #01001e, 2px 2px #01001e, -2px 2px #01001e, 2px -2px #01001e; */
// -webkit-text-stroke: 1.5px #0000008c;
export default LandingIntro