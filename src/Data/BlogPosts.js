import React from 'react';
import logo from '../assets/images/logo.png';
import reactLogo from '../assets/images/react.png';
import car from '../assets/images/carAnimation.png';
import civic from '../assets/images/civic.png';

/*
{
    title: '',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: '',
        },
        {
            title: 'Tuesday',
            content: '',
        },
        {
            title: 'Wednesday',
            content: '',
        },
        { 
            title: 'Thursday',
            content: ''
        },

        { 
            title: 'Friday',
            content: ''
        },
    ]
},


*/










export const blogPosts = [
    {
        title: 'Week 1',
        timestamp: <i>25th June - 29th June</i>,
        post: [

            {   
                title: 'Monday',
                content: 'The first day was simply a training day where all of the new interns and placement students came together and got to know each other by completing some random ice breaker tasks, including everything from invisible sharks to being stranded on a rubber dinghy.  Later in the day I was then taken up to the forth floor where I would be living for the next year, to meet my team. Being the only new start on my time I found it all quite overwhelming as I had no-one to share my new experiences with. However, on first impressions all of the team seemed really nice and helpful.',
            },
            {
                title: 'Tuesday',
                content: ['Tuesday started off with a meeting with my manager Brian, he took me through the different departments within the company and how we all worked together to achieve the end development goal and how we all fit in, in the bigger picture. A trip to the cafe was then followed so I could get to experience the whole team together. In total, there are 9 members of the team, however not everyone is together so it was good to meet everybody.',
                <br/>,
                <br/>,
                'I was informed that I was going to be receiving a MacBook Pro however it wasn’t ready to be collected yet. Therefore throughout Tuesday and Wednesday I was simply shadowing different members of the team to see what they are currently working on. I had no idea the broad spectrum that the UIE team had. Some members of the team are working with advertisements, adding in animations etc, whilst others are working on new apps and internal sites.'
            ]
            },
            {
                title: 'Wednesday',
                content: 'Wednesday also gave me an opportunity to engage with my team a bit more as we all went out for a team lunch. This allowed me to speak with the guys in a more laid back environment and get to know them a bit more.',
            },
            { 
                title: 'Thursday',
                content:[ 'The two previous days were rather slow for me as I didn’t have much to do. However, I was able to get my laptop on Thursday and get set up with my login. This meant that I could start the learning process.',
                <br/>,
                <br/>,
                'I was informed that I would have to learn a few new languages to get started which was a bit over-whelming to say the least. The big one was “React” which is a popular javascript library that in a way is almost becoming the standard in the industry. Therefore, I was excited to see what the main technologies are all about. Today acted like a full introduction and guide into using some of the technologies and tools available to us, this included looking at A LOT of Javascript, much more than my dedicated Javascript module in Year 2 prepared me.'
            ]
            },
            { 
                title: 'Friday',
                content: 'Friday was a rather chill day as we started the day off with a tea break with the whole team. I then dived into some learning. I thought it was best to start somewhere familiar and decided I was going to re-cap my HTML knowledge. Closing the day was a company Social which most of the team attended, this also gave us all a chance to catch up with some of the other placement and summer intern students we hadnt seen since Mondays induction, a fantastic ending to week 1.'
            },
        ]
    },
    {
        title: 'Week 2',
        timestamp: <i>2rd July - 6th July</i>,
        post: [

            {   
                title: 'Monday',
                content: 'First thing Monday I dived into some more complex learning by starting to look at ES6 Javascript to help build the foundations for React. ES6 being a new generation of Javsacript I hadn’t previously been taught this material at University. However, it is rather similar to what I have previously been taught but with different syntax. Therefore, essentially I had to start from scratch and learn the new syntax(Which was rather annoying).',
                images: <img src={reactLogo}  />
            },
            {
                title: 'Tuesday',
                content: 'Another new technology that I was going to be using was the “Greensock” animation library that allowed you to add animations to your interfaces. Essentially, GreenSock is a JavaScript framework which makes it easy to animate HTML elements and most of Tuesday consisted of me exploring this library and going through some tutorials. In my opinion, having animations added to an interface really sets it out from the rest; adding that interactivity making it more eye catching for the user.',
            },
            {
                title: 'Wednesday',
                content: `Continuing on from yesturday, I started to work with SVG’s and how to animate them. I started using sketch for the first time whch I have never used before and was quite taken back on how easy to use the interface was and the tools within it. It allows you to import a SVG and export it as HTML code which made it easy to animate and include in your website. As the SVG was now code, it allowed me to target certain elements of the image and animate them separately. For some practice, I decided to animate a car so that when it moves the wheels move along with it.`,
                images: [<img src={car}/>]
            },
            { 
                title: 'Thursday',
                content: 'Thursday I dived into some rect tutorials. Chris, a member of my team was kindly enough to give me access to his udemy account which was an online learning resource website. Throughout the day I followed these tutorials and created a real estate app which included features such as filtering data and a search function etc. I never knew that this sort of functionality could be done on the client side. It turned out to be less difficult than I had first anticipated.'
            },

            { 
                title: 'Friday',
                content: 'Today was very similar to yesturday in that I simply continued on with tutorials trying to learn this new language. There are new concepts to this language that is difficult at first as React takes up the use of JSX which is kind of like Javascript and HTML combined into one allowing you to create components which can be used to split up a page.  For example, if your index page required a header and nav, in react you can create a component which you can call to display this header and function. Therefore, it can be reused throughout the ret of your site by simply calling one word.'
            },
        ]
    },


    {
        title: 'Week 3',
        timestamp: <i>9th July - 13th July</i>,
        post: [
    
            {   
                title: 'Monday',
                content: 'This week I wanted to give myself a challenge and try and use my React knowledge to create my own website. As I am interested in cars I’m going to create a website that lists a certain number of cars and their info. Therefore, today I started to create this site by making the header and nav components. These components are simple enough to make, simply code your header and nav within the component and then import it into your app.js file. This then allows you to call that component and it will be compiled. I have found that using these small sites to practice have massively improved my HTML and CSS skills as I have become more confident and am able to debug issues more quickly than before.',
                images: <img src={civic}/>
            },
            {
                title: 'Tuesday',
                content: 'Today I continued work on my website by making the listings of the cars that I will display. This was going to be the hardest  section of the website and unsurprisingly I found it rather difficult to complete spending most of the day trying to make it work before I finally gave in and asked for help from a member of my team. Within React I was able to create an array of objects where the data for the cars are stored. From there I created a loop which would display the information within a listing. This is a really handy function as if in the future you wanted to add more cars you would simply add another object to the array and it would automatically add the listing with the info. I learnt alot today, mostly to do with the react syntax etc. For example in react instead of using “for, do, do while” loops that I had previously been taught, you would use keyword “map”. A map simply loops through data and displays it.',
            },
            {
                title: 'Wednesday',
                content: 'Wednesday consisted of finishing up on the website, fixing up some small issues etc. I then started a new online course on code academy on react to reinforce my react knowledge and try to understand it a bit more. Furthermore, as I am going to be using Sass as a styling language I thought it was best that I started teaching some of that as well and therefore started a course on code academy for that too. Sass is a really handy language for CSS allowing for less code to be used and repetition of code is also reduced increasing efficiency and the time of creation.',
            },
            { 
                title: 'Thursday',
                content: 'Day off'
            },
    
            { 
                title: 'Friday',
                content: 'Today I finished up the code academy courses and I feel much more confident with using this new language. To be honest, at the start I never though it would become confident with React as it seemed like a rather scary language but after tackling it head on I have become much more confident with it. In addition, I started adding some more functionality to my website for the fin of it. For example, I added a button to the site which allowed the user to change the colour of the background. It has no meaningful functionality behind it but I wanted to try and learn new things and so I done it.'
            },
        ]
    },


    {
        title: 'Week 4',
        timestamp: <i>16th July - 20th July</i>,
        post: [
    
            {   
                title: 'Monday',
                content: 'Today is that start of my forth week here at Allstate, it has flown in too quick. Only 11 more months to go! I stayed off the day by starting another code academy course on Git; one of the most widely used modern version control system in the world. As I would be using it throughout my time here I thought it would be best to get a heads start on using it. As this would be all command line, it seemed rather daunting at first. However, I’ve come to realise its actually a rather easy language to pick up. My afternoon consisted of me diving deeper into react, going over some more advanced tutorials. At 3 ovlock we had a creative tech meeting which allowed all of the UX teams from around Allstate to come together and talk about their ideas etc, specifically on animations for this session and how they can be created which I found helpful as I knew I would start to use animations soon enough.',
            },
            {
                title: 'Tuesday',
                content: 'A part of the on-boarding I was required to take courses on some of the legal aspects within  Allstate. Most of my morning consisted of this, as it was a very long and boring process. In the afternoon I wanted to expand n my react knowledge and therefore started to create a website for my blog using the react technology.',
            },
            {
                title: 'Wednesday',
                content: 'The morning started off again with the online courses. At the end of the course, I was required to take a short quiz on the content that I just read through. This was to ensure that you acc read through the content. In addition, I also had some online react courses to finish up and therefore my morning consisted react learning. After lunch I continued work on my blog website coming across many obstacles. One of the main issues I came across was the use of images; which you wouldn’t think to be a difficult task. However, when it comes to React, everything is. To enable React to make use of file extensions a file loader dependency needed be installed, allowing the web pack to compile it. For ages I couldn’t get this working which took up a large chuck of my day. However, I now know how this issue is resolved in the future.',
            },
            { 
                title: 'Thursday',
                content: 'Today I worked on my React blog all day adding some more functionality to the site making it editor to update the blog posts. To do this I made a object array which allowed me to add the blog content to an external file. Therefore, this means that I could use a react map function, which is the same as a loop, to loop through the array and display a post for every object in the array. This simply makes things easier as I dont have to re-write code. Furthermore, as I wish to add some animation svg’s to the site, I spent the second have of the afternoon creating a new logo for the site learning how to use the tools within sketch.'
            },
    
            { 
                title: 'Friday',
                content: 'During my time at Allstate I am going to be using an animation library called Greenock. Therefore, I wanted to add some animation to my blog website so that I could get some practice. My website contained a logo on the top left corner and was added as a static object. Therefore, I could animate this logo to make the website more interactive and less boring looking; The greensock library has many animations which I could make use of to make this possible. Furthermore, this also gave me the opportunity to use sketch. I had never used sketch before as I rarely used a Mac however I have come to realise it is quite a simple piece of software to master.'
            },
        ]
    },

    {
        title: 'Week 5',
        timestamp: <i>23rd June - 27th June</i>,
        post: [
    
            {   
                title: 'Monday',
                content: 'Today was the day that I was going to start into a new project with another member of my team. That project being “ARS”; Allstate roadside service is an app that allows customers to order different types of roadside service if they are stuck and need assistance. The morning started off with me doing some touchups on my blog website, correcting some of the interface issues that it had. I am happy with the way the blog turned out, having a plain and simple layout. The second half of the day consisted of my workspace getting set up ready for the new project as a lot of new dependencies and modules needed installed. Once this was all completed, I was asked to go see I could see any issues with the interface and bring them to light so that they can be fixed.',
            },
            {
                title: 'Tuesday',
                content: 'Today marked the start of me taking on some tasks for the new project that I would be working on for the foreseeable future. To ease me in I was simply given some styling and text changes to do. This was harder than it may seem as there is hundreds of lines of code that I have to filter through to try and find a specific line of rect to change. It took longer than I originally thought but I’m starting to learn the folder structures and where to look within them. I came across a few difficulties today, but I was able to ask my team member and we were able to sort the issue out pretty quickly. As I mentioned, today was to ease me into the project and I look forward to diving deeper into it getting more complex tasks etc.',
            },
            {
                title: 'Wednesday',
                content: 'Today I continued work on the ARS. The way the project works is that a person is assigned a ticket with a number of different sub tasks within it. As I am only starting out tickets are not being assigned to me. Mark, my team member that I am working with is assigning me some tasks from his tickets which are simple enough to do. One of the main tasks today was to simply change a few fields about and add a checkbox to one of the screens along with other text. Furthermore, I had my first stand up meeting where all of the members of the team come together and talk about what they have done and any barriers that they have come across. This was an experience in itself, as it allowed me to see what it was like to have a meeting within a professional team. In addition, we also had a “Team sync” meeting where my whole team in ANI had a Skype call with Mridu to see how we were all getting on.',
            },
            { 
                title: 'Thursday',
                content: 'The day started off with the remaining tasks of a ticket which mark helped me complete followed by a code review where mark would simply look over the changes I had made to the project and approve or disapprove them accordingly. More disapproves at this stage then approves but nevertheless, I’m still learning as I go. Therefore, today marked the first of my commits to the project. Once the code was approved we then pushed the changed to the master branch of the repository allowing me to use my new skills in Github, in terms of the commands and how the structure works, however there is still a lot to learn. Every other Thursday there is a demo of ARS so that everyone can see how the app has progressed. Today one is being given which will show some of the styling that I have worked on.'
            },
    
            { 
                title: 'Friday',
                content: [`Today was quite a stressful day as I was given some more things to do from yesterdays demo feedback. My task today was to fix the padding an margin issues on the error messages on the contact/payment screen. When the user enters incorrect data into one of the fields, an error message will appear below the inout box. However, there were padding issues that needed fixing which were simple enough to do. However, two of the fields were beside each other meaning the error messages appeared below both of them. Although, they had a static padding set to them meaning that if one of the fields was correct and the other wasn’t then the error message wouldn’t display in the correct place. It was my job today to correct this.`,
                <br/>,
                <br/>,
                `I found this to be a very difficult task as I am still unfamiliar with the language. The solution involved adding a classname to the react component field if an error had occurred. Like so:`,
                <br/>,
                <br/>,
                '“className={`${this.state.cardexphasError && "cardError" }`}”',
                <br/>,
                <br/>,
                'Therefore, I can set styles to that class giving it the correct padding, allowing for both error messages to be displayed correctly.'
                ]
            }
        ]
    },


    {
        title: 'Week 6',
        timestamp: <i>25th June - 30th June</i>,
        post: [
    
            {   
                title: 'Monday',
                content: 'The week started off with me diving into some styling issues concerning buttons and font sizes within some of the screens. My teammate mark was working from home today so I thought it was best I didn’t pick up any task that was going to be difficult as I wouldn’t of had any help. The main issue I had to change was the colour of the text within the primary buttons as they were not consistent throughout the app. Therefore, I simply made a new variable and added the colour to it and changed them throughout the app. This is a handy feature of SASS; variables that allow you to store data such as colours etc meaning you only have to change the variable in order to change multiple values. In addition, some screens had some discrepancies in font sizes being incorrect, so I was able to correct those too. I also completed some React tutorials today just to try and improve my knowledge further as I don’t feel confident with it yet.'
                
            },
            {
                title: 'Tuesday',
                content: 'Today I started off the day shadowing mark as he was doing a task that would be beneficial for me to see. The task was to add a new icon to one of the screens and add the functionality to it. He completed one icon and then I was given the task to add another style of icon to a different screen and style it. The most simple of tasks I have found to be quite difficult recently as I am using new technologies that I have never used before. For example, we were not taught flex box in University and it is one of the standards for styling here at Allstate. Therefore, a simple 5 minute task seems to take me longer but with some help I was able to complete the task. Later in the day I was given another part of a ticket. The ticket required me to add some payment card icons to one of the modal screens. Again I found the styling difficult enough.',
            },
            {
                title: 'Wednesday',
                content: 'Today I picked up where I left off yesturday with the new icons that were being added correcting the styling issues. A code review was then taken and I was able to commit my changes to the internal GitHub. The next task was simply some styling issues relating to responsiveness which again uses flex box and css grid which I’m not familiar with. When the screen enlarged the text was not lining up so it was my job to correct this. I was frustrating to say the least at the start but I was able to correct the issue partially as fixing one thing breaks another. Later in the day I have my daily stand up where I will explain the work I have done.',
            },
            { 
                title: 'Thursday',
                content: 'Continuing on from yesturday I was able to solve my issue concerning the logo. As this app is going to be used by many different partners aswell as Allstate good hand rescue, there is a div in the home screen where the partner logo would go. My task was to display the logo if there was partner details and hide it if there wasn’t. I started this task yesturday however wasn’t able to complete it. I decided to take a break and clear my head and within 10 minutes of my return I was able to solve the issue. Its shown me that the best thing to do when your stressing over an issue is to take a break. Later n the day I was simply doing some small styling tasks, fixing bugs etc.'
            },
    
            { 
                title: 'Friday',
                content: 'The day started off with some styling issues tat were sent over for me to correct such as simple margin and padding corrections however it too some time as if you changed one the styling for an h6 tag, it would change all  the other tags throughout the app. Therefore, I had to find and target the one that I wanted to change. In addition, I also wanted to improve my overall Javascript knowledge by working through the code academy tutorial. This took up most of my afternoon until we were able to leave at 4oclock as it was a Friday! The main point I have improved my knowledge on this week is my SASS. Using sass is much easier then normal css as it allows you to indent code and use variables. This concludes my 6th week here at all sate which has flown in, if it continues to go as fast as this before I know it I will be back in Uni.'
            },
            
        ]
        
    },

    {   
    title: 'Week 7',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'The week started off with a slack call from my team mate mark as he was working from home today in order to discuss what we had to do this week. Main task today was to correct the animate issue from last week; We had sorted the issue on one device resolution. However, when we switched to an iPad size for the example, the css height calculations that we used would not work and therefore need fixed. Reducing the amount of code that we use is a big part of coding so it took me a while to come up with the best way to correct the issue without adding tons of media queries for every device. The use of sass mixins was mentioned however I’ve never used them before so I was hesitated to use them. I worked with James to resolve the issue and we were able to solve the solution to an extent. The afternoon consisted of me working through the more of the code academy tutorial working on my javascript knowledge.',
        },
        {
            title: 'Tuesday',
            content: 'The day started off with some styling issues that Mark had sent across to me, where I had to simply fix padding issues within one of the screens. The rest of the day was simply more on boarding with code academy; working through the javascript tutorials. Every other Tuesday the ARS web developers will have a big sprint plan meeting where they would discuss the tickets for the upcoming sprint and plan out the next few weeks. This meeting would be around an hour long. So far I have learnt a lot from my time being here, specifically my technical knowledge. I am becoming more confident with the new technologies and getting put out of my comfort zone on a daily basis which is what I need if I want to develop. Its hard to believe how quick the 7 weeks has gone.',
        },
        {
            title: 'Wednesday',
            content: 'This week has been quite slow for me as I am not really doing much. This is because Mark is off on holiday and he is unable to give me some of the tasks included in his tickets. I have been filling my days by doing some online learning on sites such as code academy etc. I am currently working through the Javascript tutorial to try and further my knowledge and become more confident with it. I feel that I am getting better as I am able to work through the lessons quite quickly without any hassle. Im sure as i get deeper into the course things will get difficult. One area in particular that I was never confident with was loops and therefore, today I really focused on them to try and get a grasp on them.',
        },
        { 
            title: 'Thursday',
            content: 'Thursday was a rather chill day for me as I didn’t have a lot to do with Mark being off and the product being launched. Therefore, most of the issues have been resolved up till now. At 11oclock we made our way to the canteen were a talk was being given by the CEO of the company outlining the state of the company and how we are doing. It was good to see how the business is doing from a higher and financial level. It amazed me the amount of money that the company spends on a yearly basis…trillions of dollars. These numbers really bring to light the amount of money that the company must make to be able to spend that on a yearly basis. After the talk I simply continued on some Javascript tutorials which brought me up to quarter to three where I had my daily stand up with the rest of my team. Fowllong the stand up I was straight into another creative tech meeting which brought some very useful information to light, for example the handbook. The day was almost over and the end to my 7th week is coming to a close.'
        },

        { 
            title: 'Friday',
            content: 'This week ended as it started, slow and boring….With mark being off there wasn’t much for me to get stuck into and therefore I found myself starring at the screen hoping it would give me something to do. As I have mentioned before I am simply working through more tutorials trying to gain a better understanding of JavaScript. My goal is to completely understand the ins and outs of it by the end of the year. Somehow I don’t think ill meet that goal.'
        },
    ]
},


