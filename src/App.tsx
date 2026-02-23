import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './index.css';

function App() {
    return (
        <BrowserRouter basename="/future-guessing-app">
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
