
import { useState } from 'react';
import TitleCard from '../../../components/Cards/TitleCard'
import FloatingLabelInput from '../../../components/common/input/floatingLabel/FloatingLabelInput'
import TextDropdown, { iMenuItem } from '../../../components/common/input/textdropdown/TextDropdown';
import DelayedTooltip from '../../../components/common/delayedTooltip/DelayedTooltip';

function DocComponentsContent() {


    //input example setup
    const [value, setValue] = useState<string>("");
    const updateFormValue = (newValue: string) => {
        setValue(newValue)
    }

    //text button dropdown example setup
    const [queryEngineId, setQueryEngineId] = useState<string>('1');
    const getSearchEngineMenuItems = (): iMenuItem[] => {
        return [
          { value: '1', label: 'Google', disabled: false },
          { value: '2', label: 'Bing', disabled: false },
          { value: '3', label: 'Yahoo', disabled: false },
          { value: '4', label: 'DuckDuckGo', disabled: false },
        ];
      }
      const getSearchEngineName = (id: string): string => {
        return getSearchEngineMenuItems().find(engine => engine.value === id)?.label ?? '';
      }
      const handleNewSearchEngineSelected = (e: iMenuItem) => { 
        console.log( `New search engine chosen! ${e.label}` );
        setQueryEngineId(e.value);
      }

    return (
        <>
            <article className="prose">
                <h1  className="" >Features & Components</h1>
                <p>
                    I have created a custom floating label input component that can be used in forms. It is a simple input component
                    with a floating label. I also have a few other components I created for this project - the button dropdown
                    menus, tooltip wrapper, and styling for modals.</p>


                <h2 id="component1"> Feature Overview </h2>
                <p className=''> I wish I had more time to play around  </p>
                <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                    <li> <span className='font-bold'>Themes</span>: tried to use theme-safe styling sitewide, but did run into a few difficulties</li>
                    <li> <span className='font-bold'>Submenu support</span> in sidebar</li>
                    <li> Store management using <span className='font-bold'>redux toolkit</span></li>
                    <li> <span className='font-bold'>Daisy UI</span> components (and I did cave and ended up using some material-tailwind too)</li>
                    <li> <span className='font-bold'>Right and left sidebar</span>, Universal loader, notifications, and other components</li>
                    <li> React <span className='font-bold'>chart js 2</span> and table examples: these are only hooked up to dummy data. I was keen to get
                        them wired up to the data, but time was against me.</li>
                </ul>

                {/* Form Input*/}
                <h2 id="component2">Input</h2>
                <p>
                </p>
                Example of My Custom Floating Label Input Component -
                <pre className='my-3 p-2 text-sm'><code>
                    {`<FloatingLabelInput labelText='Example Txt' placeholderTxt=' ' value=' ' setValue={() => {}} />`}
                </code></pre>

                <div className="relative w-full min-w-[200px] h-10 mt-8">
                    <FloatingLabelInput labelText="Example" value={value} setValue={updateFormValue} placeholderTxt={''} />
                </div>
                <label className="label-text-alt">Isn't it fancy? =D</label>



                {/* tooltip */}
                <h2 id="component3">Tooltip</h2>
                <pre className='my-3 p-2 text-sm'><code>
                    <br />
                    {`<DelayedTooltip content="Fancy tooltip!" placement='bottom'>`} <br />
                        ...  <br />
                    {`</DelayedTooltip>`} <br />
                </code></pre>

                <div style={{margin: '1em'}}>
                    <DelayedTooltip content="Fancy tooltip!" placement='bottom' >
                        <button className='btn btn-primary'>Hover over me!</button>
                    </DelayedTooltip>
                </div>



                {/* text dropdown button */}
                <h2 id="component4" className='pt-8'>Dropdown Button Menu</h2>
                <div style={{display: 'flex', flexWrap: 'nowrap', alignItems: 'baseline', padding: '0 0.25rem', justifyContent: 'center', marginTop: '-2rem'}}>
                    <h3 style={{margin: '0'}}>The keywords will be used to search </h3>
                    <TextDropdown
                        selectedValue='1'
                        btnLabel={getSearchEngineName(queryEngineId)}
                        menuItems={getSearchEngineMenuItems()}
                        onSelect={handleNewSearchEngineSelected} />
                    <h3>! </h3>
                </div>
                <label className="label-text-alt">Click on 'Google' to open the menu! ^^</label>




                {/* Cards */}
                <h2 id="component5">Daisy UI & Material Tailwind</h2>
                <p>
                    I know that Andres mentioned that he wasn't a fan of Google and their ecosystem, but I have to say that I am a fan of the Material Design 
                    in general - it's nice to not to have to reinvent the wheel and the sheer amout of style ux/ui documents they have is honestly just fantastic.
                    I do treat their documents as more of guidelines than absolute rules, but I do like to use them as a starting point.
                </p>
                <p>Like the sheer amount of <a href="https://m3.material.io/foundations/accessible-design/accessibility-basics" target='_blank'>content they have 
                just on Accessibility</a> is really nice to have as references. And - just look at the sheer amount of information there is    
                on <a href="https://m2.material.io/components/chips#types" target='_blank'> design around chips</a></p>
                <p>That being said, I did try to use the Daisy UI components in this project. </p>
                <h4 style={{}}>Daisy UI Component Example -</h4>
                <div className="mockup-code mt-4">
                    <pre className='my-0 py-0'><code>{'<TitleCard title={"Card Title"}> <h1>Card Body</h1> </TitleCard>'}</code></pre>
                </div>
                <div className='p-8 bg-base-300 rounded-lg mt-4'>
                    <TitleCard title={"Card Title"}> <h1>Card Body</h1> </TitleCard>
                </div>
                <p>See! It's just so clean and nice. Although, I still am rather keen on the <a href='https://www.material-tailwind.com/' target="_blank">Material Tailwind components</a>.</p>





                <h2 id="component6" className="pt-4">Credits & Attributions - </h2>
                <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                    <li>Mouse toy loading animation: <a href="https://www.flaticon.com/free-animated-icons/wind-up" title="wind up animated icons">Wind up animated icons created by Freepik - Flaticon</a></li>
                </ul>


                <div className='h-32'></div>


            </article>
        </>
    )
}

export default DocComponentsContent