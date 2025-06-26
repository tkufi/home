import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
// import { ImageButton } from '@mui/material';
import Button from '@mui/material/Button';

interface ImageBackdropButtonProps {
  index: number;
  imgSrc: string;
}

const ImageBackdropButton: React.FC<ImageBackdropButtonProps> = ({ index, imgSrc }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        style={{
          padding: 0,
          border: 'none',
          background: 'none',
          width: '100%',
          cursor: 'pointer',
        }}
        type="button"
        onClick={handleOpen}
      >
        <img src={imgSrc} alt={`Image ${index + 1}`} style={{ width: '100%', borderRadius: '4px', display: 'block' }} />
      </Button>

      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >

        <img src={imgSrc} alt={`Image ${index + 1}`} style={{ maxWidth: '90%', maxHeight: '90%' }} />
      </Backdrop>
    </div>
  );
}

export default ImageBackdropButton;