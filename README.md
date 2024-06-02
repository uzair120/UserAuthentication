# User Authentication Module Application
This is a full-stack application containing frontend and backend components built using React and Nest JS respectively. The application provides user authentication functionality, including login and signup features.

## Installation
To run the application locally, follow these steps:

1. Clone the repository to your local machine:
```
git clone <repository_url>
```
2. Navigate to the root directory of the repository:
```
cd <repository_directory>
```

3. Make sure you have Docker and Docker Compose installed on your machine.

4. Run the application using Docker Compose:

```
docker-compose up
```
This will build and start both the frontend and backend containers.

5. Once the containers are up and running, you can access the application in your web browser at http://localhost:3000.

## Folder Structure
The repository is organized into two main folders:

 - frontend: Contains the React frontend code.
 - backend: Contains the Nest JS backend code.


### Frontend
The frontend of the application is built using React. It includes the following features:

 - Login: Provides a form for users to enter their credentials and authenticate.
 - Signup: Allows new users to register for an account by providing necessary details.

### Backend
The backend of the application is built using Nest JS. It includes the following features:

 - User authentication endpoints: Exposes APIs for user signup and login.
 - Mongo DB used to save user data, with the encrypted password.
   
## Docker Compose
The docker-compose.yml file in the root directory of the repository defines the services required to run the application. It includes configurations for both the frontend and backend containers, along with necessary environment variables.
