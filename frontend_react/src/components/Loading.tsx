import { Backdrop, CircularProgress, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function Loading({ open }: { open: boolean }) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Stack spacing={2} direction="column" alignItems="end" justifyContent="end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <img src="/static/assets/logo-tp_grayscale.png" alt="logo" width="100" />
        </motion.div>
        <div>
          <CircularProgress color="inherit" sx={{ mx: 2 }} />
          Cargando...
        </div>
      </Stack>
    </Backdrop>
  );
}
