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

## Shared Vocabulary Quiz Engine (new standard)

New vocabulary quizzes should use the shared engine so quiz logic is not rewritten for each new set.

- Shared engine: `shared/vocabulary-engine.js`
- Shared responsive styles: `shared/vocabulary-quiz.css`
- New-quiz template files: `_templates/vocabulary/template.html`, `quiz-config.js`, and `quiz-data.js`

### Creating the next vocabulary quiz

1. Create the next numbered folder, for example `Vocabulary-Quiz-16/`.
2. Copy `_templates/vocabulary/template.html` into it as `index.html`.
3. Copy `_templates/vocabulary/quiz-config.js` and `_templates/vocabulary/quiz-data.js` into the same folder.
4. In `quiz-config.js`, change only the quiz number and the relevant Facebook post URL.
5. In `quiz-data.js`, add the actual quiz questions. Each question needs a unique ID, question, exactly four options, a zero-based `answer` index, an explanation, and an example sentence.
6. Open the new `index.html` on GitHub Pages and test both modes, sounds, result screen, and Facebook return link before publishing.

The template loads the shared engine and shared CSS. Do not copy or edit the engine for each quiz. The engine validates missing question text, option count, answer index, duplicate options/IDs, explanation, and example fields before the quiz starts.

### Question data format

- `answer: 0` means option A; `1` means B; `2` means C; `3` means D.
- Keep the correct-answer positions balanced across A/B/C/D; the engine validates the answer index but does not automatically change or randomize options.
- Do not publish the two sample questions in the template as a finished quiz; replace them with the complete reviewed question set.
- Existing vocabulary quizzes remain in their current format until individually migrated and tested. The shared engine is the standard for new quizzes and does not automatically replace legacy quiz scripts.
