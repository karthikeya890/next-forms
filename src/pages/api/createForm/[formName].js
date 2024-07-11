import FormControllerSchema from "@/schema/controllers/formControllerSchema";
import Single from "@/schema/routes/single";
import Group from "@/schema/routes/group";
var fs = require("fs");
const { exec } = require("child_process");

export default function handler(req, res) {
	if (req.method === "POST") {
		// create a model
		let name = req.query.formName;
		let formName = name.charAt(0).toUpperCase() + name.slice(1);

		let data = "";

		req.body.map((item, index) => {
			let type;

			if (
				item.type === "text" ||
				item.type === "email" ||
				item.type === "number"
			) {
				type = `String${item.null && "?"}`;
			}
			if (item.type === "checkbox" || item.type === "radio") {
				type = `Boolean${item.null && "?"}`;
			}

			data += `${item.label} ${type}`;

			if (item.unique) {
				data += ` @unique`;
			}

			if (!item.null) {
				data += ` @default${item.defaultValue}`;
			}

			if (index < req.body.length - 1) data += "\n";
		});

		let model = `\nmodel ${formName} {\nid    Int     @id @default(autoincrement())\ncreatedAt  DateTime   @default(now())\nupdatedAt  DateTime   @updatedAt\n${data}\n}`;

		// commands to save you model in db.
		const command1 = `npx prisma format --schema=./prisma/schema.prisma`;
		// const command2 = `npx prisma migrate deploy`;
		const command2 = `npx prisma migrate dev --name added_${formName}_model`;
		const command3 = `npx prisma generate`;

		try {
			fs.appendFile("./prisma/schema.prisma", model, (err1) => {
				if (err1) throw err1;
			});

			const execAsync = (command) => {
				return new Promise((res, rej) => {
					exec(command, (error, stdout, stderr) => {
						if (error) {
							rej(error);
							return;
						}
						res({ stdout, stderr });
					});
				});
			};

			(async () => {
				try {
					const { stdout: output1 } = await execAsync(command1);
					console.log("Command 1 Output:", output1);

					const { stdout: output2 } = await execAsync(command2);
					console.log("Command 2 Output:", output2);

					const { stdout: output3 } = await execAsync(command3);
					console.log("Command 3 Output:", output3);
				} catch (error) {
					console.error("Error executing command:", error);
				}
			})();
		} catch (err) {
			console.log(err.message);
		}

		// Define the absolute path for the new folder
		const folderName = `./src/pages/api/${name}`;

		try {
			// Check if the folder exists and create it if it does not
			if (!fs.existsSync(folderName)) {
				// create folder
				fs.mkdirSync(folderName);

				// create sub-file index.js
				fs.open(`${folderName}/index.js`, "w", function (err) {
					if (err) throw err;
				});

				// create sub-file [id].js
				fs.open(`${folderName}/[id].js`, "w", function (err) {
					if (err) throw err;
				});

				// create sub-file [id].js
				fs.open(
					`./src/controllers/${name}Controller.js`,
					"w",
					function (err) {
						if (err) throw err;
						const schema = FormControllerSchema(name,formName);
						fs.appendFile(
							`./src/controllers/${name}Controller.js`,
							schema,
							function (err) {
								if (err) throw err;

								const groupRouterschema = Group(
									name,
									formName + "s"
								);
								fs.appendFile(
									`${folderName}/index.js`,
									groupRouterschema,
									function (err) {
										if (err) throw err;
									}
								);

								const singleRouterschema = Group(
									name,
									formName
								);
								fs.appendFile(
									`${folderName}/[id].js`,
									singleRouterschema,
									function (err) {
										if (err) throw err;
									}
								);
							}
						);
					}
				);
			} else {
				res.send("Folder already exists");
			}

			res.send("Folder created");
		} catch (err) {
			console.error(err);
			res.status(500).send("Error creating folder");
		}
	} else {
		res.status(405).send("Method Not Allowed");
	}
}
