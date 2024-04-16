

function AboutTheProjectContent() {

  return (
    <>
      <article className="prose" style={{maxWidth: '85%'}}>
        <h1 className="">~ About the Project ~</h1>
        {/* Introduction */}
        <h2 className="" id="abouttheproject1">Introduction</h2>
        <p>First, thank you.
          Thank you for your time during this interview process.
          Thank you for being patient with me while I really took the "over-engineer the solution" to heart lol.
          Thank you for taking the time to review my project.
          Finally, thank you in advanced for any feedback/suggestions/notes.</p>
        <p>I have always felt the most growth I have made as a developer is when I enter into the gauntlet of interviews and their projects, so I'm keen for any feedback =] </p>
        <h4> Core libraries used - </h4>
        <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <li><a href="https://reactjs.org/" target="_blank">React JS </a></li>
          <li><a href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
          <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a></li>
          <li><a href="https://daisyui.com/" target="_blank">Daisy UI </a></li>
          <li><a href="https://heroicons.com/" target="_blank">HeroIcons </a></li>
          <li><a href="https://redux-toolkit.js.org/" target="_blank">Redux toolkit </a></li>
          <li><a href="https://react-chartjs-2.js.org/" target="_blank">React ChartJS 2 </a></li>
        </ul>



        {/* How to Use */}
        <h2 id="abouttheproject2">Notes on the Project & Setup</h2>
        <p>
          I used <b>SQLExpress</b>, so there's a few notes in the (Infrastructure project's) ReadMe files on the commands to get the migration sorted.
          <br />
          <a href="https://github.com/srobbin01/daisyui-admin-dashboard-template" className='text-sm text-blue-500' target="_blank">Repo Link</a>
          <br />
          <code>dotnet ef --startup-project InfoTrack.API migrations add InitialCreate --context InfoTrackDbContext --project InfoTrack.Infrastructure --output-dir Migrations </code><br />
          <code>dotnet ef --startup-project InfoTrack.API database update --context InfoTrackDbContext --project InfoTrack.Infrastructure</code>
        </p>
        <p>
          I used <b>React TS</b> for the front end, and I used <b>React Router</b> for the routing.
        </p>
        <p>
          I tried to keep the project as <b>modular as possible</b> (trying to follow along with the Atomic Design principles), so I have a few components
          that are reusable and a few that are page specific.
        </p>
        <p>
          I also tried to keep the <b>state management</b> as clean as possible, so I used <b>Redux Toolkit</b> for the store management.
        </p>


        {/* Tailwind CSS + Daisy UI*/}
        <h2 id="abouttheproject3">Tailwind CSS</h2>
        <p>
          I still still need to practice more with Tailwind CSS, but I can see the potential in it. I like the idea of not having to
          write custom CSS and just using utility classes, but I can see how it can get out of hand quickly...
        </p>
        <p>
          Which is how <a href="https://daisyui.com/" target="_blank" className='text-xl btn-link'>Daisy UI</a> entered the picture.
          It's free and open source, and it has a lot of handy components that are notably easier and cleaner
          to use than just tailwind - not having to include <b>all the utility</b> classes for nearly every single component was really nice.
        </p>



        {/* Chart JS */}
        <h2 id="abouttheproject4">Chart JS</h2>
        <p>
          Chart JS library has a lot of neat components and expands upon the <a href="https://www.chartjs.org/" target="_blank"> Chart.js</a> library, I tried to
          only use things that are well established or are decently well established, but expand upon well documented libraries/tools/frameworks.
        </p>
        <p> I left up some charts with the dummy data because they are snazzy.</p>



        {/* Redux Toolkit */}
        <h2 id="abouttheproject5">Redux Toolkit</h2>
        <p>
          I learned a ton about Redux during the course of my project and I actually still know that I have a decent amount more to learn.
          The Redux Toolkit package helps simplify the setup which was super helpful this being my first time wiring it all up myself.
        </p>


        {/* Icons */}
        <h2 id="abouttheproject6">Icons</h2>
        <p>I started off by using the <a href="https://heroicons.com/" target="_blank" className='text-lg btn-link'>HeroIcons</a> as I saw it has a solid collection
          of SVG icons, and is made by the makers of Tailwind CSS.</p>
        <p>I did end up using some <a href="https://heroicons.com/" target="_blank" className='text-lg btn-link'>Google Font Icons</a> as it's less work to implement
          and has a ton of variety. Plus, I usually like to expand upon the use of my icons throughout the site with some readonly objects for the ability to easily assign icons. </p>


        <pre>
          <code>
            {"import BeakerIcon from '@heroicons/react/24/solid/BeakerIcon'"} <br />
            {"import BellIcon from '@heroicons/react/24/solid/BellIcon'"}
          </code>
        </pre>



        {/* Project Structure */}
        <h2 id="abouttheproject7">Project Structure</h2>
        <h4>Frontend Folders - </h4>
        <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          <li>app - store management, auth and libraries settings are present</li>
          <li>components - this include all common components to be used in project</li>
          <li>containers - components related to layout like sidebar, page layout, header etc..</li>
          <li>features - main folder where all page logic resides, there will be folder for each page and additional folder
            inside that to group different functionalities like components, modals etc... Redux slice file will also present inside page specific folder.</li>
          <li>pages - this contain one single file related to one page, if you want to divide page into different components file, use features folder and create seperate folder related to that page</li>
          <li>routes - all settings related to routes</li>
        </ul>


        <h4 >Files - </h4>
        <ul style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
          <li>App.js - Main file containing different routes and components </li>
          <li>index.css - Additional global css if required</li>
          <li>index.js - Entry point of project</li>
          <li>package.json - All dependencies and npm scripts</li>
          <li>tailwind.config.js - Tailwind CSS configuration file, add theme customization and new themes in this file</li>
        </ul>

        <h2 id="abouttheproject8" className="pt-4">Rough FrontEnd FileMap</h2>
        <pre style={{ textAlign: 'left' }}><code>
          /UI/src <br />
          │
          ├── /app     <br />
          │   └── ...                                                     <br />
          │                                                               <br />
          ├── /assets       			                                   <br />
          │   ├── /css                                                   <br />
          │   ├── /images                                                <br />
          │   └── ...                                                     <br />
          │                                                               <br />
          ├── /components                                                <br />
          │   ├── /CalendarView                                          <br />
          │	│	└── ...                                                 <br />
          │   ├── /Cards                                                 <br />
          │	│	└── ...                                                 <br />
          │   ├── /Footer                                                <br />
          │	│	└── ...                                                 <br />
          │   ├── /Input                                                 <br />
          │	│	└── ...                                                 <br />
          │   ├── /NavigationBar                                         <br />
          │	│	└── ...                                                 <br />
          │   └── /Typography                                            <br />
          │		└── ...                                                 <br />
          │                                                               <br />
          │                                                               <br />
          ├── /containers                                                <br />
          │   ├── Header.tsx                                             <br />
          │   ├── Layout.tsx                                             <br />
          │   ├── LeftSidebar.tsx                                        <br />
          │   ├── LoadingContent.tsx                                     <br />
          │   ├── ModalLayout.tsx                                        <br />
          │   ├── PageContent.tsx                                        <br />
          │   ├── RightSidebar.tsx                                       <br />
          │   └── SidebarSubmenu.tsx 	                                   <br />
          │                                                               <br />
          ├── /features           	                                   <br />
          │   ├── /calendar                                              <br />
          │	│	├── CalendarEventsBodyRightDrawer.tsx                   <br />
          │	│	├── index.tsx                                           <br />
          │	│	└── ...                                                 <br />
          │	│	                                                        <br />
          │   ├── /charts                                                <br />
          │	│	├── /components                                         <br />
          │   │   │	├── BarChart.tsx                                    <br />
          │   │   │	├── LineChart.tsx                                   <br />
          │   │   │	└── ...                                             <br />
          │	│	└── index.tsx                                           <br />
          │	│	                                                        <br />
          │   ├── /common                                                <br />
          │	│	├── /components                                         <br />
          │   │   │	├── ConfirmationModalBody.tsx                       <br />
          │   │   │	└── NotificationBodyRightDrawer.tsx                 <br />
          │	│	├── headerSlice.tsx                                     <br />
          │	│	├── modalSlice.tsx                                      <br />
          │	│	└── rightDrawer.tsx                                     <br />
          │	│	                                                        <br />
          │   ├── /companies                                             <br />
          │	│	├── companySlice.tsx                                    <br />
          │	│	└── types.tsx                                           <br />
          │	│	                                                        <br />
          │   ├── /dashboard                                             <br />
          │	│	├── /components                                         <br />
          │   │   │	├── AmountStats.tsx                                 <br />
          │   │   │	├── DashboardStats.tsx                              <br />
          │   │   │	├── DashboardTopBar.tsx                             <br />
          │   │   │	├── PageStats.tsx                                   <br />
          │   │   │	└── StatChannels.tsx                                <br />
          │	│	└── index.tsx                                           <br />
          │	│	                                                        <br />
          │   ├── /documentation                                         <br />
          │	│	├── /components                                         <br />
          │   │   │	├── ConfirmationModalBody.tsx                       <br />
          │   │   │	├── NotificationBodyRightDrawer.tsx                 <br />
          │   │   │	└── ...                                             <br />
          │	│	├── headerSlice.tsx                                     <br />
          │	│	├── modalSlice.tsx                                      <br />
          │	│	├──                                                     <br />
          │	│	├──                                                     <br />
          │	│	└── ...                                                 <br />
          │	│	                                                        <br />
          │   ├── /queries                                               <br />
          │	│	├── querySlice.tsx                                      <br />
          │	│	└── types.tsx                                           <br />
          │	│	                                                        <br />
          │   ├── /search                                                <br />
          │	│	├── searchSlice.tsx                                     <br />
          │	│	└── types.tsx                                           <br />
          │	│	                                                        <br />
          │   ├── /settings                                              <br />
          │	│	├── /billing                                            <br />
          │   │   │	└── index.tsx                                       <br />
          │	│	├── /profilesettings                                    <br />
          │   │   │	└── index.tsx                                       <br />
          │	│	└── /team                                               <br />
          │   │   	└── index.tsx                                       <br />
          │	│	                                                        <br />
          │   ├── /theme                                                 <br />
          │	│	├── themeColors.tsx                                     <br />
          │	│	├── themeSlice.tsx                                      <br />
          │	│	└── ...                                                 <br />
          │	│	                                                        <br />
          │   ├── /transactions                                          <br />
          │	│	├──                                                     <br />
          │	│	├──                                                     <br />
          │	│	└── ...                                                 <br />
          │	│	                                                        <br />
          │   └── /user                                                  <br />
          │		├── /components                                         <br />
          │       │	└── ...                                             <br />
          │		├── ForgotPassword.tsx                                  <br />
          │		├── LandingIntro.tsx                                    <br />
          │		├── Login.tsx                                           <br />
          │		├── Register.tsx                                        <br />
          │		├── userSlice.tsx                                       <br />
          │		└── types.tsx                                           <br />
          │                                                               <br />
          ├── /layout             	                                   <br />
          │   ├── /DashboardLayout                                       <br />
          │   │	└── ...                                                 <br />
          │   ├── /OnboardingLayout                                      <br />
          │   │	└── ...                                                 <br />
          │   └── /SiteLayout                                             <br />
          │   	└── ...                                                 <br />
          │                                                               <br />
          ├── /pages             		                                   <br />
          │   ├── /HomePage                                              <br />
          │   │	└── ...                                                 <br />
          │   ├── /OnboardingPage                                        <br />
          │   │	└── ...                                                 <br />
          │   ├── /protected                                             <br />
          │	│	├── 404.tsx                                             <br />
          │	│	├── Bills.tsx                                           <br />
          │	│	├── Blank.tsx                                           <br />
          │	│	├── Calendar.tsx                                        <br />
          │	│	├── Charts.tsx                                          <br />
          │	│	├── Dashboard.tsx                                       <br />
          │	│	├── ProfileSettings.tsx                                 <br />
          │	│	├── Team.tsx                                            <br />
          │	│	├── Transaction.tsx                                     <br />
          │   │	└── Welcome                                             <br />
          │   ├── DocComponents.tsx                                      <br />
          │   ├── DocFeatures.tsx                                        <br />
          │   ├── Documentation.tsx                                      <br />
          │   ├── ForgotPassword.tsx                                     <br />
          │   ├── GettingStarted.tsx                                     <br />
          │   ├── Login.tsx                                              <br />
          │   └── Register.tsx                                            <br />
          │                                                               <br />
          ├── /routes             	                                   <br />
          │   ├── index.tsx                                              <br />
          │   └── navbar.tsx                                              <br />
          │                                                               <br />
          ├── /services             	                                   <br />
          │   └── AxiosInstance.tsx                                       <br />
          │                                                               <br />
          ├── /stories             	                                   <br />
          │   ├── /components                                            <br />
          │   │   └── ...                                                 <br />
          │   └── ...                                                     <br />
          │                                                               <br />
          ├── /utilities             	                                   <br />
          │   ├── Constants.tsx                                           <br />
          │   └── dummyData.tsx                                           <br />
          │                                                               <br />
          └── ...
        </code>
        </pre>


        <h2 id="abouttheproject9" className="pt-4">Rough Backend FileMap</h2>
        <pre style={{ textAlign: 'left' }}><code>
          /InfoTrack                                                                                                      <br />
          │                                                                                                               <br />
          ├── /InfoTrack.API                # Project entry point, Controllers, and API models                            <br />
          │   ├── /Controllers                # API Controllers                                                           <br />
          │   │   ├── CompanyController.cs   		# controller                                                            <br />
          │   │   ├── SearchController.cs 		# controller                                                            <br />
          │   │   └── ...                                                                                                 <br />
          │   └── /Models                     # API specific models (DTOs, ViewModels) (empty folder)                     <br />
          │     	└──                                                                                                     <br />
          │                                                                                                               <br />
          ├── /InfoTrack.Application        # Core business logic, application services                                   <br />
          │   ├── /Common                   	# Organizing common functionality in application projects                   <br />
          │   │   ├── Mappings.cs   				# Automapper profile                                                    <br />
          │   │  	└── ...                                                                                                 <br />
          │   ├── /Mediatr                  	# Contains the Mediatr Commands and Queries folders                         <br />
          │   │   ├── /Commands               	# CQRS Commands and Handlers                                            <br />
          │   │   │	├── CreateCompany.cs           	# Specific command with its handler                                 <br />
          │   │   │	└── ...                                                                                             <br />
          │   │   └── /Queries                    # CQRS Queries and Handlers                                             <br />
          │   │   	├── GetCompanySearchRank.cs 	# Specific query with its handler                                   <br />
          │   │   	├── GetCompanyById.cs 			# Specific query with its handler                                   <br />
          │   │   	└── ...                                                                                             <br />
          │   ├── /Interfaces                 # Interfaces for services used by application layer  (folder is empty)      <br />
          │   └── /DTOs                     	# Application specific models (DTOs, not entities)                          <br />
          │      	├── CompanyDTO.cs 				# model                                                                 <br />
          │      	└── ...                                                                                                 <br />
          │                                                                                                               <br />
          ├── /InfoTrack.Domain             # Domain entities and domain services                                         <br />
          │   ├── /Models                   	# Business models                                                           <br />
          │   │   ├── Company.cs  				# model                                                                 <br />
          │   │   ├── Query.cs 					# model                                                                 <br />
          │   │   ├── SearchEngine.cs 			# model                                                                 <br />
          │   │   ├── SearchResultItem.cs 		# model                                                                 <br />
          │   │   ├── SearchResults.cs 			# model                                                                 <br />
          │   │   ├── SearchResultType.cs 		# model                                                                 <br />
          │   │   ├── Tags.cs 					# model                                                                 <br />
          │   │   ├── User.cs 					# model                                                                 <br />
          │   │   ├── UserCompany.cs 				# model                                                                 <br />
          │   │   └── UserCompanyRelationship.cs  # model                                                                 <br />
          │   ├── /Repositories             	# Repository services (folder is empty)                                     <br />
          │   │	└── /Interfaces           		# Interfaces for repositories used by application layer                 <br />
          │   │	    ├── ICompanyRepository.cs   	# interface                                                         <br />
          │   │	    ├── IQueryRepository.cs 		# interface                                                         <br />
          │   │	    ├── IRepository.cs 				# interface                                                         <br />
          │   │	    ├── IResultsRepository.cs 		# interface                                                         <br />
          │   │	    └── IUserRepository.cs  		# interface                                                         <br />
          │   └─── /Services                   # Domain services                                                          <br />
          │   	 ├── /Interfaces                 # Interfaces for services used by the application and domain layers    <br />
          │   	 │   ├── IEncryptionService.cs   	# interface                                                         <br />
          │   	 │   ├── IResultParserService.cs 	# interface                                                         <br />
          │   	 │   ├── IQueryService.cs 			# interface                                                         <br />
          │   	 │   ├── IDownloadDataService.cs 	# interface                                                         <br />
          │   	 │   └── ISearchService.cs  			# interface                                                     <br />
          │     	 └── QueryService.cs 			# service                                                               <br />
          │                                                                                                               <br />
          ├── /InfoTrack.Infrastructure     # Infrastructure concerns, EF context, migrations                             <br />
          │   ├── /Data                       # EF DbContext and configuration                                            <br />
          │   │   ├── IInfoTrackDbContext.cs  	# EF DbContext Interface                                                <br />
          │   │   ├── InfoTrackDbContext.cs   	# EF DbContext                                                          <br />
          │   │   └── /Configurations         # EF Fluent API configurations                                              <br />
          │   │   	├── CompanyConfiguration.cs 				# configuration file                                    <br />
          │   │   	├── QueryConfiguration.cs 					# configuration file                                    <br />
          │   │   	├── SearchEngineConfiguration.cs 			# configuration file                                    <br />
          │   │   	├── SearchResultItemConfiguration.cs 		# configuration file                                    <br />
          │   │   	├── SearchResultsConfiguration.cs 			# configuration file                                    <br />
          │   │   	├── SearchResultTypeConfiguration.cs 		# configuration file                                    <br />
          │   │   	├── TagsConfiguration.cs 					# configuration file                                    <br />
          │   │   	├── UserConfiguration.cs 					# configuration file                                    <br />
          │   │   	├── UserCompanyConfiguration.cs 			# configuration file                                    <br />
          │   │   	└── UserCompanyRelationshipConfiguration.cs  # configuration file                                   <br />
          │   ├── /Repositories               # Custom repositories if you're not using DbContext directly                <br />
          │   │   ├── .cs   						# repo                                                                  <br />
          │   │   └── ...                                                                                                 <br />
          │   ├── /Services                 # Services that use the interfaces from the domain project                    <br />
          │   │   ├── EncryptionService.cs   		# service                                                               <br />
          │   │   ├── ResultParserService.cs 		# service                                                               <br />
          │   │   ├── DownloadDataService.cs 		# service                                                               <br />
          │   │   └── SearchService.cs  			# service                                                               <br />
          │   └── /Migrations                 # EF migrations (has migrations and a snapshot)                             <br />
          │     	└──                                                                                                     <br />
          │                                                                                                               <br />
          └── /InfoTrack.Tests              # Unit and integration tests                                                  <br />
          ├── /UnitTests                  # Unit tests                                                                <br />
          │   ├── /ApplicationTests       	# Tests for application layer (empty folder)                            <br />
          │   │	└──                                                                                                 <br />
          │   └── /DomainTests            	# Tests for domain services (empty folder)                              <br />
          │   	└──                                                                                                 <br />
          └── /IntegrationTests           # Integration tests                                                         <br />
          └── /InfrastructureTests    	# Tests for infrastructure layer (e.g., repositories) (empty folder)    <br />
          └──                                                                                                 <br />
          <br />
          <br />
        </code></pre>

        <div className='h-24'></div>

      </article>
    </>
  )
}

export default AboutTheProjectContent