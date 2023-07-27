import * as yup from 'yup';

export const transportationValidationSchema = yup.object().shape({
  details: yup.string().required(),
  camp_id: yup.string().nullable(),
});
