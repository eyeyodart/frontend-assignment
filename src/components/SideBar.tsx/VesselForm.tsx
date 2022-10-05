import React from "react";
import type { FC } from "react";
import { Formik } from "formik";
import {
  Box,
  CircularProgress,
  Grid,
  Drawer,
  makeStyles,
  Theme,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import * as Yup from "yup";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import moment, { now } from "moment";
import { getVesselTracks } from "src/slices/vessel";
import { useDispatch } from "src/store";
import Player from "./Player";
import { VesselFormValues } from "src/types/vesseltrack";
import Chart from "./Chart";

export interface VesselFormProps {
  open: boolean;
  isStatic: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    position: "absolute",
    height: "100%",
    display: "block",
    right: 0,
    top: "48px",
    maxWidth: 500,
    padding: theme.spacing(2),
    opacity: 0.8,
  },
  dateField: {
    paddingInline: theme.spacing(1),
  },
}));

const VesselForm: FC<VesselFormProps> = ({ open, isStatic = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Drawer
      classes={{ paper: classes.drawer }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <Box position="relative">
        <Formik
          enableReinitialize
          initialValues={{
            mmsi: "241486000",
            from_date: moment(now())
              .subtract(1, "day")
              .format("YYYY-MM-DD HH:MM:SS"),
            to_date: moment(now()).format("YYYY-MM-DD HH:MM:SS"),
            daily: isStatic ? true : false,
            submit: null,
          }}
          validationSchema={Yup.object().shape({
            mmsi: Yup.mixed()
              .typeError("Error")
              .required("This is a required field"),
            from_date: Yup.string()
              .required()
              .typeError("This is a required field."),
            to_date: Yup.string()
              .required()
              .typeError("This is a required field."),
          })}
          onSubmit={async (
            values: VesselFormValues,
            { setErrors, setStatus, setSubmitting }
          ) => {
            try {
              values.from_date = moment(values.from_date).format(
                "YYYY-MM-DD HH:MM:SS"
              );
              values.to_date = moment(values.to_date).format(
                "YYYY-MM-DD HH:MM:SS"
              );
              dispatch(
                getVesselTracks(
                  values.mmsi,
                  values.from_date,
                  values.to_date,
                  values.daily
                )
              );
              setStatus({ success: true });
              setSubmitting(false);
            } catch (err: any) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
            setFieldValue,
          }) => (
            <form autoComplete="off" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                  <TextField
                    error={Boolean(touched.mmsi && errors.mmsi)}
                    fullWidth
                    disabled={isSubmitting}
                    helperText={touched.mmsi && errors.mmsi}
                    label={"Search Vessel by MMSI"}
                    name="mmsi"
                    type="text"
                    onBlur={handleBlur}
                    value={values.mmsi}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item container spacing={0} md={12} xs={12}>
                  <Grid className={classes.dateField} item xs={12} md={6}>
                    <KeyboardDateTimePicker
                      inputVariant="outlined"
                      fullWidth
                      label={"Select date from"}
                      format="l"
                      name="from_date"
                      showTodayButton
                      maxDate={moment(now()).subtract(1, "day")}
                      minDate={moment(now()).subtract(191, "days")}
                      value={values.from_date}
                      disabled={isSubmitting}
                      helperText={touched.from_date && errors.from_date}
                      onBlur={handleBlur}
                      onChange={(date) => {
                        setFieldValue("from_date", date);
                      }}
                      error={Boolean(touched.from_date && errors.from_date)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid className={classes.dateField} item xs={12} md={6}>
                    <KeyboardDateTimePicker
                      inputVariant="outlined"
                      fullWidth
                      label={"Select date to"}
                      format="l"
                      name="to_date"
                      showTodayButton
                      maxDate={moment(now())}
                      minDate={moment(now()).subtract(190, "days")}
                      value={values.to_date}
                      disabled={isSubmitting}
                      helperText={touched.to_date && errors.to_date}
                      onBlur={handleBlur}
                      onChange={(date) => {
                        setFieldValue("to_date", date);
                      }}
                      error={Boolean(touched.to_date && errors.to_date)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Grid item>
                  <Button
                    endIcon={
                      isSubmitting ? <CircularProgress size="1rem" /> : null
                    }
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    {"Search"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
      {!isStatic && <Player />}
      <Chart isStatic={isStatic} />
    </Drawer>
  );
};

export default VesselForm;
