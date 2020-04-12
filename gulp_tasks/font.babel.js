import { src, dest, watch, series, lastRun } from "gulp";

import { paths } from "../config.js";
import { serverReload } from "./sync.babel";

function font() {
    return src(paths.font.src, { since: lastRun(font) })
        .pipe(dest(paths.font.dest));
}

function fontWatcher() {
    return watch(paths.font.src, series(font, serverReload));
}

export { font, fontWatcher };
