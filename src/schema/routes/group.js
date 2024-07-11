const Group = (mainName, subName) => {
	return `import {getAll${subName},updateAll${subName},deleteAll${subName},create${subName},} from "../../../controllers/${mainName}Controller.js";

const getAllMethod = async (req, res) => {
	getAll${subName}(req, res);
};

const updateAllMethod = (req, res) => {
	updateAll${subName}(req, res);
};

const deleteAlltMethod = (req, res) => {
	deleteAll${subName}(req, res);
};

const postMethod = (req, res) => {
	create${subName}(req, res);
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
`;
};

export default Group;
