http://c7chou.github.io/CSE-134-HW3








Oscar:
Greatly assisted my team with development and debugging issues.
Managed and assigned tasks to team
Did a great portion of planning for the application, including UI and implementation
Implemented all of the CRUD features including:
    1. Add habits, read habits, delete habits, Update habits
    2. Settings page add settings elements
    
Implemented Settings page pause, sleep, and turnoff javascript that interacts with DB
Implemented features that pause of turnoff a habit in the main list
Debugged and fixed sliding effects in the mainlist and added play and pause picture (previous buttons not compatible with the UI look)
Greatly assisted with the navbar in the bottom
Connected progress bar with the backend in the DB
Added security in input boxes that prevent injections in the add and edit page.
Added the security popup that prevents user from entering inappropriate input to input boxes
Implemented all the DB connections of the edit page that interact with the back end and affect the main list.
Added the upload a photo feature including:
    1. photo storage in the backend
    2. photo input selection
Added the appropriate redirects to most pages
I made routing information possible from page to page using URL parameters
README


Notes:

Settings page to DB:

1. In db, each habit will have an additional data field known as setting, which 
    will have 3 extra fields: off, sleep, pause
2. Each setting is leveled in order of importance --> javascript conditions to 
    determine which to run.
3. pause- keeps habit on list but doesnt delete results
        a. when paused restart timestamp and renew until the day user unpauses
        b. off removes from list and restarts timestamp
        c. sleep just pauses for chosen amount of days and restarts timestamp
        d. There should be text pop-up into what is happening when user sets one of these switches
            i. popup can appear right below text.
4. Edit and Add Habit page should have frequency set to as long as user wants it to be.




Bar Progress Bar

0. Each Habit will have an additional field known as progress, which will have 2 inner fields:
    timestamp and counter
1. Upon object creation, initiate counter to 0
2.  a. Every time the add button is hit, increment counter
        i.Counter is full, change size of the bar (more blues, increment max size)
        ii.Otherwise, 1 more blue, 1 less gray
    b. Otherwise, once the timestamp is expired renew the bar
        i. reset the whole bar (0 blues, all grays), reset counter and plus 1 for current count
        issue: How to check when the timestamp is required?
            i. auto refresh and upon refresh check and update UI?
            ii. App reloads everyday at midnight,
                javascript function that allows this (upon then UI updates, might be too complicated for this project)
            iii. On page return, shows results
                a. Logic for this would be to check timestamp of last updated and compare with current submission
                    Most practical approach.

Draggables?
Archives?


