# Front End Team ADR 1 
## 11/18/2022

This document will outline the architectural design decisions for the front end team as of 11/18/2022.

### **Language**
#### HTML and CSS
- Ease of use for keeping technology stack constant
- Existing familiarity with team members
- Will Be used to Design DOM 


### Sync with Back End Decision
#### Switching from Electron JS  (Desktop Application -> Website Application)
- Team decision to change our architecture design from a desktop application to a website application. 
- Back End Team found issue with using a locally first storage system where we would need to always have a channel between main.js (our main processs) and other js scripts (our renderer process) and data would need to be able to be communicated between the two when there was any changes to the database
- So... we pulled aways from electron js as we realized that as we pushed more features using this storage, we would need to write extra code to just sync the main and renderer processes 
- We decided to change our development into a website application using serviceWorkers in native JS
- 
### Page Construction
- Front End Team Decision to make sure page designs go through designer during initial construction. This way FE devs and designer has an established channel for communication.
- This way, developers can get wireframes/designs from designer and designer can give specific changes to developers. Developers can ask for logos or other icons from designer and devs can maintain input from designer

