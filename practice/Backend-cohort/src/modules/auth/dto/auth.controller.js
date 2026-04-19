import * as authService from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

const register = async () => {
	const user = await authService.register(req.body)
	ApiResponse.created(res, "Registration success", user)
}


const login = async () => {

}

export {register}
