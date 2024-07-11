import { getUser,updateUser,deleteUser } from "../../../controllers/userController.js";

const getMethod = async (req, res) => {
	getUser(req, res);
};

const updateMethod = (req, res) => {
	updateUser(req, res);
};

const deletetMethod = (req, res) => {
	deleteUser(req, res);
};

export default function handler(req, res) {
	const method = req.method;

	if (method === "GET") {
		getMethod(req, res);
	}

	if (method === "PUT" || method === "UPDATE") {
		updateMethod(req, res);
	}

	if (method === "DELETE") {
		deletetMethod(req, res);
	}
}
