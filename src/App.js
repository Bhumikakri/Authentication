import "./App.css";
import Register from "./Component/Register";
import AuthProvider from "./Context/AuthProvider";
import firbase from './firebase';

function App() {

  return (
    <>
      <AuthProvider>
        <Register />
      </AuthProvider>
    </>
  );
}

export default App;
