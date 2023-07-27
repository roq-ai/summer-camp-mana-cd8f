import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  details: yup.string().required(),
  camp_id: yup.string().nullable(),
});