{
    title: 'Week 8',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Monday morning started off with some issues concerning git conflicts and took up most of the morning. As I had some changes that I had made on Friday, during the weekend someone else had also made changed to the file that I was going to upload. Therefore, there is a push conflict. However, I ran into some issues fixing those conflicts which basically made me erase all of the work I had done and start again which wasn’t the best start to a Monday morning. In the end we were able to get it resolved. Today also marked the start to a new member of the UIE team and its a tradition to go and have a coffee with the whole team to do a meet and greet. Gareth will be working alongside Chris and nicolus on the “My Account” team. The second half of the day I was working through React tutorials, only this time I was taking notes so that if needs be I can look back on them. Doing this has allowed me to gain a better understanding with things like state and constructors so I feel this was a good idea.',
        },
        {
            title: 'Tuesday',
            content: 'Tuesday was a day of self learning, working through some online tutorials etc. I really wanna improve my knowledge on my technical skills specifically React and Javascript as they are the languages that I am going to be using most. With Mark being of this last week it has left me with very little to do meaning it is very hard to write about what I’ve done daily because..well…I’ve done very little.',
        },
        {
            title: 'Wednesday',
            content: 'Similar to yesturday, I worked through tutorials and started to explore more of sketch using the tools within it and designing some interfaces etc. I am becoming more confident with the interface; although I found that I was struggling with some simple tasks such as changing the font to italic. I got it sorted in the end.',
        },
        { 
            title: 'Thursday',
            content: 'Marks back! Which means for the first time in over a week I had something to do. During the week I picked up in the meetings that the team were starting the production of the login and membership screen. I didn’t want to start it while mark was away incase I got stuck and required help however I mentioned it to mark and he said we should start it so that we are a step ahead. Therefore, we took a screen each, meaning I was given the login screen to do. I learned how to create a new screen and how to give it a URL. This was the main bit of knowledge that I took away from today, the rest was simple styling. I was able to complete the screen in relatively quick time.'
        },

        { 
            title: 'Friday',
            content: 'Friday started off slow once again as we still don’t have a lot to do as the app in in quality assurance testing. However, the second half of the day give me a new task which at first I thought was going to be rather simple but turned out to be quite the opposite. The payment modal screen contained the card type icons that I had previously added. The task I was given was to filter those icons depending on what card type the user enters in. For example, the user would enter in the start of a Visa card; which would then trigger the filter process and the other card type icons would fade out and the visa icon would still be shown. Therefore, I would need to make use of some css animation too. As it turns out it was quite a difficult task…for me anyway. I decided I was just going to pick it up first thing Monday morning.'
        },
    ]
},


