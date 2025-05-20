import axios from "axios";
import type { ITarea } from "../types/iTarea";

const API_URL = "http://localhost:3000/tareas";

export const getAllTareas = async () => {
  try {
    const response = await axios.get<ITarea[]>(API_URL);
    return response.data;
  } catch (error) {
    console.log("Error fetching tareas", error);
  }
};

export const createTarea = async (nuevaTarea: ITarea) => {
  try {
    const response = await axios.post<ITarea>(API_URL, {
      nuevaTarea,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching tareas", error);
  }
};

export const editTarea = async (tareaActualizada: ITarea) => {
  try {
    const response = await axios.put<ITarea>(
      `${API_URL}/${tareaActualizada.id}`,
      {
        tareaActualizada,
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching tareas", error);
  }
};

export const removeTareaByID = async (id: String) => {
  try {
    const response = await axios.delete<ITarea>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching tareas", error);
  }
};
