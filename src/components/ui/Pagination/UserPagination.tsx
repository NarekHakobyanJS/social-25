
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { changePage } from '../../../store/slices/usersSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../store/hooks';

export default function UserPagination() {
  const {totalCount, totalPageCount} = useAppSelector((state) => state.usersPage)

  const countPage = Math.round(totalCount/totalPageCount)
  
  const disaptch = useDispatch()

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    disaptch(changePage(value))
  };
  
  return (
    <Stack spacing={2}>
      <Pagination 
        count={countPage} 
        color="primary" 
        onChange={handleChange}
        />
    </Stack>
  );
}