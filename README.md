# Quiz Challenge Bangladesh

This repository stores **Bangladesh Studies** and **English Vocabulary** quiz games.

## Keep quiz files in this repository

- Bangladesh Studies: `Bangladesh-Quiz-01/`, `Bangladesh-Quiz-02/`, and so on.
- English Vocabulary: `Vocabulary-Quiz-02/`, `Vocabulary-Quiz-03/`, and so on. Vocabulary Quiz 01 is the repository-root quiz and uses the root `index.html`, `style.css`, and `script_English_Vocabulary_01.js`.

## Folder structure for each new quiz

Use a separate numbered folder and keep its game files together:

```text
Bangladesh-Quiz-13/
  index.html
  script.js
  style.css
  Images/
  Sounds/
Vocabulary-Quiz-16/
  index.html
  script.js
  style.css
  Images/
  Sounds/
```

Keep the established spelling, hyphenation, and two-digit numbering for Bangladesh/Vocabulary quiz names. Every quiz folder should have its own `index.html`. Keep its assets inside that folder unless it intentionally uses the shared root assets.

## Website listing

The website repository's Bangladesh and Vocabulary library pages read quiz folders from this repository and list folders that contain `index.html`. After adding a quiz, use the next unused number, confirm the folder opens on GitHub Pages, and then check the matching library page.

- GitHub Pages: https://aliakbar1974.github.io/quiz-challenge-bangladesh/
- Website: https://quizchallengebd.com/
- Bangladesh quiz library: https://quizchallengebd.com/bangladesh-quizzes.html
- Vocabulary quiz library: https://quizchallengebd.com/vocabulary-quizzes.html

## Quality checklist

- Verify every answer index points to the actual correct option.
- Balance correct answers across options where required by the quiz brief.
- Include clear explanations and useful examples where appropriate.
- Check links, images, sounds, mobile layout, and the completion/return-to-Facebook flow.
- Do not place English Grammar or World General Knowledge quizzes in this repository; use their dedicated repositories.
