const flashcards = [
    { word: "Adhere", definition: "to believe in and follow the practices of", example: "He adhered to the rules strictly.", nepali: "पालना गर्नु" },
    { word: "Advocate", definition: "to publicly recommend or support", example: "She advocates for animal rights.", nepali: "समर्थन गर्नु" },
    { word: "Allude", definition: "to suggest or call attention to indirectly; to hint at", example: "The teacher alluded to the test without saying it directly.", nepali: "संकेत गर्नु" },
    { word: "Ambivalence", definition: "the state of having mixed feelings or contradictory ideas", example: "She felt ambivalence about her new job offer.", nepali: "विरोधाभास" },
    { word: "Analogous", definition: "comparable in certain respects", example: "The human brain is analogous to a computer.", nepali: "समानान्तर" },
    { word: "Anecdote", definition: "a short amusing or interesting story about a real incident", example: "He told a funny anecdote about his childhood.", nepali: "कथा" },
    { word: "Apprehensive", definition: "anxious or fearful that something bad or unpleasant will happen", example: "She was apprehensive about the upcoming exam.", nepali: "चिन्तित" },
    { word: "Arbitrary", definition: "based on random choice or personal whim", example: "The decision seemed arbitrary and unfair.", nepali: "मनपसन्द" },
    { word: "Assert", definition: "to state a fact or belief confidently and forcefully", example: "He asserted his innocence in the matter.", nepali: "दाबी गर्नु" },
    { word: "Bias", definition: "prejudice in favor of or against one thing or group", example: "The judge was accused of having a bias against young people.", nepali: "पक्षपाती" },
    { word: "Brevity", definition: "concise and exact use of words in writing or speech", example: "The brevity of his speech was appreciated by the audience.", nepali: "संक्षिप्तता" },
    { word: "Buttress", definition: "to increase the strength of or justification for; reinforce", example: "The evidence buttressed her argument.", nepali: "समर्थन गर्नु" },
    { word: "Concede", definition: "to admit that something is true after first denying it", example: "He conceded that he had been wrong.", nepali: "स्वीकृत गर्नु" },
    { word: "Consensus", definition: "a general agreement", example: "The group reached a consensus on the project plan.", nepali: "सामूहिक सहमति" },
    { word: "Corroborate", definition: "to confirm or give support to (a statement or theory)", example: "The witness corroborated the suspect's alibi.", nepali: "पुष्टि गर्नु" },
    { word: "Decisive", definition: "settling an issue; producing a definite result", example: "The decisive victory gave them the championship title.", nepali: "निर्णायक" },
    { word: "Deference", definition: "humble submission and respect", example: "He showed deference to his elders.", nepali: "आदर" },
    { word: "Degrade", definition: "to treat or regard with contempt or disrespect", example: "The environment was degraded by pollution.", nepali: "अवमूल्यन गर्नु" },
    { word: "Denounce", definition: "to publicly declare to be wrong or evil", example: "The leader denounced the use of violence.", nepali: "निन्दा गर्नु" },
    { word: "Dispute", definition: "a disagreement, argument, or debate", example: "They had a dispute over the best way to solve the problem.", nepali: "विवाद" },
    { word: "Divergent", definition: "tending to be different or develop in different directions", example: "Their views on the issue were divergent.", nepali: "विभिन्न" },
    { word: "Dormant", definition: "having normal functions suspended or slowed down", example: "The volcano has been dormant for decades.", nepali: "निष्क्रिय" },
    { word: "Eloquent", definition: "fluent or persuasive in speaking or writing", example: "She gave an eloquent speech that moved the audience.", nepali: "प्रभावशाली" },
    { word: "Evoke", definition: "to bring or recall to the conscious mind", example: "The smell of cookies evoked memories of his childhood.", nepali: "याद दिलाउनु" },
    { word: "Exert", definition: "to make a physical or mental effort", example: "He exerted himself to finish the project on time.", nepali: "प्रयास गर्नु" },
    { word: "Explicit", definition: "stated clearly and in detail, leaving no room for confusion", example: "The instructions were explicit and easy to follow.", nepali: "स्पष्ट" },
    { word: "Imminent", definition: "about to happen", example: "A storm was imminent as the clouds gathered.", nepali: "नजिकैको" },
    { word: "Impede", definition: "to delay or prevent by obstructing", example: "The traffic jam impeded their progress.", nepali: "अवरोध गर्नु" },
    { word: "Implicit", definition: "implied but not plainly expressed", example: "There was an implicit understanding between them.", nepali: "अप्रत्यक्ष" },
    { word: "Impose", definition: "to take advantage of someone by demanding attention", example: "She didn't want to impose on her friend's generosity.", nepali: "थोपर्नु" },
    { word: "Indifference", definition: "lack of interest, concern, or sympathy", example: "He showed indifference to the outcome of the game.", nepali: "उदासीनता" },
    { word: "Inevitable", definition: "certain to happen; unavoidable", example: "Failure is inevitable if you don’t work hard.", nepali: "अनिवार्य" },
    { word: "Invoke", definition: "to cite or appeal to as an authority for an action", example: "She invoked her right to remain silent.", nepali: "आवेदन गर्नु" },
    { word: "Ironic", definition: "happening in the opposite way from what is expected", example: "It was ironic that the fire station burned down.", nepali: "व्यंग्यात्मक" },
    { word: "Novel", definition: "new or unusual in an interesting way", example: "He came up with a novel solution to the problem.", nepali: "नयाँ" },
    { word: "Obscure", definition: "not discovered or known about; uncertain", example: "The meaning of the text was obscure.", nepali: "अस्पष्ट" },
    { word: "Obsolete", definition: "no longer produced or used; out of date", example: "Typewriters became obsolete with the advent of computers.", nepali: "अप्रचलित" },
    { word: "Oppressive", definition: "unjustly inflicting hardship and constraint", example: "The oppressive regime was finally overthrown.", nepali: "दबाब" },
    { word: "Pervasive", definition: "spreading widely throughout an area or group of people", example: "The smell of flowers was pervasive in the garden.", nepali: "व्यापक" },
    { word: "Prevalence", definition: "the fact or condition of being prevalent; commonness", example: "The prevalence of smartphones has changed the way we communicate.", nepali: "व्याप्ति" },
    { word: "Prominent", definition: "important; famous", example: "The most prominent feature of the building is its large tower.", nepali: "प्रमुख" },
    { word: "Provoke", definition: "to stimulate or give rise to a reaction, typically unwelcome", example: "His rude comments provoked anger from the crowd.", nepali: "उत्साह गर्नु" },
    { word: "Reciprocate", definition: "to respond to (a gesture or action) by making a corresponding one", example: "He reciprocated her kindness with a gift.", nepali: "फिर्ता दिनु" },
    { word: "Reconcile", definition: "to restore friendly relations between", example: "They finally reconciled after years of conflict.", nepali: "सम्झौतामा आउनु" },
    { word: "Refute", definition: "to prove (a statement or theory) wrong or false", example: "The scientist refuted the claims with evidence.", nepali: "खण्डन गर्नु" },
    { word: "Renounce", definition: "to formally declare one's abandonment of a claim or right", example: "He renounced his title to live a simple life.", nepali: "त्याग गर्नु" },
    { word: "Repression", definition: "the restraint, prevention, or inhibition of a feeling", example: "His repression of emotions led to frustration.", nepali: "दबाइ" },
    { word: "Resilient", definition: "able to withstand or recover quickly from difficult conditions", example: "Children are often very resilient.", nepali: "लचिलो" },
    { word: "Substantiate", definition: "to provide evidence to support or prove the truth of", example: "The lawyer was able to substantiate her claims.", nepali: "पुष्टि गर्नु" },
    { word: "Tangible", definition: "perceptible by touch; clear and definite", example: "The benefits of the project were tangible and immediate.", nepali: "स्पष्ट" },
    { word: "Transient", definition: "lasting only for a short time", example: "The transient nature of life makes it precious.", nepali: "क्षणिक" },
    { word: "Undermine", definition: "to damage or weaken (someone or something), especially gradually", example: "The scandal could undermine his reputation.", nepali: "कमजोर गर्नु" },
    { word: "Validate", definition: "to check or prove the validity or accuracy of something", example: "The test results will validate her theory.", nepali: "मान्यता दिनु" },
    { word: "Verisimilitude", definition: "the appearance of being true or real", example: "The movie's verisimilitude made it feel like real life.", nepali: "वास्तविकता" },
    { word: "Viable", definition: "capable of working successfully", example: "They developed a viable plan for the project.", nepali: "सक्षम" },
];

let currentCard = 0;
let isFlippedMode = false; // Track if flipped mode is active
const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flipMe');

function updateCard() {
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
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
