# Feature: Main page

## Goal

Tutor can see students on the main page.

## MVP scope

Main page shows:

- app header
- sidebar
- students section
- list of student cards
- add student button
- empty state if there are no students

## Out of scope

- authentication
- backend
- payments
- mobile layout
- real calendar

## User flow

1. User opens the platform.
2. System shows the main page.
3. If students exist, system shows student cards.
4. If students do not exist, system shows empty state.
5. User can click "Add student".
6. User can click a student card.

## Data

Student:

- id
- name
- subject
- level

## UI blocks

- Header
- Sidebar
- Page title
- Add student button
- Student list
- Student card
- Empty state

## States

### Has students

Show student cards.

### Empty state

Show message: "Add your first student to start."

## Acceptance criteria

- Main page renders.
- Student cards are rendered from mock data.
- Each student card shows name, subject and level.
- Empty state is shown when students array is empty.