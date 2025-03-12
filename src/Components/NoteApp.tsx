import { useEffect, useState } from "react";
import { FormGroup, Form, Input, Button } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../features/Toast";
import { fetchNotes, createNote, updateNote, deleteNoteById } from "../features/CRUD"; // Adjust path
import NotesGrid from "./NotesGrid";
import type { Schema } from "../../amplify/data/resource"; 

type Note = Schema["Note"]["type"];

const NoteApp = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [newNoteAdded, setNewNoteAdded] = useState(false);

  // Fetch notes on mount
  useEffect(() => {
    const getNotes = async () => {
      const notes = await fetchNotes();
      setNotes(notes);
    };
    getNotes();
  }, []);

  // Limit note content to 200 characters
  useEffect(() => {
    if (content.length > 200) {
      setContent(content.substring(0, 200));
    }
  }, [content]);

  // Scroll to top when a new note is added
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle new note creation
  const handleNewNote = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return; // Prevent empty notes

    const newNote = await createNote({ title, content, initials: "MV" });
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
    scrollToTop();
    notify();
    setNewNoteAdded(!newNoteAdded);
  };

  // Handle clicking a note (for editing)
  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  // Handle updating a note
  const handleUpdateNote = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedNote) return console.log("Please select a note");

    const updatedNote = await updateNote(selectedNote.id, { title, content });
    setNotes(notes.map((note) => (note.id === selectedNote.id ? updatedNote : note)));
    setSelectedNote(null);
    setTitle("");
    setContent("");
  };

  // Handle canceling an edit
  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  // Handle deleting a note
  const handleDeleteNote = async (event: React.MouseEvent, noteId: string) => {
    event.stopPropagation();
    await deleteNoteById(noteId);
    setNotes(notes.filter((note) => note.id !== noteId));
    setSelectedNote(null);
  };

  return (
    <>
      <div className="app-container">
        <div className="note-form2">
          <Form className="d-flex" onSubmit={selectedNote ? handleUpdateNote : handleNewNote}>
            <FormGroup>
              <Input
                id="titleArea"
                name="titletext"
                type="text"
                placeholder="Title Here"
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                style={{ marginBottom: "10px" }}
              />
              <Input
                className="notearea"
                id="noteArea"
                name="notetext"
                type="textarea"
                placeholder="Note Here"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                required
                style={{ height: "200px" }}
              />
              {selectedNote ? (
                <div className="edit-buttons">
                  <Button block color="success">Update</Button>
                  <Button onClick={handleCancel} block color="danger">Cancel</Button>
                </div>
              ) : (
                <Button id="postIt" type="submit" block color="success">Post It</Button>
              )}
            </FormGroup>
          </Form>
        </div>

   
        <NotesGrid
          newNoteAdded={newNoteAdded}
          notes={notes}
          handleNoteClick={handleNoteClick}
          deleteNote={handleDeleteNote}
        />
      </div>

      <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} />
    </>
  );
};

export default NoteApp;
