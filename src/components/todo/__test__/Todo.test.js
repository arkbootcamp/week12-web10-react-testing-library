import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import Todo from '../index'

describe("komponent todo", ()=>{
  beforeEach(()=>{
    render(<Todo />)
  })

  test("kompoent todo di render", ()=>{
    const buttonElement = screen.getByRole('button', {name: 'Add'})
    expect(buttonElement).toBeInTheDocument()
    const inputElement = screen.getByPlaceholderText("masukan nama anda")
    expect(inputElement).toBeInTheDocument()
  })
  // test("seharusnya ketika inputnya di onchenge 'risano' makan value inputnya 'risano'", ()=>{
  //   const inputElement = screen.getByPlaceholderText("masukan nama anda")
  //   fireEvent.change(inputElement, {target: {value: 'risano akbar'}})
  //   expect(inputElement.value).toBe('risano akbar')
  // })
  // test("seharusnya ketika button di click value di input menjadi kosong", () => {
  //   const inputElement = screen.getByPlaceholderText("masukan nama anda")
  //   fireEvent.change(inputElement, { target: { value: 'risano akbar' } })
  //   const buttonElement = screen.getByRole('button', { name: 'Add' })
  //   fireEvent.click(buttonElement)
  //   expect(inputElement.value).toBe('')
  // })
  // test("seharusnya ketika inputnya di onchenge 'risano'  dan saya klik add makan value inputnya 'risano' ada di list", () => {
  //   const inputElement = screen.getByPlaceholderText("masukan nama anda")
  //   fireEvent.change(inputElement, { target: { value: 'muhammad risano' } })
  //   const buttonElement = screen.getByRole('button', { name: 'Add' })
  //   fireEvent.click(buttonElement)
  //   const listElement = screen.getByRole("listitem")
  //   expect(listElement.textContent).toBe('muhammad risano')
  // })
  // test("seharusnya ketika inputnya di 2 pekerjaan paka keterangnanya juga 2 pekerjaan", () => {
  //   const inputElement = screen.getByPlaceholderText("masukan nama anda")
  //   const buttonElement = screen.getByRole('button', { name: 'Add' })
  //   const keteranganElement = screen.getByTestId("ket")

  //   fireEvent.change(inputElement, { target: { value: 'muhammad risano' } })
  //   fireEvent.click(buttonElement)
  //   fireEvent.change(inputElement, { target: { value: 'muhammad risano' } })
  //   fireEvent.click(buttonElement)

  //   expect(keteranganElement.textContent).toBe('jumlah pekerjaan saya = 2')
  // })
  // test("seharusnya ketika inputnya", () => {
  //   const inputElement = screen.getByPlaceholderText("masukan nama anda")
  //   const buttonElement = screen.getByRole('button', { name: 'Add' })
    
  //   fireEvent.change(inputElement, { target: { value: 'muhammad risano' } })
  //   fireEvent.click(buttonElement)
  //   fireEvent.change(inputElement, { target: { value: 'muhammad risano' } })
  //   fireEvent.click(buttonElement)

  //   const listElement = screen.getAllByRole("listitem")

  //   expect(listElement.length).toBe(2)
  // })

    test("seharusnya ketika inputnya di onchenge 'risano'  dan saya klik add makan value inputnya 'risano' ada di list", async() => {
    const inputElement = screen.getByPlaceholderText("masukan nama anda")
    fireEvent.change(inputElement, { target: { value: 'muhammad risano' } })
    const buttonElement = screen.getByRole('button', { name: 'Add' })
    fireEvent.click(buttonElement)
      // await screen.findByTestId("listdata")
      // eslint-disable-next-line testing-library/await-async-utils
      // eslint-disable-next-line no-undef
      const listElement = await screen.findByRole("listitem", undefined, {timeout: 4000})
      // const 
      expect(listElement.textContent).toBe('muhammad risano')
      // assertion(1)
      // await waitFor(() =>{ 
      // const listElement =  screen.getByRole("listitem")
      // expect(listElement.textContent).toBe('muhammad risano')
      // }, { timeout: 4000 })
  })
})