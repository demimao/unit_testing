# Backend Team ADR 1 
## 11/12/2022

This document will outline the architectural design decisions for the backend team as of 11/12/2022.

## Major Decisions

### **Change of Project Nature**
- Team decision build a desktop application using Electron.js
- Idea is to build something similar to a web application, but with added functionality

### **Language**
- The choice was made to use JavaScript given the web-app nature of the project, as well as existing team familiarity
### **Storage**
electron-store
- This is an NPM package that seems to have widespread support for localStorage-like functionality within an electron-app
- Will require further exploration
