# Backend Team ADR 2

## 11/18/2022

## Major Decisions

### Change of Project Nature
- Shifted away from Electron.js given the project time constraints and scope
- Lots of smaller implementation details, not enough bandwith to learn them
- New project goal: Web Application (smaller scale, similar)




- The decision was made to use localStorage following our move from electron.js to a normal web application
- Other database configurations were deemed unnecessary and illogical given our time frame and project constraints

#### **Create Account Page - Initial Logic Workflow**

Logic Flow: Obtain username and password -> check validity -> cross-reference with localStorage -> Add if not present, else throw error


#### **Login Page - Initial Logic Workflow**

Logic Flow: Obtain username and password -> cross reference with localStorage -> if exists, login else throw error