import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>My React Project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Develope by M.KH</p>
      </footer>
    </div>
  )
}

export default Layout
