import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Login from './pages/Login';

function App() {
  return (
  <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />} />

      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/UserInput" element={<UserInput />} />
      <Route path="/domain" element={<DomainInput />} />
      <Route path="/user" element={<User />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="*" element={<HomePage />} /> */}
    </Routes>
    </BrowserRouter>
</>
  );
};

export default App;
