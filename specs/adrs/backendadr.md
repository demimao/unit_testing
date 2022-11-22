# Backend Team ADR 2

## 11/21/2022

### Login/Create Account Page
- The decision was made to use localStorage following our move from electron.js to a normal web application
- Other database configurations were deemed unnecessary and illogical given our time frame and project constraints

#### **Create Account Page**

Logic Flow: Obtain username and password -> check validity -> cross-reference with localStorage -> Add if not present, else throw error


#### **Login Page**

Logic Flow: Obtain username and password -> cross reference with localStorage -> if exists, login else throw error