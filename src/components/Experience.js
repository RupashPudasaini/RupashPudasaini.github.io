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
