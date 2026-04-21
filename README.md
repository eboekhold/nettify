# Taskr
Task manager for meatspace activities.

## Requirements
- ASP.net
- Microsoft SQL Server
- Angular

## Setup

Initialise database connection string secret:
```
> dotnet user-secrets init
> dotnet user-secrets set ConnectionStrings:DefaultConnection "Server=localhost;Database=<database_name>;User Id=<user_name> Password=<password>;TrustServerCertificate=True"
```