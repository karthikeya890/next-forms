import {getAllForm1s,updateAllForm1s,deleteAllForm1s,createForm1s,} from "../../../controllers/form1Controller.js";

const getAllMethod = async (req, res) => {
	getAllForm1s(req, res);
};

const updateAllMethod = (req, res) => {
	updateAllForm1s(req, res);
};

const deleteAlltMethod = (req, res) => {
	deleteAllForm1s(req, res);
};

const postMethod = (req, res) => {
	createForm1s(req, res);
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
