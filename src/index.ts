import minimist from 'minimist';
import path from 'path';
import { fileURLToPath } from 'url';
import { doMomotalkJob } from './jobs/doMomotalkJob.js';
import { doStoryJob } from './jobs/doStoryJob.js';
import { Args } from './types/types';

const args: Args = minimist(process.argv.slice(2));

const jobType = (args.t || args.type || 'both').toLowerCase();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const resDir = path.join(__dirname, '..', 'resources');

if (jobType.startsWith('momo')) {
  doMomotalkJob(resDir);
} else if (jobType.startsWith('story')) {
  doStoryJob(resDir);
} else {
  doMomotalkJob(resDir);
  doStoryJob(resDir);
}
