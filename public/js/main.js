const deleteBtn = document.querySelectorAll(".del");
const noteItem = document.querySelectorAll(".not");
const noteComplete = document.querySelectorAll(".completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteNote);
});

Array.from(noteItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(noteComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

async function deleteNote() {
  const noteId = this.parentNode.dataset.id;
  try {
    const response = await fetch("notes/deleteNote", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        noteIdFromJSFile: noteId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const noteId = this.parentNode.dataset.id;
  console.log(this.parentNode);
  try {
    const response = await fetch("notes/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        noteIdFromJSFile: noteId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const noteId = this.parentNode.dataset.id;
  try {
    const response = await fetch("notes/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        noteIdFromJSFile: noteId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
