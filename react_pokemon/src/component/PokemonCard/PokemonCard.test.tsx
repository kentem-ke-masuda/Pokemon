import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe , it , expect } from "vitest";
import userEvent from '@testing-library/user-event'
import PokemonCard from './PokemonCard';

describe("Init State" , ()=>{
    it("hogehuga" , async ()=> {
        render(<PokemonCard detailURL="https://husigidane"/>)

        const name = await screen.findByRole("heading",{name:"フシギダネ"})
        const weight = await screen.findByRole("paragraph")
        const height = await screen.findByRole("paragraph")
        const type1 = await screen.findByRole("paragraph")
        const type2 = await screen.findByRole("paragraph")
        const ability = await screen.findByRole("paragraph")
        expect(name).toBeInTheDocument()
        
    })
})