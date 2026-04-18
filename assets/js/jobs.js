// Project data
const projects = [
    {
        company: "AMA",
        companyLogo: "https://cdn.brandfetch.io/ido6iZ5acn/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1768021249513",
        color: '#7D2F7A',
        role: "Software Developer",
        date: "Oct 2025 - Present",
        desc: "",
        descBullets: [
            "Architected an automated eligibility system using Java and Spring Boot to manage the end-to-end lifecycle of physician education activities.",
            "Engineered a high-transparency evaluation engine that records results for every configured rule, providing a comprehensive audit trail for ineligibility reasons such as rule mismatches or missing date ranges.",
            "Implemented state-aware classification logic to differentiate between new, updated, renewal, and duplicate entities; introduced a critical correction to isolate lookups to active records, preventing historical data from corrupting candidate states.",
            "Built an administrative portal in React and Redux Toolkit to manage candidate activation, featuring conditional triggers that re-prepare downstream activities only when specific state-transition criteria are met.",
            "Optimized system responsiveness by implementing an in-memory rule cache using a Singleton pattern with a configurable TTL, enabling scheduled rule invalidation without service restarts.",
            "Established a high-fidelity testing suite using JUnit 5 and Testcontainers to simulate production database environments, resolving deep-seated SQL predicate grouping issues before deployment.",
            "Enforced API contract safety between the Spring Boot backend and React frontend using JSR 380 (Bean Validation) and Jackson, ensuring healthcare metadata is validated before reaching core evaluation logic."
        ]
    },
    {
        company: "USAA",
        companyLogo: "https://cdn.brandfetch.io/id7nXFaoJg/w/718/h/718/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#12385C',
        role: "Software Developer",
        date: "Apr 2024 - Sep 2025",
        desc: "",
        descBullets: [
            "Developed scalable microservices using Java, Spring Boot, Spring MVC, and Spring Security, implementing modular REST APIs with layered architecture, DTO mapping, and robust exception handling.",
            "Integrated OAuth2 with JWT for secure token-based authentication and role-based access control across internal and customer-facing APIs.",
            "Designed and consumed asynchronous messaging workflows using Apache Kafka, implementing dead-letter topics, custom retry logic, and exactly-once delivery semantics for critical financial transactions.",
            "Deployed all services on AWS EKS using Docker and Helm, configuring health checks, pod autoscaling, and secure service-to-service communication via Kubernetes network policies.",
            "Implemented real-time updates using WebSockets for transaction tracking and fraud alerts, ensuring users receive instant notifications.",
            "Implemented logging and monitoring using ELK stack (Elasticsearch, Logstash, and Kibana) and AWS CloudWatch for real-time application insights."
        ]
    },
    {
        company: "Publicis Sapient",
        companyLogo: "https://cdn.brandfetch.io/id1a_DBw-1/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#FE414D',
        role: "Software Engineer",
        date: "Jun 2023 - Apr 2024",
        desc: "",
        descBullets: [
            "Designed and implemented a layered microservice architecture using Singleton, Factory, and Strategy design patterns, significantly improving code readability, modularity, and maintainability.",
            "Leveraged Java's concurrency framework (ExecutorService, ForkJoinPool) and Kafka Spring consumers with custom serializers and partition rebalancing to eliminate bottlenecks in high-load, event-driven systems.",
            "Automated database schema generation with Hibernate ORM and optimized query performance using HikariCP connection pooling, reducing latency under high concurrency workloads.",
            "Created stored procedures and triggers in PostgreSQL for audit logging, and standardized logging with a centralized Kibana dashboard, cutting mean time to detect incidents.",
            "Implemented React hooks (useState, useEffect, useContext) for efficient state management and worked closely with product teams to translate business requirements into production-ready features."
        ]
    },
    {
        company: "Arvest Bank",
        companyLogo: "https://cdn.brandfetch.io/idGIe3oexM/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#00457C',
        role: "Software Engineer",
        date: "Feb 2021 - Dec 2022",
        desc: "",
        descBullets: [
            "Built scalable Spring Boot backend services on AWS EKS with AWS RDS (MySQL) in multi-AZ deployments, supporting high-volume banking transactions for customer account and transaction management.",
            "Architected an event-driven pipeline using Apache Kafka and AWS Lambda for real-time and serverless transaction processing, reducing infrastructure overhead and system latency.",
            "Exposed and secured APIs via AWS API Gateway with OAuth2, and applied Amazon CloudWatch for proactive monitoring and alerting to ensure minimal downtime.",
            "Developed custom React hooks for API polling, form state, and WebSocket subscriptions, and integrated React Context API for global state management with selective memoization.",
            "Wrote comprehensive unit and integration tests using Jest and React Testing Library, covering component behavior, accessibility, and user event simulation."
        ]
    },
    {
        company: "OYO Rooms",
        companyLogo: "https://cdn.brandfetch.io/idSXt7tZEr/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#EE2A24',
        role: "Software Developer",
        date: "Dec 2019 - Jan 2021",
        desc: "",
        descBullets: [
            "Modernized property management services by containerizing Spring Boot applications on AWS EKS, improving deployment frequency, system uptime, and operational scalability.",
            "Built a dynamic Angular front-end (TypeScript) for hotel owners to track bookings and manage real-time room availability and dynamic pricing, backed by EKS-hosted REST APIs.",
            "Integrated RabbitMQ for asynchronous, event-driven messaging and Spring Data JPA for hotel inventory, booking, and pricing data management.",
            "Enforced secure authentication using OAuth 2.0 with token-based session management, and validated core features with JUnit and Mockito TDD practices.",
            "Streamlined continuous deployment by containerizing services with Docker and automating release pipelines with Jenkins."
        ]
    },
    {
        company: "Idea",
        companyLogo: "https://cdn.brandfetch.io/idN6iTSgKh/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
        color: '#ED2740',
        role: "Junior Software Engineer",
        date: "Oct 2017 - Nov 2019",
        desc: "",
        descBullets: [
            "Developed and maintained customer management systems using Spring Boot and Spring Data JPA, with Struts MVC and Oracle as the primary framework and database.",
            "Built REST APIs for mobile application integration and implemented RabbitMQ for asynchronous message queuing, improving system scalability and real-time subscription updates.",
            "Developed XML-based data transformation pipelines using XSL and JAXB, and utilized Redis for in-memory caching, reducing database load and improving data access performance.",
            "Delivered interactive front-end pages using JSP, JSTL, and JavaScript for user subscription management and service plan display.",
            "Configured Jenkins for CI, Maven for build automation, and Docker for containerization, establishing a consistent and automated release process."
        ]
    }
];

