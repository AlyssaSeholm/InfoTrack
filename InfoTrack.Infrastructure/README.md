# InfoTrack.Infrastructure

## Description

This project implements persistence logic and any infrastructure-specific concerns like: data access using Entity Framework, file storage, external services, etc. 
Contains your EF DbContext, migrations, and repository implementations if you're using the repository pattern.


## Setup and Configuration

### Database Setup:

TODO: note about connection string

Run one of the commands below to create an inital setup migration or an update migration. Then make sure to follow up either command with the update command.

##### 1-A) Initial Migration:

Run this in the terminal:

`dotnet ef --startup-project InfoTrack.API migrations add InitialCreate --context InfoTrackDbContext --project InfoTrack.Infrastructure --output-dir Migrations `

##### 1-B) Update Migration:

Run this in the terminal:

`dotnet ef --startup-project InfoTrack.API migrations add UpdateSchema --context InfoTrackDbContext --project InfoTrack.Infrastructure --output-dir Migrations`

##### 2) Update the Database:

Apply the update to the database schema

`dotnet ef --startup-project InfoTrack.API database update --context InfoTrackDbContext --project InfoTrack.Infrastructure`


## Dependencies

Entity Framework Core (Microsoft.EntityFrameworkCore)
Sql Server (Microsoft.EntityFrameworkCore.SqlServer)


## Disclaimer

==This project is developed solely for the purpose of demonstrating coding skills and problem-solving abilities in the context of a technical interview. It is a conceptual application intended to illustrate the author's proficiency with specific technologies and programming techniques.==

#### Important Points to Note:

 - Not for Production Use: This project is not designed for production environments. It lacks comprehensive error handling, security, and performance optimizations necessary for real-world applications.

 - Compliance with Terms of Service: The project includes examples of interacting with third-party services (e.g., Google Search) in a manner that is intended for educational purposes only. Users are cautioned to use these examples responsibly and to ensure that they comply with the terms of service of any third-party service providers involved.

 - No Deployment Intended: There is no intention for this project to be deployed or used in a public setting. It is meant to be a private demonstration of coding practices and should be used with the understanding that it is a limited, non-commercial demonstration.

 - Educational Use Only: This project is intended to be used as a learning tool or for interview demonstration purposes only. It is not to be used as a template or foundation for any commercial application without significant revisions and legal considerations, particularly concerning data use and privacy.

By using or studying this project, you acknowledge the limitations and intentions as described above. The creator of this project bears no responsibility for any misuse or for any consequences that arise from such misuse.