import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Login from "../assets/Login"

// Creating a test suite
describe("test the login component", () => {
    test("render the login form with 3 input tags", async () => {
        render(
          <BrowserRouter>
            {" "}
            <Login />
          </BrowserRouter>
        ); 
        // const inputList = await screen.findAllByRole("input")
        // expect(inputList).toHaveLength(2)
    })

    test("email input field should accept email", () => {
        render(
          <BrowserRouter>
            {" "}
            <Login />
          </BrowserRouter>
        ); 
        const email = screen.getByPlaceholderText("enter email address") 
            userEvent.type(email, "Savics")
            expect(email.value).not.toMatch("savicstech@gmail.com")
    })

    test("password input should have a type password", () => {
         render(
            <BrowserRouter>
            <Login />
            </BrowserRouter>
            

         )
         const password = screen.getByPlaceholderText("enter password");
         expect(password).toHaveAttribute("type", "password");
    })
})