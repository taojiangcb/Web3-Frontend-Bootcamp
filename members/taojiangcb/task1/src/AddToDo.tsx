import Paper from '@mui/material/Paper';

import { IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material'
interface Props {
}

const AddToDo: React.FC<Props> = (props) => {
  return <div>
    <Paper>


      {/* <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Google Maps"
      inputProps={{ 'aria-label': 'search google maps' }}
    /> */}
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  </div>
}

export default AddToDo;