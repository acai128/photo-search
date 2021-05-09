import React from 'react'; 
import { render, screen, fireEvent, getByDisplayValue, getByTestId } from '@testing-library/react'; 
import ImageUpload from './ImageUpload'; 
import user from '@testing-library/user-event'

describe('<ImageUpload />', () => {
  it('renders correctly', () => {
    render(<ImageUpload />); 
  }); 
}); 

test("should upload the file", () => {
  const file = new File(["hello"], "hello.png", { type: "image/png" })
  render(<input type="file" data-testid="choose_file" />)

  const input = screen.getByTestId("choose_file")
  user.upload(input, file)

  expect(input.files[0]).toStrictEqual(file)
  expect(input.files).toHaveLength(1)
})