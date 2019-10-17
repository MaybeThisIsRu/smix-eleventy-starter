// import { spawn } from "child_process";
import del from "del";

function clean() {
	const filesToDelete = [
		"assets/css/**",
		"assets/js/**",
		"assets/img/",
		"!assets/src/**"
	];

	return del(filesToDelete);
}

function tar() {
	// TODO
}

export { clean };
