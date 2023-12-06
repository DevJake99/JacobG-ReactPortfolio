import cryptoZone from '../assets/images/cryptoZone.png'
import MVCTechBlog from '../assets/images/mvctechblog.png'
import MealShare from '../assets/images/MealShare.png'
import ReadMEGen from '../assets/images/ReadmeGen.png'


export const projectList = [
    {
        name: 'Crypto Z0ne',
        image: cryptoZone,
        description: 'This project was built on jQuery, to deliver a single page like feel to the user. It provides a friendly user interface thar presents users with basic market information on trending crypto-currencies. **Disclaimer : This application uses a free api which limits total api calls, functionality may be limited based on website traffic',
        link: 'https://devjake99.github.io/Crypto-Z0ne/',
    },
    {
        name: 'MVC Tech-Blog',
        image: MVCTechBlog,
        description: `This application was built for aproject durring my Web Develpment Bootcamp
        and displays my ability to render multiple different views using the Handlebars templeting engine.
        Additionally, the application renders data through a RESTful API which makes queries to an SQL databsase 
        using the Sequelize and MySQL libraries. Users can succesfully create an account and log in to create a post,
        while the server uses UserAUth and session data to keep track of logged in users and prevent unanymous posts (from a non user).`,
        link: 'https://sheltered-fortress-24149-825d4e6514c1.herokuapp.com/',
    },
    {
        name: 'Meal Share',
        image: MealShare,
        description: `MealShare was our second school project in which we used Handlebars to render different views that can display conditionally if a user is logged-in.
        This application uses a RESTful API that makes queries to a SQL database using Sequelize to model the tables and mySQL for easy querying.`,
        link: 'https://meal-share-748a47c90b3f.herokuapp.com'
    },
    {
        name: 'ReadMe Generator',
        image: ReadMEGen,
        description: `ReadME Generator is exactly what it sounds like, it is an application built with Node.js that runs in the terminal or a CL environment. With the power of 
        Node and Inquirer, This application prompts users with guided questions in order to generate a complete and professional Readme.md file. `,
        link: 'https://github.com/DevJake99/ReadMeGen',
    }
]

