
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function UserSkeleton() {
  return (
    <Stack sx={{width : 320, height : 300}} >
      <Skeleton 
      animation="wave" variant="rectangular" width={320} height={300} />
    </Stack>
  );
}