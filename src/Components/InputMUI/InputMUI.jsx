import { Box, FormControl, InputAdornment, TextField } from "@mui/material";

const InputMUI = ({ label, id, placeholder, startIcon, endIcon, InputProps, ...restProps }) => {
  return (
    <FormControl fullWidth sx={{ position: 'relative', zIndex: 99999 }}>
      <Box component={'label'} htmlFor={id} sx={{display: 'block', lineHeight: '24px', mb: '2px', color: '#A9A9AF', }}>{label}</Box>
      <TextField
        id={id}
        InputProps={{
          startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
          endAdornment: endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>,
          ...InputProps
        }}
        placeholder={placeholder}
        {...restProps}
      />
    </FormControl>
  );
}

export default InputMUI;