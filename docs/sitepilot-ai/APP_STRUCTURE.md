# SitePilot AI — Recommended App Structure

This document defines the recommended client-side navigation, role permissions, page hierarchy, and MVP implementation order for SitePilot AI.

## Core UX Principle

The app should not show every feature to every user.

A field worker, superintendent, project manager, safety manager, and owner have different daily jobs. SitePilot should use one shared platform while changing the default dashboard, visible modules, alerts, and permissions by role.

Every important field workflow should be reachable in three taps or fewer.

## Primary Mobile Navigation

Use five persistent bottom tabs:

1. **Today** — the most important information and next action
2. **My Work** — assignments, inspections, follow-ups, and approvals
3. **Capture** — photos, progress, safety, quality, deliveries, manpower, and delays
4. **Alerts** — prioritized risks and decisions
5. **More** — role-approved project modules and settings

This is better than placing ten or more modules in the main navigation. It keeps the field interface simple while still supporting the complete platform.

## 1. Today Page

This should be the default landing page.

### Field Worker View

- Assigned tasks
- Work area and drawing references
- Required inspections
- Safety notices
- One-tap progress photo
- Start or complete task

### Superintendent View

- Top recommended action
- Crew and manpower status
- Three-week look-ahead risks
- Delayed or blocked activities
- Missing inspections
- Deliveries expected today
- Quick daily-log entry

### Project Manager View

- Schedule and cost risk
- Open RFIs and submittals
- Procurement constraints
- Change-event visibility
- Pending approvals
- Report status

### Safety / Quality View

- Required inspections
- Open corrective actions
- High-risk observations
- Punch-list priorities
- Repeat issue trends

### Owner / Client View

- Overall project health
- Progress percentage
- Milestone status
- Forecast completion variance
- Important decisions
- Latest weekly report
- Approved project photos

## 2. My Work Page

This page combines all items assigned to the current user.

Recommended filters:

- Today
- Upcoming
- Completed
- Area
- Project
- Priority

Each task should show:

- Clear task title
- Area or location
- Trade or responsible company
- Due date and priority
- Drawing, RFI, submittal, or inspection reference
- Completion evidence requirement
- Large complete button

Do not force field workers to search separate RFI, safety, quality, and schedule modules to find assigned work.

## 3. Capture Page

This is the most important field-data page.

Use large record-type buttons:

- Progress update
- Safety observation
- Quality inspection or punch item
- Delivery receipt or shortage
- Manpower record
- Delay or constraint
- Daily note
- Equipment record

A standard record should capture:

- Project
- Area or GPS location
- Date and time
- Record type
- Photo or video
- Short voice or text note
- Related trade
- Related schedule activity
- Severity or status when applicable

The form should remain usable with one hand and should work offline.

## 4. Alerts and Decisions Page

Alerts should not be a list of vague AI messages.

Every alert should include:

- Severity
- Affected project area
- What was detected
- Supporting evidence
- Possible impact
- Recommended next action
- Responsible person
- Deadline
- Confirm, dismiss, assign, or resolve action

Recommended filters:

- Open
- High priority
- Assigned to me
- Resolved
- All

High-impact safety, contract, cost, or schedule decisions should require human confirmation.

## 5. More Page

The More page contains only the modules permitted for the current role.

Recommended module order:

1. Progress
2. Schedule
3. Drawings and BIM
4. Photos
5. Safety
6. Quality
7. Procurement
8. Documents
9. Reports
10. Team and crews
11. Settings
12. Help and training

## Recommended Module Pages

### Progress Tracker

- Overall planned versus actual progress
- Floor, room, zone, trade, and activity views
- Photo timeline
- Areas missing recent documentation
- Progress confidence and human-review status
- Variance history

### Schedule Intelligence

- Three-week look-ahead
- Critical and near-critical activities
- Blocked work
- Constraints log
- Recovery actions
- Milestone forecast
- Primavera P6, Microsoft Project, and CSV imports

### Drawings and BIM

- Current drawing list
- Revision status
- Superseded-document warning
- Search by sheet, room, zone, or trade
- Markups
- Linked RFIs, inspections, photos, and tasks
- Mobile BIM viewer after the drawing workflow is stable

### Photos and 360 Walks

- Timeline by date
- Area and trade filters
- Before-and-after comparison
- Map, floor, or zone view
- AI tags with editable human confirmation
- Missing photo coverage alerts

### Safety Center

- Observations
- Inspections
- Incidents
- Corrective actions
- Toolbox talks
- Pre-task plans
- Training records
- Safety trends

### Quality Control

