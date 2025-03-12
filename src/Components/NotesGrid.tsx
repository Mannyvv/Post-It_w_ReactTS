import React, { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';
import type { NoteFields } from "../../amplify/data/resource"; 



interface NotesGridProps {
  newNoteAdded: boolean;
  notes: NoteFields[];
  handleNoteClick: (note: NoteFields) => void;
  deleteNote: (event: React.MouseEvent, noteId: string) => void;
}

const NotesGrid: React.FC<NotesGridProps> = ({ newNoteAdded, notes, handleNoteClick, deleteNote }) => {
  const notesGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (notesGridRef.current) {
      const lastNote = notesGridRef.current.firstChild as HTMLElement;
      if (lastNote) {
        anime({
          targets: lastNote,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 1000,
          easing: "easeInOutQuad",
        });
      }
    }
  }, [newNoteAdded]);

  return (
    <div ref={notesGridRef} className="notes-grid">
      {notes.map((note) => (
        <div className="note-item" onClick={() => handleNoteClick(note)} key={note.id}>
          <div className="notes-header">
            <button
              id="deleteButton"
              className="close"
              onClick={(event) => deleteNote(event, note.id)}
            >
              <p className="close-text">Delete</p>
            </button>
          </div>
          <h2>{note.title}</h2>
          <p className="note-text">{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesGrid;
