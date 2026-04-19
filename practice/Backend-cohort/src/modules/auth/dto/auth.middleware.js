import ApiError from "../../../common/utils/api-error";

import User from "../auth/auth.model.js";

const authenticate = async (req, res, next) => {
	let token;
	if (req.headers.authorization?.startsWith("Bearer")) {
		token = req.headers.authorization.split(" ")[1];
	}

	if (!token) throw ApiError.unauthorized("Not authenticated");
};




export { authenticate };
