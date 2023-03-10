import { useState } from 'react';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

import './styles/content.scss';
import './styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
