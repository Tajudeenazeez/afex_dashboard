import { render, screen } from '@testing-library/react';
import Header from '../component/Header';


test('render react with demo test', () => {
  render(<Header darkMode={false} handleDarkModeToggle={function (): void {
    throw new Error('Function not implemented.');
  } }/>)

  const headerElement = screen.getByText(/demo/i)
  expect(headerElement).toBeInTheDocument()
})

