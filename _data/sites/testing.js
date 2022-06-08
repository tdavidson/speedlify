module.exports = {
	name: "testing", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
	},
	urls: [
		"https://taylordavidson.com",
		"https://www.helloneighbor.io",
		"https://foresight.is",
		"https://unstructuredventures.com",
	]
};
