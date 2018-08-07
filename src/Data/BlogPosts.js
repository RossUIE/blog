import React from 'react';

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
                content: 'On the 25th June I commenced my placement with Allstate NI where I would send the next year working in the UIE team there. This Position involved front end development where I would be developing websites and apps for the Allstate corporation. The first day was simply a training day where all of the new interns and placement students came together and got to no each other by completing some random ice breaker tasks. Later in the day I was then taken up to the forth floor where I would be living for the next year, to meet my team. On first impressions all of the team seemed really nice and helpful.',
                
            },
            {
                title: 'Tuesday',
                content: 'Tuesday started off with a meeting with my manager Brian, he took me through the different departments within the company and how we all worked together to achieve the end development goal. I was informed that I was going to be receiving a MacBook Pro however it wasn’t ready to be collected yet. Therefore throughout Tuesday and Wednesday I was simply shadowing different members of the team to see what they are currently working on. I had no idea the broad spectrum that the UIE team had. Some members of the team are working with advertisements, adding in animations etc, whilst others are working on new apps and internal sites.',
            },
            {
                title: 'Wednesday',
                content: 'Wednesday also gave me an opportunity to engage with my team a bit more as we all went out for a team lunch. This allowed me to speak with the guys and get to know them a bit more. Wednesday mainly consisted of me shadowing other members of the team.',
            },
            { 
                title: 'Thursday',
                content: 'The two previous days were rather slow for me as I didn’t have much to do. However, I was able to get my laptop on Thursday and get set up with my login. This meant that I could start the learning process. I was informed that I would have to learn a few new languages to get started which was a bit over-whelming to say the least. The big one was “React” which is a popular javascript library that a lot of developers use these days. Therefore, I was excited to see what the main technologies are all about.'
            },
            { 
                title: 'Friday',
                content: 'Friday was a rather chill day as we started the day off with a tea break with the whole team. I then dived into some learning. I thought it was best to start somewhere familiar and decided I was going to re-cap my HTML knowledge. Closing the day was a company Social event we attended with kinda free everything, this also gave us all a chance to catch up with some of the other placement and summer intern students we hadnt seen since Mondays induction, a fantastic ending to week 1.'
            },
        ]
    },
    {
        title: 'Week 2',
        timestamp: <i>2rd July - 6th July</i>,
        post: [

            {   
                title: 'Monday',
                content: 'First thing Monday I dived into some more complex learning by starting to look at ES6 Javascript to help build the foundations for React. ES6 being a new generation of Javsacript I hadn’t previously been taught this material at University. Therefore, essentially I had to start from scratch and learn the new syntax(Which was rather annoying).',
            },
            {
                title: 'Tuesday',
                content: 'Another new technology that I was going to be using was the “Greensock” animation library that allowed you to add animations to your interfaces. Most of Tuesday consisted of me exploring the library and going through some tutorials.',
            },
            {
                title: 'Wednesday',
                content: 'Continuing on from yesturday, I started to work with SVG’s and how to animate them. I started using sketch for the first time today. I have never used this application before and was quite taken back on how easy to use the interface was and the tools within it. It allows you to import a SVG and export it as HTML code which made it easy to animate and include in your website. As the SVG was now code, it allowed me to target certain elements of the image and animate them seperatly. For some practice, I decided to animate a car so that when it moves the wheels move along with it.',
            },
            { 
                title: 'Thursday',
                content: 'Thursday I dived into some rect tutorials. Chris, a member of my team was kind enough to give me access to his udemy account which was an online learning resource. Throughout the day I followed these tutorials and created a real estate app which included features such as filtering data etc. I never knew that this sort of functionality could be done on the client side. It turned out to be less difficult than I had first anticipated.'
            },

            { 
                title: 'Friday',
                content: 'Today was very similar to yesturday in that I simply continued on with tutorials trying to learn this new language. There are new concepts to this language that is difficult at first. React takes up the use of JSX which is kind of like Javascript and HTML in one; it allows you to create components which can be used to split up a page.  For example, if your index page required a header and nav, in react you can create a component which you can call to display this header and function. Therefore, it can be reused throughout the ret of your site by simply calling one word.'
            },
        ]
    },


    {
        title: 'Week 3',
        timestamp: <i>9th July - 13th July</i>,
        post: [
    
            {   
                title: 'Monday',
                content: 'This week I wanted to give myself a challenge and try and use my React knowledge to create my own website. As I am interested in cars I’m going to create a website that lists a certain number of cars and their info. Therefore, today I started to create this site by making the header and nav components. These components are simple enough to make, simply code your header and nav within the component and then import it into your app.js file. This then allows you to call that component and it will be compiled.',
            },
            {
                title: 'Tuesday',
                content: 'Today I continued work on my website by making the listings of the cars that I will display. This was going to be the hardest  section of the website and unsurprisingly I found it rather difficult to complete spending most of the day trying to make it work before I finally gave in and asked for help from a member of my team. Within React I was able to create an array of objects where the data for the cars are stored. From there I crated a loop which would display the information within a listing. This is a really handy function as if in the future you anted to add more cars you would simply add another object to the array and it would automatically add the listing with the info. I learnt alot today, mostly to do with the react syntax etc. For example in react instead of using “for, do, do while” loops that I had previously been taught, you would use keyword “map”.',
            },
            {
                title: 'Wednesday',
                content: 'Wednesday consisted of finishing up on the website, fixing up some small issues etc. I then started a new online course on code academy on react to reinforce my react knowledge and try to understand it a bit more. Furthermore, as I am going to be using Sass as a styling language I thought it was best that I started teaching some of that as well and therefore started a course on code academy for that too.',
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
                content: 'Today is that start of my forth week here at Allstate, it has flown in too quick. Only 11 more months to go. I stayed off the day by starting another code academy course on Git; one of the most widely used modern version control system in the world. As I would be using it throughout my time here I thought it would be best to get a heads start on using it. As this would be all command line, it seemed rather daunting. However, I’ve come to realise its actually a rather easy language to pick up. My afternoon consisted of me diving deeper into react, going over some more advanced tutorials. At 3 ovlock we had a creative tech meeting which allowed all of the UX teams from around Allstate to come together and talk about their ideas etc. This meeting specifically was on animations and how they can be created which I found helpful as I knew I would start to use animations soon enough.',
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
                content: 'During my time at Allstate I am going to be using an animation library called Greenock. Therefore, I wanted to add some animation to my blog website so that I could get some practice. My website contained a logo which I wanted to animate. The greensock library has many animations which will make the website more interactive. Furthermore, this also gave me the opportunity to use sketch. I had never previously used sketch before as I rarely used a Mac however I have come to realise it is quite a simple piece of software to master.'
            },
        ]
    },

    {
        title: 'Week 5',
        timestamp: <i>23rd June - 27th June</i>,
        post: [
    
            {   
                title: 'Monday',
                content: 'Today was the day that I was going to start into a new project with another member of my team. That project being “ARS”; Allstate roadside service. This is an app that allows customers to order different types of roadside service if they are stuck. The morning started off with me doing some touchups on my blog website, correcting some of the interface issues that it had. The second half of the day consisted of my workspace getting set up ready for the new project as a lot of new dependencies and modules needed installed. Once this was all completed, I was asked to go see I could see any issues with the interface and bring them to light so that they can be fixed.',
            },
            {
                title: 'Tuesday',
                content: 'Today marked the start of me taking on some tasks for the new project that I would be working on for the foreseeable future. To ease me in I was simply given some styling and text changed to do. This was harder than it may seem as there is hundreds of lines of code that I have to filter through to try and find a specific line of rect to change. It took longer than I originally thought but I’m starting to learn the folder structures and where to look within them. I came across a few difficulties today, but I was able to ask my team member and we were able to sort the issue out pretty quickly. Today was to ease me into the project and I look forward to diving deeper into it getting more complex tasks etc.',
            },
            {
                title: 'Wednesday',
                content: 'Today I continued work on the ARS. The way the project works is that a person is assigned a ticket with a number of different sub tasks within it. As I am only starting out tickets are not being assigned to me. Mark, my team member that I am working with is assigning me some tasks from his tickets which are simple enough to do. One of the main tasks today was to simply change a few fields about and add a checkbox to one of the screens along with other text. Furthermore, I had my first stand up meeting where all of the members of the team come together and talk about what they have done and any barriers that they have come across. This was an experience in itself, as it allowed me to see what it was like to have a meeting within a professional team. IN addition, we also had a “Team sync” meeting where my whole team in ANI had a Skype call with Mridu to see how we were all getting on.',
            },
            { 
                title: 'Thursday',
                content: 'The day started off with the remaining tasks of a ticket which mark helped me complete. A code review was undertaken where mark would simply look over the changed I had made to the project and approve or disapprove them accordingly. More disapproves at this stage then approves but nevertheless, I’m still learning as I go. Therefore, today marked the first of my commits to the project. Once the code was approved we then pushed the changed to the master branch of the repository.  I have learned a lot when it coms to using Github, in terms of the commands and how the structure works, however there is still a lot to learn. Every other Thursday there is a demo of ARS so that everyone can see how the app has progressed. Today one is being given which will show some of the styling that I have worked on.'
            },
    
            { 
                title: 'Friday',
                content: `Today was quite a stressful day as I was given some more things to do from yesterdays demo feedback. My task today was to fix the padding an margin issues on the error messages on the contact/payment screen. When the user enters incorrect data into one of the fields, an error message will appear below the inout box. However, there were padding issues and therefore they needed fixed. They were simple enough to do. However, two of the fields were beside each other meaning the error messages appeared below both of them. Although, they had a static padding set to them meaning that if one of the fields was correct and the other wasn’t then the error message wouldn’t display in the correct place. It was my job today to correct this. I found this to be a very difficult task as I am still unfamiliar with the language. The solution involved adding a classname to the react component field if an error had occurred. Like so:\n` +
                `svrbsrbrbdtbdt`
            }
        ]
    },


    {
        title: 'Week 6',
        timestamp: <i>25th June - 30th June</i>,
        post: [
    
            {   
                title: 'Monday',
                content: 'The week started off with me diving into some styling issues concerning buttons and font sizes. My teammate mark was working from home today so I thought it was best I didn’t pick up any task that was going to be difficult as I wouldn’t of had any help. The main issue I had to change was the colour of the text within the primary buttons. They were not consistent throughout the app. Therefore, I simply made a new variable and added the colour to it and changed them throughout the app. IN addition, some screes had some discrepancies in font sizes being incorrect, so I was able to correct those too. I also completed some React tutorials today just to try and improve my knowledge further as I don’t feel confident with it yet.'
                
            },
            {
                title: 'Tuesday',
                content: 'Today I started off the day shadowing mark as he was doing a task that would be benificial for me to see. The task was to add a new icon to one of the screens and add the functionality to it. He completed one icon and then I was given the task to add another style of icon to a different screen and style it. The most simple of tasks I have found to be quite difficult recently as I am using new technologies that I have never used before. For example, we were not taught flex box in University and it is one of the standards for styling here at Allstate. Therefore, a simple 5 minute task seems to take me longer. With some help I was able to complete the task. Later in the day I was given another part of a ticket. The ticket required me to add some payment card icons to one of the modal screens. Again I found the styling difficult enough.',
            },
            {
                title: 'Wednesday',
                content: 'Today I picked up where I left off yesturday with the new icons that were being added. I wrapped this up correcting the styling issues I was having. A code review was then taken and I was able to commit my changes to the internal GitHub. The next task was simply some styling issues relating to responsiveness which again uses flex box and css grid which I’m not familiar with. When the screen enlarged the text was not lining up so it was my job to correct this. I was frustrating to say the least at the start but I was able to correct the issue partially. Fixing one thing breaks another it seems so I still need to fix the new issue at hand. Later in the day I have my daily stand up where I will explain the work I have done.',
            },
            { 
                title: 'Thursday',
                content: 'Continuing on from yesturday I was able to solve my issue concerning the logo. As this app is going to be used by many different partners aswell as Allstate good hand rescue. There is a div in the home screen where the partner logo would go. My task was to display the logo if there was partner details and hide it if there wasn’t. I started this task yesturday; however wasn’t able to complete it as. Taking. Break and coming back to it the next day, I was able to solve the problem within 10 mins. Its shown me that the best thing to do when your stressing over an issue is to take a break. Later n the day I was simply doing some small styling tasks, fixing bugs etc.'
            },
    
            { 
                title: 'Friday',
                content: ''
            },
        ]
    },

    
    
    




]