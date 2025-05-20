import { useEffect, useState } from "react";
import { tareaStore } from "../../../store/tareaStore";
import styles from "./ListTareas.module.css";
import { CardList } from "../CardList/CardList";
import { Modal } from "../Modal/Modal";
import type { ITarea } from "../../../types/iTarea";
import { useTareas } from "../../../hooks/useTareas";

export const ListTareas = () => {
  const [openModal, setOpenModal] = useState(false);
  const setTareaActiva = tareaStore((state) => state.setTareaActiva);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenModalEdit = (tarea: ITarea) => {
    setTareaActiva(tarea);
    setOpenModal(true);
  };

  const { tareas, getTareas } = useTareas();

  useEffect(() => {
    getTareas();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2>Mis Tareas</h2>
          <p className={styles.subtitle}>Gestiona tus tareas pendientes</p>
        </div>
        <button className={styles.addButton} onClick={toggleModal}>
          <span className={styles.plusIcon}>+</span>
          Nueva Tarea
        </button>
      </div>

      <div className={styles.taskList}>
        {tareas.length > 0 ? (
          <div className={styles.taskGrid}>
            {tareas.map((tarea) => (
              <CardList
                key={tarea.id}
                handleOpenModalEdit={handleOpenModalEdit}
                tarea={tarea}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📝</div>
            <h3>No hay tareas pendientes</h3>
            <p>¡Comienza agregando una nueva tarea!</p>
          </div>
        )}
      </div>

      {openModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
};
