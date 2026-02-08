# Development notes

This note documents technical challenges faced during development and how they were resolved.

## Timer freezing when user spams the button
- Problem: 
The countdown timer stopped when the user rapidly clicked the increment button.

- Cause:
The timer effect depended on the state that was changing during button clicks, causing the interval to reset.

- Solution:  
Used useRef to capture the latest score for the onTimeout callback without making the timer dependent on the count state
## Import statements fail
- Problem: The import statements fail to recognize a file name change due to case-insensitive filesystems.

- Solution:
  Slightly rename the file to something different but still recognizable.

## Language toggle 
- Problem:  
UI text and game data need to change together when switching languages.

- Solution:
Instead of hardcoding the text like before, use manual JSON imports
