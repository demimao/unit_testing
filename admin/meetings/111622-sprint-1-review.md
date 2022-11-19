<h1>Sprint 1 Review Meeting
<br /> November 16, 2022
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
### Sprint Review
*Sprint 1: 10/31 ~ 11/16* <br>

**Task: Login-Page**

Back-end:
- Made architectural decisions
- Decided not to use SQL database since it does not match the project goal
- Sticking with localStorage
- browserLocalstorage
  - SQL database was considered, but too complex/unnecessary for our purposes
- JavaScript
  - Ease of use for keeping technology stack constant
  - Existing familiarity with team members

Front-end:
- Logo design done
- Made the page based on the design
- login_page html and CSS added
- create_account html and CSS added
- reset_password html and CSS added
<br>

**Task: CI/CD Pipeline**

Agile:
- Set up actions pipeline
- Set up Hello World pipeline
- Set up branch protection
  - Code must be reviewed before merge
- Implemented HTML5 Validator
- Added ESLint and CSSLint for linting
- Added Prettier for code formatting

---
### Diagrams

![Github Board](/admin/meetings/diagram-sc/sprint1-gitboard.PNG)
![Github Board List](/admin/meetings/diagram-sc/sprint1-gitboardlist.PNG)
![Login Page](/admin/meetings/diagram-sc/sprint1-loginpage.PNG)