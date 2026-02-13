# ReMind
ReMind is a fast-paced word association game built with React and Vite. Designed with a clean, minimal UI, it challenges players to generate as many valid words as possible within a set time limit across various categories and attributes.

## Background & Inspiration
The game mechanics for ReMind are based on speech therapy exercises for stroke recovery, specifically the ones given to my dad.

Doing these on paper was a bit rough on everyone; it was messy to track, and I noticed my dad didn't really enjoy doing them. So I built this app to handle the timer and the scoring so we could just focus on the game. Since switching to the app, he seems much more eager to practice, and it’s made the whole process easier for the family. While it’s just a simple tool, I'm sharing it in hopes that it might make things a little easier for someone else in the same situation.

## How to Play

**1. Start the game**
On the Home page, click Ready? to begin.

**2. Choose your language**
Use the language toggle to switch between English and Thai.
This affects both the UI text and the game content.

**3. Select game settings**

- Choose a mode:

  - Category – only categories (e.g. Food, Animals)

  - Attribute – only attributes (e.g. Can fly, Red color)

  - Both – a mix of categories and attributes

- Select one or more options by clicking the buttons.

- Set the timer duration (in seconds).

**4. Start the round**
Click Start to begin the first round.

**5. Play the round**

- The topic will be shown on screen.

- Say as many relevant words as you can before the timer runs out.

- Click the + button each time you say a correct word.

- The timer will continue running regardless of button presses.

**6. Time’s up**

- When the timer ends, your score for that round is saved.

- Click Continue to move to the next topic, or Show Result if it was the final round.

**7. View results**

- The Results page shows your score for each topic.

- Click Back to Home to restart the game.
  
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
**1. Sound effects and animations**  
Add subtle audio feedback and transitions to make gameplay more engaging.

**2. Mobile-first layout refinements**  
Improve spacing, button sizes, and interactions for smaller screens.

**3. Typed input answer checking**  
Allow users to type answers and validate them against a predefined answer list or by integrating AI-based semantic matching.

**4. Voice input recognition**  
Implement voice listening so the app can detect spoken answers and verify correctness.
If confidence is low, present users with suggested interpretations to confirm the intended word.
(May require speech-to-text APIs and further AI tuning.)

**5. Reverse game mode**  
Introduce a mode where users set a target number of words (e.g., 10).
The timer continues running until the target is reached, and the final result is the time taken instead of the word count.

**6. Idle hint system**  
If no interaction occurs for a set duration (e.g., 30 seconds), provide a hint to help the user continue.

## Additionals
- [Development notes](DEV_NOTES.md)
