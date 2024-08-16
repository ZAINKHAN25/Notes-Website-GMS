import { Box } from "@chakra-ui/react";
import StudentHome from "./StudentHome.jsx";

function App() {
  return (
    <Box
      w={"100vw"}
      minH={"100vh"}
      overflowX={"hidden"}
    >
        <StudentHome />
    </Box>
  );
}

export default App;