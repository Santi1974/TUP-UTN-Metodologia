import {
  useEffect,
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import { tareaStore } from "../../../store/tareaStore";
import styles from "./Modal.module.css";
import type { ITarea } from "../../../types/iTarea";
import { useTareas } from "../../../hooks/useTareas";

type IModal = {
  toggleModal: () => void;
};

export const Modal: FC<IModal> = ({ toggleModal }) => {
  const tareaActiva = tareaStore((state) => state.tareaActiva);
  const setTareaActiva = tareaStore((state) => state.setTareaActiva);
  const { editTarea, crearNuevaTarea } = useTareas();

  const initialState: ITarea = {
    id: "",
    title: "",
    description: "",
    fechaLimite: "",
  };

  const [formValues, setFormValues] = useState<ITarea>(initialState);

  useEffect(() => {
    if (tareaActiva) {
      setFormValues(tareaActiva);
    } else {
      setFormValues(initialState);
    }
  }, [tareaActiva]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tareaActiva) {
      editTarea(formValues);
    } else {
      crearNuevaTarea({ ...formValues, id: new Date().toISOString() });
    }
    setTareaActiva(null);
    toggleModal();
  };

  return (
    <div className={styles.modalOverlay} onClick={toggleModal}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>{tareaActiva ? "Editar Tarea" : "Nueva Tarea"}</h3>
          <button 
            className={styles.closeButton} 
            onClick={toggleModal}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              name="title"
              required
              value={formValues.title}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Ingresa el título de la tarea"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              placeholder="Describe los detalles de la tarea"
              rows={4}
              value={formValues.description}
              onChange={handleChange}
              autoComplete="off"
              name="description"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="fechaLimite">Fecha Límite</label>
            <input
              id="fechaLimite"
              type="date"
              name="fechaLimite"
              required
              value={formValues.fechaLimite}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => {
                setTareaActiva(null);
                toggleModal();
              }}
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className={styles.submitButton}
            >
              {tareaActiva ? "Guardar Cambios" : "Crear Tarea"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
