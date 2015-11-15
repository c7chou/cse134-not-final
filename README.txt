http://c7chou.github.io/CSE-134-HW3


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


