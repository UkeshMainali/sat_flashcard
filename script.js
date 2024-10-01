const flashcards = [
    { word: "Adhere", definition: "to believe in and follow the practices of", example: "He adhered to the rules strictly." },
    { word: "Advocate", definition: "to publicly recommend or support", example: "She advocates for animal rights." },
    { word: "Allude", definition: "to suggest or call attention to indirectly; to hint at", example: "The teacher alluded to the test without saying it directly." },
    { word: "Ambivalence", definition: "the state of having mixed feelings or contradictory ideas", example: "She felt ambivalence about her new job offer." },
    { word: "Analogous", definition: "comparable in certain respects", example: "The human brain is analogous to a computer." },
    { word: "Anecdote", definition: "a short amusing or interesting story about a real incident", example: "He told a funny anecdote about his childhood." },
    { word: "Apprehensive", definition: "anxious or fearful that something bad or unpleasant will happen", example: "She was apprehensive about the upcoming exam." },
    { word: "Arbitrary", definition: "based on random choice or personal whim", example: "The decision seemed arbitrary and unfair." },
    { word: "Assert", definition: "to state a fact or belief confidently and forcefully", example: "He asserted his innocence in the matter." },
    { word: "Bias", definition: "prejudice in favor of or against one thing or group", example: "The judge was accused of having a bias against young people." },
    { word: "Brevity", definition: "concise and exact use of words in writing or speech", example: "The brevity of his speech was appreciated by the audience." },
    { word: "Buttress", definition: "to increase the strength of or justification for; reinforce", example: "The evidence buttressed her argument." },
    { word: "Concede", definition: "to admit that something is true after first denying it", example: "He conceded that he had been wrong." },
    { word: "Consensus", definition: "a general agreement", example: "The group reached a consensus on the project plan." },
    { word: "Corroborate", definition: "to confirm or give support to (a statement or theory)", example: "The witness corroborated the suspect's alibi." },
    { word: "Decisive", definition: "settling an issue; producing a definite result", example: "The decisive victory gave them the championship title." },
    { word: "Deference", definition: "humble submission and respect", example: "He showed deference to his elders." },
    { word: "Degrade", definition: "to treat or regard with contempt or disrespect", example: "The environment was degraded by pollution." },
    { word: "Denounce", definition: "to publicly declare to be wrong or evil", example: "The leader denounced the use of violence." },
    { word: "Dispute", definition: "a disagreement, argument, or debate", example: "They had a dispute over the best way to solve the problem." },
    { word: "Divergent", definition: "tending to be different or develop in different directions", example: "Their views on the issue were divergent." },
    { word: "Dormant", definition: "having normal functions suspended or slowed down", example: "The volcano has been dormant for decades." },
    { word: "Eloquent", definition: "fluent or persuasive in speaking or writing", example: "She gave an eloquent speech that moved the audience." },
    { word: "Evoke", definition: "to bring or recall to the conscious mind", example: "The smell of cookies evoked memories of his childhood." },
    { word: "Exert", definition: "to make a physical or mental effort", example: "He exerted himself to finish the project on time." },
    { word: "Explicit", definition: "stated clearly and in detail, leaving no room for confusion", example: "The instructions were explicit and easy to follow." },
    { word: "Imminent", definition: "about to happen", example: "A storm was imminent as the clouds gathered." },
    { word: "Impede", definition: "to delay or prevent by obstructing", example: "The traffic jam impeded their progress." },
    { word: "Implicit", definition: "implied but not plainly expressed", example: "There was an implicit understanding between them." },
    { word: "Impose", definition: "to take advantage of someone by demanding attention", example: "She didn't want to impose on her friend's generosity." },
    { word: "Indifference", definition: "lack of interest, concern, or sympathy", example: "He showed indifference to the outcome of the game." },
    { word: "Inevitable", definition: "certain to happen; unavoidable", example: "Failure is inevitable if you don’t work hard." },
    { word: "Invoke", definition: "to cite or appeal to as an authority for an action", example: "She invoked her right to remain silent." },
    { word: "Ironic", definition: "happening in the opposite way from what is expected", example: "It was ironic that the fire station burned down." },
    { word: "Novel", definition: "new or unusual in an interesting way", example: "He came up with a novel solution to the problem." },
    { word: "Obscure", definition: "not discovered or known about; uncertain", example: "The meaning of the text was obscure." },
    { word: "Obsolete", definition: "no longer produced or used; out of date", example: "Typewriters became obsolete with the advent of computers." },
    { word: "Oppressive", definition: "unjustly inflicting hardship and constraint", example: "The oppressive regime was finally overthrown." },
    { word: "Pervasive", definition: "spreading widely throughout an area or group of people", example: "The smell of flowers was pervasive in the garden." },
    { word: "Prevalence", definition: "the fact or condition of being prevalent; commonness", example: "The prevalence of smartphones has changed the way we communicate." },
    { word: "Prominent", definition: "important; famous", example: "The most prominent feature of the building is its large tower." },
    { word: "Provoke", definition: "to stimulate or give rise to a reaction, typically unwelcome", example: "His rude comments provoked anger from the crowd." },
    { word: "Reciprocate", definition: "to respond to (a gesture or action) by making a corresponding one", example: "He reciprocated her kindness with a gift." },
    { word: "Reconcile", definition: "to restore friendly relations between", example: "They finally reconciled after years of conflict." },
    { word: "Refute", definition: "to prove (a statement or theory) wrong or false", example: "The scientist refuted the claims with evidence." },
    { word: "Renounce", definition: "to formally declare one's abandonment of a claim or right", example: "He renounced his title to live a simple life." },
    { word: "Repression", definition: "the restraint, prevention, or inhibition of a feeling", example: "His repression of emotions led to frustration." },
    { word: "Retain", definition: "to continue to have something; keep possession of", example: "She retained control of the company." },
    { word: "Skeptical", definition: "not easily convinced; having doubts or reservations", example: "He was skeptical about the new policy." },
    { word: "Speculate", definition: "to form a theory or conjecture about a subject without firm evidence", example: "They speculated about the cause of the accident." },
    { word: "Substantiate", definition: "to provide evidence to support or prove the truth of", example: "She substantiated her claim with proof." },
    { word: "Subtle", definition: "delicate or precise as to be difficult to analyze or describe", example: "There was a subtle difference in tone between the two paintings." },
    { word: "Supplement", definition: "something that completes or enhances something else when added", example: "He takes vitamin supplements to stay healthy." },
    { word: "Tenuous", definition: "very weak or slight", example: "The connection between the two events was tenuous." },
    { word: "Undermine", definition: "to damage or weaken (someone or something), especially gradually", example: "His actions undermined her authority." },
    { word: "Underscore", definition: "to emphasize", example: "The report underscored the importance of safety measures." },
    { word: "Unobtrusive", definition: "not conspicuous or attracting attention", example: "The waiter was polite and unobtrusive." },
    { word: "Validate", definition: "to check or prove the validity or accuracy of something", example: "He validated the data before making conclusions." },
    { word: "Verisimilitude", definition: "the appearance of being true or real", example: "The movie's verisimilitude made it feel like real life." },
    { word: "Viable", definition: "capable of working successfully", example: "They developed a viable plan for the project." }
];



let currentCard = 0;

function flipCard() {
    document.querySelector('.flashcard').classList.toggle('flipped');
}

function updateCard() {
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
    const exampleElement = document.getElementById('examples'); // Add example element reference
    const sn = document.getElementById('sn');
    
    // Update the content with the current card information
    wordElement.textContent = flashcards[currentCard].word;
    definitionElement.textContent = flashcards[currentCard].definition;
    exampleElement.textContent = flashcards[currentCard].example; // Update example
    document.querySelector('.flashcard').classList.remove('flipped');
    sn.innerText = currentCard + 1;
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

// Initialize first card
updateCard();
