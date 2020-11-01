# GitPractice
This is me practicing how to use Git


					<h1>BASIC COMMANDS</h1>



					<h2>LOCAL</h2>


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
// Merge the branch to current branch






 				<h2>REMOTE REPOSITORIES</h2>


$ git push 

// Push to remote repository
// Take local repository and push it to a remote repository (i.e. github)
// Have to add a remote service and credentials in advance

$ git push -u origin master
// Push to remote repository for the first time



$ git pull 
// Pull latest from remote repository

$ git clone
// Clone repository into a new directory

$ git remote
// Shows all the remote repositories

$ git remote add origin <remote repository address>
// Address can be found @github