{
    title: 'Week 9',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Its hard to believe I have been here almost 10 weeks, the time has flew in. Monday morning started with me picking up where I left off on Friday with the payment modal screen. I was able to get some help from my team members and we were able to get something working but soon realised that it wasn’t going to work. The issue we can across was that we used a switch statement..which we shouldn’t of, meaning that either all icons are being displayed or only one. Therefore, we couldn’t use css animation to animate the movement. Therefore, we came to realisation that if statements needed to be used. Therefore, most of the day was me heading in the wrong direction. We will get it sorted though.',
        },
        {
            title: 'Tuesday',
            content: 'Tuesday started off with my 1-1 meeting with Brian which allowed me to have a catch up, filling brain in with everything and how I am getting on. After my meeting me and Mark worked through the payment card animations and were able to get the issue sorted and now they are working correctly. It showed me that certain issues may take longer than others as in this case it took a few days to solve.  The outcome turned out to more simple than I originally thought as we simply used css margin and opacity to create the animation.',
        },
        {
            title: 'Wednesday',
            content: 'Wednesday was a rather slow day as we didn’t have much work to do, so I decided I was going to do some self learning with Greenock. Having this animation knowledge will greatly benefit me in my final year as it allows me to add some interactions to my interfaces. I chose to create a rocket and animate it to take off. The first half of the day was me simply creating the illustrations on sketch allowing me to get a much better feel for the interface and confident with the tools that it has to offer now. As I wanted to animate the rocket taking off through the atmosphere and into space, that would mean that the background would have to be really long. So the way I combatted this was instead of animation the actual rocket, I animated the background to move to make it feel as if the rocket was moving. This is how far I got with it today.',
        },
        { 
            title: 'Thursday',
            content: 'Today I continued on with the animation adding new animations and illustrations to it. I feel a lot more confident with the Greenock library. However, I have only touched the surface off it as it is a massive library with a lot of capability. Today also marked the day that good hands rescue was able to be viewed on the mobile device meaning we were able to test on lots of different devices and pinpoint functionality and UI bugs. We spent a lot of the day resolving these bugs.'
        },

        { 
            title: 'Friday',
            content: 'Today was a rather chill day at the office as it started off with the usual Friday tradition, with a fry(fryday) which took up most of the morning. One of my main goals this year is to improve my animation and design knowledge as I would like to utilise these in my interfaces. I decided I was going to create a new illustration for my new showcase that I will be creating throughout the year. I had the idea to create a simple night/day cycle where the sun and moon would rise accordingly with the sky colour. Using Greenock I was able to create this animation.'
        },
    ]
},

