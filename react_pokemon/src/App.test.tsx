import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe , it , expect } from "vitest";
import userEvent from '@testing-library/user-event'
import App from "./App";



describe("Init State" , ()=>{
    it("hogehuga" , ()=> {
        render(<App />)
    })
})