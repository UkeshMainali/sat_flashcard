const flashcards = [
    {
        alternatives: ["Excellent", "Superb", "Outstanding"],
        common: "Good",
        meaning: "Of very high quality",
        example: "Her performance was excellent; she truly stood out from the rest."
    },
    {
        alternatives: ["Incorporate", "Integrate"],
        common: "Include",
        meaning: "To take in or contain something as part of a whole",
        example: "We need to incorporate new strategies into our project."
    },
    {
        alternatives: ["Although", "Despite", "However"],
        common: "But",
        meaning: "Used to introduce a contrast or opposing idea",
        example: "She wanted to join; however, she had prior commitments."
    },
    {
        alternatives: ["Commence", "Initiate", "Embark"],
        common: "Start",
        meaning: "To begin or start something",
        example: "The ceremony will commence at noon."
    },
    {
        alternatives: ["Cease", "Terminate", "Conclude"],
        common: "Stop",
        meaning: "To bring or come to an end",
        example: "The meeting was terminated due to a lack of agreement."
    },
    {
        alternatives: ["Assist", "Aid", "Support"],
        common: "Help",
        meaning: "To give assistance or support",
        example: "He assisted the elderly woman with her groceries."
    },
    {
        alternatives: ["Diminish", "Reduce", "Alleviate"],
        common: "Lessen",
        meaning: "To make something smaller or weaker",
        example: "The medication helped to alleviate her pain."
    },
    {
        alternatives: ["Sufficient", "Adequate", "Ample"],
        common: "Enough",
        meaning: "As much as is needed",
        example: "The evidence provided was sufficient to support the claim."
    },
    {
        alternatives: ["Complicate", "Exacerbate", "Worsen"],
        common: "Make worse",
        meaning: "To make something more difficult or worse",
        example: "The situation was exacerbated by the severe weather."
    },
    {
        alternatives: ["Comprehend", "Grasp", "Understand"],
        common: "Get",
        meaning: "To understand something",
        example: "She failed to comprehend the full impact of her actions."
    },
    {
        alternatives: ["Construct", "Build", "Erect"],
        common: "Make",
        meaning: "To form or create by assembling parts",
        example: "They constructed a bridge over the river."
    },
    {
        alternatives: ["Disclose", "Reveal", "Unveil"],
        common: "Show",
        meaning: "To make something known",
        example: "He disclosed his plans for the future at the meeting."
    },
    {
        alternatives: ["Acquire", "Obtain", "Gain"],
        common: "Get",
        meaning: "To obtain or receive something",
        example: "She acquired new skills during the course."
    },
    {
        alternatives: ["Perceive", "Discern", "Recognize"],
        common: "See",
        meaning: "To become aware of something",
        example: "He quickly perceived the underlying issue."
    },
    {
        alternatives: ["Aid", "Support", "Facilitate"],
        common: "Help",
        meaning: "To provide assistance",
        example: "The new software facilitated faster data processing."
    },
    {
        alternatives: ["Critique", "Analyze", "Evaluate"],
        common: "Examine",
        meaning: "To study or analyze something carefully",
        example: "The project was thoroughly critiqued by the committee."
    },
    {
        alternatives: ["Demonstrate", "Exemplify", "Illustrate"],
        common: "Show",
        meaning: "To clearly show something through evidence or examples",
        example: "He demonstrated his skills in the final interview."
    },
    {
        alternatives: ["Comprehensive", "Thorough", "Extensive"],
        common: "Complete",
        meaning: "Covering all or nearly all elements or aspects",
        example: "She conducted a comprehensive review of the materials."
    },
    {
        alternatives: ["Anticipate", "Foresee", "Expect"],
        common: "Think",
        meaning: "To expect or predict something",
        example: "We anticipate that the new policy will bring positive changes."
    },
    {
        alternatives: ["Presume", "Assume", "Infer"],
        common: "Guess",
        meaning: "To believe something is true based on evidence",
        example: "We can infer from his silence that he agrees."
    },
    {
        alternatives: ["Modify", "Alter", "Adjust"],
        common: "Change",
        meaning: "To make minor changes to something",
        example: "We had to modify the design based on client feedback."
    },
    {
        alternatives: ["Expedite", "Accelerate", "Hasten"],
        common: "Speed up",
        meaning: "To make an action or process happen sooner or faster",
        example: "The new process will expedite the delivery of services."
    },
    {
        alternatives: ["Endure", "Persist", "Sustain"],
        common: "Keep going",
        meaning: "To suffer something difficult or to continue over time",
        example: "He endured years of hard work to achieve his goal."
    },
    {
        alternatives: ["Inhibit", "Restrain", "Prevent"],
        common: "Stop",
        meaning: "To hold back or prevent an action",
        example: "His fear of public speaking inhibited his career advancement."
    },
    {
        alternatives: ["Imply", "Suggest", "Indicate"],
        common: "Hint",
        meaning: "To suggest something without directly saying it",
        example: "Her tone implied that she was not happy with the decision."
    },
    {
        alternatives: ["Ponder", "Contemplate", "Reflect"],
        common: "Think about",
        meaning: "To think deeply or carefully about something",
        example: "She spent hours contemplating the consequences of her choices."
    },
    {
        alternatives: ["Neglect", "Disregard", "Ignore"],
        common: "Forget",
        meaning: "To fail to care for or give attention to something",
        example: "They neglected their duties, which led to problems later on."
    },
    {
        alternatives: ["Examine", "Inspect", "Analyze"],
        common: "Look at",
        meaning: "To inspect or study something carefully",
        example: "The detective examined the evidence closely."
    },
    {
        alternatives: ["Assure", "Guarantee", "Affirm"],
        common: "Promise",
        meaning: "To tell someone something positively",
        example: "He assured them that the project would be completed on time."
    },
    {
        alternatives: ["Compile", "Gather", "Accumulate"],
        common: "Collect",
        meaning: "To collect information or things",
        example: "The researcher compiled data from various sources."
    },
    {
        alternatives: ["Convey", "Express", "Communicate"],
        common: "Tell",
        meaning: "To communicate or make known",
        example: "He conveyed his thoughts through his art."
    },
    {
        alternatives: ["Elevate", "Promote", "Advance"],
        common: "Raise",
        meaning: "To raise or lift something up",
        example: "The company elevated her to a senior position."
    },
    {
        alternatives: ["Facilitate", "Enable", "Simplify"],
        common: "Help",
        meaning: "To make a process easier or assist in progress",
        example: "The new software will facilitate better communication among team members."
    },
    {
        alternatives: ["Obsolete", "Outdated", "Archaic"],
        common: "Old",
        meaning: "No longer in use or outdated",
        example: "Many believe that typewriters are now obsolete."
    },
    {
        alternatives: ["Substantial", "Considerable", "Significant"],
        common: "Large",
        meaning: "Of considerable importance, size, or worth",
        example: "There was a substantial increase in sales this quarter."
    },
    {
        alternatives: ["Concur", "Agree", "Assent"],
        common: "Agree",
        meaning: "To have the same opinion or agree",
        example: "I concur with your assessment of the situation."
    },
    {
        alternatives: ["Imminent", "Impending", "Approaching"],
        common: "About to happen",
        meaning: "About to occur",
        example: "The storm is imminent; we should take shelter."
    },
    {
        alternatives: ["Pertinent", "Relevant", "Applicable"],
        common: "Relevant",
        meaning: "Relevant or applicable to a particular matter",
        example: "Please provide any pertinent information related to the case."
    },
    {
        alternatives: ["Reluctant", "Hesitant", "Unwilling"],
        common: "Unwilling",
        meaning: "Not ready, willing, or able to do something",
        example: "She was reluctant to share her personal details."
    },
    {
        alternatives: ["Vast", "Immense", "Enormous"],
        common: "Very large",
        meaning: "Extremely large in size or amount",
        example: "The Sahara Desert is a vast expanse of sand."
    },
    {
        alternatives: ["Ambiguous", "Vague", "Unclear"],
        common: "Unclear",
        meaning: "Open to more than one interpretation; not clear",
        example: "His instructions were ambiguous, causing confusion among the team."
    },
    {
        alternatives: ["Candid", "Frank", "Honest"],
        common: "Honest",
        meaning: "Truthful and straightforward",
        example: "She gave a candid account of the events that transpired."
    },
    {
        alternatives: ["Eminent", "Notable", "Distinguished"],
        common: "Important",
        meaning: "Famous and respected within a particular sphere",
        example: "He is an eminent scientist in the field of genetics."
    },
    {
        alternatives: ["Feasible", "Viable", "Practicable"],
        common: "Possible",
        meaning: "Possible to do easily or conveniently",
        example: "The proposed plan is feasible within our current budget."
    },
    {
        alternatives: ["Gratify", "Satisfy", "Delight"],
        common: "Please",
        meaning: "To please or satisfy someone",
        example: "The gift was meant to gratify her long-standing wish."
    },
    {
        alternatives: ["Hostile", "Unfriendly", "Antagonistic"],
        common: "Unfriendly",
        meaning: "Unfriendly; antagonistic",
        example: "The hostile environment made it difficult to collaborate."
    },
    {
        alternatives: ["Impeccable", "Flawless", "Perfect"],
        common: "Perfect",
        meaning: "In accordance with the highest standards; flawless",
        example: "Her impeccable manners impressed everyone at the dinner."
    },
    {
        alternatives: ["Juxtapose", "Compare", "Contrast"],
        common: "Place side by side",
        meaning: "To place side by side for contrast",
        example: "The artist juxtaposed light and dark colors in the painting."
    },
    {
        alternatives: ["Keen", "Eager", "Enthusiastic"],
        common: "Eager",
        meaning: "Having or showing eagerness or enthusiasm",
        example: "She was keen to start her new job."
    },
    {
        alternatives: ["Lucid", "Clear", "Eloquent"],
        common: "Clear",
        meaning: "Expressed clearly; easy to understand",
        example: "He gave a lucid explanation of the complex topic."
    },
    {
        alternatives: ["Meticulous", "Thorough", "Detail-oriented"],
        common: "Careful",
        meaning: "Showing great attention to detail; very careful and precise",
        example: "Her meticulous nature ensured that no errors were made."
    },
    {
        alternatives: ["Novel", "Innovative", "Original"],
        common: "New",
        meaning: "New and not resembling something formerly known",
        example: "The novel approach revolutionized the industry."
    },
    {
        alternatives: ["Omit", "Exclude", "Leave out"],
        common: "Leave out",
        meaning: "To leave out or exclude something",
        example: "They decided to omit unnecessary details from the report."
    },
    {
        alternatives: ["Plausible", "Believable", "Credible"],
        common: "Possible",
        meaning: "Seemingly reasonable or probable",
        example: "Her explanation seemed plausible to everyone."
    },
    {
        alternatives: ["Quaint", "Charming", "Picturesque"],
        common: "Attractive in an unusual way",
        meaning: "Attractively unusual or old-fashioned",
        example: "They lived in a quaint village by the sea."
    },
    {
        alternatives: ["Robust", "Strong", "Sturdy"],
        common: "Strong",
        meaning: "Strong and healthy; vigorous",
        example: "The new software is more robust and reliable."
    },
    {
        alternatives: ["Scrutinize", "Examine", "Inspect"],
        common: "Examine",
        meaning: "To examine or inspect closely and thoroughly",
        example: "The auditor scrutinized the financial records."
    },
    {
        alternatives: ["Tedious", "Boring", "Monotonous"],
        common: "Boring",
        meaning: "Too long, slow, or dull; tiresome",
        example: "The lecture was tedious and hard to follow."
    },
    {
        alternatives: ["Utilize", "Use", "Employ"],
        common: "Use",
        meaning: "To make practical and effective use of something",
        example: "We can utilize this space for the new exhibition."
    },
    {
        alternatives: ["Vigilant", "Watchful", "Alert"],
        common: "Watchful",
        meaning: "Keeping careful watch for possible danger or difficulties",
        example: "The security guard remained vigilant throughout the night."
    },
    {
        alternatives: ["Whimsical", "Playful", "Fanciful"],
        common: "Playful",
        meaning: "Playfully quaint or fanciful, especially in an appealing way",
        example: "The garden had a whimsical design with unexpected twists."
    },
    {
        alternatives: ["Yearn", "Long", "Desire"],
        common: "Want",
        meaning: "To have an intense feeling of longing for something",
        example: "She yearned for a peaceful life away from the city."
    },
    {
        alternatives: ["Zealous", "Enthusiastic", "Fervent"],
        common: "Enthusiastic",
        meaning: "Having or showing zeal; passionate",
        example: "He was a zealous supporter of the new policy."
    },
    {
        alternatives: ["Abundant", "Plentiful", "Ample"],
        common: "Plenty",
        meaning: "Existing or available in large quantities",
        example: "The region is abundant in natural resources."
    },
    {
        alternatives: ["Benevolent", "Kind", "Generous"],
        common: "Kind",
        meaning: "Well-meaning and kindly",
        example: "The benevolent donor contributed significantly to the charity."
    },
    {
        alternatives: ["Cohesive", "Unified", "Consistent"],
        common: "United",
        meaning: "Forming a united whole",
        example: "The team worked in a cohesive manner to achieve their goals."
    },
    {
        alternatives: ["Debilitate", "Weaken", "Enfeeble"],
        common: "Weaken",
        meaning: "To make someone or something physically weak",
        example: "The illness debilitated him, making it hard to work."
    },
    {
        alternatives: ["Emulate", "Imitate", "Mirror"],
        common: "Imitate",
        meaning: "To match or surpass typically by imitation",
        example: "She strives to emulate her mentor's success."
    },
    {
        alternatives: ["Frugal", "Thrifty", "Economical"],
        common: "Cheap",
        meaning: "Sparing or economical with regard to money or food",
        example: "His frugal habits helped him save a significant amount of money."
    },
    {
        alternatives: ["Grandiose", "Impressive", "Magnificent"],
        common: "Impressive",
        meaning: "Impressive and imposing in appearance or style",
        example: "The grandiose architecture attracted many tourists."
    },
    {
        alternatives: ["Heed", "Listen", "Pay attention"],
        common: "Listen",
        meaning: "To pay attention to; take notice of",
        example: "You should heed the warnings about the weather."
    },
    {
        alternatives: ["Intrinsic", "Inherent", "Essential"],
        common: "Basic",
        meaning: "Belonging naturally; essential",
        example: "Trust is intrinsic to a healthy relationship."
    },
    {
        alternatives: ["Jubilant", "Elated", "Ecstatic"],
        common: "Happy",
        meaning: "Feeling or expressing great happiness and triumph",
        example: "She was jubilant after receiving the good news."
    },
    {
        alternatives: ["Kudos", "Praise", "Acclaim"],
        common: "Praise",
        meaning: "Praise and honor received for an achievement",
        example: "He received kudos for his outstanding performance."
    },
    {
        alternatives: ["Lament", "Mourn", "Regret"],
        common: "Mourn",
        meaning: "To express sorrow or regret",
        example: "They lament the loss of their beloved pet."
    },
    {
        alternatives: ["Mundane", "Ordinary", "Commonplace"],
        common: "Boring",
        meaning: "Lacking interest or excitement; dull",
        example: "She was tired of her mundane daily routine."
    },
    {
        alternatives: ["Novelty", "Innovation", "Originality"],
        common: "Newness",
        meaning: "The quality of being new, original, or unusual",
        example: "The novelty of the gadget attracted many early adopters."
    },
    {
        alternatives: ["Oblivious", "Unaware", "Ignorant"],
        common: "Unaware",
        meaning: "Not aware of or not concerned about what is happening around one",
        example: "He was oblivious to the chaos around him."
    },
    {
        alternatives: ["Pragmatic", "Practical", "Realistic"],
        common: "Practical",
        meaning: "Dealing with things sensibly and realistically",
        example: "Her pragmatic approach helped solve the problem efficiently."
    },
    {
        alternatives: ["Quell", "Suppress", "Subdue"],
        common: "Stop",
        meaning: "To put an end to, typically by force",
        example: "The police were called to quell the disturbances."
    },
    {
        alternatives: ["Resilient", "Strong", "Flexible"],
        common: "Strong",
        meaning: "Able to withstand or recover quickly from difficult conditions",
        example: "Children are often more resilient than adults realize."
    },
    {
        alternatives: ["Scrutinize", "Examine", "Inspect"],
        common: "Examine",
        meaning: "To examine or inspect closely and thoroughly",
        example: "The auditor scrutinized the financial records."
    },
    {
        alternatives: ["Tranquil", "Calm", "Peaceful"],
        common: "Calm",
        meaning: "Free from disturbance; peaceful",
        example: "The lake was tranquil in the early morning."
    },
    {
        alternatives: ["Ubiquitous", "Everywhere", "Omnipresent"],
        common: "Everywhere",
        meaning: "Present, appearing, or found everywhere",
        example: "Smartphones have become ubiquitous in modern society."
    },
    {
        alternatives: ["Vindicate", "Exonerate", "Justify"],
        common: "Clear",
        meaning: "To clear someone of blame or suspicion",
        example: "New evidence helped vindicate the wrongly accused man."
    },
    {
        alternatives: ["Wane", "Diminish", "Decrease"],
        common: "Decrease",
        meaning: "To decrease in size, extent, or degree",
        example: "Interest in the project began to wane over time."
    },
    {
        alternatives: ["Xenophobia", "Fear of strangers", "Fear of foreigners"],
        common: "Fear of strangers",
        meaning: "Dislike of or prejudice against people from other countries",
        example: "Xenophobia can lead to discrimination and social division."
    },
    {
        alternatives: ["Yield", "Produce", "Generate"],
        common: "Produce",
        meaning: "To produce or provide something",
        example: "The farm yields a large crop every year."
    },
    {
        alternatives: ["Zeal", "Enthusiasm", "Passion"],
        common: "Enthusiasm",
        meaning: "Great energy or enthusiasm in pursuit of a cause or objective",
        example: "Her zeal for the project inspired the entire team."
    },
    {
        alternatives: ["Assertive", "Confident", "Self-assured"],
        common: "Confident",
        meaning: "Having or showing a confident and forceful personality",
        example: "Being assertive can help you achieve your goals."
    },
    {
        alternatives: ["Brevity", "Conciseness", "Shortness"],
        common: "Shortness",
        meaning: "Concise and exact use of words in writing or speech",
        example: "The brevity of his speech made it more impactful."
    },
    {
        alternatives: ["Conspicuous", "Noticeable", "Prominent"],
        common: "Noticeable",
        meaning: "Standing out so as to be clearly visible",
        example: "Her bright dress made her conspicuous in the crowd."
    },
    {
        alternatives: ["Deference", "Respect", "Esteem"],
        common: "Respect",
        meaning: "Humble submission and respect",
        example: "He showed deference to his elders at all times."
    },
    {
        alternatives: ["Elusive", "Evasive", "Difficult to grasp"],
        common: "Hard to find",
        meaning: "Difficult to find, catch, or achieve",
        example: "The solution to the problem remained elusive."
    },
    {
        alternatives: ["Fervent", "Passionate", "Ardent"],
        common: "Passionate",
        meaning: "Having or displaying a passionate intensity",
        example: "She is a fervent advocate for environmental protection."
    },
    {
        alternatives: ["Gregarious", "Sociable", "Outgoing"],
        common: "Sociable",
        meaning: "Fond of company; sociable",
        example: "His gregarious nature made him popular at parties."
    },
    {
        alternatives: ["Hypothetical", "Theoretical", "Supposed"],
        common: "Theoretical",
        meaning: "Based on or involving a hypothesis",
        example: "The discussion was purely hypothetical and not based on real events."
    },
    {
        alternatives: ["Imperative", "Essential", "Crucial"],
        common: "Important",
        meaning: "Of vital importance; crucial",
        example: "It is imperative that we finish the project by Friday."
    },
    {
        alternatives: ["Juxtaposition", "Comparison", "Contrast"],
        common: "Comparison",
        meaning: "The fact of placing things side by side for comparison",
        example: "The juxtaposition of the two paintings highlighted their differences."
    },
    {
        alternatives: ["Kinetic", "Energetic", "Dynamic"],
        common: "Energetic",
        meaning: "Relating to or resulting from motion",
        example: "The kinetic sculpture moved gracefully with the wind."
    },
    {
        alternatives: ["Luminous", "Bright", "Radiant"],
        common: "Bright",
        meaning: "Full of or shedding light; bright or shining",
        example: "The luminous stars lit up the night sky."
    },
    {
        alternatives: ["Malleable", "Flexible", "Pliable"],
        common: "Flexible",
        meaning: "Easily influenced; pliable",
        example: "Gold is a malleable metal that can be shaped easily."
    },
    {
        alternatives: ["Nebulous", "Vague", "Unclear"],
        common: "Unclear",
        meaning: "In the form of a cloud or haze; hazy",
        example: "His plans for the future were still nebulous."
    },
    {
        alternatives: ["Opaque", "Non-transparent", "Cloudy"],
        common: "Not clear",
        meaning: "Not able to be seen through; not transparent",
        example: "The glass was opaque, preventing anyone from seeing inside."
    },
    {
        alternatives: ["Palpable", "Evident", "Clear"],
        common: "Clear",
        meaning: "So intense as to seem almost tangible",
        example: "There was a palpable tension in the room."
    },
    {
        alternatives: ["Quintessential", "Typical", "Classic"],
        common: "Typical",
        meaning: "Representing the most perfect or typical example of a quality or class",
        example: "She is the quintessential professional, always punctual and prepared."
    },
    {
        alternatives: ["Recalcitrant", "Defiant", "Uncooperative"],
        common: "Defiant",
        meaning: "Having an obstinately uncooperative attitude",
        example: "The recalcitrant student refused to follow the rules."
    },
    {
        alternatives: ["Sagacious", "Wise", "Insightful"],
        common: "Wise",
        meaning: "Having or showing keen mental discernment and good judgment",
        example: "Her sagacious advice helped him navigate the difficult situation."
    },
    {
        alternatives: ["Transient", "Temporary", "Short-lived"],
        common: "Temporary",
        meaning: "Lasting only for a short time; impermanent",
        example: "The transient nature of youth is often celebrated."
    },
    {
        alternatives: ["Urbane", "Sophisticated", "Cultured"],
        common: "Sophisticated",
        meaning: "Having or showing the refinement expected of a well-educated person",
        example: "He had an urbane manner that impressed everyone he met."
    },
    {
        alternatives: ["Venerable", "Respected", "Revered"],
        common: "Respected",
        meaning: "Accorded a great deal of respect, especially because of age, wisdom, or character",
        example: "The venerable professor was admired by all his students."
    },
    {
        alternatives: ["Willful", "Intentional", "Deliberate"],
        common: "Intentional",
        meaning: "Intentional; done on purpose",
        example: "His willful disregard for the rules led to his dismissal."
    },
    {
        alternatives: ["Xenial", "Hospitable", "Friendly"],
        common: "Hospitable",
        meaning: "Hospitable, especially to visiting strangers or foreigners",
        example: "The host was xenial, ensuring all guests felt welcome."
    },
    {
        alternatives: ["Yearning", "Longing", "Desire"],
        common: "Longing",
        meaning: "A feeling of intense longing for something",
        example: "There was a yearning in her eyes that words couldn't capture."
    },
    {
        alternatives: ["Zenith", "Peak", "Pinnacle"],
        common: "Peak",
        meaning: "The time at which something is most powerful or successful",
        example: "At the zenith of his career, he received numerous awards."
    },
    {
        alternatives: ["Adept", "Skilled", "Proficient"],
        common: "Skilled",
        meaning: "Very skilled or proficient at something",
        example: "She is adept at solving complex mathematical problems."
    },
    {
        alternatives: ["Beguile", "Charm", "Enchant"],
        common: "Charm",
        meaning: "To enchant or attract in a deceptive way",
        example: "He beguiled the audience with his captivating story."
    },
    {
        alternatives: ["Candor", "Honesty", "Frankness"],
        common: "Honesty",
        meaning: "The quality of being open and honest in expression",
        example: "Her candor was appreciated by everyone in the meeting."
    },
    {
        alternatives: ["Debunk", "Expose", "Disprove"],
        common: "Expose",
        meaning: "To expose the falseness of a belief or idea",
        example: "The journalist worked to debunk the widespread myths."
    },
    {
        alternatives: ["Ebullient", "Enthusiastic", "Exuberant"],
        common: "Enthusiastic",
        meaning: "Cheerful and full of energy",
        example: "Her ebullient personality made her a favorite among her peers."
    },
    {
        alternatives: ["Furtive", "Secretive", "Sneaky"],
        common: "Secretive",
        meaning: "Attempting to avoid notice or attention",
        example: "He cast a furtive glance around the room before speaking."
    },
    {
        alternatives: ["Garrulous", "Talkative", "Loquacious"],
        common: "Talkative",
        meaning: "Excessively talkative, especially on trivial matters",
        example: "The garrulous host kept the guests entertained all evening."
    },
    {
        alternatives: ["Hubris", "Arrogance", "Pride"],
        common: "Arrogance",
        meaning: "Excessive pride or self-confidence",
        example: "His hubris led him to underestimate his opponents."
    },
    {
        alternatives: ["Iconoclast", "Nonconformist", "Rebel"],
        common: "Rebel",
        meaning: "A person who attacks cherished beliefs or institutions",
        example: "She was known as an iconoclast who challenged traditional norms."
    },
    {
        alternatives: ["Juxtapose", "Compare", "Contrast"],
        common: "Compare",
        meaning: "To place side by side for comparison",
        example: "The artist juxtaposed vibrant colors with dark shadows."
    },
    {
        alternatives: ["Kaleidoscopic", "Colorful", "Varied"],
        common: "Colorful",
        meaning: "Continuously changing patterns or elements",
        example: "The kaleidoscopic display captivated everyone's attention."
    },
    {
        alternatives: ["Laconic", "Brief", "Concise"],
        common: "Brief",
        meaning: "Using very few words",
        example: "His laconic reply suggested he was uninterested."
    },
    {
        alternatives: ["Maverick", "Individualist", "Nonconformist"],
        common: "Individualist",
        meaning: "An independent-minded person",
        example: "As a maverick, she often pursued unconventional solutions."
    },
    {
        alternatives: ["Nefarious", "Wicked", "Evil"],
        common: "Wicked",
        meaning: "Wicked or criminal",
        example: "The nefarious activities of the gang were eventually uncovered."
    },
    {
        alternatives: ["Ostentatious", "Showy", "Flamboyant"],
        common: "Showy",
        meaning: "Designed to impress or attract notice",
        example: "His ostentatious display of wealth was met with envy."
    },
    {
        alternatives: ["Paradox", "Contradiction", "Irony"],
        common: "Contradiction",
        meaning: "A statement that contradicts itself",
        example: "It's a paradox that standing is more tiring than walking."
    },
    {
        alternatives: ["Quagmire", "Mire", "Morass"],
        common: "Problem",
        meaning: "A complex or difficult situation",
        example: "They found themselves in a quagmire of legal issues."
    },
    {
        alternatives: ["Requisite", "Necessary", "Essential"],
        common: "Necessary",
        meaning: "Made necessary by particular circumstances",
        example: "Good communication skills are requisite for this job."
    },
    {
        alternatives: ["Serendipity", "Chance", "Luck"],
        common: "Luck",
        meaning: "The occurrence of events by chance in a happy or beneficial way",
        example: "Finding her old friend in a foreign country was pure serendipity."
    },
    {
        alternatives: ["Trepidation", "Anxiety", "Fear"],
        common: "Fear",
        meaning: "A feeling of fear or agitation about something",
        example: "She felt a sense of trepidation before the interview."
    },
    {
        alternatives: ["Unprecedented", "Never before seen", "Extraordinary"],
        common: "Never seen before",
        meaning: "Never done or known before",
        example: "The company achieved unprecedented growth this year."
    },
    {
        alternatives: ["Vicarious", "Indirect", "Secondhand"],
        common: "Indirect",
        meaning: "Experienced in the imagination through the feelings or actions of another",
        example: "He felt vicarious joy through his children's achievements."
    },
    {
        alternatives: ["Winsome", "Charming", "Endearing"],
        common: "Charming",
        meaning: "Attractive or appealing in a fresh, innocent way",
        example: "Her winsome smile won everyone's hearts."
    },
    {
        alternatives: ["Yielding", "Flexible", "Compliant"],
        common: "Flexible",
        meaning: "Inclined to give way under pressure; adaptable",
        example: "The yielding material made the cushion very comfortable."
    },
    {
        alternatives: ["Zenith", "Peak", "Apex"],
        common: "Peak",
        meaning: "The highest point reached by a celestial or other object",
        example: "She reached the zenith of her career at a young age."
    },
    {
        alternatives: ["Alleviate", "Ease", "Relieve"],
        common: "Ease",
        meaning: "To make suffering, deficiency, or a problem less severe",
        example: "The medicine helped to alleviate her symptoms."
    },
    {
        alternatives: ["Benevolent", "Kind-hearted", "Charitable"],
        common: "Kind",
        meaning: "Well-meaning and kindly",
        example: "The benevolent organization provided aid to those in need."
    },
    {
        alternatives: ["Candid", "Honest", "Frank"],
        common: "Honest",
        meaning: "Truthful and straightforward; frank",
        example: "She gave a candid interview about her experiences."
    },
    {
        alternatives: ["Deft", "Skillful", "Adroit"],
        common: "Skillful",
        meaning: "Neatly skillful and quick in movement",
        example: "His deft handling of the situation impressed everyone."
    },
    {
        alternatives: ["Eloquent", "Articulate", "Expressive"],
        common: "Articulate",
        meaning: "Fluent or persuasive in speaking or writing",
        example: "She delivered an eloquent speech that moved the audience."
    },
    {
        alternatives: ["Frivolous", "Trivial", "Superficial"],
        common: "Trivial",
        meaning: "Not having any serious purpose or value",
        example: "They dismissed the complaint as frivolous."
    },
    {
        alternatives: ["Galvanize", "Inspire", "Motivate"],
        common: "Inspire",
        meaning: "To shock or excite someone into taking action",
        example: "The coach's speech galvanized the team to win the game."
    },
    {
        alternatives: ["Hapless", "Unfortunate", "Luckless"],
        common: "Unfortunate",
        meaning: "Unfortunate, especially through bad luck",
        example: "The hapless travelers were stranded due to the storm."
    },
    {
        alternatives: ["Immutable", "Unchangeable", "Fixed"],
        common: "Unchangeable",
        meaning: "Unable to be changed",
        example: "The laws of physics are considered immutable."
    },
    {
        alternatives: ["Juxtaposition", "Contrast", "Comparison"],
        common: "Contrast",
        meaning: "The fact of placing things side by side for comparison",
        example: "The juxtaposition of the two buildings highlighted their architectural differences."
    },
    {
        alternatives: ["Kudos", "Praise", "Accolades"],
        common: "Praise",
        meaning: "Praise and honor received for an achievement",
        example: "She received kudos for her outstanding performance."
    },
    {
        alternatives: ["Lethargic", "Sluggish", "Inactive"],
        common: "Sluggish",
        meaning: "Affected by lethargy; sluggish and apathetic",
        example: "He felt lethargic after the heavy meal."
    },
    {
        alternatives: ["Myriad", "Countless", "Numerous"],
        common: "Many",
        meaning: "A countless or extremely great number",
        example: "There are myriad possibilities to explore."
    },
    {
        alternatives: ["Nonchalant", "Casual", "Indifferent"],
        common: "Casual",
        meaning: "Feeling or appearing casually calm and relaxed",
        example: "She remained nonchalant despite the chaos around her."
    },
    {
        alternatives: ["Obfuscate", "Confuse", "Blur"],
        common: "Confuse",
        meaning: "To render obscure, unclear, or unintelligible",
        example: "The technical jargon served to obfuscate the main points."
    },
    {
        alternatives: ["Palatable", "Tasty", "Appetizing"],
        common: "Tasty",
        meaning: "Acceptable or satisfactory to the taste",
        example: "The chef prepared a palatable meal for the guests."
    },
    {
        alternatives: ["Quintessential", "Classic", "Ideal"],
        common: "Ideal",
        meaning: "Representing the most perfect example of a quality or class",
        example: "She is the quintessential leader, inspiring her team daily."
    },
    {
        alternatives: ["Revere", "Respect", "Admire"],
        common: "Respect",
        meaning: "To feel deep respect or admiration for something",
        example: "He revered his mentor for his wisdom and guidance."
    },
    {
        alternatives: ["Stagnant", "Inactive", "Motionless"],
        common: "Inactive",
        meaning: "Showing no activity; dull and sluggish",
        example: "The pond water became stagnant over the summer."
    },
    {
        alternatives: ["Tangible", "Concrete", "Palpable"],
        common: "Concrete",
        meaning: "Perceptible by touch; clear and definite",
        example: "There was tangible excitement in the air before the concert."
    },
    {
        alternatives: ["Ubiquitous", "Omnipresent", "Everywhere"],
        common: "Everywhere",
        meaning: "Present, appearing, or found everywhere",
        example: "Smartphones have become ubiquitous in today's society."
    },
    {
        alternatives: ["Vacillate", "Waver", "Hesitate"],
        common: "Hesitate",
        meaning: "To alternate or waver between different opinions or actions",
        example: "He tended to vacillate when making important decisions."
    },
    {
        alternatives: ["Wistful", "Yearning", "Longing"],
        common: "Longing",
        meaning: "Having or showing a feeling of vague or regretful longing",
        example: "She gave a wistful look at the old photographs."
    },
    {
        alternatives: ["Xenial", "Hospitable", "Friendly"],
        common: "Hospitable",
        meaning: "Friendly, especially to strangers or guests",
        example: "Their xenial nature made visitors feel welcome."
    },
    {
        alternatives: ["Yielding", "Flexible", "Compliant"],
        common: "Flexible",
        meaning: "Inclined to give way under pressure; adaptable",
        example: "The yielding material made the cushion very comfortable."
    },
    {
        alternatives: ["Zealous", "Passionate", "Fervent"],
        common: "Passionate",
        meaning: "Having or showing zeal",
        example: "She was a zealous advocate for human rights."
    },
    {
        alternatives: ["Aesthetic", "Artistic", "Visual"],
        common: "Artistic",
        meaning: "Concerned with beauty or the appreciation of beauty",
        example: "The aesthetic design of the building attracted many admirers."
    },
    {
        alternatives: ["Bellicose", "Aggressive", "Combative"],
        common: "Aggressive",
        meaning: "Demonstrating aggression",
        example: "His bellicose behavior made him unpopular among his peers."
    },
    {
        alternatives: ["Cacophony", "Noise", "Din"],
        common: "Noise",
        meaning: "A harsh, discordant mixture of sounds",
        example: "The construction site was filled with a cacophony of noises."
    },
    {
        alternatives: ["Dauntless", "Fearless", "Intrepid"],
        common: "Fearless",
        meaning: "Showing fearlessness and determination",
        example: "The dauntless explorer ventured into uncharted territories."
    },
    {
        alternatives: ["Ephemeral", "Temporary", "Short-lived"],
        common: "Temporary",
        meaning: "Lasting for a very short time",
        example: "The beauty of a rainbow is ephemeral."
    },
    {
        alternatives: ["Fortuitous", "Lucky", "Accidental"],
        common: "Lucky",
        meaning: "Happening by a lucky chance; fortunate",
        example: "Their meeting was purely fortuitous."
    },
    {
        alternatives: ["Grandiose", "Impressive", "Magnificent"],
        common: "Impressive",
        meaning: "Impressive and imposing in appearance or style",
        example: "The grandiose architecture attracted many tourists."
    },
    {
        alternatives: ["Heuristic", "Problem-solving", "Experimental"],
        common: "Problem-solving",
        meaning: "Enabling a person to discover or learn something for themselves",
        example: "The heuristic approach helped students understand the concept better."
    },
    {
        alternatives: ["Iconoclastic", "Revolutionary", "Radical"],
        common: "Revolutionary",
        meaning: "Attacking or ignoring cherished beliefs and traditions",
        example: "His iconoclastic views challenged the status quo."
    },
    {
        alternatives: ["Juvenile", "Youthful", "Immature"],
        common: "Immature",
        meaning: "For or relating to young people",
        example: "The juvenile behavior was not typical of his usual demeanor."
    },
    {
        alternatives: ["Kinetic", "Energetic", "Dynamic"],
        common: "Energetic",
        meaning: "Relating to or resulting from motion",
        example: "The kinetic sculpture moved gracefully with the wind."
    },
    {
        alternatives: ["Luminous", "Bright", "Radiant"],
        common: "Bright",
        meaning: "Full of or shedding light; bright or shining",
        example: "The luminous stars lit up the night sky."
    },
    {
        alternatives: ["Munificent", "Generous", "Bountiful"],
        common: "Generous",
        meaning: "More generous than is usual or necessary",
        example: "The munificent donation helped build the new library."
    },
    {
        alternatives: ["Nonplussed", "Confused", "Bewildered"],
        common: "Confused",
        meaning: "Surprised and confused so much that one is unsure how to react",
        example: "He was nonplussed by the unexpected question."
    },
    {
        alternatives: ["Obsequious", "Servile", "Subservient"],
        common: "Subservient",
        meaning: "Obedient or attentive to an excessive degree",
        example: "The obsequious assistant followed every command without question."
    },
    {
        alternatives: ["Paragon", "Model", "Exemplar"],
        common: "Model",
        meaning: "A person or thing regarded as a perfect example of a particular quality",
        example: "She is a paragon of virtue and grace."
    },
    {
        alternatives: ["Quixotic", "Unrealistic", "Idealistic"],
        common: "Idealistic",
        meaning: "Exceedingly idealistic; unrealistic and impractical",
        example: "His quixotic quest for perfection often led to frustration."
    },
    {
        alternatives: ["Recalcitrant", "Defiant", "Uncooperative"],
        common: "Defiant",
        meaning: "Having an obstinately uncooperative attitude",
        example: "The recalcitrant student refused to follow the rules."
    },
    {
        alternatives: ["Sanguine", "Optimistic", "Hopeful"],
        common: "Optimistic",
        meaning: "Optimistic or positive, especially in an apparently bad situation",
        example: "Despite the challenges, she remained sanguine about the outcome."
    },
    {
        alternatives: ["Trepidation", "Anxiety", "Fear"],
        common: "Fear",
        meaning: "A feeling of fear or agitation about something",
        example: "She felt a sense of trepidation before the interview."
    },
    {
        alternatives: ["Ubiquitous", "Everywhere", "Omnipresent"],
        common: "Everywhere",
        meaning: "Present, appearing, or found everywhere",
        example: "Smartphones have become ubiquitous in modern society."
    },
    {
        alternatives: ["Vociferous", "Loud", "Noisy"],
        common: "Noisy",
        meaning: "Expressing opinions or feelings loudly and forcefully",
        example: "The vociferous crowd demanded immediate action."
    },
    {
        alternatives: ["Wane", "Diminish", "Decrease"],
        common: "Decrease",
        meaning: "To decrease in size, extent, or degree",
        example: "Interest in the project began to wane over time."
    },
    {
        alternatives: ["Xenophobia", "Fear of foreigners", "Prejudice against strangers"],
        common: "Fear of foreigners",
        meaning: "Dislike of or prejudice against people from other countries",
        example: "Xenophobia can lead to discrimination and social division."
    },
    {
        alternatives: ["Yield", "Produce", "Generate"],
        common: "Produce",
        meaning: "To produce or provide something",
        example: "The farm yields a large crop every year."
    },
    {
        alternatives: ["Zealous", "Enthusiastic", "Fervent"],
        common: "Enthusiastic",
        meaning: "Having or showing zeal; passionate",
        example: "He was a zealous supporter of the new policy."
    }
];


