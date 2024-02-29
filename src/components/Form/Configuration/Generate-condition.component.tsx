import { Add } from "@mui/icons-material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { StyledButton } from "../../../assets/style";

export function CreateCondition() {
  const theme = useTheme();
  const [conditions, setConditions] = useState([
    { type: "", operator: "is", value: "" },
  ]);

  const addCondition = () => {
    setConditions([...conditions, { type: "", operator: "is", value: "" }]);
  };

  const handleChange = (index, key, value) => {
    const updatedConditions = [...conditions];
    updatedConditions[index][key] = value;
    setConditions(updatedConditions);
  };

  const removeCondition = (index) => {
    const updatedConditions = [...conditions];
    updatedConditions.splice(index, 1);
    setConditions(updatedConditions);
  };
  return (
    <>
      <Container maxWidth="sm">
        {conditions.map((condition, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={5}
            paddingTop={theme.spacing(4)}
            justifyContent="center"
          >
            <TextField
              variant="outlined"
              label="Condition"
              size="small"
              autoComplete="off"
              value={condition.type}
              onChange={(e) => handleChange(index, "type", e.target.value)}
            />
            <FormControl variant="outlined" sx={{ minWidth: 150 }} size="small">
              <InputLabel id={`${index}-condition-label`}>Condition</InputLabel>
              <Select
                labelId={`${index}-condition-label`}
                label="Condition"
                value={condition.operator}
                onChange={(e) =>
                  handleChange(index, "operator", e.target.value)
                }
              >
                <MenuItem value="is">is</MenuItem>
                <MenuItem value="isNot">is not</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              label="Value"
              size="small"
              value={condition.value}
              autoComplete="off"
              onChange={(e) => handleChange(index, "value", e.target.value)}
            />
            <IconButton
              size="small"
              onClick={() => removeCondition(index)}
              color="error"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
          </Stack>
        ))}
        <Box textAlign="center" marginTop={theme.spacing(6)}>
          <StyledButton
            disableElevation
            variant="text"
            startIcon={<Add />}
            onClick={addCondition}
          >
            Add Condition
          </StyledButton>
        </Box>
      </Container>
    </>
  );
}
