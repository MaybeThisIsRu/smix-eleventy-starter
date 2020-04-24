import del from "del";
import { paths } from "../config";

function clean() {
	const filesToDelete = [`${paths.projectDestDir}/**/*`];
	return del(filesToDelete);
}

export { clean };
