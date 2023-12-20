const Note = require("../models/Note");

module.exports = {
  getNotes: async (req, res) => {
    try {
      const noteItems = await Note.find({ userId: req.user.id });
      const itemsLeft = await Note.countDocuments({
        userId: req.user.id,
        completed: false,
      });
      res.render("notes.ejs", {
        notes: noteItems,
        left: itemsLeft,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createNote: async (req, res) => {
    try {
      await Note.create({
        title: req.body.title,
        note: req.body.noteItem,
        completed: false,
        userId: req.user.id,
      });
      console.log("Sticky Note Has Been Created!");
      res.redirect("/notes");
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Note.findOneAndUpdate(
        { _id: req.body.noteIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Complete");
      res.json("Marked Complete");
    } catch (err) {
      console.log(err);
    }
  },
  markIncomplete: async (req, res) => {
    try {
      await Note.findOneAndUpdate(
        { _id: req.body.noteIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked Incomplete");
      res.json("Marked Incomplete");
    } catch (err) {
      console.log(err);
    }
  },
  deleteNote: async (req, res) => {
    try {
      await Note.findOneAndDelete({ _id: req.body.noteIdFromJSFile });
      console.log(req.body.noteIdFromJSFile);
      console.log("Deleted Sticky Note");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
