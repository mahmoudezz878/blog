import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addPost } from "../actions";

const FormModal = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      auther: "",
      text: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        addPost({
          id: Math.random(),
          title: values.title,
          auther: values.auther,
          text: values.text,
        })
      );
      resetForm();
      setOpen(false);
    },
    validationSchema: Yup.object({
      title: Yup.string().required("this input is required"),
      auther: Yup.string().required("this input is required"),
      text: Yup.string().required("this input is required"),
    }),
  });

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
          <TextField
            error={!!formik.errors.title}
            helperText={formik.errors.title}
            id="title"
            name="title"
            label="Title"
            placeholder="Title"
            variant="standard"
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <TextField
          error={!!formik.errors.auther}
          helperText={formik.errors.auther}
            id="auther"
            name="auther"
            label="Auther"
            placeholder="Auther"
            variant="standard"
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.auther}
            onChange={formik.handleChange}
          />
          <TextField
          error={!!formik.errors.text}
          helperText={formik.errors.text}
            id="text"
            name="text"
            label="Text"
            placeholder="Text"
            variant="standard"
            fullWidth
            onBlur={formik.handleBlur}
            value={formik.values.text}
            onChange={formik.handleChange}
          />
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ margin: "10px" }}
          >
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit} variant="contained">
            Add Card
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModal;
