import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/Routes';
import Layout from "./components/layout/Layout";
import "../src/assets/styles/global.css"


function App() {


  return (
    <Layout>
      <Routes>
        {
          routes && routes.map((item, key) => {
            return <Route key={key} path={item.path} element={item.element} />
          })
        }
      </Routes>
    </Layout>
  )
}

export default App
