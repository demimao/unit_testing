# Agile pipeline 

## what tool we will use for the pipeline 

How do we validate our HTML?
How do we lint our code and format through github actions? 

## Considered Options

* EsLint and Prettier 
* Super Linter (github marketplace)
* Code Climate 
* Html validator (github marketplace)

## Decision Outcome

Chosen option: We chose the github HTML validator, the Super Linter, prettier from github marketplace

### Consequences

* Good, easy to implement
* Good, logs errors on actions page, 
* Good, requires to pass before merging
* Good, check files in specified path
* Good, prettier formats and commits to repo automatically,
* Bad, blocks other tests if fails
* Bad, super linter take a while
* Bad, long logs that may be difficult to read. 
* Bad, super linter does not provide style check like prettier

### EsLint and Prettier 

* Good, also has **"easy"** implementation 
* Good, style checks 
* Bad, requires configuration files that may be difficult to set up


### Code Climate 

* Good, Links to github automatically 
* Good, runs test on changes on repo,
* Good, has plugins that also allow linting 
* Bad, only 1 person can see these test??
* Bad, convoluted setup 
* Bad, does not directly log errors on github
