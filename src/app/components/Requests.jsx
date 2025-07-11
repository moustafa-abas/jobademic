"use client"

import { useStore } from '../store/store';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none', // ✅ تشيل الـ outline هنا
  borderRadius: '12px',

};

const Requests = () => {
  const { flowOpen ,handleClose,logined,process,setProcess} = useStore()

  return (

<Modal
  open={flowOpen}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full sm:w-1/2 mx-auto'
>
  
  <Box sx={style} className='w-fit text-gray-800'>
{process==='done'?
    <h2>wait</h2>
:<>

<Typography id="modal-modal-description" sx={{ mt: 2 }}>

<div className=" flex justify-center  capitalize  gap-10 ">
process complected done
</div>    </Typography></>

  }
  </Box>
</Modal>
  )
}

export default Requests
