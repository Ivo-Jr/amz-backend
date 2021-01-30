# BACKEND 
Amazon Project, upload files: back-end with NodeJS.

In this project, the backend will receive the files / videos provided by the frontend, through axios (HTTP client); will write to the Mongodb Compass database and finally host in the cloud (AWS):
For this purpose it was used:
multer -> middleware for transferring multpart / form-data files;
morgan -> middleware that logs HTTP reissues;
nodemon -> automatic application restart;
mongoose -> Odm for manipulating the database.

*For install:*
    
    npm install

*For run:*

    yarn dev
