# ReMind
ReMind is a fast-paced word association game built with React and Vite.  
Players select categories or attributes and try to generate as many valid words as possible before time runs out.
The app supports both English and Thai languages and is designed with a clean, minimal UI.

## Features
- Category / Attribute / Mixed modes
- Customizable timer per round
- Multiple rounds with result summary
- English and Thai language support
- Responsive, minimal UI
- Keyboard-free, tap-friendly gameplay

## Language support
You can switch languages at the home page using the language toggle.
- English
- Thai
All UI text and game data updates dynamically based on the selected language.

## Future improvement
- Sound effects and animations
Add subtle audio feedback and transitions to make gameplay more engaging.

- Mobile-first layout refinements
Improve spacing, button sizes, and interactions for smaller screens.

- Typed input answer checking
Allow users to type answers and validate them against a predefined answer list or by integrating AI-based semantic matching.

- Voice input recognition
Implement voice listening so the app can detect spoken answers and verify correctness.
If confidence is low, present users with suggested interpretations to confirm the intended word.
(May require speech-to-text APIs and further AI tuning.)

- Reverse game mode
Introduce a mode where users set a target number of words (e.g., 10).
The timer continues running until the target is reached, and the final result is the time taken instead of the word count.

- Idle hint system
If no interaction occurs for a set duration (e.g., 30 seconds), provide a hint to help the user continue.

## Additionals
- [How to play?](INSTRUCTION.md)
- [Development notes](DEV_NOTES.md)
