import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import DownloadingIcon from '@mui/icons-material/Downloading';
import LinkIcon from '@mui/icons-material/Link';
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  SvgIcon,
} from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/wikipedia.svg';
import { BLANK_MOVIE_PAGE } from '../../queries/GraphQL/tmdb';
import { WIKIPEDIA_PAGE } from '../../queries/wiki';
import { transformMovieDescription } from './MovieUtils';
import { useLoadWikiDataMutation } from './movieApiSlice';
import { selecteMoviePayload } from './movieSlice';

const MovieList = () => {
  const movieData = useSelector(selecteMoviePayload);
  const [loadWiki, { isLoading }] = useLoadWikiDataMutation();
  const [selectedWikipediaIndex, setSelectedWikipediaIndex] = useState(-1);

  const handleWikipediaClick = (index: number, name: string) => {
    setSelectedWikipediaIndex(index);
    loadWiki({ name, index });
  };

  return (
    <>
      <ImageList
        gap={12}
        sx={{
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))!important',
        }}
      >
        {movieData.map((item, index) => (
          <ImageListItem key={item.id}>
            <img
              src={item.img ? item.img.url : BLANK_MOVIE_PAGE}
              alt={item.name}
              loading='lazy'
            />
            <ImageListItemBar
              title={item.name}
              position='top'
              subtitle={transformMovieDescription(item)}
              actionIcon={
                <Link to={`/related/${item.id}`}>
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                    aria-label={`info about ${item.name}`}
                  >
                    <AddCircleOutline />
                  </IconButton>
                </Link>
              }
            />
            <ImageListItemBar
              title={
                item.wikipediaPageId && (
                  <Link to={`${WIKIPEDIA_PAGE}${item.wikipediaPageId}`}>
                    <LinkIcon className='linkIcon' />
                  </Link>
                )
              }
              subtitle={item.wikipediaContent}
              actionIcon={
                <>
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                    aria-label={`wikipedia ${item.name}`}
                    onClick={() => handleWikipediaClick(index, item.name)}
                  >
                    <SvgIcon className='iconRoot'>
                      {selectedWikipediaIndex === index && isLoading ? (
                        <DownloadingIcon />
                      ) : (
                        <Logo />
                      )}
                    </SvgIcon>
                  </IconButton>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default MovieList;
