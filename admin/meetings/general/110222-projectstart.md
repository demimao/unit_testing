<h1>Project Start
<br /> November 2, 2022 || 09:00pm - 10:00pm || Zoom
</h1>

### Attendance 
Present:
- Krish
- Brian
- Takuro
- Demi
- Maggie 
- Jinwoong
- Alex
- Goldie
- Nikhil


Absent: 
- Rishigesh

---
### Agenda 
- Discuss the roadmap of the project
- Discuss what the initial steps of the project will be
- Plan how the work will be divided
- Create formal issues and work on an applicable issue

---
### Deadlines/Action Items

<ins>Sunday Nov 6, 2022</ins>
- Sign-in / sign-up page

<ins>Sunday Nov 13, 2022</ins>
- Home Page


---
### Diagram
**<ins>Roadmap</ins>**


*This plan is fluid and overlapping - just a general guideline to where we should be*

*Backend and Frontend are both responsible for the Javascript* <br>

**Week 1 (October 31st - November 6th)**
- Sign-in/sign-up page
  - Backend: *User database table configured w/ username and password*
    - SQL statements to update username/ reset password
  - Frontend: *Splash screen for what the app is*
    - General layout for login - basic html and <ins>functionality</ins> first. 
    - Include reset password option / screen
    - Include create account option /  screen
  - Agile: *Set-up Github Actions (simple version first)*
    - Create a Github board (using Jira) to track issues
    - Create unit tests for logging in 
    - Create the pipeline

**Week 2 (November 7th - 13th)**
- Home page (expense list)
  - Backend: *Set up table to store expenses with their required fields*
    - SQL statements to update and delete expenses
    - SQL statements to filter expenses
    - Attach expense table to each user
  - Front end: *Create card general layout for home screen - basic html and <ins>functionality</ins> first*
    - Create expense form
    - Delete expense button
    - Update expense fields
  - Agile: *Create lots of unit tests for faulty expenses, input, etc.*
    - Update CI/CD pipeline along the way 

**Week 3 (November 14th - 20th)**
- Breakdown page
  - Backend: Set up SQL statements for monthly breakdown and percent logic
    - Store files at the end of each month onto the user's local storage. 
  - Frontend: Set up general layout for pie chart and total expense for that month. 
  
**Week 4 (November 21st - 27th)**
- Merging the pages
  - Piecing each component to work together
- User interface additions

**Week 5 (November 28th - December 4th)**
- Final touches and stress testing

