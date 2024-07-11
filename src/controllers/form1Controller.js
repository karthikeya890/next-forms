import prisma from "../../prismaInstance";

// Group users queries
export const getAllForm1s = async (req, res) => {
	const Form1s = await prisma.form1.findMany();
	res.send(Form1s);
};

export const createForm1 = async (req, res) => {
	const Form1 = await prisma.form1.create({
		data: { ...req.body },
	});
	res.send(Form1);
};

export const updateAllForm1s = async (req, res) => {
	const updateForm1s = await prisma.form1.updateMany({
		data: { ...req.body },
	});
	res.send(updateForm1s);
};

export const deleteAllForm1s = async (req, res) => {
	const Form1s = await prisma.form1.deleteMany();
	res.send("all Form1s deleted successfully");
};

// single user queries

export const getForm1 = async (req, res) => {
	const Form1 = await prisma.form1.findUnique({
		where: {
			id: parseInt(req.query.id),
		},
	});
	res.send(Form1);
};

export const updateForm1 = async (req, res) => {
	const Form1 = await prisma.form1.update({
		where: { id: parseInt(req.query.id) },
		data: { ...req.body },
	});
	res.send(Form1);
};

export const deleteForm1 = async (req, res) => {
	const Form1 = await prisma.form1.update({
		where: { id: parseInt(req.query.id) },
		data: { ...req.body },
	});
	res.send(Form1 + req.query.id + "is deleted successfully!!");
};
