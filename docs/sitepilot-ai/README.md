# SitePilot AI

> **An AI-powered construction command center for progress tracking, delay prediction, safety, quality, procurement, and project intelligence.**

SitePilot AI helps construction teams understand **what is happening on-site, what is going wrong, and what action to take next**.

The platform is designed to connect project schedules, drawings, BIM models, site photos, field reports, procurement data, and project documents—then convert that information into clear, actionable decisions.

## Project Status

- **Stage:** Concept / Pre-MVP
- **Initial product:** AI Progress + Delay Predictor
- **Next milestone:** Validate the MVP with construction professionals and build the first working prototype
- **Project owner:** Leonardo Adame

## The Problem

Construction projects frequently experience:

- Schedule delays
- Cost overruns
- Poor communication between field and office teams
- Manual and inconsistent progress reporting
- Safety risks
- Rework caused by missed quality issues
- Disconnected BIM, scheduling, procurement, document, and reporting tools

Most project data already exists, but it is spread across drawings, schedules, emails, RFIs, submittals, daily reports, field photos, and project-management platforms.

SitePilot AI brings that information together and turns it into project intelligence.

## Product Vision

SitePilot AI will become a unified AI platform for construction project intelligence.

The long-term platform will combine:

- AI progress tracking
- Schedule-risk prediction
- BIM and drawing analysis
- Site photo and video analysis
- Safety monitoring
- Quality-control checks
- Procurement risk alerts
- Contract and document intelligence
- Automated owner reporting
- Digital-twin project dashboards

## MVP: AI Progress + Delay Predictor

The first version will focus on one high-value use case: comparing planned work with actual field progress and identifying activities that are likely to delay the project.

### MVP Capabilities

- Upload a construction schedule
- Upload drawings or supported BIM files
- Upload site photos or 360-degree walkthrough images
- Organize work by area, floor, zone, trade, or activity
- Track completed work
- Compare planned progress with actual progress
- Identify likely delay risks
- Generate daily action recommendations
- Create automatic weekly owner reports

### Example Use Case

A superintendent walks the project and uploads site photos.

SitePilot AI analyzes the images and produces a result such as:

> Level 3 electrical rough-in appears 80% complete. Drywall is scheduled to start tomorrow, but the firestopping inspection is not complete. This creates a high rework risk. Recommended action: delay drywall in Zone B, notify the electrical subcontractor, and update the three-week look-ahead schedule.

## Target Users

SitePilot AI is intended for:

- General contractors
- Owners and developers
- Project managers
- Superintendents
- Project engineers
- Estimators
- Safety managers
- Quality-control teams
- Subcontractors
- Construction consultants

## Core Product Modules

### 1. AI Progress Tracker

Tracks construction progress using photos, videos, drones, 360-degree cameras, and site scans.

Planned capabilities:

- Compare field images with drawings or BIM models
- Identify completed work
- Detect missing or incomplete work
- Track progress by floor, room, zone, trade, or activity
- Create visual progress timelines

### 2. Schedule Risk Predictor

Analyzes project schedules and identifies activities that may create delays.

Planned capabilities:

- Identify delayed activities
- Detect critical-path risks
- Compare planned progress with actual progress
- Recommend resequencing or recovery options
- Generate schedule-impact warnings

### 3. AI Estimator

Uses drawings and BIM data to support quantity takeoff and early cost forecasting.

Planned capabilities:

- Extract quantities from drawings
- Estimate material requirements
- Compare estimates with historical project data
- Flag missing, inconsistent, or unclear scope
- Support bid preparation

### 4. Safety AI

Uses computer vision and field reports to identify possible jobsite safety risks.

Planned capabilities:

- Detect missing personal protective equipment
- Identify unsafe worker-equipment proximity
- Flag visible fall hazards
- Detect restricted-zone entry
- Analyze recurring safety trends from field reports

### 5. Quality Inspector

Uses images, drawings, and project specifications to identify possible quality issues.

Planned capabilities:

- Detect visible defects
- Flag incomplete work
- Compare installation with drawings or model scope
- Identify potential rework risks
- Track punch-list items

### 6. Procurement Brain

Connects material requirements and delivery timelines with the project schedule.

Planned capabilities:

- Predict material shortages
- Alert teams about delayed deliveries
- Match procurement needs to upcoming work
- Track long-lead items
- Recommend order dates

### 7. Contract Copilot

Reads project documents and highlights obligations, risks, deadlines, and possible change events.

Planned capabilities:

