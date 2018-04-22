# 1. Introduction
This is simple system for student with three different purposes.
1. Students can purchase monthly parking online.
2. They can obtain their current seminar.
3. They can order official transcript.

# 2. Usage
To use this system, students have to register, and then they will redirected to login pages.
After registration they can login and authenticated by the system, which will store token in localStorage.
After logging in they will redirected to the dashboard and there will be three options to choose which is:
1. Go to purchase parking spaces for one month.
2. Obtain the current seminar schedule,
3. Order official transcript.

# 3. How it works.
1. Using the magics of AngularJS, a simple system can be created quickly. AngularJS was used as front end of this system to handle routing and user data input.
2. For backend, this system utilize PHP to handle the data received and store it into database. The data was received when AngularJS contact the PHP using $http services.
3. This system also use Material Design Lite for styling.

# 4. Conclusion
Building this system is fairly easy because there is not much going on behind the scene. But it can be improved by adding security layer in authentication such as using JWT. This system also can be improved by building a student profile which has several database table and make a relational between them. For example, by creating a table student, parking, seminar schedule and transcript, we can link them together by creating relationship. This can create a more dynamic system.

# Todo

- [ ] Separate HTTP call in component to service
- [ ] Upgrade ng-annotate-loader to babel-plugin-angularjs-annotate