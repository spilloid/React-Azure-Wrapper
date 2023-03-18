# React-Azure-Wrapper
Goal is to utilize azure graph api to build a material react ui with power user MSP specific features.
├─ src/
│   ├─ components/
│   │   ├─ LoginPage.tsx
│   │   └─ TextFieldFactory.ts
│   ├─ App.tsx
│   ├─ index.tsx
│   └─ singleton.ts
├─ public/
│   └─ index.html
├─ .dockerignore
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
└─ tsconfig.json
# My TypeScript Project

Welcome to my TypeScript project! This project demonstrates my skills and expertise as a software engineer, showcasing a strong understanding of TypeScript, React, Material UI, design patterns, testing, and containerization using Docker and Docker Compose. I have carefully crafted this project to be a valuable asset and resource to any company.

## Project Overview

This project features a simple login page created using React and TypeScript, leveraging Material UI for a modern and responsive user interface. The application follows best practices and incorporates two Gang of Four design patterns: Singleton and Factory Method. The Singleton pattern is implemented in `singleton.ts`, while the Factory Method pattern is demonstrated in `TextFieldFactory.ts`.

To ensure code quality and stability, I have included unit tests using Jest and the React Testing Library. The tests ensure that the login page renders correctly and that user inputs are handled appropriately.

For deployment, the project is containerized using Docker, with a `Dockerfile` and `docker-compose.yml` provided for streamlined and consistent deployment using Docker Compose.

Continuous Integration is set up with GitHub Actions, utilizing a self-hosted runner to build, deploy, and run tests automatically upon code changes.

## Tools and Technologies

- **TypeScript**: A strongly-typed superset of JavaScript that brings static types and modern features to the language, enabling better development experience and maintainability.
- **React**: A popular JavaScript library for building user interfaces, used in this project for creating the login page and managing component state.
- **Material UI**: A comprehensive and customizable UI library based on Material Design, which provides a modern and professional look to the application.
- **Design Patterns**: Incorporating Singleton and Factory Method design patterns for efficient and maintainable code.
- **Testing**: Jest and React Testing Library are used for testing the application, ensuring code quality and stability.
- **Docker**: Containerization technology for packaging and deploying applications consistently across various environments.
- **Docker Compose**: A tool for defining and running multi-container Docker applications, used for easy deployment of the project.
- **GitHub Actions**: A powerful CI/CD solution provided by GitHub, set up with a self-hosted runner to build, deploy, and test the application upon code changes.

## How to Run

1. Ensure that Docker and Docker Compose are installed on your system.
2. Clone the repository and navigate to the project root directory.
3. Run `docker-compose build` to build the Docker image.
4. Run `docker-compose up` to deploy the application.
5. Access the application at http://localhost:3000.

By choosing me as a resource for your company, you are investing in a skilled and dedicated engineer who understands the importance of best practices, design patterns, testing, and deployment strategies. I am excited to bring my expertise to your team and contribute to your organization's success.

