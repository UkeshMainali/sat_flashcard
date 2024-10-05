const flashcards = [
    {
        word: "Also",
        definition: "used to add another idea or piece of information",
        example: "She enjoys hiking. Also, she loves swimming.",
        usage: "continuation"
    },
    {
        word: "And",
        definition: "used to join two words, phrases, or ideas",
        example: "He studies hard and plays sports.",
        usage: "continuation"
    },
    {
        word: "Furthermore",
        definition: "used to introduce additional information",
        example: "The food was delicious. Furthermore, the service was excellent.",
        usage: "continuation"
    },
    {
        word: "In addition",
        definition: "used to add extra information",
        example: "He is a talented singer. In addition, he plays the guitar.",
        usage: "continuation"
    },
    {
        word: "Moreover",
        definition: "used to indicate that something is more important or an additional point",
        example: "The project was successful. Moreover, it was completed ahead of schedule.",
        usage: "continuation"
    },
    {
        word: "For example",
        definition: "used to introduce an instance illustrating a point",
        example: "She loves fruit, for example, apples and bananas.",
        usage: "give example"
    },
    {
        word: "For instance",
        definition: "used to introduce a specific example",
        example: "Many animals live in this forest, for instance, deer and rabbits.",
        usage: "give example"
    },
    {
        word: "Specifically",
        definition: "used to introduce something in particular",
        example: "The plan was well organized, specifically the timeline.",
        usage: "give example"
    },
    {
        word: "Effectively",
        definition: "in a way that produces the desired result",
        example: "He managed the team effectively, leading to success.",
        usage: "define/clarify"
    },
    {
        word: "Essentially",
        definition: "used to emphasize the basic, fundamental aspect of something",
        example: "Essentially, we need to focus on improving communication.",
        usage: "define/clarify"
    },
    {
        word: "In other words",
        definition: "used to explain something differently or more simply",
        example: "He is a polyglot. In other words, he speaks several languages.",
        usage: "define/clarify"
    },
    {
        word: "That is",
        definition: "used to clarify or explain something more precisely",
        example: "We need to increase revenue, that is, make more sales.",
        usage: "define/clarify"
    },
    {
        word: "In fact",
        definition: "used to add emphasis or clarify a point",
        example: "I thought the movie would be bad. In fact, it was really good.",
        usage: "emphasize"
    },
    {
        word: "Indeed",
        definition: "used to emphasize a statement or confirmation",
        example: "He is very talented. Indeed, he won several awards.",
        usage: "emphasize"
    },
    {
        word: "Likewise",
        definition: "in the same way or similarly",
        example: "She was impressed by the show. Likewise, I found it very entertaining.",
        usage: "compare"
    },
    {
        word: "Similarly",
        definition: "in a similar way",
        example: "He worked hard and succeeded. Similarly, his brother achieved his goals.",
        usage: "compare"
    },
    {
        word: "Previously",
        definition: "before a particular point in time",
        example: "He had never traveled abroad before. Previously, he only visited local places.",
        usage: "sequence of events"
    },
    {
        word: "Subsequently",
        definition: "after a particular thing has happened",
        example: "He was late. Subsequently, he missed the opening ceremony.",
        usage: "sequence of events"
    },
    {
        word: "Finally",
        definition: "at the end or as the last point",
        example: "After a long discussion, they finally reached an agreement.",
        usage: "sequence of events"
    },
    {
        word: "While",
        definition: "during the time that something else is happening",
        example: "She was studying while he was playing video games.",
        usage: "sequence of events"
    },
    {
        word: "Accordingly",
        definition: "in a way that is suitable or appropriate",
        example: "She was given clear instructions and acted accordingly.",
        usage: "cause-and-effect"
    },
    {
        word: "As a result",
        definition: "because of something that happened before",
        example: "He didn’t study. As a result, he failed the exam.",
        usage: "cause-and-effect"
    },
    {
        word: "As such",
        definition: "in the exact meaning of the word or term",
        example: "There’s no rule as such, but it is generally expected.",
        usage: "cause-and-effect"
    },
    {
        word: "Because",
        definition: "for the reason that",
        example: "She didn’t come because she was feeling ill.",
        usage: "cause-and-effect"
    },
    {
        word: "Consequently",
        definition: "as a result of something",
        example: "He didn’t work hard. Consequently, he didn’t pass the test.",
        usage: "cause-and-effect"
    },
    {
        word: "For",
        definition: "indicating the reason or cause of something",
        example: "He stayed at home, for it was raining heavily.",
        usage: "cause-and-effect"
    },
    {
        word: "Hence",
        definition: "for this reason",
        example: "It was raining, hence the cancellation of the event.",
        usage: "cause-and-effect"
    },
    {
        word: "Since",
        definition: "because or for the reason that",
        example: "Since it’s late, we should go home.",
        usage: "cause-and-effect"
    },
    {
        word: "So",
        definition: "as a result of something",
        example: "It was cold, so I wore a jacket.",
        usage: "cause-and-effect"
    },
    {
        word: "Thus",
        definition: "as a result or consequence of this",
        example: "He didn’t prepare, thus he failed the exam.",
        usage: "cause-and-effect"
    },
    {
        word: "Therefore",
        definition: "for that reason",
        example: "It was late, therefore they decided to leave.",
        usage: "cause-and-effect"
    },
    {
        word: "To this end",
        definition: "for this purpose",
        example: "He is saving money. To this end, he opened a savings account.",
        usage: "cause-and-effect"
    },
    {
        word: "Alternately",
        definition: "used to present another option or possibility",
        example: "We could drive there. Alternately, we could take the bus.",
        usage: "contrast"
    },
    {
        word: "Alternatively",
        definition: "introducing a different option",
        example: "You can take the train. Alternatively, you can drive.",
        usage: "contrast"
    },
    {
        word: "(Al)though",
        definition: "introducing a contrast or opposing idea",
        example: "Although it was raining, we went for a walk.",
        usage: "contrast"
    },
    {
        word: "But",
        definition: "used to introduce a contrast or exception",
        example: "He is smart but lazy.",
        usage: "contrast"
    },
    {
        word: "Conversely",
        definition: "introduces an opposite idea or fact",
        example: "He loves pizza. Conversely, she dislikes it.",
        usage: "contrast"
    },
    {
        word: "Despite/In spite of",
        definition: "without being affected by the opposite condition",
        example: "She succeeded despite the challenges.",
        usage: "contrast"
    },
    {
        word: "Even so",
        definition: "despite what has just been said",
        example: "It was raining. Even so, we decided to go for a hike.",
        usage: "contrast"
    },
    {
        word: "Even though",
        definition: "despite the fact that",
        example: "Even though it was cold, we went outside.",
        usage: "contrast"
    },
    {
        word: "However",
        definition: "used to introduce a contrast or opposing idea",
        example: "The project was difficult. However, we managed to finish it.",
        usage: "contrast"
    },
    {
        word: "In any case",
        definition: "whatever happens or happened",
        example: "It might rain later, but in any case, we are going to the beach.",
        usage: "contrast"
    },
    {
        word: "In contrast",
        definition: "to show a difference between two or more things",
        example: "In contrast to her brother, she is very outgoing.",
        usage: "contrast"
    },
    {
        word: "Instead",
        definition: "used to suggest an alternative",
        example: "He didn’t go to the party. Instead, he stayed home.",
        usage: "contrast"
    },
    {
        word: "Meanwhile",
        definition: "at the same time, in contrast to something else",
        example: "She was studying. Meanwhile, her brother was watching TV.",
        usage: "contrast"
    },
    {
        word: "Nevertheless",
        definition: "despite something that has been said",
        example: "It was raining. Nevertheless, we went out.",
        usage: "contrast"
    },
    {
        word: "Nonetheless",
        definition: "in spite of that",
        example: "He was tired. Nonetheless, he continued working.",
        usage: "contrast"
    },
    {
        word: "On the contrary",
        definition: "used to introduce an opposite idea",
        example: "I don’t dislike him. On the contrary, I think he’s great.",
        usage: "contrast"
    },
    {
        word: "On the other hand",
        definition: "introducing a different point of view or contrasting information",
        example: "He likes football. On the other hand, she prefers basketball.",
        usage: "contrast"
    },
    {
        word: "Otherwise",
        definition: "if not",
        example: "We need to hurry; otherwise, we’ll miss the train.",
        usage: "contrast"
    },
    {
        word: "Rather",
        definition: "used to indicate preference for one thing over another",
        example: "I’m not angry, rather disappointed.",
        usage: "contrast"
    },
    {
        word: "Regardless",
        definition: "without being affected by something",
        example: "We will go ahead with the plan, regardless of the challenges.",
        usage: "contrast"
    },
    {
        word: "Still",
        definition: "despite that",
        example: "She was tired. Still, she continued working.",
        usage: "contrast"
    },
    {
        word: "Whereas",
        definition: "used to show contrast between two things",
        example: "He prefers tea, whereas I prefer coffee.",
        usage: "contrast"
    },
    {
        word: "While",
        definition: "used to contrast two ideas or indicate something happening simultaneously",
        example: "While she was sleeping, he was working.",
        usage: "contrast"
    },
    {
        word: "Yet",
        definition: "used to introduce something contrasting or surprising",
        example: "She was ill, yet she came to work.",
        usage: "contrast"
    },
    { word: "Also", definition: "used to add information", example: "I like swimming. Also, I enjoy cycling.", usage: "continuation" },
    { word: "Finally", definition: "used to indicate the last point or conclusion", example: "Finally, we reached our destination.", usage: "continuation" },
    { word: "And", definition: "used to connect words or phrases", example: "I bought apples and oranges.", usage: "continuation" },
    { word: "Now", definition: "used to indicate the present time or to introduce a new topic", example: "Now, let's move on to the next point.", usage: "continuation" },
    { word: "Then", definition: "used to indicate time or sequence", example: "We had dinner, and then we went for a walk.", usage: "continuation" },
    { word: "However", definition: "used to introduce a contrast or opposing idea", example: "The project was difficult. However, we managed to finish it.", usage: "contrast" },
    { word: "Moreover", definition: "used to add information that strengthens a point", example: "She is talented. Moreover, she works very hard.", usage: "continuation" },
    { word: "Because", definition: "used to introduce a reason", example: "I stayed home because it was raining.", usage: "cause-and-effect" },
    { word: "As a result", definition: "used to show the consequence of something", example: "It rained heavily. As a result, the match was postponed.", usage: "cause-and-effect" },
    { word: "In addition", definition: "used to add information", example: "In addition to her studies, she works part-time.", usage: "continuation" },
    { word: "Therefore", definition: "used to show a conclusion or result", example: "He studied hard; therefore, he passed the exam.", usage: "cause-and-effect" },
    { word: "Meanwhile", definition: "at the same time, in contrast to something else", example: "She was studying. Meanwhile, her brother was watching TV.", usage: "contrast" },
    { word: "On the other hand", definition: "introducing a different point of view or contrasting information", example: "He likes football. On the other hand, she prefers basketball.", usage: "contrast" },
    { word: "Since", definition: "used to indicate a reason or time", example: "Since it was late, we decided to go home.", usage: "cause-and-effect" },
    { word: "For example", definition: "used to introduce an example", example: "I enjoy outdoor activities, for example, hiking and camping.", usage: "give example" },
    { word: "As well as", definition: "used to add something", example: "She speaks French as well as English.", usage: "continuation" },
    { word: "While", definition: "used to contrast two ideas or indicate something happening simultaneously", example: "While she was sleeping, he was working.", usage: "contrast" },
    { word: "In contrast", definition: "to show a difference between two or more things", example: "In contrast to her brother, she is very outgoing.", usage: "contrast" },
    { word: "Regardless", definition: "without being affected by something", example: "We will go ahead with the plan, regardless of the challenges.", usage: "contrast" },
    { word: "In conclusion", definition: "used to summarize or conclude", example: "In conclusion, we need to work together to succeed.", usage: "continuation" },
    { word: "So that", definition: "used to indicate purpose or intention", example: "She studied hard so that she could pass the exam.", usage: "cause-and-effect" }
];

