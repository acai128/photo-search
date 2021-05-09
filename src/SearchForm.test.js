import React from 'react'; 
import { render, fireEvent } from '@testing-library/react'; 
import SearchForm from './SearchForm'; 

it("renders correctly", () => {
  const {queryByTestId, queryByPlaceholderText} = render(<SearchForm />)

  expect(queryByTestId("search-button")).toBeTruthy 
  expect(queryByPlaceholderText("Search")).toBeTruthy 
})

test('fireEvent', () => {
  const { getByText } = render(<SearchForm />);
  const search = getByText('Search');
  fireEvent.click(search);
});