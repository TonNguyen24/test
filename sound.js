// Create a basic Tone.js synth
const synth = new Tone.Synth().toDestination();
let noteIndex = 0;

// Define some notes to be used for the generative music
const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];
let noteSequence = [];

// Function to play the current note sequence
function playNotes() {
    noteSequence.forEach((note, i) => {
        synth.triggerAttackRelease(note, "8n", Tone.now() + i * 0.5);
    });
}

// Add event listener to the send button
document.getElementById("sendButton").addEventListener("click", () => {
    const input = document.getElementById("inputText").value;

    if (input) {
        // Add a note from the predefined list of notes to the sequence
        noteSequence.push(notes[noteIndex % notes.length]);
        noteIndex++;

        // Play the sequence
        playNotes();

        // Clear the input field
        document.getElementById("inputText").value = "";
    }
});

// Ensure Tone.js is started on the first interaction
document.addEventListener("click", async () => {
    await Tone.start();
    console.log("Tone.js is ready");
});

  
  
  
  


  
  
  