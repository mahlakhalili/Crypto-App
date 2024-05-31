import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <h1>Crypto App</h1>
        <p>My React Project</p>
      </header>
      {children}
      <footer>
        
      </footer>
    </div>
  )
}

export default Layout
