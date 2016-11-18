# Joi Method's

As well as various methods which specify the type of value you expect (`Joi.number(), Joi.boolean(), Joi.object(), Joi.string()` etc etc etc) Joi comes with a number of methods that allow for more specific validation. Here are some examples!

- `.allow(val)` - whitelists the val. Could be used with Joi.number() to accept certain non-number values
- `.valid(val)` - Similar to .valid, but will ONLY accept values passed to .valid
- `.invalid(val)` - Joi will reject any value passed to invalid.
- `.required()` - Joi will fail to validate if a .required() key doesn't receive a value. 
