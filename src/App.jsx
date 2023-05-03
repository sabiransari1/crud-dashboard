import { AllRoutes } from "./components/AllRoutes";
import { Navbar } from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <DIV>
      <div>
        <Navbar />  
      </div>
      <AllRoutes />
    </DIV>
  );
}

export default App;

const DIV = styled.div`
  margin-top: -10px;
`;
