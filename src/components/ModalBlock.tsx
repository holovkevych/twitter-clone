import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import { useStylesSignIn } from '../../pages/SignIn';

interface ModalBlockProps {
  title: string;
  children: React.ReactNode;
  //classes?: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
  onClose: () => void;
}

export const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  onClose,
  visible = false,
  children,
}: ModalBlockProps): React.ReactElement | null => {
  if (!visible) {
    return null;
  }

  return (
    <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <CloseIcon style={{ fontSize: 26 }} color="secondary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