let currentCard = 0;
let isFlippedMode = false; // Track if flipped mode is active
const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flipMe');

function updateCard() {
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
    const usageElement = document.getElementById('usage');
    const exampleElement = document.getElementById('examples');
    const sn = document.getElementById('sn');
    const flashcard = document.getElementById('flashcard');
    const back_side_word = document.getElementById('back_side_word');
    const nepali = document.getElementById('nepali');

    // Update the content with the current card information
    if(isFlippedMode){
        back_side_word.style.display = "none";
        nepali.style.display = "none";
    }
    else{
        back_side_word.style.display = "inline-block";
        back_side_word.textContent = flashcards[currentCard].word;
        nepali.textContent = "( " + flashcards[currentCard].nepali + " )";
    }
    wordElement.textContent = flashcards[currentCard].word;
    definitionElement.textContent = flashcards[currentCard].definition;
    usageElement.textContent = flashcards[currentCard].usage;
    exampleElement.textContent = flashcards[currentCard].example;
    sn.innerText = currentCard + 1;

    // Determine the state of the flashcard based on isFlippedMode
    if (isFlippedMode) {
        flashcard.classList.add('flipped'); // Show back side
        flipButton.innerText = "Guess the meaning"; // Change button text to "Flipped"
    } else {
        flashcard.classList.remove('flipped'); // Show front side
        flipButton.innerText = "Guess from meaning"; // Reset button text
    }
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length; // Move to next card
    updateCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length; // Move to previous card
    updateCard();
}

// Initialize the first card
updateCard();

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle("flipped");
});


// Event listener for flipping the card
flipButton.addEventListener('click', () => {
    isFlippedMode = !isFlippedMode; // Toggle flipped mode
    updateCard(); // Update the card to reflect the new mode
});

// Add event listeners for next and previous buttons
document.getElementById('next').addEventListener('click', nextCard);
document.getElementById('previous').addEventListener('click', prevCard);

