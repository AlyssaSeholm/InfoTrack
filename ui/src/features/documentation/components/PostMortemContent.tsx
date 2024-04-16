

function PostMortemContent() {


  return (
    <>
      <article className="prose">
        <h1 className="">Post Mortem </h1>


        <h2 id="feature1">What Went Right?</h2>
        <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }} >
          <li> <b>I learned so much. </b> </li>
          <li> I got a lot of practice in setting up tools I use and I think take for granted. </li>
          <li> Themes! The <b>cupcake</b> theme is definitely a favorite of mine. </li>
          <li> ... over engineering? Y'all mentioned it, so I feel I went a wee bit overboard *<i>on some things</i>*... maybe lol</li>
        </ul>


        <h2 id="feature2">What Could Have Gone Better?</h2>
        <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }} >
          <li> <b>Prioritizing testing.</b> I am actually really interested in trying to 
            use <a href="https://storybook.js.org/" target='_blank'>storybook</a> and am quite bummed I didn't 
            set aside adequate time to get it together. </li>
          <li> I also dropped the ball on unit and integration testing. </li>
          <li> Themes! The <b>cupcake</b> theme is definitely a favorite of mine. </li>
        </ul>

        <h2 id="feature3">What's Incomplete?</h2>
        <p>
          I suppose it'd be easier to list what is complete, but here are a few things that are incomplete:
          <ul  style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }} >
            <li>I find the dashboard to be woefully underwhelming compared to what I know I am capable of.</li>
            <li>Companies were suppoed to be more fleshed out. Shoot, you can't even add one on the dashboard.</li>
            <li>Profile updating</li>
            <li>Search results data - I'm not getting too much out of it like I had hoped. That and I wish I had 
              just wired it up to the table components and then put those in collapsible accordions.</li>
            <li>...</li>
          </ul>
        </p>



        <div className='h-24'></div>


      </article>
    </>
  )
}

export default PostMortemContent