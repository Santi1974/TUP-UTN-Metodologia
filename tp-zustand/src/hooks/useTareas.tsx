import { useShallow } from "zustand/shallow";
import { tareaStore } from "../store/tareaStore";
import { getAllTareas, createTarea as createTareaAPI, editTarea as editTareaAPI, removeTareaByID } from "../http/tareas";
import type { ITarea } from "../types/iTarea";
import Swal from "sweetalert2";

export const useTareas = () => {
  const { tareas, setTareas, crearTarea, eliminarTarea, editarTarea } =
    tareaStore(
      useShallow((state) => ({
        tareas: state.tareas,
        setTareas: state.setTareas,
        crearTarea: state.addTarea,
        eliminarTarea: state.removeTarea,
        editarTarea: state.editTarea,
      }))
    );

  const getTareas = async () => {
    const data = await getAllTareas();
    if (data) setTareas(data);
  };

  const crearNuevaTarea = async (tarea: ITarea) => {
    crearTarea(tarea);
    try {
      await createTareaAPI(tarea);
      Swal.fire("Éxito", "Tarea creada correctamente", "success");
    } catch (error) {
      eliminarTarea(tarea.id!);
      console.error("Error creating tarea:", error);
      Swal.fire("Error", "No se pudo crear la tarea", "error");
    }
  };

  const editTarea = async (tarea: ITarea) => {
    const prevTarea = tareas.find((t) => t.id === tarea.id);

    editarTarea(tarea);

    try {
      await editTareaAPI(tarea);
      Swal.fire("Éxito", "Tarea editada correctamente", "success");
    } catch (error) {
      if (prevTarea) {
        editarTarea(prevTarea);
      }
      console.error("Error editing tarea:", error);
      Swal.fire("Error", "No se pudo editar la tarea", "error");
    }
  };

  const removeTarea = async (id: String) => {
    const prevTarea = tareas.find((t) => t.id === id);
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!confirm.isConfirmed) {
      return;
    }

    eliminarTarea(id);
    try {
      await removeTareaByID(id);
      Swal.fire("Éxito", "La tarea se eliminó correctamente", "success");
    } catch (error) {
      if (prevTarea) {
        crearTarea(prevTarea);
      }
      console.error("Error removing tarea:", error);
      Swal.fire("Error", "No se pudo eliminar la tarea", "error");
    }
  };

  return {
    getTareas,
    crearNuevaTarea,
    editTarea,
    removeTarea,
    tareas,
  };
};
