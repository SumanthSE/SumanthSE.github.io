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
            "Architected an automated eligibility system using Java and Spring Boot to manage the end-to-end lifecycle of physician education activities, with a high-transparency evaluation engine providing full audit trails for ineligibility decisions.",
            "Implemented state-aware classification logic to differentiate new, updated, renewal, and duplicate entities; isolated lookups to active records to prevent historical data from corrupting candidate states.",
            "Architected a Netcentric content delivery layer using AWS CloudFront and S3, enabling low-latency distribution of physician education materials to regional stakeholders across multiple content channels.",
            "Developed a Python-based data extraction pipeline using Pandas and SQLAlchemy to transform raw logs into compliance datasets, and utilized Claude Code to refactor complex data mapping logic and accelerate real-time Tableau dashboard creation.",
            "Refined the administrative portal using React, Redux Toolkit, and Material UI with ARIA patterns and WCAG 2.1 accessibility compliance for high-density data visualizations on desktop and mobile.",
            "Optimized system responsiveness with an in-memory rule cache (Singleton + configurable TTL) and hardened reliability by capturing active record states prior to deletion for accurate downstream trigger logic.",
            "Established a high-fidelity testing suite using JUnit 5 and Testcontainers; enforced API contract safety with JSR 380 (Bean Validation) and Jackson for validated healthcare metadata."
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
            "Developed scalable microservices using Java, Spring Boot, Spring MVC, and Spring Security, with modular REST APIs applying rate-limiting, versioning, and multi-threaded request handling for improved throughput.",
            "Designed Kafka-based asynchronous workflows with dead-letter topics, custom retry logic, and exactly-once delivery semantics; deployed all services on AWS EKS with Docker, Helm, pod autoscaling, and Kubernetes network policies.",
            "Built Netcentric digital experience modules for the customer-facing insurance portal, implementing server-side personalization and dynamic content rendering to deliver tailored policy recommendations based on member profiles.",
            "Refined application performance using advanced React Hooks, custom state-machine logic, and WCAG 2.1-compliant UI components, reducing re-renders in the real-time fraud alert dashboard.",
            "Utilized Python scripting to automate validation of RESTful API responses during migration of legacy insurance modules to AWS, and created a POC demonstrating Go Lambda, Step Functions, and ELK observability for new hire onboarding.",
            "Implemented ELK stack and AWS CloudWatch for real-time monitoring and worked with PostgreSQL to tune slow queries using EXPLAIN ANALYZE for performance improvements in account and transaction modules."
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
            "Led Netcentric web application development, integrating CMS-driven workflows with React frontends to deliver personalized, WCAG 2.1-accessible, and SEO-optimized digital experiences for enterprise clients.",
            "Designed API-driven content delivery architectures for Netcentric platforms, enabling dynamic page assembly from headless CMS sources with CDN caching strategies that reduced content load times.",
            "Leveraged Java's concurrency framework (ExecutorService, ForkJoinPool) and Kafka Spring consumers with custom serializers to eliminate bottlenecks in high-load event-driven systems; templatized Kubernetes deployments with Helm charts.",
            "Automated schema generation with Hibernate ORM, optimized query performance with HikariCP, and enforced data integrity using PostgreSQL stored procedures and triggers for audit logging.",
            "Standardized centralized Kibana logging for live incident debugging and worked closely with product and design teams to deliver production-ready features aligned to business needs."
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
            "Developed Spring Boot backend services on AWS EC2 with AWS RDS (MySQL) in multi-AZ deployments, managing customer accounts, transaction histories, and loan applications for high-volume mobile banking traffic.",
            "Architected an event-driven pipeline using Apache Kafka and AWS Lambda for real-time and serverless transaction processing; exposed services via AWS API Gateway with OAuth2 and monitored via Amazon CloudWatch.",
            "Developed a Python-based automation framework using Boto3 and Pandas to extract transaction metadata from AWS RDS, generating daily reconciliation reports for Business Operations and ensuring data alignment between ledger and downstream tools.",
            "Built custom React hooks for API polling, form state, and WebSocket subscriptions, and integrated React Context API with selective memoization for performant global state management.",
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
            "Developed full-stack features using Spring Boot and Angular to manage hotel profiles, real-time room status, and operational workflows for property managers.",
            "Built a user-friendly Angular front-end (TypeScript) for hotel owners to manage listings, room availability, dynamic pricing, and booking tracking via EKS-hosted REST APIs with Spring Data JPA.",
            "Leveraged RabbitMQ for asynchronous, event-driven messaging to deliver real-time updates on room availability and guest bookings, and rendered dynamic dashboards using Thymeleaf.",
            "Enforced secure OAuth 2.0 authentication with token-based session management and validated core features using JUnit and Mockito TDD practices.",
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
