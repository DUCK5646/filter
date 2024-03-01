//INFO

//Special thank you to teachable machine for the AI model.
//Thank you to W3 schools for the Templates.
//Thank you to Paul Way for the knowledge used in this project.
//Thank you to Ozzy Osborn for his inspiration

//The photos are sourced from:
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fmusicians%2Fozzy-osbourne&psig=AOvVaw16D_qCsyS-WHXjvgn7uojl&ust=1707519022249000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCPirtpjqnIQDFQAAAAAdAAAAABAK
//and
//https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FOzzyOsbourne&psig=AOvVaw16D_qCsyS-WHXjvgn7uojl&ust=1707519022249000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCPirtpjqnIQDFQAAAAAdAAAAABAR

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Global variable to store the classifier
let classifier;

// Label (start by showing listening)
let label = "listening";
let confidence = 0;
// Teachable Machine model URL:
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/3_zf6X3GA/model.json';



function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
  createCanvas(417, 417);
  var canvas=createCanvas(417,417);
  canvas.parent('sketch-holder')
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);

  if (label == 'Ozzy') {
    text("Your Sample is:", width / 2, height / 2-20);
    text(confidence + "% " + label, width / 2, height / 2);
  }
  if (label != 'Ozzy'){
    text("THIS AIN'T OZZY", width / 2, height / 2);
  }
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);

    label = results[0].label;
    confidence = results[0].confidence

}



