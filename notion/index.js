const { Client } = require("@notionhq/client");
const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();
fs = require("fs");
const { exec } = require("child_process");

// Initializing a client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

exports.notionSync = (req, res) => {
	// let message = req.query.message || req.body.message || "Hello World!";
	// res.status(200).send(message);
	console.log("hello");
	return;
};

// const notionSync = async () => {
// 	try {
// 		// const data = await notion.users.list();
// 		// console.log(data);

// 		const myPage = await notion.databases.query({
// 			database_id: "3b19ae174ee7401b8c896dc140960877",
// 		});
// 		fs.writeFile("data.json", JSON.stringify(myPage.results), function (err) {
// 			if (err) return console.log(err);
// 			console.log("Hello World > helloworld.txt");
// 		});
// 		console.log(myPage);
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

// notionSync();

const bash = () => {
	exec("kubectl get pods", (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(stdout);
	});
};

bash();
