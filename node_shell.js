const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'74b7895d-8142-4b16-ad5e-920b96728b95'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
