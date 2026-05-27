import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "./components/theme-provider.tsx"

import "./index.css"
import App from "./pages/index.tsx"
import SignUp from "./pages/sign-up/index.tsx"
import SignIn from "./pages/sign-in/index.tsx"
import RootLayout from "./pages/layout.tsx"
import CreateTopic from "./pages/topics/create.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="topics/create" element={<CreateTopic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
