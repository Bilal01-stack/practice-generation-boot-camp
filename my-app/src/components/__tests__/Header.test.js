import { render } from "@testing-library/react"
import Header from "../Header"

test("logo should be render in header", ()=>{
   const header = render(<Header />)
})