import React, { useState } from 'react'; // Import React and useState
import Button from '@mui/material/Button'; // Import Button from Material-UI
import Modal from '@mui/material/Modal'; // Import Modal from Material-UI
import Box from '@mui/material/Box'; // Import Box from Material-UI
import Typography from '@mui/material/Typography'; // Import Typography from Material-UI
import { FaPhotoVideo } from 'react-icons/fa'

const CreatePost = () => {
    const [open, setOpen] = useState(false); // Define open state and handleOpen/handleClose functions

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, // Increase the width
        height: 400, // Increase the height
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex justify-between py-1 px-10 items-center'>
                        <p>
                            Create New Post
                        </p>
                        <button className=''>Share</button>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <FaPhotoVideo className='text-3xl' />
                                    <p>Drag Photos Videos Here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default CreatePost;