{
    title: 'Week 10',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'I started off the Monday where I left off on Friday with the SVG animation. However, I ran into some issues whenever exported the SVG image; for some reason the SVG wasn’t scaling correctly whenever it was added to a webpage meaning it wouldn’t be responsive. As Sean was off, I left it to tomorrow. It was the stage of the development where the app was coming out of QA testing and a lot of bugs were being raised. Therefore, we had a lot of work to get through today. I had a few bugs to take care of today and was able to complete most of them. Me and Mark worked through them together and were able to close the ticket by the end of the day.',
        },
        {
            title: 'Tuesday',
            content: 'Jira is a website that takes care of scrum management for our project and at the start I found it quite difficult to navigate around as it is such a big website. However, as time goes on I am starting to learn more being able to assign tickets to myself and resolve the. This week was the start of tickets being assigned to me which I needed to complete.',
        },
        {
            title: 'Wednesday',
            content: 'Wednesday was a big day for the ARS team as we arranged for a group testing session for the web app so that we can pinpoint all off the issues that need to be resolved. The session was both a good thing and a bad thing, good because it allowed us to see all of the issues within the app but bad as it gave us soo much work to do. Therefore, Wednesday was spent resolving those bugs along with some animation work. We wanted to add more animations to the screens and therefore we wanted to animate the clouds in the home screen to move. However, this is not as easy as a task as I may seem as there needs to be a lot of calculations to get the timings correct.',
        },
        { 
            title: 'Thursday',
            content: 'Today I was assigned a lot of tickets relating to the test session on Wednesday meaning most of my morning was taken up and I was able to get a lot of bugs fixed and pushed to the develop branch. Furthermore, one form of css I have not come across is CSS fallbacks. These are used if a certain technology isn’t supported. For example, in our web app we are using css grid for the header; however, some older versions of browsers don’t support this technology. Therefore, we can use a fallback to use display flex. This is quite a useful thing to use as it makes your site accessible and useable from all devices no matter the version. '
        },

        { 
            title: 'Friday',
            content: 'I finally was able to get my SVG completed! However, I ran into some other issues….scaling and responsiveness. As I wanted my new animation to be the full screen width and height, the SVG was scaling weirdly when it was made smaller. This was an issue with the view box of the SVG which I could not figure out. With the help of Mark and Sean I was able to resolve the issue and it was now working. The resolution turned out to be quite simple as the view box didn’t need changing, simple CSS styling was needed. Friday as always, was fry day so most of the team went for a fry in the morning which allowed us to get away from the desks for a while.'
        },
    ]
},
 
{
    title: 'Week 11',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: [
                'Time is really flying in, I’m onto my 11th week here at Allstate…its hard to believe. After our stand up on Friday, Mark said that all ur tickets would be pushed by Tuesday meaning this didn’t give us a lot of time as we still had a lot of tickets to resolve. As Mark was working from home today, most of the morning was spent on call working through tickets and getting them resolved and pushed. To be fair, we got quite a lot done in one day, leaving us to clean up the edges on Tuesday. As i had a few tickets assigned to me, I got stuck into them in the second half of the day. Simple styling changes were only required but more often than not I struggle on them and need help.',
                <br/>,
                <br/>,
                'Up to now I have simply been doing styling changes in ARS, and don’t get me wrong I have learnt a lot in that time….more than I have in uni in 2 years. However, I want to learn more difficult stuff, like react. The only way I am going to be able to do this is by getting stuck into it. I know I won’t be able to do it but thats the only way I am going to learn…Mark may have patients for me.'
            ]
        },
        {
            title: 'Tuesday',
            content: 'I feel as if I’m repeating myself in these blogs, however there isn’t much to add to them as I am doing similar things on a daily basis due to the stage of development of ARS. Today I arrived with a ticket waiting for me to fix a design issue within the payment modal. The issue was that the footer, containing the add button was clipping off part of the other elements. The design concepts required the button to sit at the bottom of the page, meaning it needed an absolute positioning. Therefore, this meant that the button was not being pushed down the screen. In this case we had go against the design concept and make the positioning relative meaning that when the body got bigger the button will be pushed down and user will be able to scroll.',
        },
        {
            title: 'Wednesday',
            content: 'Today marked the end of the 4.5 sprint for ARS so we were working flat out to try and resolve as much issues as we could before the next sprint commenced. I still had a few tickets open which needed resolving. Therefore, most of the day involved testing of the fixed bugs and getting them pushed. At the same time, new tickets were still coming through so we needed to get them sorted also. One major issue that as raised was that on iOS devices when the user tried to scroll on an input field there would be no response. We are thinking that his may be a operating system issue as we have not been ablate come up with a resolution.',
        },
        { 
            title: 'Thursday',
            content: 'Thursday started off with diversity training for 2 hours or so. This session was to explain equality within the workplace and how it can increase efficiency etc etc…was rather boring but nevertheless I had to attend. Most of the morning was taken up, which then was followed by a trip into town for some lunch.  The rest of the day I didn’t really do much to be honest…'
        },

        { 
            title: 'Friday',
            content: 'The day started off with some CSS fall backs again as I was not able to complete them previously. The issue I was having is that on older iOS devices CSS grid was displaying incorrectly causing the header to cover half of the screen. This was a difficult problem to correct as CSS fall backs usually contain code for if the technology is supported and different code for if it is supported. However, in this case CSS gris is being supported but not displaying correctly. This came down to the “grid-template-rows” property not being defined. Therefore, the only way I could get around this was to specify a hard value for the header which wasn’t ideal but nevertheless the issue had been resolved. Now to move onto the other parts of the screens! But not before a few build errors and crashes….'
        },
    ]
},

{
    title: 'Week 12',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Monday started off being a Monday….with disaster. Mark had done a commit as soon as he came in and had accidentally committed a lot of things that he shouldn’t have and had messed things up causing a lot of build errors for people, including me. Therefore, it took about half of the day getting the changes reverted back on the GitHub. One thing I learnt from today is don’t commit before your morning coffee! The rest of the day was simply working through the tickets assigned to me.',
        },
        {
            title: 'Tuesday',
            content: 'A ticket was assigned to me late in the day yesturday and it turned out to be more difficult than it first seemed. Within the vehicle modal screen, when the user enters the year of the vehicle, it would then get the data from the API relating to that year. However, we realised that if the user had a slow connection it would take a longer time to grab that data and then in turn display an error message as if there was no data relating to the year. Therefore, the issue was more difficult, I shadowed Mark as he corrected the issue. We corrected the issue by simply adding an ternary IF statement checking if the payload was empty. If the payload was empty, the spinner modal was added until the array became populated. Seems simple enough on paper, but I can tell you it was not.',
        },
        {
            title: 'Wednesday',
            content: 'Today was a rather slow day yet again, having very little to do. I started the morning off working on my own showcase website getting it created for me going back to Uni. Doing this has shown me how far I have come with my HTML/CSS skills as I was able to create what I wanted with very few issues etc when before I would have come across hurdles in the development. The second half of the day was used to work on the new home screen animations for GHR.',
        },
        { 
            title: 'Thursday',
            content: 'Today I finally got the animations completed and pushed to the development branch…however I ran into some issues. It turns out that the new animations were causing some performance issues, specifically on the CPU load. When the user loads the age the cpu usage spikes to 50-70% which is not good. As the page already has some performance issues, we decided it was best to take them out for the time being until it gets resolved. I also worked on the android PWA icons and got them pushed today..'
        },

        { 
            title: 'Friday',
            content: 'Friday seen me working on the iOS scroll issue that has been on my plate for a very long time so it needed shut down soonish. Working with Mark we were able to diagnose the cause to the issue. It turned out to be a on focus issue relating to the input field. When the screen first loaded, it wasn’t focusing on the input and for some reason this was making it no scroll on touch. Therefore we simply added an on focus event to the screen.'
        },
    ]
},
   
