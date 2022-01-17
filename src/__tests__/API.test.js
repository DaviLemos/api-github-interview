// * Test * //
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// * Component * //
import Search from '../screens/search';
import Button from '../components/button/Button';
// * API * //
import { userProfile, repository, starred } from '../api/API';

jest.mock('../api/API');

const mockUserProfile = {
  avatar: 'https://avatars.githubusercontent.com/u/48958244?v=4',
  followers: 9,
  following: 7,
  id: 48958244,
  login: 'DaviLemos',
  name: 'Davi Teixeira',
  repos: 24,
  url: 'https://github.com/DaviLemos',
};

const mockRepository = [
  {
    id: 446191568,
    name: 'api-github-interview',
    url: 'https://github.com/DaviLemos/api-github-interview',
  },
  {
    id: 425087833,
    name: 'Autenticacao-JWT-Context-Router-Youtube',
    url: 'https://github.com/DaviLemos/Autenticacao-JWT-Context-Router-Youtube',
  },
  {
    id: 180587098,
    name: 'CalculadoraCidadao',
    url: 'https://github.com/DaviLemos/CalculadoraCidadao',
  },
  {
    id: 424746841,
    name: 'Chrome-DevTools-Alura',
    url: 'https://github.com/DaviLemos/Chrome-DevTools-Alura',
  },
  {
    id: 311524229,
    name: 'Frontend',
    url: 'https://github.com/DaviLemos/Frontend',
  },
  {
    id: 424746913,
    name: 'HTML5-CSS3-Parte1-Alura',
    url: 'https://github.com/DaviLemos/HTML5-CSS3-Parte1-Alura',
  },
  {
    id: 424747015,
    name: 'HTML5-CSS3-Parte2-Alura',
    url: 'https://github.com/DaviLemos/HTML5-CSS3-Parte2-Alura',
  },
  {
    id: 424747196,
    name: 'HTML5-CSS3-Parte3-Alura',
    url: 'https://github.com/DaviLemos/HTML5-CSS3-Parte3-Alura',
  },
  {
    id: 424747259,
    name: 'HTML5-CSS3-Parte4-Alura',
    url: 'https://github.com/DaviLemos/HTML5-CSS3-Parte4-Alura',
  },
  {
    id: 424747323,
    name: 'JS-IndexedDB-Alura',
    url: 'https://github.com/DaviLemos/JS-IndexedDB-Alura',
  },
  {
    id: 424747414,
    name: 'JS-MVC-Proxy-Factory-Alura',
    url: 'https://github.com/DaviLemos/JS-MVC-Proxy-Factory-Alura',
  },
  {
    id: 424747844,
    name: 'JS-Padroes-Projeto-Alura',
    url: 'https://github.com/DaviLemos/JS-Padroes-Projeto-Alura',
  },
  {
    id: 424747902,
    name: 'JS-Web-Alura',
    url: 'https://github.com/DaviLemos/JS-Web-Alura',
  },
  {
    id: 424748002,
    name: 'React-Class-Alura',
    url: 'https://github.com/DaviLemos/React-Class-Alura',
  },
  {
    id: 424748084,
    name: 'React-Hooks-Alura',
    url: 'https://github.com/DaviLemos/React-Hooks-Alura',
  },
  {
    id: 425086765,
    name: 'React-Material-UI-Clone-Youtube',
    url: 'https://github.com/DaviLemos/React-Material-UI-Clone-Youtube',
  },
  {
    id: 424748341,
    name: 'React-Router-Alura',
    url: 'https://github.com/DaviLemos/React-Router-Alura',
  },
  {
    id: 424725899,
    name: 'React-Teste-Alura',
    url: 'https://github.com/DaviLemos/React-Teste-Alura',
  },
  {
    id: 424730176,
    name: 'Rest-NodeJS-Alura',
    url: 'https://github.com/DaviLemos/Rest-NodeJS-Alura',
  },
  {
    id: 424748417,
    name: 'Sass-Project-Alura',
    url: 'https://github.com/DaviLemos/Sass-Project-Alura',
  },
  {
    id: 429136446,
    name: 'Squad-1-Login-Screen',
    url: 'https://github.com/DaviLemos/Squad-1-Login-Screen',
  },
  {
    id: 413149491,
    name: 'squad2Project',
    url: 'https://github.com/DaviLemos/squad2Project',
  },
  {
    id: 424748563,
    name: 'Styled-Components-Alura',
    url: 'https://github.com/DaviLemos/Styled-Components-Alura',
  },
  {
    id: 409600548,
    name: 'Training',
    url: 'https://github.com/DaviLemos/Training',
  },
];

