import http from 'node:http'
import {env} from './env.js'
import { error } from 'node:console'
async function main(){
	try {
		const server = http.createServer()
		const PORT:number = env.PORT ? +env.PORT : 1104

		server.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`)
		})
	}
	catch(e) {
		throw error(e)
	}
}
