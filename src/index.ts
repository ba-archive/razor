import minimist from 'minimist';
import { RES_DIR_NAME } from './const/__DIRNAME.js';
import { doMomotalkJob } from './jobs/doMomotalkJob.js';
import { doStoryJob } from './jobs/doStoryJob.js';
import { Args } from './types/types';

const args: Args = minimist(process.argv.slice(2));

const jobType = (args.t || args.type || 'both').toLowerCase();

const resDir = RES_DIR_NAME;

if (jobType.startsWith('momo')) {
  doMomotalkJob(resDir);
} else if (jobType.startsWith('story')) {
  doStoryJob(resDir);
} else {
  doMomotalkJob(resDir);
  doStoryJob(resDir);
}
