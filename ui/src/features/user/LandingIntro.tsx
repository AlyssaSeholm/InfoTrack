
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

        </div>
      </div>
    </div>
  )

}

export default LandingIntro