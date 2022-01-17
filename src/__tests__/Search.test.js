// * Test * //
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// * Component * //
import Search from '../screens/search';
import Button from '../components/button/Button';

describe('Search Component', () => {
  it('should render Search component', () => {
    render(<Search />);
    expect(screen.getByTestId('search-screen')).toBeInTheDocument();
  });
  // describe('Search Header', () => {
  //   it('should render Search header', () => {
  //     render(<Search />);
  //     expect(screen.getByTestId('search-header')).toBeInTheDocument();
  //   });
  //   it('should render Search header avatar icon', () => {
  //     render(<Search />);
  //     expect(screen.getByTestId('header-avatar')).toBeInTheDocument();
  //   });
  //   it('should render Search header logout icon', () => {
  //     render(<Search />);
  //     expect(screen.getByTestId('logout-icon')).toBeInTheDocument();
  //   });
  // });
  describe('Search Input', () => {
    it('should render Search input', async () => {
      const promise = Promise.resolve();
      render(<Search />);
      const input = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'DaviLemos' } });
      expect(input.value).toBe('DaviLemos');
      await act(() => promise);
    });
  });
  describe('Search Button', () => {
    describe('Repository Button', () => {
      it('should render Search repostory button', () => {
        render(<Search />);
        expect(screen.getByTestId('repository-button')).toBeInTheDocument();
      });
      it('should render Search repostory button click', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} text="Repository" />);

        const button = screen.getByRole('button', {
          name: 'Repository',
        });

        userEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('Starred Button', () => {
      it('should render Search starred button', () => {
        render(<Search />);
        expect(screen.getByTestId('starred-button')).toBeInTheDocument();
      });
      it('should render Search repostory button click', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} text="Starred" />);

        fireEvent.click(screen.getByText(/starred/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
