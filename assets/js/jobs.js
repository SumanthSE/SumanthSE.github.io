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
            "Architected an automated eligibility system using Full Stack Java and Spring Boot to manage the end-to-end lifecycle of physician education activities, providing full audit trails for ineligibility decisions.",
            "Refined the administrative portal using React, Redux Toolkit, and Material UI with ARIA patterns and WCAG 2.1 accessibility compliance for high-density data visualizations.",
            "Developed a Python-based data extraction pipeline using Pandas and SQLAlchemy, and utilized Claude Code to refactor complex data mapping logic and accelerate real-time Tableau dashboard creation.",
            "Enforced API contract safety between the Java backend and React (HTML/CSS/JavaScript) frontend using JSR 380 (Bean Validation) and Jackson.",
            "Implemented state-aware classification logic to differentiate new, updated, renewal, and duplicate entities; isolated lookups to active records to prevent historical data corruption.",
            "Optimized system responsiveness with an in-memory rule cache, and established a high-fidelity testing suite using JUnit 5 and Testcontainers."
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
            "Developed scalable Full Stack Java microservices using Java, Spring Boot, Spring MVC, and Spring Security, featuring modular REST APIs with rate-limiting and multi-threaded request handling.",
            "Refined application performance using advanced HTML/CSS/JavaScript and React Hooks, integrating custom state-machine logic and WCAG 2.1-compliant UI components to prioritize accessibility.",
            "Utilized Python scripting to automate validation of RESTful API responses during migration of legacy insurance modules to AWS.",
            "Designed Kafka-based asynchronous workflows with dead-letter topics and exactly-once delivery semantics, deploying services on AWS EKS with Kubernetes network policies.",
            "Built Netcentric digital experience modules for the customer-facing insurance portal, implementing server-side personalization and dynamic content rendering.",
            "Implemented ELK stack and AWS CloudWatch for real-time monitoring, and optimized PostgreSQL queries using EXPLAIN ANALYZE for performance improvements."
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
            "Led Netcentric web application development, integrating CMS-driven workflows with React frontends to deliver personalized, WCAG 2.1-accessible HTML/CSS/JavaScript digital experiences.",
            "Designed API-driven content delivery architectures for Netcentric platforms, enabling dynamic page assembly from headless CMS sources.",
            "Developed Full Stack Java backend solutions leveraging Java's concurrency framework (ExecutorService, ForkJoinPool) to eliminate bottlenecks in high-load systems.",
            "Automated schema generation with Hibernate ORM, optimized query performance with HikariCP, and enforced data integrity."
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
            "Wrote comprehensive unit and integration tests using Jest and React Testing Library, rigorously validating JavaScript component behavior, accessibility, and user event simulation.",
            "Developed a Python-based automation framework using Boto3 and Pandas to extract transaction metadata from AWS RDS, generating daily reconciliation reports.",
            "Developed Full Stack Java Spring Boot backend services on AWS EC2 with AWS RDS (MySQL) in multi-AZ deployments.",
            "Built custom React hooks for API polling, form state, and WebSocket subscriptions, leveraging HTML/CSS/JavaScript for performant global state management."
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
            "Developed Full Stack Java features using Spring Boot and Angular to manage hotel profiles, real-time room status, and operational workflows.",
            "Built a user-friendly Angular front-end using modular HTML/CSS/JavaScript and TypeScript for hotel owners to manage listings and dynamic pricing.",
            "Rendered dynamic dashboards with real-time updates on room availability and guest bookings, prioritizing UI accessibility."
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
            "Delivered interactive front-end pages using JSP, HTML, CSS, and JavaScript for user subscription management and service plan display, incorporating accessibility best practices.",
            "Developed and maintained customer management systems building Full Stack Java solutions with Spring Boot and Spring Data JPA.",
            "Built REST APIs for mobile application integration and implemented RabbitMQ for asynchronous message queuing."
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
