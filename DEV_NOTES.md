```md
# Development Notes

This document outlines technical challenges faced during development and how they were resolved.

## Timer freezing when spam button
- **Problem:**  
The countdown timer stopped when the user rapidly clicked the increment button.

- **Cause:**  
The timer effect depended on the state that was changing during button clicks, causing the interval to reset.

- **Solution:**  
Decoupled the timer logic from UI interactions by using a stable interval and functional state updates.

## Page Navigation Issues
- **Problem:**  
Buttons appeared unresponsive, or pages failed to render.

- **Cause:**  
State-based navigation relied on mismatched page keys.

- **Solution:**  
Standardized page names and centralized navigation logic in `App.jsx`.

## Language Toggle Integration
- **Problem:**  
UI text and game data need to change together when switching languages.

- **Solution:**  
Separated UI strings from game data and passed the selected language down through props.
