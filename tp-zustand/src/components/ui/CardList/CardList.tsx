import type { FC } from "react";
import type { ITarea } from "../../../types/iTarea";
import styles from "./CardList.module.css";
import { useTareas } from "../../../hooks/useTareas";

type ICardList = {
  tarea: ITarea;
  handleOpenModalEdit: (tarea: ITarea) => void;
};

export const CardList: FC<ICardList> = ({ tarea, handleOpenModalEdit }) => {
  const { removeTarea } = useTareas();

  const eliminarTarea = () => {
    removeTarea(tarea.id!);
  };

  const editarTarea = () => {
    handleOpenModalEdit(tarea);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.taskHeader}>
          <h3>{tarea.title}</h3>
          <div className={styles.taskActions}>
            <button 
              className={styles.editButton} 
              onClick={editarTarea}
              aria-label="Editar tarea"
            >
              ✏️
            </button>
            <button 
              className={styles.deleteButton} 
              onClick={eliminarTarea}
              aria-label="Eliminar tarea"
            >
              🗑️
            </button>
          </div>
        </div>
        
        <p className={styles.description}>{tarea.description}</p>
        
        <div className={styles.taskFooter}>
          <span className={styles.deadline}>
            <span className={styles.deadlineIcon}>⏰</span>
            {tarea.fechaLimite}
          </span>
        </div>
      </div>
    </div>
  );
};
