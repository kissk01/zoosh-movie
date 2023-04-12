import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useQueryParam } from 'use-query-params';
import { searchTermChanged } from '../features/movie/movieSlice';
import { AppDispatch } from '../store';

const Header = () => {
  const [searchTermQuery, setSearchTermQuery] = useQueryParam<string>('q');
  const [searchInputText, setSearchInputText] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(
      searchTermChanged({
        searchTerm: searchTermQuery,
        location: location.pathname,
      })
    );
  }, [searchTermQuery, dispatch, location]);

  const onSearch = () => {
    setSearchTermQuery(searchInputText);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchTermQuery(searchInputText);
    }
  };

  return (
    <Box>
      <AppBar className='header'>
        <Toolbar>
          <Paper>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search'
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => setSearchInputText(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <IconButton type='button' aria-label='search' onClick={onSearch}>
              <SearchIcon />
            </IconButton>
          </Paper>

          <Typography
            className='headerTitle'
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {location.pathname === '/' ? 'Movie Search ' : 'Related movies'}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
