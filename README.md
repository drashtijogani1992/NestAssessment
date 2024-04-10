# NestJs configuration
This is a sample NestJS API project that provides endpoints for managing form data.

## Getting Started
To get started with the project, follow these steps:

## Need to Install Prerequisite Software in local machine:

Make sure you have the following software installed on your machine:
- Node.js and npm

## To setup Project just follw step.

- Take a git clone of project from remote repositiory by using below command (Sample repo)
   [(https://github.com/drashtijogani1992/NestDemoProject.git)]()

## How to run the project

1. Run the project using below command
npm run start:dev

2. Open request.http

### POST http://localhost:3000/User/form
It will create a new form with a unique id and title name.
If unique data is already present, then it is shown as already existing data.
It will create another form field table with the field name and field type.

![Reference Image](Screenshot/SSR1.PNG)

![Reference Image](Screenshot/SSR11.PNG)



### POST http://localhost:3000/User/filldata?form_title=author
It will validate all input property types and insert form data.

![Reference Image](Screenshot/SSR2.PNG)



### GET http://localhost:3000/User/filldata?form_title=author

It will provide all data whose name is with the author.

![Reference Image](Screenshot/SR5.PNG)


