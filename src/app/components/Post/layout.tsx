import styles from './layout.module.css'

type LayoutProps={
  children : React.ReactNode
}

export default function Layout({ children }:LayoutProps) {
  return (
    <div className={styles.container}>
      {children}
      <header className={styles.header}>
      </header>
    </div>
  );
}