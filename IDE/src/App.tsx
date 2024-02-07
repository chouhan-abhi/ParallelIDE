import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect } from 'react';
import LayoutContainer from './components/LayoutComponents/layoutContainer';
import { subscribeToDisplayedConsole } from './utility/utility';

function App() {
  useEffect(() => subscribeToDisplayedConsole(), []);
  return (
    <>
      <LayoutContainer />
    </>
  )
}

export default App
