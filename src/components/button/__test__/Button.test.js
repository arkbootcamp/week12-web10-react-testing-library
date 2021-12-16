import {render, screen, fireEvent} from '@testing-library/react'
import Button from '../index'

test("seharusnya komponent button dirender didalam document", ()=>{
  const {getByText, getByRole} = render(<Button title="simpan"/>)
  // screen.getByText
  const buttonElement = getByRole('button', {name: 'simpan'})
  expect(buttonElement).toBeInTheDocument()
})
test("seharusnya jika title 'simpan' maka nama button simpan", ()=>{
  const { getByRole } = render(<Button title="simpan" />)
  // screen.getByText
  const buttonElement = getByRole('button', {name: 'simpan'})
  expect(buttonElement.ls
  ).toBe('simpan')
})
test("seharusnya jika buttonnya di click maka function onClick di panggil", () => {
  const handleClick = jest.fn();
  render(<Button title="simpan" onClick={handleClick} />)
  const buttonElement = screen.getByRole('button', { name: 'simpan'})
  // fireEvent.click(buttonElement)
  fireEvent.click(buttonElement)
  expect(handleClick).toBeCalledTimes(1)
})

