const FormControllerSchema = (name, formname) => {
	return `import prisma from "../../prismaInstance";

// Group users queries
export const getAll${formname}s = async (req, res) => {
	const ${formname}s = await prisma.${name}.findMany();
	res.send(${formname}s);
};

export const create${formname} = async (req, res) => {
	const ${formname} = await prisma.${name}.create({
		data: { ...req.body },
	});
	res.send(${formname});
};

export const updateAll${formname}s = async (req, res) => {
	const update${formname}s = await prisma.${name}.updateMany({
		data: { ...req.body },
	});
	res.send(update${formname}s);
};

export const deleteAll${formname}s = async (req, res) => {
	const ${formname}s = await prisma.${name}.deleteMany();
	res.send("all ${formname}s deleted successfully");
};

// single user queries

export const get${formname} = async (req, res) => {
	const ${formname} = await prisma.${name}.findUnique({
		where: {
			id: parseInt(req.query.id),
		},
	});
	res.send(${formname});
};

export const update${formname} = async (req, res) => {
	const ${formname} = await prisma.${name}.update({
		where: { id: parseInt(req.query.id) },
		data: { ...req.body },
	});
	res.send(${formname});
};

export const delete${formname} = async (req, res) => {
	const ${formname} = await prisma.${name}.update({
		where: { id: parseInt(req.query.id) },
		data: { ...req.body },
	});
	res.send(${formname} + req.query.id + "is deleted successfully!!");
};
`;
};

export default FormControllerSchema;
