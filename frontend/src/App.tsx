import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Biography } from "./components/Biography";
import { theme } from "./colors";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <header></header>
        <body>
          <Biography />
        </body>
        <footer></footer>
      </ThemeProvider>
    </>
  );
};
