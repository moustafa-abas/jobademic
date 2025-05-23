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

const NotLogined = () => {
  const { flowOpen ,handleClose,logined} = useStore()
  return (

<Modal
  open={flowOpen}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className='w-full sm:w-1/2 mx-auto'
>
  
  <Box sx={style} className='w-fit text-gray-800'>
{logined?
    <h2>wait</h2>
:<>
<Typography id="modal-modal-title" variant="h6" component="h2" className='text-center'>
you are not logined    </Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>

<div className=" flex justify-center    gap-10 ">
 <a className='w-24 h-10 border-btn flex justify-center items-center capitalize'  href="/register/login">log in</a>
 <a className='w-24 h-10 bg-btn flex justify-center capitalize items-center'  href="/register/sign">sign up</a>
</div>    </Typography></>

  }
  </Box>
</Modal>
  )
}

export default NotLogined
