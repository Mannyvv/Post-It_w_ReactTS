import { generateClient } from "@aws-amplify/api";
import type { Schema, NoteFields } from "../../amplify/data/resource"; 

const client = generateClient<Schema>();


export const fetchNotes = async (): Promise<NoteFields[]> => {
  const { data, errors } = await client.models.Note.list();
  if (errors) {
    console.error("Fetch Notes Error:", errors);
    return [];
  }
  return data|| []; 
};


export const createNote = async (note : Omit<NoteFields, "id" | "createdAt"|"updatedAt">) => {
  const { data, errors } = await client.models.Note.create(note);
  if (errors) {
    console.error("Create Note Error:", errors);
    throw new Error("Failed to create note");
  }
  if (!data) {
    throw new Error("No data returned from create note");}
  return data
};

export const updateNote = async (id: string, noteData: Partial<Omit<NoteFields, "id">>) => {
  const { data, errors } = await client.models.Note.update({ id, ...noteData });
  if (errors || !data) {
    console.error("Update Note Error:", errors);
    throw new Error("Failed to update note");
  }
  return data
};


export const deleteNoteById = async (id: string): Promise<void> => {
  const { errors } = await client.models.Note.delete({ id });
  if (errors) {
    console.error("Delete Note Error:", errors);
    throw new Error("Failed to delete note");
  }
};
