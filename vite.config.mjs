import fs from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const componentsPropsConfig = {
	button: ["disabled", "onclick", "type"],
	input: ["disabled", "name", "placeholder", "required", "type", "value"],
	select: ["disabled", "name", "placeholder", "required", "value"],
	textarea: ["disabled", "name", "placeholder", "required", "value"],
};

const createEntryPoints = () => {
	const fileNameList = fs.readdirSync(resolve(__dirname, "./src/"));
	const htmlFileList = fileNameList.filter((file) => /.html$/.test(file));
	const inputFiles = {};
	for (let i = 0; i < htmlFileList.length; i++) {
		const file = htmlFileList[i];
		inputFiles[file.slice(0, -5)] = resolve(__dirname, "./src/" + file);
	}

	return inputFiles;
};

const metadata = JSON.parse(
	fs.readFileSync(resolve(__dirname, "./src/metadata.json")),
);

export default defineConfig({
	server: {
		host: true,
	},
	root: "./src",
	build: {
		outDir: "../dist",
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split(".")[1];
					if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
						extType = "fonts";
					}
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = "images";
					}
					return `assets/${extType}/[name][extname]`;
				},
				chunkFileNames: "assets/scripts/[name].js",
				entryFileNames: "assets/scripts/[name].js",
			},
			input: createEntryPoints(),
		},
	},
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, "./src/components"),
			context(pagePath) {
				return metadata[pagePath];
			},
			helpers: {
				arr: (...args) => {
					return Array.from(args).slice(0, args.length - 1);
				},
				attributes: (component, attributes, root) => {
					if (
						Array.isArray(componentsPropsConfig[component]) &&
						componentsPropsConfig[component].length
					) {
						return Object.entries(attributes)
							.filter(([key, value]) => {
								return (
									componentsPropsConfig[component].includes(key) &&
									["string", "boolean", "number"].includes(typeof value) &&
									(!(key in root) || root[key] !== value)
								);
							})
							.map(([key, value]) => `${key}="${value}"`)
							.join("\n");
					} else {
						console.warn(`No component config found for "${component}"`);
					}
					return null;
				},
				classes: (...classes) => {
					return classes
						.filter((c) => typeof c === "string" && c.trim().length > 0)
						.join(" ");
				},
				concat: (...strings) => {
					return strings.filter((s) => typeof s === "string" && !!s).join("");
				},
				ifCond: (cond, value) => {
					if (cond) return value;
					return null;
				},
				op: (v1, operator, v2) => {
					switch (operator) {
						case "===":
							return v1 === v2;
						case "!==":
							return v1 !== v2;
						case "<":
							return v1 < v2;
						case "<=":
							return v1 <= v2;
						case ">":
							return v1 > v2;
						case ">=":
							return v1 >= v2;
						case "&&":
							return v1 && v2;
						case "||":
							return v1 || v2;
						case "??":
							return v1 ?? v2;
						default:
							return false;
					}
				},
				json: (obj) => {
					return JSON.stringify(obj);
				},
			},
		}),
	],
});
