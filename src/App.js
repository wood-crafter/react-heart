import './App.css';
import { Login, Heart } from '../src/views'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { RequireAuth } from './components'
import { AuthProvider } from './providers/use-auth'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={(
          <RequireAuth>
            <Heart />
          </RequireAuth>
        )} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <div className='App'>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
