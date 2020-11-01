< HEAD
# GitPractice
This is me practicing how to use Git


					<h1>BASIC COMMANDS					<h2>LOCAL</h2>


$ git init 

// initialize local Git Repository
// Creates .git folder, hidden by default
// After initializing, can start running other commands



$ git add <file>

// Add file(s) to Index (staging area)
// File(s) get ready for commands
// Can run as many times as you need to before committing

$ git add .html   // Add every html files
$ git add .       // Add all the files in the folder



$ git status 

// Check status of working tree
// See what's in the staging area
// Display differences between the working tree and the staging area (index)



$ git commit

// Commit changes in index
// Take everything in the index(staging area) and put it into the local repository

$ git commit -m 'comment'   // Skip editing commit part



$ git touch <file> 
// Create the file in the current index (folder)



$ git config --global user.name 'name'
// Add my name

$ git config --global user.email 'email'
// Add my email

$ git rm --cached <file> 
// Remove the file from Git

$ clear 
// Clear the console



$ git branch <branchName> 
// Create a branch

$ git checkout <branchName>
// Switch to another branch
// Make sure to commit everything before switching

$ git merge <branch>
// Merge the branch to current br

 				<h2>REMOTE REPOSITORIES</h2>


$ git
