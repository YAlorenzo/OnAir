import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


function PaginationRounded({ totalPages, page, fetch, genreId}) {
  const dispatch = useDispatch();
  const { name } = useParams();
  const handlePageChange = (event, newPage) => {
    const searchParams = {
      query: name, 
      genreId,
      page: newPage
    }
    dispatch(fetch(searchParams));

    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });

  };
  return (
    <div className='flex justify-center mt-10 sm:mt-16 text-white'>
       <Stack spacing={2} >
        <Pagination count={totalPages} page={page} onChange={handlePageChange} variant="outlined" shape="rounded"
          sx={{
             '& .MuiPaginationItem-root': {
               color: 'white',
              borderColor: 'white',
               
             },
             '& .Mui-selected': {
               color: '#E13C52',
               borderColor: '#E13C52',
               
             },
           }}/>
       </Stack>
    </div>
  )
}

PaginationRounded.propTypes = {
  totalPages: PropTypes.number,
  page: PropTypes.number, 
  fetch: PropTypes.func,
  genreId: PropTypes.number
}

export default PaginationRounded