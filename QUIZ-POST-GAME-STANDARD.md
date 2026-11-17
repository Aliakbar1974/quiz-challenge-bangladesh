# Quiz Post-Game Standard

Every new quiz must use the same post-completion experience.

## Required result-screen content
1. Quiz completed heading.
2. Final score and percentage.
3. A performance message based on the score.
4. Social engagement prompt: like the Facebook post, comment the score, share the quiz, and follow the page.
5. **Return to Facebook** button. Use the exact Facebook post URL for that quiz in `FACEBOOK_POST_URL`; never copy another quiz's post URL or invent one.
6. **Play Again** button that resets the quiz without leaving the page.
7. **More [category] Quizzes** button linking to the relevant quiz library.
8. **Home Page** button linking to `https://quizchallengebd.com/`.

## Category destinations
- Bangladesh: `https://quizchallengebd.com/bangladesh-quizzes.html`
- Vocabulary: `https://quizchallengebd.com/vocabulary-quizzes.html`
- English Grammar: `https://quizchallengebd.com/english-grammar-quizzes.html`

Grammar quizzes may additionally show **More Chapters** and **All Grammar Levels** links.

## Implementation checks before publishing
- Confirm all result-screen buttons are present in the HTML and their handlers exist in JavaScript.
- Confirm the exact Facebook post URL belongs to the quiz being published. If it is not yet known, do not substitute another quiz's URL.
- Ensure all result buttons have visible, consistent styling on desktop and mobile.
- Test completion in both Learning Mode and Exam Mode, including a timeout on the final question.
- Confirm Play Again resets score, question index, timer, and selected mode.
