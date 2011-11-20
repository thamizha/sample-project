# Sample Project
The purpose of this project is to act as a reference project of how to create your Thamizha project documentation site. This repo contains some files of a fictional project and the Github pages files of the projects documentation.

Every Thamizha project maintainer is expexted to follow the guidelines specified in this project for creating and maintaining a documentation site of their project.

**Note**: Still in development. Donot refer this until ofiicially announced in the mailing list or thamizha website.

## How to use this repo?

__Still Very much in developemnt. Kindly AVOID using it now__

* Goto your project directory `cd /path/to/project/`
* Make sure all your changes of your project have been commited. `git status -s` should give you nothing. If says something, then make a commit and save your changes.
* Now run the following commands: 
'''bash
git symbolic-ref HEAD refs/heads/gh-pages
rm .git/index
git clean -fdx
'''
* After running this you'll have an empty working directory (don't worry, your main repo is still on the master branch)
* Go back a directory `cd ..`
* Clone this repository `git clone https://github.com/thamizha/sample-project`
* Move to the *files* directory inside *sample-project* `cd sample-project/files/`
* Copy the files to your project directory `cp * /path/to/your/project/`
* Switch to your project directory `cd /path/to/your/project/`
* Add the files, commit using the following commands
'''bash
git add .
git commit -a -m "First pages commit"
'''
* __TODO:__ Add information about what information should be added to the files.
* Now commit the changes and push
'''bash
git commit -am 'added the project details' 
git push origin gh-pages
'''
* Login to your github account, you should see a mail waiting for you announcing your site has been created. Now you should be able to see your site at http://thamizha.github.com/your-project


