const fs = require("fs/promises");
const path = require("path");

const notesPath = path.join(__dirname, "db.json");

async function addNote(title) {
  //   const notes = require("./db.json");
  const notes = await getNotes();
  const note = {
    title,
    id: Date.now().toString(),
  };
  notes.push(note);
  await fs.writeFile(notesPath, JSON.stringify(notes));

  // const buffer = await fs.readFile(notesPath);
  // const notes = Buffer.from(buffer).toString("utf-8");

}

addNote("Test!");

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

module.exports = {
  addNote,
  getNotes,
};
