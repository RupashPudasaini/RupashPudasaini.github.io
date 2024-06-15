import React from 'react';

const experiences = [
    {
        company: "PetSmart",
        position: "Senior Software Developer",
        period: "11/2022 - 06/2023",
        location: "Phoenix, AZ",
        responsibilities: [
            "Implemented and tested the transition of a new MongoDB backend on multiple apps and services from SQL, improving scalability and performance for PetSmart loyalty reward members",
            "Implemented new backend service logic for PetSmart customers to be able to reset/forget password through event-driven automated reset password emails",
            "Completed all stages of the SDLC from initial planning, development, testing, and production deployment using Cloudbees Jenkins for CI/CD pipeline",
            "Migrated event-driven logic from Azure Cloud Service Bus to Google Cloud Pub/Sub, ensuring seamless integration and enhanced functionality",
            "Migrated, tested, and deployed proxy policies from Azure API Management to Google API Gateway",
        ],
        technologies: "C#/.NET Core 7.0, Entity Framework, RESTful API, Azure Cloud, Google Cloud Platform (GCP), Microservices, MongoDB, Salesforce Marketing Cloud (SFMC), Postman, GitHub, Scaled Agile Framework (SAFe), Jira, Azure Storage Explorer, Lens, Cloudbees Jenkins, API Management"
    },
    {
        company: "Honeywell International Inc",
        position: "Advanced Software Developer",
        period: "06/2021 - 11/2022",
        location: "Phoenix, AZ",
        responsibilities: [
            "Experience in building/deploying microservices using Docker and Azure Kubernetes Services in Azure Cloud",
            "Worked extensively with Azure Functions, Service Bus, Blob Storage, and Event Grid to create automated Notifications and publish Emails",
            "Worked with product owner, business stakeholders, application developers, production teams and offshore functional units to identify business needs and discuss solution options",
            "Designed and developed reusable utility components which is used in 3 major projects which reduced development effort by 50% for new microservice development",
            "Led a team of 3 for a quarter during new microservice development, used Gilffy for system design, Implemented base and core functionality for a new automated Notification enhancement using Azure Functions, Event Grid and Azure Service Bus",
            "Mentored new team members while balancing own work load",
            "Created and utilized TypeScript with React to create robust web pages for displaying graphs and charts",
            "Designed and developed new PGAdmin databases for microservices, implemented comprehensive CRUD operations in PostgreSQL and created functions to enhance data management and system efficiency"
        ],
        technologies: "Technologies Used: C#/.NET Core 3.1, Entity Framework, TypeScript, React, RESTful API, Azure Cloud Services, Microservices, InfluxDB, PostgreSQL, PGAdmin, Postman, Docker, Azure Kubernetes Services (AKS), Atlassian, Redis, MOQ, Splunk, Gliffy Diagram, Azure Storage Explorer"
    },
    {
        company: "U-Haul International Inc",
        position: "Senior Software Developer",
        period: "07/2019 - 06/2021",
        location: "Phoenix, AZ",
        responsibilities: [
            "Built new functionality for realtime messages for large customer platform using Apache Kafka to eliminate scheduled jobs",
            "Support all retail commerce applications and services at U-Haul",
            "Rewrote deprecated module of large legacy project as a .NET Core microservices using CQRS pattern",
            "Increased unit-test code coverage from 25% to 85% and decoupled external dependencies using MOQ mocking framework",
            "Improved error reporting and analysis by implementing Kibana logging for 11 core web services and identified significant improvements through Dynatrace monitoring tool",
            "Implemented new web pages with Razor/Angular and JavaScript using the MVC pattern, built bussiness logic with repository pattern, DB logic with Entity Framework, and created stored procedures in SQL using SQL Server Management Studio (SSMS)",
            "Support critical incidents in legacy Java Jboss application, occasionally fixed production bugs and created reports from database of new CollegeBoxes (Uhaul product) users",
        ],
        technologies: "Technologies Used: C#/.NET Core 3.0, ASP.NET, Entity Framework, Repository Pattern, JavaScript, jQuery, Razor, HTML/CSS, Vue, RESTful API, SOAP API, Microservices, SQL, Postman, Model-View-Controller MVC Pattern, AJAX, WCF Storm, Azure DevOps, MOQ, Kibana/Elasticsearch, DynaTrace, Confluent Kafka, Java, SQL Server Management Studio (SSMS), Angular"
    }
    // Add other experiences similarly
];

const Experience = () => {
    return (
        <section>
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.position} at {exp.company}</h3>
                    <p>{exp.period} - {exp.location}</p>
                    <ul>
                        {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                    <p><strong>Technologies Used:</strong> {exp.technologies}</p>
                </div>
            ))}
        </section>
    );
}

export default Experience;
