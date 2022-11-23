import path from 'path';
import { fileURLToPath } from 'url';

const FILE_NAME = fileURLToPath(import.meta.url);
const FILE_DIR_NAME = path.dirname(FILE_NAME);
const ROOT_DIR_NAME = path.resolve(FILE_DIR_NAME, '..', '..');
const RES_DIR_NAME = path.join(ROOT_DIR_NAME, 'resources');

export { ROOT_DIR_NAME, RES_DIR_NAME };
