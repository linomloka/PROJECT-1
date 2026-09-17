import {
    Box,
    Button,
    Card,
    Checkbox,
    Divider,
    FormControlLabel,
    InputAdornment,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import somaLogo from './assets/soma-icon.png';


function SignIn() {
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                py: 3,
                boxSizing: 'border-box',
                bgcolor: '#f7f9fa',
            }}
        >
            <Card
                component="form"
                onSubmit={(event) => event.preventDefault()}
                elevation={1}
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    border: '1px solid #d8d8d8',
                    borderRadius: 1,
                    bgcolor: '#fff',
                    overflow: 'hidden',
                }}
            >
                <Stack
                    alignItems="center"
                    spacing={1.25}
                    sx={{ px: 2, pt: 1.5, pb: 2.25, textAlign: 'center' }}
                >
                    <Typography
                        sx={{
                            maxWidth: 290,
                            color: '#29435b',
                            fontFamily: 'Georgia, serif',
                            fontSize: 16,
                            fontWeight: 700,
                            lineHeight: 1.45,
                        }}
                    >
                        DAR-ES-SALAAM INSTITUTE OF TECHNOLOGY
                    </Typography>
                    <Box
                        component="img"
                        src={somaLogo}
                        alt="SOMA logo"
                        sx={{ width: 64, height: 64, objectFit: 'contain', margin: 'auto' }}
                    />
                    <Typography
                        sx={{ color: '#29435b', fontFamily: 'Georgia, serif', fontSize: 16 }}
                    >
                        SOMA
                    </Typography>
                </Stack>

                <Divider />

                <Stack spacing={2} sx={{ p: 2.5 }}>
                    <TextField
                        type="email"
                        placeholder="Email address"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <EmailOutlinedIcon sx={{ color: '#3d4c59', fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        type="password"
                        placeholder="Password"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <VisibilityOffOutlinedIcon sx={{ color: '#3d4c59', fontSize: 20 }} />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ minHeight: 32, display: 'flex', justifyContent: 'space-between' }}
                    >
                        <FormControlLabel
                            control={<Checkbox size="small" sx={{ p: 0.5, mr: 0.5 }} />}
                            label="Remember Me"
                            sx={{
                                m: 0,
                                '& .MuiFormControlLabel-label': {
                                    color: '#111',
                                    fontSize: 14,
                                    fontWeight: 700,
                                },
                            }}
                        />
                        <Link component={RouterLink} to="/forgot-password" underline="hover" sx={{ color: '#35637c', fontSize: 14 }}>
                            Forgot password?
                        </Link>
                    </Stack>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            minHeight: 39,
                            bgcolor: '#17a2b8',
                            textTransform: 'none',
                            fontSize: 15,
                            '&:hover': { bgcolor: '#138496' },
                        }}
                    >
                        Sign In
                    </Button>

                    <Divider sx={{ color: '#666', fontSize: 14 }}>Don't have an account?</Divider>

                    <Button
                        type="button"
                        variant="contained"
                        sx={{
                            minHeight: 39,
                            bgcolor: '#315c72',
                            textTransform: 'none',
                            fontSize: 15,
                            '&:hover': { bgcolor: '#26495b' },
                        }}
                    >
                        Register
                    </Button>
                </Stack>
            </Card>

            <Typography sx={{ mt: 1.5, color: '#111', fontSize: 13 }}>
                &#169; 2026 SOMA
            </Typography>
        </Box>
    );
}

export default SignIn;