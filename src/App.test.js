import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./MapWithGeofencing', () => () => <div>Map view</div>);
jest.mock('./Page1', () => () => <div>Geographic map view</div>);
jest.mock('./Page2', () => () => <div>Parallel coordinates view</div>);
jest.mock('./Page3', () => () => <div>Heatmap view</div>);
jest.mock('./Page4', () => () => <div>Theme river view</div>);
jest.mock('./Page5', () => () => <div>Pixel view</div>);
jest.mock('./Page6', () => () => <div>Word cloud view</div>);

test('renders the default map route', () => {
  render(<App />);
  expect(screen.getByText('Map view')).toBeInTheDocument();
});