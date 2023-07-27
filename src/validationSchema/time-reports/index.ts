import * as yup from 'yup';

export const timeReportValidationSchema = yup.object().shape({
  details: yup.string().required(),
  user_id: yup.string().nullable(),
});
