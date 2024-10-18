//  (actualWords / totalTimeTaken) * 60;

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;


const sentences = ['The quick brown fox jumps over the lazy dog 1','The old wooden chair creaked under his weight as he sat by the window, watching the rain drizzle softly against the glass, lost in thought.',
        'As the sun began to set behind the mountains, the sky turned a brilliant shade of orange, casting long shadows across the open field.',
        'She carefully placed the bouquet of flowers on the table, adjusting each stem until it was perfectly arranged, then stepped back to admire her handiwork.',
        'The sound of distant thunder echoed through the valley, a storm approaching fast, yet the sky above remained clear and bright for the moment.',
        'Walking along the beach, he felt the cool ocean breeze on his face and the soft sand beneath his feet, lost in the rhythm of the waves.',
        'The library was silent except for the faint rustle of pages turning, as students diligently studied for their upcoming exams in the dimly lit room.',
        'A soft breeze stirred the autumn leaves, making them dance across the sidewalk in a swirling pattern of reds, oranges, and yellows underfoot.',
        'She opened the old, leather-bound journal, its pages yellowed with age, and began to read the faded handwriting that told stories from another lifetime.',
        'The train rattled along the tracks, the landscape flashing by in a blur of green fields and distant mountains, as he daydreamed about his next adventure.',
        'The smell of freshly baked cookies filled the kitchen, and she couldnt help but smile as she took them out of the oven, warm and golden brown.',
        'He stood at the edge of the cliff, looking out over the vast expanse of ocean below, the wind whipping through his hair, making him feel alive.',
        'The candle flickered in the dark room, casting long, dancing shadows on the walls, as she sat in silence, listening to the quiet hum of the night.',
        'As the clock struck midnight, a soft breeze blew through the open window, carrying with it the faint scent of jasmine from the garden below.',
        'The sound of childrens laughter echoed through the park as they chased each other, their joy uncontained, while the adults watched from the benches nearby.',
        'He carefully folded the letter and slipped it back into its envelope, wondering if he would ever find the courage to send it after all these years.',
        'The first few notes of the piano filled the air, soft and melodic, drawing the attention of everyone in the room as they paused to listen.',
        'She pulled her scarf tighter around her neck as the wind picked up, making her way through the crowded streets filled with holiday shoppers and twinkling lights.',
        'The sky was a deep shade of blue, with just a hint of pink on the horizon, as the first stars began to twinkle in the fading light.',
        'He watched the birds soar high above, their wings spread wide as they glided effortlessly through the air, seemingly unaware of the world below them.',
        'The smell of pine trees and fresh snow filled the air as they hiked up the mountain trail, their breath visible in the crisp, cold air.',
        'She picked up the photograph, her fingers tracing the edges of the worn picture, remembering the day it was taken, a lifetime ago.',
        'The old clock in the corner chimed the hour, its sound reverberating through the small room, where everything else seemed to stand still for a moment.',
        'The campfire crackled, sending sparks up into the night sky, while the group sat in a circle, sharing stories and laughter under the canopy of stars.',
        'The tiny kitten curled up in her lap, purring softly as she stroked its fur, feeling a sense of calm wash over her in the quiet room.',
        'He glanced at his watch, realizing he was late, and hurried down the street, weaving through the crowd as the city buzzed with its usual energy.',
        'The garden was in full bloom, with flowers of every color filling the air with their sweet scent, a paradise for the bees and butterflies that fluttered by.',
        'The waves crashed against the rocks below, their force sending spray high into the air, as he stood at the edge of the cliff, mesmerized by the ocean’s power.',
        'As the plane took off, she looked out the window, watching the ground grow smaller and smaller, feeling both excited and nervous about the journey ahead.',
        'The bookshop was a quiet sanctuary from the bustling street outside, its shelves filled with stories waiting to be discovered by those who wandered in.',
        'The rain began to fall in earnest, drumming against the roof, as they huddled inside the small cabin, the fire providing warmth against the cold night.',
        'She stared at the blank canvas in front of her, paintbrush in hand, waiting for inspiration to strike as the afternoon sunlight streamed through the windows.',
        'The city lights twinkled like stars as the night grew darker, each window and streetlamp illuminating a small piece of the vast urban landscape.',
        'The boat rocked gently on the water, the only sound the soft lapping of waves against the hull, as they sat in silence, enjoying the peaceful moment.',
        'He sat at the bar, swirling the ice in his glass, lost in thought as the lively conversation and laughter of the other patrons swirled around him.',
        'The full moon hung low in the sky, casting a silver glow over the quiet countryside, where not a single car disturbed the stillness of the night.',
        'The sound of distant bells echoed through the narrow streets, signaling the start of the evening mass, as people hurried toward the church with candles in hand.',
        'As the sun rose, casting a golden light across the landscape, the world seemed to come alive with the sounds of birds chirping and leaves rustling in the breeze.',
        'The scent of lavender filled the air as she walked through the garden, her fingers brushing against the soft petals of the flowers in full bloom.',
        'He watched the storm clouds gather on the horizon, their dark shapes looming ominously over the landscape, promising rain and thunder before the day was through.',
        'The forest was alive with the sounds of nature—birds chirping, leaves rustling, and the occasional snap of a twig underfoot—as they made their way through the trees.',
        'The sound of the train whistle echoed through the valley as it made its way along the tracks, cutting through the mist that hung low over the river.',
        'She carefully unwrapped the gift, her heart racing with anticipation, wondering what was inside the beautifully wrapped box with its bright ribbon and sparkling paper.',
        'The fire crackled in the hearth, casting a warm glow across the room, while outside, the snow continued to fall, blanketing the world in white.',
        'The streets were filled with the sounds of celebration, as people danced and sang, their joy infectious as they marked the start of a new year together.',
        'The boat drifted lazily down the river, the sound of the water lapping against the sides the only noise, as they soaked in the tranquility of the moment.',
        'She stood on the balcony, watching the city lights twinkle far below, feeling a sense of calm wash over her as the cool night air brushed against her skin.',
        'The clock on the wall ticked away the seconds, each one seeming louder than the last, as he waited nervously for the meeting to begin.',
        'The kitchen was filled with the delicious aroma of baking bread, and she couldn’t help but smile as she took the loaf out of the oven, golden and perfect.',
        'He stood at the edge of the dock, staring out at the vast expanse of water, feeling a sense of freedom and possibility that he hadn’t felt in years.',
        'The market was bustling with activity, vendors calling out to customers, the smell of fresh produce and spices filling the air, as she wandered through the stalls.',
        'The stars twinkled overhead as they sat around the campfire, roasting marshmallows and telling stories, the perfect end to a long day of hiking and adventure.',
        'She carefully tied the ribbon on the gift, making sure it was perfect, before placing it on the table with the others, ready for the celebration to begin.',
        'The sun was setting, casting a golden glow over the city, as people made their way home, the streets alive with the sound of cars and conversation.',
        'The garden was a riot of color, flowers blooming in every hue imaginable, their scent filling the air, as bees buzzed lazily from one blossom to the next.'
    ]

// step 5

const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}

// step 4
const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;

    // console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}


// step 3
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    // console.log(randomNumber);
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}




// step 2
btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled' , 'true');
            endTypingTest();
            break;
    }
})