import Joi from "joi";
import { trusted } from "mongoose";

class BaseDto {
	static schema = Joi.object({});

	static validate(data) {
		// very specific to joi-code
		// pass data and options..
		const { error, value } = this.schema.validate(data, {
			abortEarly: false,
			stripUnknown: true,
		});

		if (error) {
			const errors = error.details.map((d) => d.message);
			return { errors, value: null };
		}

		return { errors: null, value };
	}
}

export default BaseDto;
