import {getAllForm1,updateAllForm1,deleteAllForm1,createForm1,} from "../../../controllers/form1Controller.js";

const getAllMethod = async (req, res) => {
	getAllForm1(req, res);
};

const updateAllMethod = (req, res) => {
	updateAllForm1(req, res);
};

const deleteAlltMethod = (req, res) => {
	deleteAllForm1(req, res);
};

const postMethod = (req, res) => {
	createForm1(req, res);
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
