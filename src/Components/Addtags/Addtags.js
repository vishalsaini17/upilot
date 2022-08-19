import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Addtags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags"
      options={tags}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
      
        <tr {...props}>

          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 4}}
            checked={selected}
          />
          {option.title}
        </tr>
      )}
      style={{ width: 500, height: 100}}
      renderInput={(params) => (
        <TextField {...params} />
      )}
    />
  );
}
const tags = [
  { title: 'Excellent rapport', num: 1 },
  { title: 'First deal', num: 2 },
  { title: 'Hot prospect', num: 3 },
  { title: 'Inactive', num: 4 },
  { title: 'Large account', num: 5 },
  { title: "Long term", num: 6 },
  { title: 'No potential', num: 7 },
  { title: 'Referral', num: 8 },
  { title: 'Repeated business', num: 9 },
  { title: 'VIP', num: 10 },
];
