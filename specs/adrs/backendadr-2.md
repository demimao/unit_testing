# Backend Team ADR 2

## 11/28/2022

### Login Page
The main task worked on was completing the login capability - this means routing to the home page after successful login, or showing an error on unsuccessful login.

#### **Login Page to Home Page**
- The choice to use ```window.location.replace``` was for the login page to successfully route to the home page after logging in. This simply replaces the current window with the new resource, which is the home_page.html file in our directory
- In order for the home page to be customizable per user, the current user info needs to be present on the home page
- This was accomplished through sessionStorage, as we 'carry over' the name of the user so we can query localStorage for the existing purchases

- The decision to use localStorage was debated and ultimately decided against in order to maintain the structure of our data (localStorage is only for users/passwords and corresponding expenses).


#### **Home Page**
On the home page, there are two main backend functionalities - adding an expense, and showing existing expenses.

- In order to add a new expense, we use localStorage. We take each of the inputs in the form data and add it to localStorage
- In order to keep the data organized, the idea is to use the key/value relationship of localStorage to associate a user (key) with a list of objects represeting expenses (value)
- In order to query existing expenses, we search localStorage for any values associated with the user key, and display these upon loading the page (initial run of the JS file)