const mockStarred = [
  {
    id: 435280590,
    name: 'Portfolio_React',
    url: 'https://github.com/Eduardo-SBorges/Portfolio_React',
  },
];

const mockNoRepository = [];

describe('Screen Searc', () => {
  describe('Git Profile Datas', () => {
    it('Have Profile Image', async () => {
      userProfile.mockResolvedValue(mockUserProfile);

      render(<Search />);

      const input = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'DaviLemos' } });
      fireEvent.focusOut(input);

      await waitFor(() =>
        expect(screen.getByTestId('git-profile-image')).toBeInTheDocument()
      );
    });
    it('Have Profile Name, Followers and Following', async () => {
      userProfile.mockResolvedValue(mockUserProfile);

      render(<Search />);

      const input = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'DaviLemos' } });
      fireEvent.focusOut(input);

      await waitFor(
        () => (
          expect(screen.getByText('Davi Teixeira')).toBeInTheDocument(),
          expect(screen.getByText('9 Followers')).toBeInTheDocument(),
          expect(screen.getByText('7 Following')).toBeInTheDocument()
        )
      );
    });
  });
  describe('Git Repositories', () => {
    it('Have Repositories List', async () => {
      userProfile.mockResolvedValue(mockUserProfile);
      repository.mockResolvedValue(mockRepository);

      render(<Search />);

      const input = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'DaviLemos' } });
      fireEvent.focusOut(input);

      const repository_button = screen.getByTestId('repository-button');

      fireEvent.click(repository_button);

      await waitFor(() =>
        expect(screen.getByTestId('repository-list')).toBeInTheDocument()
      );
    });

    it('Have squad2Project Repository', async () => {
      userProfile.mockResolvedValue(mockUserProfile);
      repository.mockResolvedValue(mockRepository);

      render(<Search />);

      const input = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'DaviLemos' } });
      fireEvent.focusOut(input);

      const repository_button = screen.getByTestId('repository-button');

      fireEvent.click(repository_button);

      await waitFor(() =>
        expect(screen.getByText('squad2Project')).toBeInTheDocument()
      );
    });
  });

  describe('Git Starred', () => {
    it('Have Starred List', async () => {
      userProfile.mockResolvedValue(mockUserProfile);
      starred.mockResolvedValue(mockStarred);

      render(<Search />);

      const input = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'DaviLemos' } });
      fireEvent.focusOut(input);

      const starred_button = screen.getByTestId('starred-button');

      fireEvent.click(starred_button);

      await waitFor(() =>
        expect(screen.getByTestId('starred-list')).toBeInTheDocument()
      );
    });

    it('Have Portfolio_React Repository', async () => {
      userProfile.mockResolvedValue(mockUserProfile);
      starred.mockResolvedValue(mockStarred);

      render(<Search />);

      const input = screen.getByTestId('search-input');

      fireEvent.change(input, { target: { value: 'DaviLemos' } });
      fireEvent.focusOut(input);

      const starred_button = screen.getByTestId('starred-button');

      fireEvent.click(starred_button);

      await waitFor(() =>
        expect(screen.getByText('Portfolio_React')).toBeInTheDocument()
      );
    });
  });
});