{
    title: 'Week 13',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'It is now coming to the end of WLE and we are now moving on to CSR view, which is essentially the back end screens for people who are taking calls. However, there was one last ting that needed to be sorted before we moved on….the offline screen for the PWA. This meant that I had to start working with he service worker of the site which I had never done before but I am happy to learn more about it. Don’t ask me exactly what it does, because I’m not entirely sure but I know its needed. The main purpose of this service worker is to utilise caching of pages. However, we couldn’t get it working as the page wasn’t being cached properly when the user didn’t have an internet connection. Although we didn’t get it working correctly I learnt a lot about service workers and how they are implemented meaning I can take something away from this.',
        },
        {
            title: 'Tuesday',
            content: 'Tuesday consisted of tidying up some of the remaining bugs within white label express. One of the main ones I handled today was the drop off button not hiding after the field was empty or when it wasn’t focused. Therefore, this required a bit of react work, specifically working with states etc. I have worked with this stuff before but its always good to get the practice.',
        },
        {
            title: 'Wednesday',
            content: 'Today is the day we move onto CSR view which means new screens are being created for scratch giving me an opportunity to dive into some react work and really start learning. I think this is where Im really gonna start gaining some knowledge as in a way in some aspects I’m being thrown into the deep end which is a good thing to be honest. One of the screens required a call bar at the top, so today it was my job to add some styling using flex and CSS grid. I am quite confident with Flex but not so much with CSS grid. Therefore, it will be good to get some practice with it. The. Styling too me longer than expected if I’m honest taking me most of the day.',
        },
        { 
            title: 'Thursday',
            content: 'Continuing on from yesturday I picked up where I left off with the styling. Todays plan was to finish up the styling and dive into some react. The call car is what is handling the call and therefore requires a lot of the changes depending if there is a call in progress. Therefore, this allowed me to work with ternary statements within javascript. If there is a call in progress then assign a class etc. I have definitely become more confident with ternary from today alone.'
        },

        { 
            title: 'Friday',
            content: 'Today was a continuation from yesturday adding more content to the CSR screens, specifically adding the search member panel to the screen where the user can search a customers name etc.  This was a completely new component that needed to be added to the screen, however most of the elements within the component could be reused for the member login screen that I made a while ago. '
        },
    ]
},
    
{
    title: 'Week 14',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Monday started off where I left off on Friday with the customer search panel component, tidying up the styling and adding it to the home screen. I am quite happy with the outcome as I was able to create it without any issues etc. in addition, my task for the day was to add the background component to the home screen of the car. IT could be a simple job of adding a background image to the container, however if we wanted to add some animation in the future it had to be a component so we can add the Greenock. This turned out to be a more difficult task that it seemed as yet again scaling the SVG was a pain but I was able to solve the issue with using translateY with a negative value to scale it to the way I wanted. The screen is starting to come together and looks really well.',
        },
        {
            title: 'Tuesday',
            content: 'React! Today I started into some functionality behind the components, specifically the call bar. When the user starts a call, the customers information needed to be displayed but only when a call is active. Therefore, I had to make use of the state to create a Boolean variable that when true it will display the customers information. The logic behind this wold be if call is in progress is equal to true then display customer information, else don’t. Surprisingly, I was able to complete this with minimal help from mark which im proud of as it shows that I am learning which is the main thing.',
        },
        {
            title: 'Wednesday',
            content: 'Sticking with the call bar which contained a form field and therefore needs validating which I made it my task for the day. In my head, this seems to be a simple task as you simply check to see if the form field has an empty string or if it isn’t the correct data type then display the error message. However, I soon came to the realisation that this isn’t the case and a regex needs to be used to compare it against. I have very limited knowledge with regex’s as I have only used them in PHP in one of my modals in second year so I may need some help from Mark on this one.',
        },
        { 
            title: 'Thursday',
            content: 'I started the day off by creating a new screen for CSR, more specifically the home membership screen. This screen is basically the sae as the home screen of WLE so therefore it should be simple enough to copy and paste over. However, It was quite the opposite as the home screen used a technology called Redux which I have never came across before and therefore found it quite difficult. Redux is a predictable state container for JavaScript apps which helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. I tried to understand what I was reading but I feel I wasn’t successful in doing so.'
        },

        { 
            title: 'Friday',
            content: 'Friday was a rather chill day at the office as we started it off the way we normally do, with our fry. I came back to a ticket that had been assigned to me to correct a bug within WLE concerning the contact/payment scroll issues which I spent most of the day trying to figure out. The issue was that when the modal screen was opened there was a lot of white space at the bottom due to a function that we used to jump to a field which calculated the height of the screen accordingly. Therefore, the resolution I decided to create was only define the height calculations when the user focused on the appropriate field.'
        },
    ]
},


{
    title: 'Week 15',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Carrying on from Friday with the WLE bug, i asked Mark to do a code review to see if I was on the right track with the bug. I then was able to push it to the develop branch for testing. Furthermore, the SVG that I added to the CSR customer search screen before wasn’t scaling properly when the screen was made smaller so therefore needed to fix this. The solution wasn’t apparent at the start',
        },
        {
            title: 'Tuesday',
            content: 'We are coming to the end of our 5.1 sprint for ARS and therefore progress is rather slow. The last two weeks or so we have made a start on the new screens and we are quite happy with the speed of progress that we made. Today was meant to bring a retro meeting along with sprint planning; However the India office had a day off meaning there were very few of us working making it pointless to plan. The meeting was pushed to tomorrow.  ',
        },
        {
            title: 'Wednesday',
            content: 'I was able to obtain the sketch files for the new SVG meaning I could go into the source files and grab all of the layers and export the code. In addition to this, we also wanted start making the new screens responsive and therefore, required me to work on the components that I created, ie the call bar etc. We also had our sprint planning today which is fun as always, an you and a half of sitting listening but it is necessary as it shows the whole team what needs to be completed in the up coming sprint.',
        },
        { 
            title: 'Thursday',
            content: 'Thursday was a new day and we now had tickets to work through for this sprint meaning for the next week or so we will have jam packed days. To finish up on the login page for CSR I was given the task to complete all the error messages, adding the functionality and styling behind them. For example, of the user enters their password wrong an error message will appear; if they enter it wrong more than three times then a different style of alert will appear etc. Therefore, I need to add some javascript to display the correct alert for that specific error. How I approached this was using the react state and a javascript object so that I can have multiple objects within the one variable. When an error is triggered the react state will be set to true and the error message const will be called like so “errorMessage.inactiveError” meaning that the inactiveError message will be displayed. I thought it would be a good idea to add the functionality behind the number of log ins as it would give me some practice with react and javascript but soon found out that the backend team would do it through the server and what I had done was not needed….'
        },

        { 
            title: 'Friday',
            content: 'I had to take some emergency time in the morning meaning I wasn’t in the office until around half 10 allowing for a short day before the weekend! Mark was on PTO today meaning I had rather chill day as I decided I should start to learn some redux, taking up most of the day.Redux is a predictable state container for JavaScript apps. Redux makes it easy to manage the state of your application. Another way of looking at this – it helps you manage the data you display and how you respond to user actions. Therefore, I feel that it would be beneficial for me to tart learning it.'
        },
    ]
},