let currentCard = 0;
let isFlippedMode = false; // Track if flipped mode is active
const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flipMe');

function arrayToString(arr, seperator) {
    let words = arr[0];
    for (let i = 1; i < arr.length; i++) {
        words = words + seperator + arr[i];
    }
    return words;
}


function updateCard() {
    const wordElement = document.getElementById('word');
    const definitionElement = document.getElementById('definition');
    const exampleElement = document.getElementById('examples');
    const sn = document.getElementById('sn');
    const flashcard = document.getElementById('flashcard');
    const back_side_word = document.getElementById('back_side_word');

    // Update the content with the current card information
    if (isFlippedMode) {
        back_side_word.style.display = "none";
    }
    else {
        back_side_word.style.display = "inline-block";
        back_side_word.textContent = flashcards[currentCard].common;
    }

    // Get the computed style for the flashcard element
    const computedStyle = window.getComputedStyle(flashcard);
    const flashcardWidth = parseInt(computedStyle.width); // Get the width in pixels

    if (flashcardWidth >= 768) {
        wordElement.innerHTML = arrayToString(flashcards[currentCard].alternatives, " | ");
    } else {
        wordElement.innerHTML = arrayToString(flashcards[currentCard].alternatives, "<br>");
    }


    definitionElement.textContent = flashcards[currentCard].meaning;
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

