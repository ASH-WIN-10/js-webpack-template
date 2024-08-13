import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const common_config = {
	entry: "./src/index.js",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpg|svg|jpeg|gif)/i,
				type: "asset/resource",
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
		],
	},
};

export default common_config;