{
    title: 'Week 16',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Today is the start of my 16th week here at Allstate meaning I have been here for around 4 months; 1/3 of the way through! Its hard to believe how for I have come in the last few months, increasing my knowledge and most importantly my confidence. I still have alot to work on before I leave here but theres still time. The week started off by getting stuck into a new screen…well not really a new screen as such as its the same as the old confirmation screen on WLE only with different styling. I surprised myself in how quickly I could blast out the screen, having it completed in a few hours. However, we soon came to the realisation that having two confirmation screens for both CSR and WLE it then means that if there were to be some changes within the screen after development, the changes would have to be made in two different places. Therefore, some changes are being made to WLE to facilitate to this concern.',
        },
        {
            title: 'Tuesday',
            content: 'PTO - Day off',
        },
        {
            title: 'Wednesday',
            content: 'Today I revisited the animation work that I had previously done concerning the cloud animations for WLE. I had initially created these animations using greensock, a animation javascript library but we found out that it was quite taxing on the users CPU meaning it could affect the performance of the site. Therefore, they were removed rather quickly. Having these animations made a big difference to the overall look and feel of the application so we wanted them in one way or another. Or hope was that creating the animations with pure CSS would be less taxing and it was by almost 40 percent. I spent most of the day working on these animations on codeine before adding them in to the production build to make sure everything as okay.',
        },
        { 
            title: 'Thursday',
            content: 'Following on from Mondays work on the confirmation screen I basically had to scrap all of that work and start from scratch again as it needed to be coded in such a way that it allowed the developers to edit one code base rather than two. Therefore, how I approached this was to import the information screen into the new CSR confirmation screen meaning that when a change is made on the WLE confirmation it will automatically update across the CSR view making it a lot easier in the long run. I found this difficult to get my head around the whole thing at the start but once I understood it I blasted the screen out. The main thing I can take away from today is how to pass props from components and use them to manipulate the screen depending if a prop state is set to true etc.'
        },

        { 
            title: 'Friday',
            content: 'As the week came to an end I finally was making the finishing touches to the confirmation page for CSR. Its felt as if I have been on this page for a long time but when I think about it I have only been doing it from Monday of this week…..which for me isn’t a long time I suppose. I got the page committed and moved onto my next issue which was the PWA splash screens are not displaying for WLE. Therefore, it was my task to sort this issue out and being a Friday not much else was done the rest of the day.'
        },
    ]
},

{
    title: 'Week 17',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Last week I finished up the UI for the confirmation screen however, I forgot that there was a modal component to the screen that was triggered when the user goes to cancel the rescue. This would be an easy task if the UI was the same as WLE as the component was already there meaning it could just be re-used. However, its never as simple as that and the UI was completely different. Instead of creating another modal dialog, it was best to re-use the existing one and use a prop to change the styling depending on what view is current. This took a lot of tweaking and working out but I was able to complete it by the end of the day.',
        },
        {
            title: 'Tuesday',
            content: 'Today I started into the new vehicle locator screens for the fuel flow of CSR which will be used for wen the user is on the phone to a customer and they need to locate the customers car via a location input. The UI is rather simple and easy to make so it shouldn’t take me more than a day or so to Crete both screens.',
        },
        {
            title: 'Wednesday',
            content: 'Carrying on from yesturday I continued to work on the new vehicle locator screens which I should finish up by the end of the day. I came across a few hurdles today specifically with one section of the page that required me to us CSS before and after which I have never previously used before. However, I look at it in a positive way as it gives me an opportunity to learn and overcome this hurdle.',
        },
        { 
            title: 'Thursday',
            content: 'Picking up where I left off yesturday I continued trucking through the vehicle locator screens and was able to get them polished off today. I am quite happy with the outcome as they look clean and professional and most importantly follow the specs of the design concepts. I decided to go a bit further with the designs and add some animation to the interface using greensock, giving the UI more interaction. When a request is sent a green tick appears within an SVG which I animated to pop in on the page load. '
        },

        { 
            title: 'Friday',
            content: 'Testing is a big part of a project as it is required to see if everything is working as intended. Up until now I have only been introduced to the likes of black box testing which required a user to manually go and test the component and take note if it was working correctly. Today I was introduced to script testing which actually requires code written tests that will run through and see if the outcome was desired or not. Overall the ARS project set out to have a 80% code base tested which we have no where near that amount so my job today was to make a start on that testing. I started off my taking some tutorials online and doing some simple test with in the new CSR components that I had created previously but I actually found it quite challenging but never the less it was good to learn a new technology.'
        },
    ]
},

{
    title: 'Week 18',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'To start off the week I took a dive into some new triage screens for the CSR view which were rather simple as the screens themselves didn’t contain that many elements and were repeated over multiple screens meaning I could blast most of them out. I came across one hurdle along the way which required me to use css before and after which I have never used before. Therefore, Mark was able to help me with that and I am a lot more confident with this sort of thing.',
        },
        {
            title: 'Tuesday',
            content: 'Following on from yesturday I was able to finish up the lockout flow triage screens and get them all polished up meaning I was able to move onto the jump start flow which is rather similar meaning it shouldn’t take me too long. After the stand up I was also informed that I had the tire triage flow to work through as well meaning  I had more work to do.',
        },
        {
            title: 'Wednesday',
            content: 'On arrival I was greeted with an email informing me that I had been assigned a new ticket for WLE assigned to me by the product owner specifying that the changes should be moved up on my priority list. The changes were simple as it only required me to change the location of the track rescue button to the top of the screen as they feel that this element should be the first thing that the user sees as it would add more value to the screen. Therefore, I made the changes and got them pushed to the develop branch with no issues. In addition, I also made a start on the new tire triage screens for CSR as they needed to be started so that development could start. ',
        },
        { 
            title: 'Thursday',
            content: 'Continuing on from yesturday with the triage screens, I dived into some css styling using css grid; I wanted to use this sort of styling as I am not as confident with it compared to the likes of flex box which would have made it easier for myself but I wanted to learn. I said to the developer that I would have the screen him by the end of the day which I soon found out was a mistake as I had hit a wall in the development causing the work flow to slow down requiring me to ask James for help. James was able to help me with the issue thankfully meaning I was able to get the screen committed for the developer to pick up.'
        },

        { 
            title: 'Friday',
            content: 'Relating back to the concepts of the triage screens, I missed a feature and therefore spent most of the morning adding it in. When the user selects which tires are flat, the colour of the wheels meant to change colour. Therefore, I needed to pass the array as a prop to the sag component and use simple if statements to check to see if the wheel has been selected or not and if so change the backroad colour of that path. This wasn’t achieved without some help obviously.'
        },
    ]
},

{
    title: 'Week 19 - Week off',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: '',
        },
        {
            title: 'Tuesday',
            content: '',
        },
        {
            title: 'Wednesday',
            content: '',
        },
        { 
            title: 'Thursday',
            content: ''
        },

        { 
            title: 'Friday',
            content: ''
        },
    ]
},

{
    title: 'Week 20',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Today marked the day I returned from my week off of PTO which was much needed to say the least and greeting my return was Miridu from Chicago, who is another manager from the UIE team based in America. Miridu will be with us for a few days so I am sure we will be engaging in a lot of team events and lunches etc so that we can bond as a team and get to know each other a bit better. As I was off for a week I came back to have no tickets on my plate which is nice as I can ease myself back into the swing of things; starting off with some simple styling of the tow transition page which just needed tidied up and adjusted to fit mobile. One of the main knowledge points I can take away from this experience is mobile design building mobile first and then build out as nowadays a higher percentage of people are using their mobile phones to view sites rather than their computers. The use of media queries with SASS makes things very easy..',
        },
        {
            title: 'Tuesday',
            content: 'Tuesday kicked off with a getting a head start into the tickets that I had on my plate concerning some bug fixes for WLE. One of the main issues was when the user fills in their contact and payment details the confirm button was being enabled before all of the input fields were being populated meaning that the user would be able to continue without crucial data being entered. The fix was quite simple as it only required one change to the if statement being used for the button enable. Before it was, if the box was greater or equal to one character, the button was enabled; therefore I simply needed to change the if statement to enable after 5 characters were added. In addition, we also all went out for team lunch to allow miridu to try a Boojum. ',
        },
        {
            title: 'Wednesday',
            content: 'All day Wednesday consisted of a team event as it was miridu last day here at ANI and therefore, we decided we should take a trip up the north coast so that she could experience the country side of Northern Ireland. The all round trip took us most of the day as we stopped for lunch at a local bar and grill restaurant close to bush mills. On the journey home we stopped off at Carrick castle and Knocka monument.',
        },
        { 
            title: 'Thursday',
            content: 'Mark had assigned me three new tickets for me to work my way through concerning customer membership alerts within the home screen of WLE. The application offers users an account that they can receive money benefits allowing them to purchase a recovery service from their account. My job today was to create the UI components for these alerts. These were quite simple task as I had previously done something similar with WLE meaning I was able to complete these with ease and get them committed.'
        },

        { 
            title: 'Friday',
            content: 'Upon arrival into work today I was greeted with a ticket that had been assigned to me by Mark which required me to update the share and Lyft buttons within the tracker screen. The UI simply needed enhanced and updated to match the new zeppelin concepts, however, this turned out to be more difficult that it should have been and not because it required difficult code, more because the application was working at this point in time meaning I couldn’t actually view the screen I needed to edit. Therefore, most of Friday was spent trying to resolve this issue.'
        },
    ]
},

