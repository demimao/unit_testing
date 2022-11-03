*This plan is fluid and overlapping - just a general guideline to where we should be*
*Backend and Frontend are both responsible for the Javascript*

**Week 1 (October 31st - November 6th)**
- Sign-in/sign-up page
  - Backend: User database table configured w/ username and password
    - SQL statements to update username/ reset password
  - Frontend: Splash screen for what the app is
    - General layout for login - basic html and functionality first. 
    - Include reset password option / screen
    - Include create account option /  screen
  - Agile: Set-up Github Actions (simple version first) 
    - Create a Github board to track issues
    - Create unit tests for logging in 
    - Create the pipeline
---
**Week 2 (November 7th - 13th)**
- Home page (expense list)
  - Backend: Set up table to store expenses with their required fields
    - SQL statements to update and delete expenses
    - SQL statements to filter expenses
    - Attach expense table to each user
  - Front end: Create card general layout for home screen - basic html and functionality first
    - Create expense form
    - Delete expense button
    - Update expense fields
  - Agile: Create lots of unit tests for faulty expenses, input, etc. 
    - Update CI/CD pipeline along the way 
---
**Week 3 (November 14th - 20th)**
- Breakdown page
  - Backend: Set up SQL statements for monthly breakdown and percent logic
    - Store files at the end of each month onto the user's local storage. 
  - Frontend: Set up general layout for pie chart and total expense for that month. 
---  
**Week 4 (November 21st - 27th)**
- Merging the pages
- Piecing each component to work together
- User interface additions
---
**Week 5 (November 28th - December 4th)**
- Final touches and stress testing

