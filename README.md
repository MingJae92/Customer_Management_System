
Project Decision Documentation: MERN Stack Selection

Introduction
The choice of the MERN (MongoDB, Express.js, React, Node.js) stack for this project stems from a thoughtful evaluation of various factors influencing development. The decision is grounded in the desire to create a scalable, efficient, and user-friendly customer information management system. Let's delve into the rationale behind opting for the MERN stack.

MERN Stack Overview
MongoDB (M):

A NoSQL database known for its flexibility in handling unstructured data.
Offers scalability, making it suitable for evolving datasets.
Express.js (E):

A minimalist, yet powerful, Node.js web application framework.
Simplifies server-side development with its pragmatic approach.
React (R):

A declarative JavaScript library for building dynamic user interfaces.
Facilitates the creation of interactive and reusable components for single-page applications.
Node.js (N):

A server-side JavaScript runtime that enhances the efficiency of server-side applications.
Embraces an event-driven, non-blocking I/O model for optimal performance.
Decision Factors
1. Unified Language: JavaScript
The MERN stack's adoption of JavaScript throughout the entire development stack fosters code consistency and reduces cognitive load. Developers proficient in JavaScript can seamlessly navigate between front-end (React) and back-end (Node.js) development, promoting a unified development experience.

2. Full-Stack JavaScript Development
The MERN stack offers a holistic JavaScript-based development approach, ensuring a harmonious blend of front-end and back-end technologies. This alignment facilitates a cohesive development process, aiding in codebase comprehension and maintainability.

3. React for Dynamic UI
React's component-based architecture and virtual DOM bring efficiency to building dynamic and interactive user interfaces. Its focus on reusability aligns with the project's objective of creating a streamlined and maintainable user interface.

4. Express.js for Server-Side Development
Express.js, a lightweight and flexible framework, provides an uncomplicated approach to server-side development. Its middleware architecture allows for easy integration, contributing to the project's goal of readable and straightforward code.

5. MongoDB for Scalable Database
The flexibility of MongoDB in handling evolving data structures and its horizontal scaling capabilities make it an apt choice for a customer information management system. This accommodates potential growth in data volume without compromising performance.

6. Scalability and Performance
The MERN stack is recognized for its scalability and performance attributes. Node.js' asynchronous nature, coupled with MongoDB's scalability features, ensures optimal performance under varying workloads, aligning with the project's scalability requirements.

7. Rich Ecosystem and Community Support
The MERN stack benefits from a robust ecosystem and vibrant community support. This wealth of resources accelerates development, leveraging established tools and community expertise to enhance project efficiency and maintainability.

8. Comprehensive Testing Support
MERN's comprehensive testing support, including frameworks like Jest for React and Mocha/Chai for Node.js, provides a solid foundation for developing reliable and resilient applications. This aligns with the project's emphasis on ensuring the security and robustness of the system.

Conclusion

The decision to employ the MERN stack is rooted in its ability to offer a unified development experience, scalability, and the means to deliver a user-friendly interface. This stack, with its unified language, versatile components, and extensive community support, aligns seamlessly with the project's vision of creating a secure, performant, readable, testable, scalable, and simple customer information management system.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

### To run front end add env file top level of the project add your REACT_APP_URL. To run the back end, add a config folder and add an env file then add server PORT and MONGO DB URL for the RESTful API. 

### Once env file and config folder all set up, in the main directory use npm start command. For the server to start cd into main project folder a use command cd Server after than run nodemon server.js 


