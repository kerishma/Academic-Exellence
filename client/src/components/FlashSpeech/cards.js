import React from 'react';
import "../FlashSpeech/cards.css"

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flashcard Test</title>
    <link rel="stylesheet" href="cards.css" />
<body>

    <div class="mainContainer">

        <div id="card" class="card">
  
          <div class="cardFront">
            <button onclick="flip()">Flip to Back</button>
            <h1>Front of Card</h1>
            <p>This side can hold the word from the array.
            </p>
            <button>All caps</button>
            <button>Lower case</button>
          </div>
  
          <div class="cardBack">
            <button onclick="flip()">Flip to Front</button>
            <h1>Back of Card</h1>
            <p>This side can hold an image and also the voice button.
            </p>
            <button>Say it!</button>
          </div>
  
        </div>
    </div>
    
</body>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
function flip() {
    $(`.card`).toggleClass(`rotate`);
}
</script>

</html>