const companyButtons = document.querySelectorAll('.company-button');
const projectList = document.getElementById('project-list');

// Function to render selected company job experience
function renderProject(index) {
    const project = projects[index];
    projectList.innerHTML = ''; // Clear existing content

    // Create project details container
    const projectDiv = document.createElement('div');
    projectDiv.style.padding = '20px';
    projectDiv.style.backgroundColor = '#f9f9f9';
    projectDiv.style.borderLeft = `10px solid ${project.color}`;
    projectDiv.style.borderRadius = '5px';

    // Add company logo and details
    const companyLogo = document.createElement('img');
    companyLogo.src = project.companyLogo;
    companyLogo.alt = project.company;
    companyLogo.style.width = '50px';
    companyLogo.style.height = '50px';
    projectDiv.appendChild(companyLogo);

    const companyName = document.createElement('h3');
    companyName.innerText = project.company;
    projectDiv.appendChild(companyName);

    const role = document.createElement('p');
    role.innerText = `${project.role} | ${project.date}`;
    projectDiv.appendChild(role);

    const description = document.createElement('p');
    description.innerText = project.desc;
    projectDiv.appendChild(description);

    // List the description bullets
    const descList = document.createElement('ul');
    descList.style.listStyleType = 'disc';  // Add bullet points to the list
    descList.style.marginLeft = '20px';  // Add some left margin for better indentation

    project.descBullets.forEach(bullet => {
        const listItem = document.createElement('li');
        listItem.innerText = bullet;
        descList.appendChild(listItem);
    });

    projectDiv.appendChild(descList);

    // Append the project div to the project list
    projectList.appendChild(projectDiv);
}

// Handle company button clicks
companyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove the selected class from all buttons
        companyButtons.forEach(btn => {
            btn.classList.remove('selected');
            // Reset the background color of the highlight
            btn.style.setProperty('--highlight-color', 'transparent');
        });

        // Add the selected class to the clicked button
        button.classList.add('selected');

        // Set the company color dynamically
        const companyColor = projects[index].color;
        button.style.setProperty('--highlight-color', companyColor); // Update the highlighter's color

        // Render the job details for the clicked company
        renderProject(index);
    });
});

// Initial render for the first company
renderProject(0);
companyButtons[0].classList.add('selected'); // Mark first company as selected by default
companyButtons[0].style.setProperty('--highlight-color', projects[0].color); // Set the first company color
