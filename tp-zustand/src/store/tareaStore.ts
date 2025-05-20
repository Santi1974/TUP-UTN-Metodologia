import { create } from "zustand";
import type { ITarea } from "../types/iTarea";

interface ITareaStore {
  tareas: ITarea[];
  tareaActiva: ITarea | null;
  setTareaActiva: (tareaActiva: ITarea | null) => void;
  setTareas: (tareas: ITarea[]) => void;
  addTarea: (tarea: ITarea) => void;
  editTarea: (tareaEdit: ITarea) => void;
  removeTarea: (idTarea: String) => void;
}

export const tareaStore = create<ITareaStore>((set) => ({
  tareas: [],
  tareaActiva: null,


  setTareas: (tareas: ITarea[]) =>
    set(() => ({
      tareas: tareas,
    })),


  addTarea: (tarea: ITarea) =>
    set((state) => ({
      tareas: [...state.tareas, tarea],
    })),


  editTarea: (tareaEdit: ITarea) =>
    set((state) => ({
      tareas: state.tareas.map((tarea) =>
        tarea.id === tareaEdit.id ? tareaEdit : tarea
      ),
    })),


  removeTarea: (idTarea) =>
    set((state) => ({
      tareas: state.tareas.filter((tarea) => tarea.id !== idTarea),
    })),


  setTareaActiva: (tareaActiva) =>
    set(() => ({
      tareaActiva: tareaActiva,
    })),
}));
