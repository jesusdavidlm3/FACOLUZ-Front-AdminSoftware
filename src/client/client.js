import { httpMethods } from './httpMethods'

const http = new httpMethods()
let token

export async function login(data){
	const res = await http.post('api/login', null, data)
	if(res.status == 200){
		token = res.data.jwt
	}
	return res
}

export async function getAllUsers() {
	return await http.get('api/getAllUsers', token, null)
}

export async function getSearchedUsers(text){
	return await http.get('api/getSearchedUsers', token, text)
}

export async function getSearchedSDeactivatedUsers(text){
	return await http.get('api/getSearchedSDeactivatedUsers', token, text)
}

export async function getDeactivatedUsers() {
	return await http.get('api/getDeactivatedUsers', token, null)
}
export async function getIdUsers(id) {
	return await http.get('api/getIdUsers', token, id)
}

export async function createUser(data) {
	return await http.post('api/createUser', token, data)
}

export async function deleteUser(id){
	return await http.delete('api/deleteUser', token, id)
}

export async function reactivateUser(id){
	return await http.patch('api/reactivateUser', token, id)
}

export async function changePassword(data) {
	return await http.patch('api/changePassword', token, data)
}

export async function changeUserType(data) {
	return await http.patch('api/changeUserType', token, data)
}

export async function getAllChangeLogs() {
	return await http.get('api/getAllChangeLogs', token, null)
}