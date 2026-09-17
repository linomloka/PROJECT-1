
import {
  Box,
  Button,
  Card,
  Divider,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import somaLogo from './assets/soma-icon.png';

function ForgotPassword() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 3,
        bgcolor: '#f3f3f3',
      }}
    >
      <Card
        component="form"
        onSubmit={(event) => event.preventDefault()}
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 420,
          border: '1px solid #d0d0d0',
          borderRadius: 0,
          backgroundColor: '#f8f8f8',
          overflow: 'hidden',
        }}
      >
        <Stack alignItems="center" sx={{ px: 2, pt: 2.2, pb: 1.3, textAlign: 'center' }}>
          <Typography
            sx={{
              maxWidth: 290,
              color: '#1c2b34',
              fontFamily: 'Georgia, serif',
              fontSize: '17px',
              fontWeight: 700,
              lineHeight: 1.35,
              letterSpacing: '0.02em',
            }}
          >
            DAR-ES-SALAAM INSTITUTE OF
            <Box component="span" sx={{ display: 'block' }}>
              TECHNOLOGY
            </Box>
          </Typography>

          <Box
            component="img"
            src={somaLogo}
            alt="SOMA logo"
            sx={{
              width: 62,
              height: 62,
              mt: 1,
              mb: 0.5,
              objectFit: 'contain',
            }}
          />
        </Stack>

        <Divider sx={{ borderColor: '#d0d0d0' }} />

        <Stack spacing={2.5} sx={{ p: 2.5, pt: 2.3 }}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '17px',
              color: '#1a1a1a',
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            Enter your email to receive a temporary
            <Box component="span" sx={{ display: 'block' }}>
              password.
            </Box>
          </Typography>

          <TextField
            type="email"
            placeholder="Email"
            variant="outlined"
            fullWidth
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailOutlinedIcon sx={{ color: '#4d5a62', fontSize: 22 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#edf5f8',
                borderRadius: 0,
                '& fieldset': {
                  borderColor: '#aab4ba',
                },
              },
              '& input': {
                fontSize: '17px',
                color: '#222',
                padding: '12px 14px',
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              minHeight: 48,
              backgroundColor: '#2a5d74',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 1,
              '&:hover': {
                backgroundColor: '#244d62',
              },
            }}
          >
            Send temporary password
          </Button>

          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            sx={{
              textAlign: 'center',
              color: '#1a1a1a',
              fontSize: '18px',
              fontWeight: 500,
              display: 'block',
            }}
          >
            Back to login
          </Link>
        </Stack>
      </Card>
    </Box>
  );
}

export default ForgotPassword;