const Single = (mainName , subName) => {
	return `import { get${subName},update${subName},delete${subName} } from "../../../controllers/${mainName}Controller.js";

const getMethod = async (req, res) => {
	get${subName}(req, res);
};

const updateMethod = (req, res) => {
	update${subName}(req, res);
};

const deletetMethod = (req, res) => {
	delete${subName}(req, res);
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
`;
};

export default Single;
