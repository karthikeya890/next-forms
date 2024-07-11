import {getAllUsers,updateAllUsers,deleteAllUsers,createUser,} from "../../../controllers/userController.js";

const getAllMethod = async (req, res) => {
	getAllUsers(req, res);
};

const updateAllMethod = (req, res) => {
	updateAllUsers(req, res);
};

const deleteAlltMethod = (req, res) => {
	deleteAllUsers(req, res);
};

const postMethod = (req, res) => {
	createUser(req, res);
};

export default function handler(req, res) {
	const method = req.method;

	if (method === "GET") {
		getAllMethod(req, res);
	}

	if (method === "PUT" || method === "UPDATE") {
		updateAllMethod(req, res);
	}

	if (method === "DELETE") {
		deleteAlltMethod(req, res);
	}

	if (method === "POST") {
		postMethod(req, res);
	}
}
