# Agile pipeline Decision 2

## What tools are we using for documentation, testing and quality? 
## Should we try to merge files on the pipeline?

How are we generating code documents?
How are testing ?
How are we our code qualtiy ?
would it be better to merge our validators? 

## Considered Options

* Jsdocs with hit hub deploy pages
* Puppeteer and Jest
* Code Climate
* keep them seperated 
* merge files into one 

## Decision Outcome(s)

Chosen option: We will be using JSdocs to generate documentation with auto deployment to pages. In a similar fashion to lab we will be using jest and puppeteer to run test cases on our code. We're setting up code climate to help with quality checks. Lastly we are choosing to keep the test seperated. 

### Consequences
#### Jsdocs
* Good, jsdocs makes neatly formated files,
* Good, automate generation setup just requires comments from team
* Bad, due to difficulties with gits virtual machine, we will be using a deploy action from the marketplace to save the docs on the repo. Will deploy the docs to a seperate branch. 
  
#### Puppeteer 
* Good, familiarity with jest and puppeteer will help for testing out code 
* Good, we can test the app how we wish
* Good, E2E testing allows us to test user functionality
* Bad, we may or may not be able to cover every possible corner case

#### Code Climate 
* Good, not as complex as we initially thought
* Good, automatic checks on github when pulll requests are made
* Good, everyone can click on the report and see the issues
* Bad, still may need some configuration for our project 

#### Keeping pipelines test seperated
* Good, clarity makes maintaining easier
* Good, if one fails then only said test needs to be rerun(say for example HTML validator passes but not eslint, then only Javascript files need to change, vice versa,etc.)
* Good, since test are independant they will run simultaneously on push and pull requests
* Bad, maybe be a bit slow
* Bad, not necessarily a "pipeline" 
