import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Login from "./assets/Login";

test("render login component in the document", () => {
  act(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});