- Summarize contracts and specifications
- Review RFIs and submittals
- Identify possible change-order risks
- Highlight notice requirements and deadlines
- Search project documents with natural-language questions

### 8. Digital Twin Dashboard

Creates a live project view connecting schedule, cost, progress, quality, safety, and procurement data.

Planned capabilities:

- Live project health score
- Cost and schedule risk dashboard
- Zone-by-zone progress map
- Trade performance insights
- Owner-ready project summaries

## Product Roadmap

### Phase 1 — Research and Product Definition

**Goal:** Validate the problem and define a focused MVP.

- [ ] Interview general contractors, superintendents, project managers, and owners
- [ ] Identify the highest-value workflow problem
- [ ] Select the MVP feature set
- [ ] Define user personas and user journeys
- [ ] Study existing construction-technology competitors
- [ ] Collect representative schedules, drawings, photos, and reports
- [ ] Define data and security requirements
- [ ] Create initial wireframes

**Deliverables:** Product requirements document, MVP scope, user stories, competitor analysis, and initial UI wireframes.

### Phase 2 — MVP Prototype

**Goal:** Build a working prototype for progress tracking and basic delay prediction.

- [ ] User authentication and project creation
- [ ] Schedule, drawing, and photo uploads
- [ ] Basic project dashboard
- [ ] Manual tagging of areas and activities
- [ ] AI-generated progress summaries
- [ ] Basic delay-risk alerts
- [ ] Weekly report generator

**Deliverables:** Clickable web application, backend API, file storage, initial AI engine, and reporting dashboard.

### Phase 3 — Computer Vision Progress Tracking

**Goal:** Analyze jobsite images and estimate work progress.

- [ ] Classify photos by area and trade
- [ ] Compare planned and actual work visually
- [ ] Estimate progress percentages
- [ ] Track progress by zone
- [ ] Build an image-history timeline
- [ ] Add basic visible-defect detection

**Deliverables:** Computer-vision pipeline, image-tagging system, progress dashboard, and visual reports.

### Phase 4 — Schedule Intelligence

**Goal:** Connect field progress with project schedules.

- [ ] Import Primavera P6, Microsoft Project, and CSV schedules
- [ ] Map activities to project zones
- [ ] Compare actual and planned progress
- [ ] Predict delay risk
- [ ] Identify critical-path issues
- [ ] Recommend recovery actions

**Deliverables:** Schedule parser, delay-prediction model, risk-scoring engine, and daily action recommendations.

### Phase 5 — BIM and Drawing Integration

**Goal:** Connect model and drawing scope with field progress.

- [ ] Upload IFC or other supported BIM files
- [ ] Upload PDF drawings
- [ ] Link photos to rooms, zones, and model elements
- [ ] Compare work-in-place with model scope
- [ ] Identify missing or incomplete work
- [ ] Support quantity tracking

**Deliverables:** BIM viewer, drawing viewer, model-to-photo mapping, and area-based progress tracking.

### Phase 6 — Safety and Quality AI

**Goal:** Add safety monitoring and quality-control intelligence.

- [ ] PPE detection
- [ ] Hazard detection
- [ ] Quality-issue tagging
- [ ] Punch-list generation
- [ ] Safety-trend dashboard
- [ ] Quality-risk reports

**Deliverables:** Safety AI module, quality AI module, punch-list workflow, and risk dashboards.

### Phase 7 — Procurement and Cost Risk

**Goal:** Connect procurement and cost data with project risk.

- [ ] Track material deliveries
- [ ] Identify long-lead-item risks
- [ ] Predict material shortages
- [ ] Connect procurement delays with schedule impact
- [ ] Estimate potential cost impacts
- [ ] Alert users about budget risk

**Deliverables:** Procurement tracker, cost-risk engine, material-delay alerts, and budget-impact dashboard.

### Phase 8 — Contract and Document Intelligence

**Goal:** Add AI support for project documents and communications.

- [ ] Search contracts, RFIs, submittals, meeting notes, and specifications
- [ ] Summarize documents
- [ ] Highlight obligations and deadlines
- [ ] Identify possible change-order risks
- [ ] Generate RFI drafts
- [ ] Create meeting summaries

**Deliverables:** Document-search engine, contract-risk analyzer, RFI assistant, and submittal assistant.

### Phase 9 — Digital Twin Command Center

**Goal:** Build a complete live project-intelligence dashboard.

