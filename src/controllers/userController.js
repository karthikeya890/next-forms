import prisma from "../../prisma";

// Group users queries
export const getAllUsers = async (req, res) => {
	const users = await prisma.user.findMany();
	res.send(users);
};

export const createUser = async (req, res) => {
	const user = await prisma.user.create({
		data: { ...req.body },
	});
	res.send(user);
};

export const updateAllUsers = async (req, res) => {
	const updateUsers = await prisma.user.updateMany({
		data: { ...req.body },
	});
	res.send(updateUsers);
};

export const deleteAllUsers = async (req, res) => {
	const users = await prisma.user.deleteMany();
	res.send("all users deleted successfully");
};

// single user queries

export const getUser = async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: parseInt(req.query.id),
		},
	});
	res.send(user);
};

export const updateUser = async (req, res) => {
	const user = await prisma.user.update({
		where: { id: parseInt(req.query.id) },
		data: { ...req.body },
	});
	res.send(user);
};

export const deleteUser = async (req, res) => {
	const user = await prisma.user.update({
		where: { id: parseInt(req.query.id) },
		data: { ...req.body },
	});
	res.send(`user ${req.query.id} is deleted successfully!!`);
};
