import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LAYOUT_ROUTES } from "./routing/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {LAYOUT_ROUTES.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
