# SitePilot AI — MVP Data Model

## Tenancy

### organizations
- id
- name
- created_at

### users
- id
- email
- display_name
- created_at

### organization_members
- organization_id
- user_id
- role
- created_at

## Projects

### projects
- id
- organization_id
- name
- location
- status
- planned_start
- planned_finish
- created_at

### project_members
- project_id
- user_id
- role
- created_at

### areas
- id
- project_id
- parent_area_id
- name
- area_type

### trades
- id
- project_id
- name

### crews
- id
- project_id
- trade_id
- name

## Work management

### activities
- id
- project_id
- area_id
- trade_id
- external_id
- name
- planned_start
- planned_finish
- percent_planned
- percent_actual
- status

### tasks
- id
- project_id
- activity_id
- area_id
- title
- description
- assignee_id
- due_at
- status
- created_at
- completed_at

## Field intelligence

### field_records
- id
- project_id
- area_id
- activity_id
- author_id
- record_type
- notes
- captured_at
- created_at

### media_assets
- id
- project_id
- field_record_id
- uploaded_by
- storage_key
- media_type
- captured_at
- metadata_json
- created_at

### observations
- id
- project_id
- field_record_id
- type
- severity
- title
- description
- status
- created_by
- resolved_by
- resolved_at

## Intelligence

### alerts
- id
- project_id
- activity_id
- area_id
- alert_type
- severity
- title
- evidence_json
- recommended_action
- status
- created_at
- resolved_at

### ai_runs
- id
- project_id
- run_type
- model_provider
- model_name
- input_reference
- output_json
- confidence
- created_at

## Audit

### audit_events
- id
- organization_id
- project_id
- actor_user_id
- action
- entity_type
- entity_id
- metadata_json
- created_at

## Core relationships

- An organization owns many projects.
- Users belong to organizations through organization_members.
- Users receive project-specific permissions through project_members.
- Projects contain areas, trades, crews, activities, tasks, field records, media, observations, and alerts.
- AI runs produce evidence-backed outputs; important recommendations are represented as alerts and require human review before operational use.
