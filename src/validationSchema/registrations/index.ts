import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
  details: yup.string().required(),
  user_id: yup.string().nullable(),
  camp_id: yup.string().nullable(),
});
