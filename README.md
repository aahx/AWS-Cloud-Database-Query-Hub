# Purpose

The purpose of this project was to gain hands-on experience with the AWS Cloud Services pipeline. Developed a React app that provides functionality for querying data and performing CRUD (Create, Read, Update, Delete) operations on a student database.

## Link to Site

To access the application, please follow this [d22u7ipb5ydosa.cloudfront.net](d22u7ipb5ydosa.cloudfront.net).
If there is any issues, please submit issue ticket.

## Technologies Used

### Server Side

- **AWS RDS (Aurora PostgreSQL)**: The PostgreSQL database is hosted on AWS RDS.
- **AWS Lambda**: Microservices are implemented using AWS Lambda functions.
- **AWS API Gateway**: The Lambda functions are triggered by AWS API Gateway.
- **AWS IAM**: Identity and Access Management is used for managing access to AWS resources.
- **AWS CloudFormation**: The application is hosted using AWS CloudFormation.
- **AWS S3**: AWS S3 buckets are utilized for various purposes.

### Client Side

- **Node.js**: The application is built using Node.js on the client-side.
- **VSCode**: Visual Studio Code is the integrated development environment used for coding.
- **AWS CLI**: AWS Command Line Interface is used for interacting with AWS services from the command line.
- **AWS SAM**: AWS SAM (Serverless Application Model) is used for creating, testing, and deploying Lambda functions locally.
- **AWS ToolKit VSCode Extension**: The VSCode extension is used for seamless integration with AWS services.
- **node-postgres library**: The node-postgres library is used for connecting and interacting with the PostgreSQL database.
- **SQL**: SQL is used for writing database queries and performing CRUD operations.
- **pgAdmin**: pgAdmin is a tool used for managing and administering the PostgreSQL database.
- **Docker Desktop**: Docker Desktop is used for containerizing and running the application.
- **ThunderClient**: ThunderClient is used for testing API endpoints.
- **Lucid Chart**: Lucid Chart is used for creating the Entity Relationship Diagram (ERD).

## Architecture
![chart](https://github.com/sparklingwaterlemon/K16-Demo/assets/105463926/5bf82985-d94f-41bf-839c-8255d5954e8f)

## ERD
![K16 - Page 1](https://github.com/sparklingwaterlemon/K16-Demo/assets/105463926/89810dad-d206-4ef8-b942-6e5a07a359a4)

### SQL
```
CREATE TABLE student (
  student_id SERIAL PRIMARY KEY,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL
);

CREATE TABLE course (
  course_id SERIAL PRIMARY KEY,
  name VARCHAR(25) NOT NULL,
  description TEXT
);

CREATE TABLE registration (
  registration_id SERIAL PRIMARY KEY,
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  FOREIGN KEY (student_id) REFERENCES student(student_id),
  FOREIGN KEY (course_id) REFERENCES course(course_id)
);

CREATE TABLE assignment (
  assignment_id SERIAL PRIMARY KEY,
  course_id INT NOT NULL,
  name VARCHAR(25) NOT NULL,
  description TEXT,
  FOREIGN KEY (course_id) REFERENCES course(course_id)
);

CREATE TABLE student_assignment (
  student_assignment_id SERIAL PRIMARY KEY,
  student_id INT NOT NULL,
  assignment_id INT NOT NULL
);
```

## Backlog
Due to time constraints, I was only able to create the React app with the student database. The next steps would involve incorporating the other tables into the app.

## Issues
One of the biggest challenges encountered during this project was enabling Cross-Origin Resource Sharing (CORS) and dealing with CORS errors at various stages of development. Although it was eventually resolved, it took a considerable amount of time to figure out the solution.

## Resources


## Work Log (ascending)

Here is a chronological work log of the project, listing the tasks completed in ascending order:

1. Set up **AWS Aurora Serverless v2 PostgreSQL & AWS RDS PostgreSQL**.
2. Connected databases locally to **pgAdmin4** by setting up **Inbound Security Rules and AWS IAM**.
3. Set up the local environment to connect, build, and test **AWS Lambda Functions** in VS Code, using the following client-side technologies: **Node.js**, **AWS CLI**, **AWS SAM**, **AWS ToolKit**, **Docker Desktop**.
4. Created an **ERD** table in **Lucid** and populated the database using pgAdmin and **SQL**.
5. Used AWS SAM to **Build and Deploy Lambda Functions** with the following server-side (AWS) technologies: **AWS CloudFormation**, **AWS S3**, **AWS API Gateway**, **AWS Lambda**, **AWS RDS**.
6. Incorporated a "**layer**" in AWS Lambda for **node-packages**.
7. Specifically used the **node-postgres library** to interact with AWS RDS.
8. Implemented various techniques such as callbacks, promises, async/await, connection pooling, prepared statements, and parsing to interact with AWS RDS.
9. Set up **Inbound Security Settings and Roles** for database access and modifications.
10. Used AWS SAM to **modify template.yaml**, created **API Gateway Resources and Methods**, and required **Body Models** to pass a standardized event body for queries.
11. Implemented **best practices for parametrized SQL queries** to prevent SQL injection vulnerabilities.
12. Utilized both **pathParameters** and **event body request** to implement **full CRUD operations**.
13. Executed AWS RDS queries to retrieve pertinent data.
14. Used AWS SAM and **ThunderClient** to test code locally.
15. Completed the full **Student Model** implementation.
16. Enabled **CORS** (proxy -> Lambda) by creating **Method Response Headers** in the AWS API Gateway Console.
17. Developed the **React App** for the project.
18. Utilized **CloudFormation** and **S3** for deployment and hosting.

Please note that this work log represents a chronological order of tasks completed and may not include every detail.

## Link to Site

To access the application, please follow this [link](insert_link_here).
