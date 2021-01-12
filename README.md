AYG Are you going? was developed to display events chronologically in a simple format so users can find what's going on without having to search through mulitple pages. Each user has their own specific data that they can view and as well a limited amount of data of other users. Users can create their own event, edit and delete it. They can also add other users events to their own profile.

What sets AYG apart from other events apps is it's Watch feature which allows users to tag other users with cool, avoid and a default neutral setting. When any of those buttons are clicked the active user will be notified through a designated color on the landing page as well as their own profile if those users will be attending that event to keep from having to search guest lists for their friends or people they don't enjoy. There is no interaction between users or knowledge of the tags. The app is intended for people to socialize in person and does not incentivise building followers or likes. 

Technologies Used
React
HTML, CSS5
Bootstrap, Bootstrap-react



Instructions for Installing AYG

1. Navigate to the directory in which you want AYG to reside
2. run git clone `git@github.com:leorondeau/are-you-going.git`
3. `npm install`

This will install the libraries and dependencies for AYG.

Available Scripts
In the project directory, you can run:

`npm start`

npm start
Runs the app in the development mode. Open http://localhost:3000 to view AYG in your browser.

Database
You must run JSON server in another instance of your terminal so you will have access to the data that AYG is capturing. 

https://github.com/leorondeau/are-you-going-api

1. Navigate to the directory in which you want AYG-API to reside
2. run git clone `git@github.com:leorondeau/are-you-going-api.git`
3. run `json-server -p 8088 -w database.json`



