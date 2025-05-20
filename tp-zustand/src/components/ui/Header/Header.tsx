import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <span className={styles.logoIcon}>📝</span>
          <h1 className={styles.title}>Task Manager</h1>
        </div>
        <p className={styles.subtitle}>Organiza tus tareas de manera eficiente</p>
      </div>
    </header>
  );
};