- Inspection and test plans
- Required hold points
- Punch list
- Defects and rework
- Responsible trade
- Due dates
- Drawing and specification references
- Verification photos

### Procurement Brain

- Long-lead items
- Required-on-site date
- Current promised date
- Submittal and approval status
- Manufacturing status
- Delivery appointments
- Material shortages
- Schedule and cost impact

### Document Intelligence

- Global project search
- RFIs
- Submittals
- Specifications
- Contracts
- Meeting minutes
- Notices and deadlines
- AI summaries with direct source links

### Reports

- Daily field report
- Weekly owner report
- Progress report
- Safety report
- Quality report
- Procurement report
- Export to PDF, spreadsheet, email, or project platform
- Review and approval workflow

### Team and Crews

- Users and companies
- Role-based permissions
- Crew assignments
- Manpower
- Contact directory
- Invitations
- Activity history

### Project Setup

This should be available only to authorized administrators.

- Project information
- Areas, floors, rooms, and zones
- Companies and trades
- Schedule activities
- Drawing and BIM sources
- Work breakdown structure
- Alert rules
- Integrations
- Data retention

## Role Permission Recommendation

### Field Worker

Visible by default:

- Today
- My Work
- Capture
- Assigned alerts
- Current drawings
- Photos
- Safety
- Quality

Restricted by default:

- Project financial data
- Contract risk
- Full project administration
- Company-wide analytics

### Superintendent

Visible by default:

- All field operations
- Progress
- Schedule
- Drawings
- Safety
- Quality
- Deliveries
- Daily reports
- Team and crews

### Project Manager

Visible by default:

- Progress and schedule
- Procurement
- Documents
- RFIs and submittals
- Reports
- Cost and change-risk summaries
- Team permissions as authorized

### Safety / Quality Manager

Visible by default:

- Photos
- Safety
- Quality
- Documents
- Assigned tasks
- Reports

### Owner / Client

Visible by default:

- Executive Today page
- Approved progress
- Major milestones
- Owner decisions
- Approved photos
- Weekly reports
- Selected project documents

Owners should not see unfinished internal notes unless the project team publishes them.

## Field Usability Requirements

- Minimum 48-pixel primary touch targets
- High contrast for outdoor use
- Plain construction language
- One main action per screen
- Camera access from the center navigation button
- Offline form completion and queued upload
- Automatic draft saving
- English and Spanish interface support
- Voice-to-text notes
- Visible sync status
- Clear current drawing and superseded drawing labels
- Minimal typing
- Confirmation before destructive actions
- Fast loading on low-cost Android devices

## Recommended MVP Page Set

Build these pages first:

1. Sign in
2. Project selector
3. Today
4. My Work
5. Capture
6. Alerts
7. Progress
8. Schedule
9. Photos
10. Drawings
11. Weekly report
12. Users and basic roles
13. Project setup

The remaining modules should initially appear as structured placeholders or limited workflows rather than incomplete full systems.

## Recommended Build Order

### Release 0 — Interactive Prototype

- Mobile navigation
- Demo role switching
- Demo project switching
- Tasks
- Capture form
- Alerts
- Module previews
- Local-device state

### Release 1 — Real Multiuser MVP

- Authentication
- Organization and project records
- Role permissions
- Cloud database
- Object storage
- Real photo upload
- Schedule CSV import
- Area and activity mapping
- Daily and weekly reports
- Audit log

### Release 2 — Progress Intelligence

- Image tagging
- Planned-versus-actual workflow
- Human-confirmed progress percentages
- Zone dashboards
- Delay rules
- AI-generated summaries

### Release 3 — Integrations and Prediction

- Primavera P6 and Microsoft Project
- Procore or Autodesk Construction Cloud
- Delay-risk model
- Procurement constraints
- RFI and submittal intelligence

### Release 4 — Advanced Platform

- BIM and IFC viewer
- 360-degree walkthrough comparison
- Safety computer vision
- Quality defect assistance
- Digital twin dashboard
- Operations handover

## Current Prototype

The current static client prototype is located at:

`docs/sitepilot-ai/app/index.html`

It demonstrates:

- Five-tab mobile navigation
- Role-specific views
- Multiple projects
- Task completion
- Field record capture
- Mobile camera file selection
- Alert filtering and resolution
- Progress, schedule, drawings, photos, safety, quality, procurement, documents, reports, and team module pages
- Local-device state using browser storage
- Installable web-app metadata
- Static application-shell caching for weak connections

It is a front-end prototype. Authentication, cloud storage, APIs, real AI analysis, secure permissions, and project integrations still need to be implemented.
