import Joi from "@hapi/joi";

//Register Validation
export const registerValidation = (data) => {
  const registerSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string()
      .min(6)
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().min(6).required(),
    everything: Joi.array(),
  });
  return registerSchema.validate(data);
};

export const loginValidation = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return loginSchema.validate(data);
};
