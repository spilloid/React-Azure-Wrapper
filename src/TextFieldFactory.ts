import { TextField } from '@material-ui/core';

export class TextFieldFactory {
  createTextField(id: string, label: string, type: string = 'text') {
    return (
      <TextField
        key={id}
        id={id}
        label={label}
        type={type}
        margin="normal"
        fullWidth
        required
      />
    );
  }
}

