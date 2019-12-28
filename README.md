## ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) Software Engineering Immersive Course: Project 4 - Django + React App

# Ringers
<img src="https://imgur.com/fs95T4l.jpg">


## Brief
Build a full stack app by making your own front and back end using a Python Django API. The app will most likely have multiple relationships and CRUD functionality for at least a couple of models.

Timeframe: 1 week, independent coding


## Summary
Ringers is a full stack app for sourcing team players at the last minute. I used Python and Django REST Framework to serve my data from a Postgres database (visualised in TablePlus), and React on the front end. The app has multiple relationships and CRUD functionality. 


## Deployment

### Installation Instructions
To run the app from the source code, use the clone button to download the source code from GitHub. From the root directory type "yarn", "yarn seed" and "yarn start" in the terminal. The project will run on localhost:4000 and will be viewable on any web browser.


## Technologies & Methodologies Used
- HTML5
- CSS3
- Bulma
- SASS
- JavaScript (ES6)
- React.js
- React Router
- Python
- Django
- PostgreSQL
- Webpack
- Yarn
- Insomnia
- Adobe Illustrator
- Adobe Photoshop
- Wireframes
- MVC Architecture
- Authentication
- RESTful APIs
- CRUD Functionality


## Features
- Navigation bar that displays different items depending on the login status of the user 
- An 'All Posts' page that displays all the ringers required, including the date, time and location of the fixture
- Users can login to create, edit and delete their own posts


## Website Architecture

*Home Page*
<img src="https://imgur.com/fs95T4l.jpg">

*Index Page* 
<img src="to follow when deployed">

*New Post Form*
<img src="https://imgur.com/qrgqvlO.jpg">

*Show Page*
<img src="https://imgur.com/BdA73j2.jpg">


## Approach

### Day 1
We had the option to work in a group or individually. As Project 3 was a group project I wanted to ensure that I was capable of working through the steps myself.

We were told this should be the most ambitious project to date so I spent a considerable amount of time deciding what to build. Although this took too long, it was useful to map out several ideas. 

### Day 2
After discussing my ideas with a few people in class, I decided to go with 'Ringers' as it seemed most compatible with the CRUD functionality and I thought the MVP would be achievable in the timeframe.

I started building the back end using Django which was very quick but not hugely flexible. For example, when I needed to add or change the name of the fields in the model this caused multiple errors, which cost me a significant amount of time. In fact, owing to the number of errors I decided the start from scratch. 

I created models, serializers and hooked up the urls.

I liked that Django had it's own inbuilt Content Management System.

*Django CMS*
<img src="https://imgur.com/mfvtxci.jpg">

### Day 3
I used Insomnia and TablePlus to check everything was working on the back end. 

*Insomnia*
<img src="https://imgur.com/eJAVnu0.jpg">

*TablePlus*
<img src="https://imgur.com/JcQId5x.jpg">

I added nesting to the database as we had in an example in class. I later realised this wasn't the best way to do this so rewrote this on days 4 & 5.

I found making migrations particularly difficult.

### Day 4
I added seeds and overall found reseeding challenging. I also lived in fear of accidentally deleting everything! I added edit and other fields to the default user model, and added forms and error handlers.

### Day 5
I added the front end, which felt surprisingly unfamiliar having not looked at React for a couple of weeks.

I also added Bulma styling, initially as a temporary solution as I was concerned about time constraints, but planned to write my own CSS later. 
I subsequently discovered that it would have been better to have added Bulma first before completing the forms.

### Day 6
I began by working on authentication before introducing a toggled navigation bar  that showed relevant items depending on the user's login status. 

I then introduced a delete and edit button but only for the user who created the profile.

### Day 7
On the final day I attempted to hook up the assets file to display images but discovered that it is best practice to host externally so I used Imgur. 

I also tried saving images for seeds in assets files but encountered a CORBs issue below.

*"Cross-Origin Read Blocking" (CORB) blocked cross-origin response \<URL> with MIME type text/html. See \<URL> for more details."*


Finally, I tested and fixed the remaining bugs before working on last minute styling.


## Challenges Still To Overcome
- Using Imgur to show images
- Pre populating the edit form
- Getting the styling to a level I am happy with
- Deploying the project using Heroku


## Future Improvements
- Add Mapbox to visually locate events nearby
- User can search for events by sport, location, date and time
- Team pages with scores and stats
- Player ratings with recommendations, positions, availability etc.
- Payment system for booking onto leagues
- Adding tests
- Sending out alerts


## Successes
- Setting up in Django
- Linking to the front end
- Seeding and migrations
- Toggling the navigation bar
- Manipulating Bulma (responsive design)
- Allowing only hosts to edit and delete their posts
- Adding contact email links


## Takeaways
This project identified several gaps in my knowledge. I spent too much time adding elements to the back end, which meant that I was restricted in what I could achieve on the front end. 

Overall, I was really impressed by the speed in which it was possible to create the back end using Django. 

There were lots of setup steps required (creating the virtual environment, running PostgreSQL, installing Django Rest Framework etc.) and it was important to complete these in order, but I think I will become more comfortable with these over time.

Initially, I thought about adding comments so I built this into the back end and started building it in the front end. However, after considering the practicalities it made more sense for users to be able to email rather than to comment.

All in all I enjoy using Python as the code looks much clearer without the brackets and with the indent format. I also appreciated the additional built in functionality.

I found using Django frustrating, as it was quite rigid and the setup was very specific. It didn't allow any room for error so for a junior developer I was concerned by how long an apparently simple task would take me. However, there is scope to build a back end incredibly quickly.

I need to focus on keeping the MVP simple and adding in styling much earlier so I can visualise the priorities.

---

linkedin.com/in/sophieturnell/

---