{
    title: 'Week 22',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: '',
        },
        {
            title: 'Tuesday',
            content: '',
        },
        {
            title: 'Wednesday',
            content: 'Today is the first day back from my week long break and upon my return I got stuck straight back into some tickets as I had some assigned to me whilst I was away. We are working our way through the new screens for AMC (Allstate Motor Club) which allows users to have an account with funds etc that they can use to pay for a service. Therefore, the UI’s need to be tweaked in such a way to facilitate for this. I spent all day working on the select driver modal screen which simply allows users to select who’s currently driving the car and who needs the service. One difficulty that I came across was actually just targeting an element using css which should be quite simple…maybe I lost the knowledge on my week off; Mark was able to help me and explained where I was going wrong and I was able to complete the screen.',
        },
        { 
            title: 'Thursday',
            content: 'For the next two days Mark will be attending a conference meaning he will be out of the office leaving me to hold the fort for the time being. Continuing on from yesturday I picked up where I left off with the AMC ticket. The first half of the day was going well I was able to get a decent amount completed however, I came across an issue that stopped me in my path.'
        },

        { 
            title: 'Friday',
            content: ''
        },
    ]
},

{
    title: 'Week 23',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'The week started off with a workshop provided by James thats main goal was to introduce and teach Jest test scripts to the whole team. This class was very beneficial for me and Mark especially as we are required to write these tests for ARS. The goal for ARS is to have an 80% test coverage which is a high order seeing that we haven’t wrote any up till now. I have tried to write a few of these test scripts before for ARS so I have very limited knowledge on the topic but I now feel a lot more confident with writing these scripts now meaning I can make a start sometime this week In the afternoon I had my mid term placement meeting where a member of the university visited me to discuss how my placement is going. It came to my attention that I had a lot of tasks such as safety questionnaires etc, that I needed to complete for my placement therefore, I spent the rest of the day sorting these tasks out.',
        },
        {
            title: 'Tuesday',
            content: 'Today was the end of the sprint for ARS and both me and Mark still had a lot of tickets still outstanding meaning we needed to get a move on and get as many as possible shut down today. As a lot of tickets overlapped between us we spent the morning going through all tickets to establish what we have completed and what still needs done. Luckily, after breaking all the tasks down there were less than we first anticipated with only a few left to do, with one of them being the issue that I had encountered last week concerning the vehicle select screen which Mark was unable to complete also. Therefore, we required the help from react expert James and he was able to help close the ticket meaning we were in the clear of tickets and ready for the sprint planning later in the day.',
        },
        {
            title: 'Wednesday',
            content: 'As we are commencing work on secondary tow, Mark suggested that I should start exporting some screens and components from CSR into the new branch as many of them were very similar. This was simply a copy and paste job from one branch to another but it took a reasonable amount of time as I was having to go back and forth between the branches in order to get all the child components within the screens. For today my main task was to export the header and login screens as they were very similar in design to CSR. In addition, I also moved onto some confirmation screen styling enhancements as the code needed tidied up and changed.',
        },
        { 
            title: 'Thursday',
            content: 'Today was the day of our team lunch which would allow us to bond outside of the office and get to know each other a little better. We went to the jailhouse in Belfast and enjoyed a very nice lunch followed by a few pints. The rest of the day consisted of me  picking up from yesturday with the confirmation screen changes. The issue with the screen was the payment section was created using grid for each div. However, sometimes all the divs won’t be present meaning there would be a lot of whitespace making the styling of the screen incorrect.'
        },

        { 
            title: 'Friday',
            content: ''
        },
    ]
},


{
    title: 'Week 24',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'This week marked the start of work into the secondary tow aspect of ARS which is essentially for the people who are taking the calls from users who are using the roadside app. Therefore, a user will ring up a CSR to arrange a service, the CSR will then use the secondary Tow screens to get details on the user, vehicle and requirements of the assistance. For this aspect of the project, we are working alongside another UIE from America called Marcy who is part of the nerderey. Don’t ask me what that is cause I haven’t a clue.  I spent most of today simply getting to grips with the work that marcy had already done to try and pick up where she left off. I made a start into the tow dispatch page styling which took most of the day.',
        },
        {
            title: 'Tuesday',
            content: 'Following on from yesturday, I continued to blast through the styling for the tow dispatch page and to be honest its taking me longer than expected a I hit a wall with some of the styling for the dropdown component. I struggled to target an element within the component with CSS which took me a while to figure out. The issue was simply my lack of knowledge of CSS as I had to target the root parent element first in order to apply the styles to the child. The main thing that I can say about starting here at Allstate is how shocked I was to how more complex CSS is and the capabilities of it.',
        },
        {
            title: 'Wednesday',
            content: 'Moving on from yesturday I continued making my way through the secondary tow screens by creating the add user screen. This screen is very similar to the other components that I have created meaning I could just copy and paste the elements with minimal changes. The second part of the day I was greeted with an issue within AMC that needed taken care of urgently as it becoming a blocker for the development team meaning they couldn’t progress any further until this was done. The issue was that if the user had an account a different modal screen was shown within the location page listing all of the users cars. Before starting I thought that this task was going to be quite easy as it would only be a simple case of declaring a state and changing the render of the modal depending if the state is true or false. However, this wasn’t the case as we hit a complication with passing props. I wasn’t able to complete it today so its tomorrows job.',
        },
        { 
            title: 'Thursday',
            content: 'Continuing on from yesturday I picked up from where I left off with the modal screen. I asked Mark for help however he also wasn’t able to figure it out which doesn’t make e feel as bad for not being able to complete. Therefore, I had to ask James to come down and give me a hand and he was able to solve it quite quickly. I found out that you are able to pass a function as a prop which I never knew you could do meaning you can write this.props.openModal, open modal being the function.'
        },

        { 
            title: 'Friday',
            content: 'Friday started off with the normal fry in the morning taking up most of the morning and then straight into some tickets that needed closed sharpish as the sprint was ending on Tuesday. The customer section within secondary tow that I had created at the start of the week needed some minor tweaking and tidying up when it came to responsiveness. As the page was created using the RPL(React Pattern Library) framework it had a lot of styles that was causing the elements within the page to act in a way that it wasn’t supposed to and therefore after spending more time than I should of on the issue, I resulted in re-coding the section my own way which in the long run worked out.'
        },
    ]
},


{
    title: 'Week 25',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Today started off like you would expect a Monday to be…… Stressful. I was greeted with a security update for my Mac which resulted in my monitors not being recognised anymore meaning I had no screens. Therefore, I spent the first half of the day trying to solve the issue which ultimately	 left me accepting defeat and taking it to the Tech Cafe to which I was then given an adapter for each monitor making the Targus box that I have on my desk obsolete. The second half of the day was filled with meetings and stand ups discussing what are next moves are for today and tomorrow before the sprint planning.',
        },
        {
            title: 'Tuesday',
            content: 'After finally getting sorted with my computer yesturday I can get stuck into some tickets that I had on my plate which required me to add some elements to the secondary Tow dispatch page. Within this page there would be simple and complex flows meaning that more things needed added to the page depending on a state. In addition, there was also some styling changes that needed done so I changed them as I went along. The main section that I was working on today was the provider notes; a section where the user can leave some notes, feedback or instructions. This data needed saved into state and used elsewhere meaning I needed to set this up for the backend team. ',
        },
        {
            title: 'Wednesday',
            content: 'Today I found out about the joys of merge conflicts….Similar to every morning I come in and do a pull from the branch which simply pulls down other peoples work from the repository. However, this morning I didn’t as I still had some work to commit from yesturday. Within that time a lot of commits had been made between Mark and Marcy within the same pages that I had been working on. Therefore, once I committed my work there was come conflicts which needed to be resolved. These merges allow you to see your changes and the incoming changes side by side and you have to manually choose what changes you want to accept. I spent half of the day trying to figure out where the issue lay.',
        },
        { 
            title: 'Thursday',
            content: 'Today was the day of the Allstate Christmas dinner which would be held in the Waterfront hall in Belfast. As the event was a smart dress code most of the guys actually wore their suits in but as I lived rather close I was able to go home and change..Thankfully. Today was a slow day as I didn’t have that many tickets to work through; one being the enhancement of the soft service triage message which wouldn’t take long at all as it was simply copy and pasting new paragraphs in.'
        },

        { 
            title: 'Friday',
            content: 'As it was coming to the end of the year it meant that I had to use all of my emergency time and PTO as I would lose them otherwise. Therefore, I decided to take a few hours off in the morning to recover from the Christmas dinner. I arrived at the office around 12 o’clock meaning I only had a few hours till I could go home again. Not much was done today.'
        },
    ]
},


