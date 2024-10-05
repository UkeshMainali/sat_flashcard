const flashcards = [
    { word: "Abstract", definition: "an idea that exists only in the mind and is not tangible", example: "Happiness is an abstract concept that everyone experiences differently." },
    { word: "Affect", definition: "to produce a change or influence something", example: "The harsh weather affected their travel plans, causing delays." },
    { word: "Allege", definition: "to claim or assert something without having clear evidence", example: "The lawyer alleged that the company had violated environmental laws, but no proof was presented." },
    { word: "Ambiguous", definition: "having more than one possible meaning or interpretation", example: "Her statement was ambiguous, making it difficult to understand her true intentions." },
    { word: "Analogy", definition: "a comparison between two things to explain an idea", example: "The teacher used an analogy comparing the brain to a computer to help the students understand how it processes information." },
    { word: "Apparent", definition: "clearly visible or understood; obvious", example: "It was apparent from his expression that he was not pleased with the decision." },
    { word: "Arbitrary", definition: "based on random choice or personal whim, rather than any reason or system", example: "The arbitrary decision to cancel the event upset many people who had made plans to attend." },
    { word: "Assert", definition: "to state or express firmly and confidently", example: "During the meeting, she asserted her opinion on the project, stating that changes were necessary." },
    { word: "Assess", definition: "to evaluate or estimate the nature, ability, or quality of something", example: "The teacher will assess the students’ progress at the end of the semester." },
    { word: "Assume", definition: "to take something as true without proof or evidence", example: "He assumed that the store would be open, but when he arrived, it was closed." },
    { word: "Bias", definition: "an unfair preference for or against something", example: "The report was biased because it only presented one side of the issue." },
    { word: "Bizarre", definition: "very strange or unusual, especially in a surprising or shocking way", example: "The movie had a bizarre plot that left the audience confused." },
    { word: "Brisk", definition: "quick, energetic, and active", example: "They took a brisk walk to the park to enjoy the fresh morning air." },
    { word: "Candid", definition: "truthful and straightforward; frank", example: "She gave a candid review of the new book, pointing out both its strengths and weaknesses." },
    { word: "Capacity", definition: "the maximum amount that something can contain or produce", example: "The stadium has a seating capacity of 60,000 people for concerts." },
    { word: "Chronicle", definition: "a factual written account of important or historical events in the order of their occurrence", example: "The book chronicles the life and achievements of the famous scientist." },
    { word: "Clarity", definition: "the quality of being clear and easy to understand", example: "The clarity of his explanation helped everyone understand the complex topic." },
    { word: "Coherent", definition: "logical and consistent; making sense", example: "Her essay was coherent and well-structured, making it easy to follow her argument." },
    { word: "Coincide", definition: "to happen at the same time or to be in agreement", example: "The concert coincided with their vacation, so they were able to attend." },
    { word: "Commence", definition: "to begin or start", example: "The meeting will commence at 9 AM, so please be on time." },
    { word: "Comprehend", definition: "to understand fully", example: "She couldn’t comprehend why her friend was upset without talking to her." },
    { word: "Conceive", definition: "to form or devise an idea or plan", example: "They conceived a brilliant idea for improving the company’s customer service." },
    { word: "Confer", definition: "to discuss or exchange ideas", example: "The committee will confer with experts before making a decision on the new policy." },
    { word: "Conform", definition: "to follow rules, standards, or laws", example: "Employees are expected to conform to the company’s dress code." },
    { word: "Consequence", definition: "a result or effect of an action or decision", example: "One consequence of not studying for the exam was that he did not pass." },
    { word: "Constrain", definition: "to limit or restrict", example: "The tight deadline constrained their ability to explore creative solutions." },
    { word: "Contend", definition: "to argue or compete for something", example: "The athletes will contend for the championship title this weekend." },
    { word: "Controversial", definition: "causing disagreement or public debate", example: "The decision to raise taxes was highly controversial, with many people protesting." },
    { word: "Convene", definition: "to come together for a meeting or activity", example: "The board will convene next week to discuss the company’s financial strategy." },
    { word: "Convey", definition: "to communicate or express something", example: "Her facial expression conveyed her surprise and confusion." },
    { word: "Credible", definition: "believable and trustworthy", example: "The witness provided a credible account of the incident to the police." },
    { word: "Critique", definition: "a detailed analysis or assessment of something", example: "He wrote a thorough critique of the new movie, highlighting both its strengths and flaws." },
    { word: "Cynical", definition: "believing that people are motivated by self-interest; distrustful of human sincerity", example: "He had a cynical view of politics, thinking that all politicians were corrupt." },
    { word: "Debate", definition: "a formal discussion on a particular topic where opposing arguments are presented", example: "The candidates engaged in a lively debate about healthcare policies during the election." },
    { word: "Deficit", definition: "a shortfall or lack of something, especially money", example: "The government is working to reduce the budget deficit this year." },
    { word: "Defer", definition: "to postpone or delay", example: "The committee decided to defer the decision until more information was available." },
    { word: "Derive", definition: "to obtain something from a specified source", example: "Many English words are derived from Latin." },
    { word: "Deter", definition: "to discourage or prevent from taking action", example: "The high price of the product may deter some customers from buying it." },
    { word: "Discreet", definition: "careful and intentional in one’s actions to avoid attention", example: "She was discreet when discussing sensitive information during the meeting." },
    { word: "Discrepancy", definition: "a difference or inconsistency between two or more things", example: "There was a discrepancy between the financial reports, which raised concerns." },
    { word: "Diverse", definition: "showing a variety or having many different forms", example: "The city has a diverse population, with people from many different cultural backgrounds." },
    { word: "Distort", definition: "to twist or change the shape or meaning of something", example: "The photograph was distorted, making the person in it look unusually tall." },
    { word: "Elicit", definition: "to draw out a response or reaction", example: "The teacher’s question elicited thoughtful responses from the students." },
    { word: "Elusive", definition: "difficult to find, catch, or achieve", example: "The solution to the problem proved to be elusive despite their best efforts." },
    { word: "Emphasize", definition: "to give special importance or prominence to something", example: "He emphasized the importance of arriving on time to avoid delays." },
    { word: "Empathy", definition: "the ability to understand and share the feelings of others", example: "She showed great empathy when comforting her friend after a loss." },
    { word: "Entail", definition: "to involve or require as a necessary part", example: "The job entails long hours and requires a lot of travel." },
    { word: "Erode", definition: "to gradually wear away or be destroyed", example: "The coastline is eroding due to the constant battering of the waves." },
    { word: "Evade", definition: "to avoid or escape from something, usually in a skillful or clever way", example: "The criminal evaded capture by hiding in a remote area." },
    { word: "Exaggerate", definition: "to make something seem larger, more important, or worse than it is", example: "She tends to exaggerate the difficulties she faces at work." },
    { word: "Exempt", definition: "to be free from an obligation or requirement", example: "Students with good attendance records were exempt from the final exam." },
    { word: "Explicit", definition: "stated clearly and in detail, leaving no room for confusion or doubt", example: "The contract contains explicit instructions about the responsibilities of each party." },
    { word: "Exploit", definition: "to take unfair advantage of someone or something for personal gain", example: "The company was criticized for exploiting its workers by not paying fair wages." },
    { word: "Feasible", definition: "possible and practical to do easily", example: "The plan to build a new park is feasible if the community supports it." },
    { word: "Fluctuate", definition: "to rise and fall irregularly in number or amount", example: "The stock market tends to fluctuate based on economic conditions." },
    { word: "Grasp", definition: "to understand something fully", example: "It took her some time to grasp the complexity of the problem." },
    { word: "Hostile", definition: "unfriendly or antagonistic", example: "The atmosphere at the meeting became hostile when disagreements arose." },
    { word: "Hypothesis", definition: "a proposed explanation made on the basis of limited evidence as a starting point for further investigation", example: "The scientists developed a hypothesis to explain the strange behavior of the particles." },
    { word: "Illustrate", definition: "to explain or make something clear by using examples, charts, or pictures", example: "The teacher illustrated the concept with diagrams on the whiteboard." },
    { word: "Imminent", definition: "about to happen", example: "The dark clouds indicated that a storm was imminent." },
    { word: "Imply", definition: "to suggest something without directly stating it", example: "Her tone implied that she wasn’t happy with the decision." },
    { word: "Impose", definition: "to force something unwelcome or unfamiliar to be accepted", example: "The new rules were imposed without considering the opinions of the employees." },
    { word: "Incentive", definition: "a thing that motivates or encourages someone to do something", example: "The company offers bonuses as an incentive to increase productivity." },
    { word: "Indicate", definition: "to point out or show", example: "The map indicates the location of the nearest gas station." },
    { word: "Inevitable", definition: "certain to happen; unavoidable", example: "Given the current economic situation, job cuts seem inevitable." },
    { word: "Infer", definition: "to deduce or conclude information from evidence and reasoning", example: "From his nervous behavior, we inferred that he was hiding something." },
    { word: "Initiate", definition: "to cause something to begin", example: "The company initiated a new project aimed at improving customer satisfaction." },
    { word: "Innovative", definition: "featuring new methods or ideas", example: "The company’s innovative approach to design has set it apart from its competitors." },
    { word: "Interpret", definition: "to explain the meaning of information or actions", example: "It’s important to interpret the data correctly before making any conclusions." },
    { word: "Intricate", definition: "very detailed and complicated", example: "The artist’s painting is full of intricate patterns and details." },
    { word: "Intuition", definition: "the ability to understand something immediately, without the need for reasoning", example: "She had a strong intuition that something was wrong, even though no one else noticed." },
    { word: "Justify", definition: "to show or prove to be right or reasonable", example: "He justified his decision by explaining the benefits it would bring." },
    { word: "Lack", definition: "to be without or deficient in something", example: "The team lacked the necessary resources to complete the project on time." },
    { word: "Legitimate", definition: "conforming to the law or to rules; justifiable", example: "The company’s actions were completely legitimate, following all necessary regulations." },
    { word: "Lethargic", definition: "lacking energy or enthusiasm", example: "After the long flight, she felt lethargic and needed a nap." },
    { word: "Liable", definition: "legally responsible for something", example: "The company was held liable for the damages caused by its faulty products." },
    { word: "Linger", definition: "to stay in a place longer than necessary", example: "They lingered at the café, enjoying the conversation well into the evening." },
    { word: "Maintain", definition: "to keep something in good condition or to continue something", example: "The company has worked hard to maintain its reputation for quality." },
    { word: "Mediocre", definition: "of only average quality; not very good", example: "The performance was mediocre, not as impressive as we expected." },
    { word: "Modify", definition: "to make partial changes to something", example: "The design was modified to improve functionality." },
    { word: "Notion", definition: "an idea or belief about something", example: "She had a notion to start her own business after seeing a gap in the market." },
    { word: "Obsolete", definition: "no longer in use; outdated", example: "Typewriters are now considered obsolete, replaced by computers and printers." },
    { word: "Omit", definition: "to leave out or exclude", example: "He omitted key details from his report, making it incomplete." },
    { word: "Optimistic", definition: "hopeful and confident about the future", example: "Despite the challenges, she remained optimistic about the company’s future growth." },
    { word: "Paradox", definition: "a statement that seems contradictory but may still be true", example: "It’s a paradox that he loves peace yet works in the defense industry." },
    { word: "Perceive", definition: "to become aware or conscious of something", example: "She perceived a subtle change in his tone during the conversation." },
    { word: "Pertinent", definition: "relevant or applicable to a particular matter", example: "His comments were not pertinent to the issue being discussed." },
    { word: "Plausible", definition: "seeming reasonable or probable", example: "Her explanation for being late sounded plausible, considering the heavy traffic." },
    { word: "Precede", definition: "to come before something in time", example: "The opening speech will precede the award ceremony." },
    { word: "Proficient", definition: "skilled and competent at doing something", example: "She’s proficient in both spoken and written Spanish." },
    { word: "Prominent", definition: "important or well-known", example: "He’s a prominent figure in the tech industry, often seen at major conferences." },
    { word: "Prospect", definition: "the possibility or likelihood of some future event occurring", example: "The prospect of a promotion motivated him to work harder." },
    { word: "Rational", definition: "based on reason or logic", example: "His decision to invest in the new business was based on rational thinking and market research." },
    { word: "Reconcile", definition: "to restore friendly relations between people", example: "They reconciled after a long argument, finally coming to an understanding." },
    { word: "Redundant", definition: "not needed or unnecessary", example: "The article was filled with redundant phrases that could have been omitted." },
    { word: "Refute", definition: "to prove something to be wrong or false", example: "She refuted the claims made against her with solid evidence." },
    { word: "Reinforce", definition: "to strengthen or support something", example: "The bridge was reinforced to ensure it could hold the weight of heavy trucks." },
    { word: "Reluctant", definition: "unwilling and hesitant", example: "He was reluctant to accept the offer, unsure of its long-term benefits." },
    { word: "Resilient", definition: "able to recover quickly from difficulties", example: "She has shown remarkable resilience in bouncing back after the financial crisis." },
    { word: "Retrieve", definition: "to get or bring something back", example: "He went back to the office to retrieve the documents he had forgotten." },
    { word: "Scarce", definition: "in short supply or hard to find", example: "Fresh water is scarce in many parts of the world due to pollution and overuse." },
    { word: "Speculate", definition: "to form a theory without firm evidence", example: "They speculated about the causes of the accident but had no concrete proof." },
    { word: "Subsequent", definition: "coming after something else in time or order", example: "Subsequent events led to a change in the company’s strategy." },
    { word: "Subtle", definition: "delicate or difficult to detect", example: "There was a subtle change in her attitude that only a few people noticed." },
    { word: "Sustain", definition: "to maintain or keep something going", example: "The company was able to sustain its operations through the tough economic period." },
    { word: "Tedious", definition: "too long, slow, or dull; tiresome or monotonous", example: "Filling out the paperwork was a tedious process, taking hours to complete." },
    { word: "Tangible", definition: "perceptible by touch; clear and definite", example: "There was no tangible evidence to support the theory." },
    { word: "Terminate", definition: "to bring something to an end", example: "The company decided to terminate the project due to budget constraints." },
    { word: "Thrive", definition: "to grow or develop well; to prosper", example: "The plants thrived in the sunny conditions, growing taller each day." },
    { word: "Timid", definition: "showing a lack of courage or confidence", example: "She was too timid to speak up during the meeting, even though she had good ideas." },
    { word: "Tolerate", definition: "to accept or endure someone or something unpleasant", example: "They had to tolerate the noise from the construction site for several weeks." },
    { word: "Transparent", definition: "allowing light to pass through so objects behind can be distinctly seen; clear and honest", example: "The company was praised for being transparent about its financial situation." },
    { word: "Unprecedented", definition: "never done or known before", example: "The scale of the disaster was unprecedented in the country’s history." },
    { word: "Urgent", definition: "requiring immediate action or attention", example: "The doctor said the surgery was urgent and needed to be performed right away." },
    { word: "Validate", definition: "to confirm the truth or value of something", example: "The study was conducted to validate the results of the previous research." },
    { word: "Vary", definition: "to differ in size, amount, degree, or nature from something else of the same general class", example: "The temperature tends to vary greatly between day and night in the desert." },
    { word: "Vulnerable", definition: "open to attack, harm, or damage", example: "Without proper shelter, the animals were vulnerable to predators." },
    { word: "Wary", definition: "feeling or showing caution about possible dangers or problems", example: "He was wary of investing in the stock market after losing money in the past." },
    { word: "Wholesome", definition: "conducive to or suggestive of good health and physical well-being", example: "The restaurant serves wholesome meals made with fresh ingredients." },
    { word: "Widespread", definition: "found or distributed over a large area or number of people", example: "The problem of unemployment is widespread in the country." },
    { word: "Withdraw", definition: "to remove or take away something", example: "He decided to withdraw from the competition due to an injury." },
    { word: "Zeal", definition: "great energy or enthusiasm for a cause or objective", example: "She approached her new job with great zeal, eager to make an impact." },
    { word: "Accumulate", definition: "to gather or collect something over time", example: "He managed to accumulate a large collection of rare coins." },
    { word: "Acknowledge", definition: "to accept or admit the existence or truth of something", example: "She acknowledged the mistake and apologized for the confusion it caused." },
    { word: "Acquire", definition: "to buy or obtain something", example: "The company is looking to acquire smaller businesses to expand its reach." },
    { word: "Adhere", definition: "to stick to a surface or to follow a set of rules", example: "The paint adhered well to the walls, creating a smooth finish." },
    { word: "Ambiguous", definition: "open to more than one interpretation; unclear", example: "Her response was ambiguous, leaving everyone confused about her true intentions." },
    { word: "Ample", definition: "enough or more than enough", example: "There was ample time to prepare for the meeting, so everyone felt ready." },
    { word: "Anticipate", definition: "to expect or predict", example: "The team anticipated the challenges and prepared solutions in advance." },
    { word: "Apprehensive", definition: "anxious or fearful that something bad will happen", example: "She was apprehensive about traveling alone in a foreign country." },
    { word: "Arbitrary", definition: "based on random choice or personal whim, rather than any reason or system", example: "The decision seemed arbitrary, as there was no clear explanation behind it." },
    { word: "Aspire", definition: "to direct one’s hopes or ambitions toward achieving something", example: "She aspired to become a successful writer, working on her novel every day." },
    { word: "Assess", definition: "to evaluate or estimate the nature, ability, or quality of something", example: "The teacher assessed the students' progress through regular tests." },
    { word: "Assume", definition: "to suppose something is true without proof", example: "He assumed she knew the details of the plan, but she was completely unaware." },
    { word: "Astound", definition: "to shock or greatly surprise", example: "The magician's performance astounded the audience, leaving them speechless." },
    { word: "Authentic", definition: "genuine and real", example: "They visited an authentic Italian restaurant where the food was made by a chef from Rome." },
    { word: "Bias", definition: "prejudice in favor of or against one thing, person, or group", example: "The news report was criticized for showing bias towards one political party." },
    { word: "Breach", definition: "to break or fail to observe a law, agreement, or code of conduct", example: "The company was fined for breaching environmental regulations." },
    { word: "Candid", definition: "truthful and straightforward", example: "She gave a candid interview, sharing her honest thoughts about the project." },
    { word: "Capable", definition: "having the ability to do something", example: "He is a capable leader, able to manage the team effectively." },
    { word: "Cease", definition: "to bring or come to an end", example: "The company announced it would cease operations by the end of the year." },
    { word: "Chronicle", definition: "to record a series of events in a factual and detailed way", example: "The book chronicles the events that led to the revolution." },
    { word: "Clarify", definition: "to make a statement or situation less confused and more understandable", example: "The teacher clarified the assignment instructions to ensure everyone understood." },
    { word: "Coherent", definition: "logical and consistent", example: "Her argument was coherent and well-structured, making it easy to follow." },
    { word: "Coincide", definition: "to occur at the same time or place", example: "The conference coincides with my vacation, so I won’t be able to attend." },
    { word: "Compel", definition: "to force someone to do something", example: "The heavy rain compelled them to cancel the outdoor event." },
    { word: "Comprehensive", definition: "complete and including everything that is necessary", example: "They conducted a comprehensive review of the company’s safety procedures." },
    { word: "Conceal", definition: "to keep something hidden", example: "She concealed the surprise gift behind her back." },
    { word: "Concur", definition: "to agree with someone or something", example: "I concur with your decision to postpone the meeting." },
    { word: "Constitute", definition: "to make up or form something", example: "The documents constitute the entire agreement between the parties." },
    { word: "Contradict", definition: "to say or do the opposite of something", example: "His actions contradicted his earlier statements, making people doubt his honesty." },
    { word: "Crucial", definition: "extremely important or necessary", example: "It’s crucial to have a backup plan in case the first one fails." },
    { word: "Cumulative", definition: "increasing or growing by accumulation", example: "The cumulative effect of small improvements can lead to big changes over time." }
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
