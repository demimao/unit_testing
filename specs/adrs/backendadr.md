# Backend Team ADR 1 
## 11/12/2022

This document will outline the architectural design decisions for the backend team as of 11/12/2022.

### **Language**
#### JavaScript
- Ease of use for keeping technology stack constant
- Existing familiarity with team members
### **Frameworks**
#### Node.js, Electron.js
- Lots of documentation and easiest to use with native JS
- Most straightforward option for desktop apps

### **Storage**
electron-store
- Considered SQL database - too time costly for project constraints and requirements
- electron-store emphasizes local-first capabilities

