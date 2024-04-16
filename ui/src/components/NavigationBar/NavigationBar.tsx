import { FC } from 'react';

interface NavigationBarProps {}

//#DevNote: This was the first attempt at the navbar component. It was later replaced with the one from daisyUI.
//  Left this in as I want to exand upon using storybook and testing.
const NavigationBar: FC<NavigationBarProps> = ( {} ) => {
  
  return (
    <>
      <div className="navbar bg-base-100 w-full h-20" data-testid="NavigationBar">
        <div className="flex-1">
          <div tabIndex={0} role="button" className="btn btn-ghost text-xl d-flex h-20">
            <img src={'/logo.png'} className='h-16' alt="My Image" />
            CAT-A-LOG
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="acid"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Retro" value="retro"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Valentine" value="valentine"/></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Aqua" value="aqua"/></li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-xl">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default NavigationBar;
