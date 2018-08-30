# PARROT
Parrot it's very simple social network created by @vsilva472 with NodeJS and MySql with some basic features:

  - SignIn, SignUp, SingOut, Recover Password (send email not implemented) 
  - Post a status, including images
  - Receive notifications (only when someone followed another person)
  - Feed with post of friends
  - Upload avatar (very simple with js)
  - Upload a cover for your profile (again very simple implementation with pure js)
  - Follow/Unfollow a person
  - See a person profile

**NOTE** A working sample can be found at https://vsilva472-nodejs-parrot.herokuapp.com
 
## How to Install
1. Clone this repository
2. Execute the command **$ npm install**  to install project dependecies
3. Inside folder **/config** rename the file **config.sample.json** to **config.json** and complete the values of your database name, username and password
4. Execute the migrations.
4.1 Inside project root folder execute the command **$ node_modules\.bin\sequelize db:migrate**
5. If you whould some dummy data you can do a seed inside users table, otherwise go to step 6
5.1 Exceute the command **$ node_modules\.bin\sequelize db:seed:all**
6. Finally its time to start the server with the command **$ npm start**
7. You can access the project on http://localhost:3000

**NOTE** Execute the commands above without the leading "$"

### Technologies
This project was written with de following technologies:

    - NodeJS v5.8.11
    - npm v.5.6.0
    - mysql 5.5.0
    - bootstrap 4.4.0
    - jQuery
    - jade (template engine)
    - Sequelize 4.x
    
### Coming Soon Features!

   - Scroll pagination on all pages (feed/profile/who-to-follow/notification)  
   - See who follow you and who you follow
   - See others following/followed person
   - When you follow someone by "who to follow sidebar" other suggestions will appear
   - Real time direct messages with sockets

### Note
The content of views was written in Brazilian Portuguese

### LICENSE
MIT