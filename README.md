# BACKEND 
Amazon Project, upload files: back-end with NodeJS.

In this project, the backend will receive the files / videos provided by the frontend, through axios (HTTP client); will write to the Mongodb Compass database and finally host in the cloud (AWS):
For this purpose it was used:

<ul>
    <li> multer: middleware for transferring multpart / form-data files; </li>
    <li> morgan: middleware that logs HTTP reissues; </li>
    <li> nodemon: automatic application restart; </li>
    <li> mongoose: Odm for manipulating the database. </li>
<ul>


*For install:*
    
    npm install

*For run:*

    yarn dev