- [ ] Real-time project health score
- [ ] Schedule-, cost-, safety-, and quality-risk maps
- [ ] Zone-based digital-twin view
- [ ] Executive reporting dashboard
- [ ] Owner-facing portal
- [ ] Cross-module analytics

**Deliverables:** Digital-twin dashboard, owner portal, executive reports, and cross-module analytics.

### Phase 10 — Operations and Maintenance Handover

**Goal:** Extend the platform beyond construction into facility operations.

- [ ] Asset records
- [ ] Equipment history
- [ ] Warranty tracking
- [ ] Maintenance schedules
- [ ] Predictive-maintenance alerts
- [ ] Building-operations dashboard

**Deliverables:** Asset-handover module, maintenance dashboard, and facility-management integrations.

## Suggested Technical Architecture

### Frontend

- React
- Next.js
- Tailwind CSS
- Mapbox or a similar layer for site and floor visualization
- Three.js, That Open Engine, or another IFC/BIM viewer

### Backend

- Python with FastAPI, or Node.js for selected services
- PostgreSQL
- Redis for caching and background-job coordination
- Object storage for photos, drawings, reports, and BIM files
- REST or GraphQL APIs
- Background workers for file processing and AI analysis

### AI and Machine Learning

- Computer vision for site-photo analysis
- Large language models for document understanding and report generation
- Predictive analytics for schedule and cost risk
- OCR for scanned drawings and documents
- Retrieval-augmented generation for project-document search
- Human review for high-impact safety, quality, schedule, and contract recommendations

### Planned Integrations

- Procore
- Autodesk Construction Cloud
- Primavera P6
- Microsoft Project
- Bluebeam
- SharePoint
- Google Drive
- Drone and 360-degree-camera platforms
- BIM and IFC viewers

## Initial Data Flow

1. A user creates a project.
2. The user uploads a schedule, drawings, and site photos.
3. The system extracts schedule activities and project areas.
4. Photos are tagged by date, location, trade, and activity.
5. AI estimates actual progress and records confidence levels.
6. The risk engine compares actual progress with planned progress.
7. The application produces alerts, recommended actions, and reports.
8. A project team member reviews and confirms important findings.

## MVP Success Metrics

The first prototype should measure:

- Time required to produce a progress report
- Accuracy of area and trade tagging
- Accuracy of progress estimates
- Number of useful delay risks identified
- Percentage of alerts accepted by a superintendent or project manager
- Time saved preparing weekly owner reports
- User return rate during a pilot project

Long-term platform metrics include:

- Schedule accuracy
- Delay-prediction accuracy
- Rework reduction
- Safety-risk detection
- Quality-issue detection
- RFI response time
- Change-order visibility
- Owner-reporting time
- Project-cost predictability

## Competitive Position

Many construction applications solve one workflow at a time. SitePilot AI is intended to connect progress tracking, schedule intelligence, safety, quality, procurement, documents, and digital-twin visualization in one decision-support layer.

The platform should initially integrate with existing systems instead of trying to replace every construction tool. Its value will come from turning disconnected project data into prioritized actions.

## Long-Term Vision

The long-term goal is to create an AI project-manager assistant for construction that can answer questions such as:

- Is this project on schedule?
- What work is behind?
- Which subcontractor or constraint is creating delay risk?
- What materials need to be ordered now?
- What safety issues appeared this week?
- What quality issues need immediate attention?
- What change-order risks are developing?
- What should the superintendent focus on tomorrow?
- What should the owner know this week?

## Research Foundation

The product direction is based on active research and industry development in:

- AI-enabled BIM
- Digital twins in construction
- Automated progress monitoring
- Schedule-risk prediction
- Computer vision for construction sites
- Predictive project controls
- Safety and quality analytics
- Lifecycle asset management

A dedicated research document with reviewed sources and citations should be maintained separately from this product README.

## Responsible AI and Project Data

SitePilot AI recommendations should support qualified construction professionals, not replace their judgment.

The platform should:

- Display confidence levels and the evidence behind important alerts
- Require human confirmation for high-impact actions
- Keep an audit trail of AI recommendations and user decisions
- Protect customer drawings, contracts, images, and project records
- Separate each customer's data
- Avoid using private project data for model training without explicit authorization
- Follow applicable privacy, labor, safety, contractual, and record-retention requirements

## License

No license has been selected. Until a license is added, reuse rights are not automatically granted.

## Contact

**Project owner:** Leonardo Adame  
**Email:** leonardoadame837@gmail.com  
**Website:** GitHub Pages site planned