{
    title: 'Week 26',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Being the last week before most of us finish for Christmas, a lot of tickets were being pushed through to us. Today I had three tickets assigned to me of which two shouldn’t take long and one being a more complex. The triage messages I was not able to complete today but encountered an issue that I’m still not sure how to resolve; When the user selected a certain option within the lockout flow it would take them to a different screen. This sort of job would usually be completed by the backend team but I decided to give it a go and was unable to work out the code. I then moved onto a ticket that required me to make the input labels consistent throughout the application which was a simple enough job.',
        },
        {
            title: 'Tuesday',
            content: 'A major issue that myself and Mark had to combat today is being able to tab into an iFrame within the modal screens. An iFrame acts like a webpage within a webpage meaning that the elements rendered within the iFrame technically are not within the parent page taking it harder to target. The issue was when the user tabs through the input fields they weren’t able to tab into the iFrame meaning we would have to find a solution. I spent most of the day just researching the issue trying to find anything online that could point us in the right direction, however I didn’t seem to have any luck.',
        },
        {
            title: 'Wednesday',
            content: 'Carrying on from yesturday I picked up where I left off with the iFrame issue and was able to find something that may come in handy. Using javascript you can use “contentWindow” to read the contents of an iFrame meaning we could maybe see whats inside there and target the input field accordingly. Well that is the goal but we haven’t figured it out just yet. Both me and Mark are working through this issue so hopefully it shouldn’t take us too long.',
        },
        { 
            title: 'Thursday',
            content: ''
        },

        { 
            title: 'Friday',
            content: ''
        },
    ]
},

{
    title: 'Week 27 - Back after Christmas/New Years',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: '',
        },
        {
            title: 'Tuesday',
            content: '',
        },
        {
            title: 'Wednesday',
            content: 'Today was my first day back after the Christmas/New year holidays and I can safely say that the break was needed. However, upon return I got stuck straight back into the swing of things with issues that had been raised by Ashish. Before the break I had updated the Triage messages for WLE, simply adding different messages and buttons. However, for the lockout flow there are multiple options for what type of lockout it is, for example, whether the keys are locked in the car/trunk or if they are simply lost. Every option had a different message and therefore my task for today was to link the option with the appropriate message. This was more difficult than it seemed as some backend code was linked to it of which I had no idea what any of it meant and therefore I had to workout that before I progressed any further. After some time, I finally cracked it and got the issue resolved and pushed up into the develop branch to be tested. ',
        },
        { 
            title: 'Thursday',
            content: 'Secondary Tow is due for release tomorrow and it is safe to say that it won’t be released on time as there are still numerous bugs and tickets to be ironed out. Looking back at the zeplin concepts, there are a few sections of the flow that we still needed to create. Therefore, my job today was to add one of the main sections into the flow; the parking/garage section. It was a rather simple task to complete as I had to create the section containing an input field and radio buttons which were then triggered depending on a state that was set above. I was able to complete it without an issues and I got it pushed up to the remote branch.'
        },

        { 
            title: 'Friday',
            content: 'One of the styling issues raised by the designers was that the dropdown currently have a transparent background which need to be switched to white. This seems like a simple task as you can just target the css background property of the select and that would be it done. However, as we have a separate div containing the down arrow within the select it means that when the background property Is applied it covers up the div. This can be resolved with a simple z-index adjustment but it then means that when the user clicks on the arrow box it does not trigger the dropdown. Therefore, I spent today trying to combat this issue and find a solution.'
        },
    ]
},

{
    title: 'Week 28',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Monday',
            content: 'Today marks the day of my 7 month here at Allstate which is hard to believe as it feels as if it was just yesturday that I started. This means that I am over half of the way through my placement and if it continues to go as fast as it has I will be back in university in no time for my final year. I can safely say that I have thoroughly enjoyed my time here and can see first hand how far I have come and developed within this short period of time. As the secondary tow MVP is coming to an end, we are simply tidying up the screens that are required for this sprint meaning we would target bugs and styling issues that we come across or are reined by other members of the team. Today was rather laid back as I didn’t have much on my plate. On Friday I was styling a section for Anish (a developer) getting it ready for him to add the backend but upon arrival this morning he reached out to me as there were a few styling issues that needed corrected so I spent my day working through those fixes to complete the section. ',
        },
        {
            title: 'Tuesday',
            content: 'Continuing on with the secondary tow bugs, an issue was brought to our attention within the vehicle details section. I think I discussed before that the drop down selects needed a white background which turned out more difficult than we had first anticipated. There were two paths that I could have taken with this issue, one would involve Javascript and the other would utilise simple CSS. Therefore, I opted for the easier route. The javascript route would cause me to try and find a way to target the select dropdown trigger by clicking on the div…this wouldn’t be an issue if there was only one dropdown as I could use one function and target the trigger, however, I don’t think this would be possible as we had multiple dropdown. Thus, it was a better option to use CSS. I was able to add a background to the dropdown component and use z-index to change the layers meaning the select would always be on top making it clickable. I got the issue fixed and pushed up to the branch ready for testing. ',
        },
        {
            title: 'Wednesday',
            content: 'Wednesday basically consisted of sprint planning which took up most of the day where I was assigned a few tickets to complete within the next few days.',
        },
        { 
            title: 'Thursday',
            content: ''
        },

        { 
            title: 'Friday',
            content: ''
        },
    ]
},

{
    title: 'Week 29',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Weekly Update',
            content: 'During last week it was brought to our attention that we had still to create another screen for the Secondary Tow MVP, the Manage user screen. This is a screen that the admins can use to remove or change the password of a user. The screen consisted of two components, a search box and results, both of which have been created in other sections of ARS. Therefore, with some small changes, I was able to create the screen in no time. As there was going to be a list of users, I could use a javascript map to cycle through all the users and list them. Using this map will save us repetition of code thus saving a lot of time and effort down the line whenever the backend team link up the API. The rest of the week was simply going through all of the screens to see if the styling is correct and they match the zeppelin concepts. A few things needed changed; simple padding or margin issues as usually when Mark and I create screens we pay attention to detail so that we don’t have much to fix later on. One of the main issues that I had found when comparing the screens with the concepts was that they had the wrong styling for the footer, as the WLE and secondary tow footer where different. Therefore, I spent the day Friday importing the new designs from the CSR branch and adding them into the screens.',
        },
    ]
},

{
    title: 'Week 30',
    timestamp: <i>25th June - 30th June</i>,
    post: [

        {   
            title: 'Weekly Update',
            content: 'This week was rather productive for both Mark and I as we were able to close a number of tickets and solve numerous bugs throughout the application. One of the main bugs that has been floating around since I started was an issue with the modal screens and header; if the modal screen was active the header links wouldn’t work meaning the user had to close the modal if the wanted access to the menu. I remember raising the bug whenever I first started here at Allstate and it was never spoke of again until Ashish raised it to Mark a mere 7 months later. Therefore, I took up the task to try and solve it which I surprisingly solved rather quickly. A quick search of google and the react pattern library told me that I needed to pass another prop to the modal screens to allow the header to work. The second half of the week was spent updating the styling for the error messages within secondary Tow. When the user submitted the form without filling in the required fields an error message would render under the field. However, some needed to have a red background meaning I would have to create a state and apply the class according to weather the state was true or false.In addition, I was also working on the tire select error handling which turned out to be quite difficult and therefore requiring the help of James. It was difficult as props needed to be passed between many components. ',
        },
    ]
},






]