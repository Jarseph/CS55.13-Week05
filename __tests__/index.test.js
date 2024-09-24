import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

const allData = [
  { 
    "name": "Jane Coder",
    "id": 1
  },{ 
    "name": "Fred Coder",
    "id": 2
  }
];

describe('Home', () => {
  // test a static heading
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /List of Names/i,
    })

    expect(heading).toBeInTheDocument()
  });
  // test a dynamic element rendered by json
  it('renders a link', () => {
    render(<Home allData={allData} />);

    const aLink = screen.getByRole('link', {
      name: /Jane Coder/i,
    });

    expect(aLink).toBeInTheDocument()
  });
})