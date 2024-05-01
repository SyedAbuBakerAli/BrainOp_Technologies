started Backend server:
Step-1 npm i (to install all server dependency)
step-2 (optinal) npm run seeder to populate blog in you database(I write a script if any one want to see blog post in your database they can populate using this command)
step-3 npm start


started Frontend server:
step-1 cd frontend(to go frontend directory)
step-2 npm i (to install all server dependency)
step-3 npm start


Technology Stack: 
Backend: Nodejs and Express.js framework
Frontend: TailwindCSS for style and ReactJs framework with Redux Thunk for state management
Database: MongoDb


Signup Screen:
server and frontend both validation completed
Jwt token authentication implemented using brcypt libraray with hashing algorithms


Blog Screen:
get all post with tailwind css styling (created Protected Route)
pagination implemented 
also getting single blog post while clicking (created Protected Route)



Bonus Points completed:
Use middleware for authentication and authorization.
Add password visibility toggle.