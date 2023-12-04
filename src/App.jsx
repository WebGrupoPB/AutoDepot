import { Routes, Route } from "react-router-dom";

let App = () => (
    <div>
      <Routes>
        <Route path="/my-route" element={<MyRoute />} />
      </Routes>
    </div>
  );
  
  let MyRoute = () => {
    return <p>Hello!</p>;
  };

export default App;