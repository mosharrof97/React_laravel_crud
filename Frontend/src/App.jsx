import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Form from "./component/form";
import List from "./component/list";
import Edit from "./component/edit";
import View from "./component/view";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Form />} />
        <Route path="list" element={<List />} />
        <Route path="edit" element={<Edit />} />
        <Route path="view" element={<View />} />

        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
