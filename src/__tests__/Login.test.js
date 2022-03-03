// * Test * //
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// * Component * //
import Login from '../screens/login';

describe('Login Component', () => {
  it('should render Login component', () => {
    render(<Login />);
    expect(screen.getByTestId('login-screen')).toBeInTheDocument();
  });
  describe('Login Button', () => {
    it('should render Login button', () => {
      render(<Login />);
      expect(screen.getByTestId('login-button')).toBeInTheDocument();
    });
    // it('Login button click is working', async () => {
    //   const onClick = jest.fn();
    //   render(<FlexBox onClick={onClick} />);
    //   fireEvent.click(screen.getByTestId('login-screen'));
    //   expect(onClick).toHaveBeenCalledTimes(1);
    // });
  });
  describe('Login Image', () => {
    it('should render Login image', () => {
      render(<Login />);
      expect(screen.getByTestId('login-image')).toBeInTheDocument();
    });
  });
});
