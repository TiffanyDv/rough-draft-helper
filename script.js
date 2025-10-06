document.getElementById("analyzeBtn").addEventListener("click", () => {
  const draft = document.getElementById("draftInput").value.trim();
  const tipsBox = document.getElementById("tipsBox");

  if (!draft) {
    tipsBox.textContent = "Please paste or write something first.";
    return;
  }

  // Basic checks
  const wordCount = draft.split(/\s+/).length;
  const hasQuote = draft.includes('"') || draft.includes("“");
  const hasTransition = /(because|however|therefore|although|for example)/i.test(draft);

  let feedback = `Word count: ${wordCount}\n\n`;

  if (wordCount < 100) {
    feedback += "• Try to develop your ideas further (aim for more than 100 words).\n";
  } else {
    feedback += "• Nice length! You’ve got enough material to work with.\n";
  }

  if (hasQuote) {
    feedback += "• Great — you included evidence with a quotation.\n";
  } else {
    feedback += "• Consider adding a quotation or reference as evidence.\n";
  }

  if (hasTransition) {
    feedback += "• You used transitions — this helps your ideas flow.\n";
  } else {
    feedback += "• Add some transition words (e.g., however, therefore) to improve flow.\n";
  }

  feedback += "\n(Quick Tips are automatic checks — your teacher will still give more detailed feedback!)";

  tipsBox.textContent = feedback;
});
