# SitePilot AI — MVP Architecture

## Objective

Turn the current mobile-first prototype into a real, secure, multi-user construction project intelligence MVP while preserving the existing field workflow.

## MVP scope

### 1. Identity and access
- User registration and sign-in
- Organization membership
- Project membership
- Role-based access control
- Session management
- Audit trail for important actions

### 2. Project data
- Organizations
- Users
- Projects
- Areas / zones
- Trades / crews
- Activities
- Tasks
- Alerts
- Field records

### 3. Field capture
- Photo capture and upload
- Daily field records
- Task completion
- Safety observations
- Quality observations
- Notes and attachments

### 4. Project intelligence
- Planned vs. actual progress
- Constraint tracking
- Delay-risk scoring
- Action recommendations
- Human confirmation of high-impact recommendations

### 5. Reporting
- Daily log
- Weekly owner report
- Project health summary
- Exportable records

## Recommended architecture

```text
Browser / PWA
    |
    v
Application API
    |
    +--> Auth / RBAC
    +--> PostgreSQL
    +--> Object Storage
    +--> Background Jobs
              |
              +--> Image / Document Processing
              +--> Progress Analysis
              +--> Schedule Risk Engine
              +--> Report Generation
```

## Security requirements

- Tenant isolation between organizations
- Server-side authorization on every protected operation
- Never place production secrets in frontend JavaScript
- Signed or authenticated access to private files
- Audit important user and AI actions
- Validate uploaded files and enforce size/type limits
- Human confirmation for high-impact safety, quality, schedule, or contractual recommendations
- No customer data used for model training without explicit authorization

## Build order

1. Production repository structure and environment configuration
2. Authentication and RBAC
3. Database schema and migrations
4. Project / area / activity APIs
5. Field record and photo storage
6. Alerts and task workflows
7. Progress and delay-risk services
8. Reports and exports
9. Automated tests and CI
10. Production deployment

## Current prototype boundary

The existing app remains a client-side prototype with local browser state. It should be treated as the UI reference and field-workflow prototype until the backend is connected. It must not be presented as a production system or as real AI analysis until those services exist.
