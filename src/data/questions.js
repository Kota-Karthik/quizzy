export const quizData = {
    Internal_Developer_Portal: [
        {
            id: 1,
            question: "Software Catalog Management\nScenario: You're a developer who needs to find information about a microservice called 'payment-service' in your organization.\nWhich IDP feature would you use to discover this service and its documentation?",
            options: [
                "Workflows",
                "Software Catalog",
                "Scorecards",
                "Audit Trail",
            ],
            answer: "Software Catalog",
            demoPoint: "Show how to search and explore entities in the Software Catalog"
        },
        {
            id: 2,
            question: "Self-Service Workflows\nScenario: Your team frequently needs to create new microservices with the same boilerplate code and configuration.\nWhat IDP feature can automate this repetitive process?",
            options: [
                "Scorecards",
                "Developer Dashboard",
                "Self Service Workflows",
                "RBAC",
            ],
            answer: "Self Service Workflows",
            demoPoint: "Demonstrate creating or executing a workflow template"
        },
        {
            id: 3,
            question: "Which two modules of Harness is used by SSEM in IDP",
            options: ["CD and IACM", "CI and CD", "STO and CI", "IACM and STO"],
            answer: "CD and IACM",
            demoPoint: "Show the personalized dashboard with service health metrics"
        },
        {
            id: 4,
            question: "Quality and Compliance Tracking\nScenario: Your organization wants to track which services have proper documentation, security scans, and follow coding standards.\nWhich IDP feature helps measure and track these organizational metrics?",
            options: ["Workflows", "Scorecards and Checks", "Software Catalog", "RBAC"],
            answer: "Scorecards and Checks",
            demoPoint: "Display scorecard results and check statuses for different services"
        },
        {
            id: 5,
            question: "Access Control\nScenario: You need to ensure that only certain team members can execute critical workflows or modify specific catalog entities.\nWhat IDP capability manages these permissions?",
            options: ["Audit Trail", "Scorecards", "Role-Based Access Control (RBAC)", "Developer Dashboard"],
            answer: "Role-Based Access Control (RBAC)",
            demoPoint: "Show permission settings and role assignments"
        },
        {
            id: 6,
            question: "Platform Adoption\nHow can platform administrators track how well teams are adopting and using the IDP?",
            options: ["Manual surveys", "Built-in adoption dashboard", "External analytics tools", "Audit logs only"],
            answer: "Built-in adoption dashboard",
            demoPoint: "Show the adoption metrics and usage statistics"
        },
    ],
};
