import { getStudentList } from './getStudentList.js';

function doMomotalkJob(resDir: string) {
  const studentList = getStudentList(resDir);
  console.log(studentList);
}

export { doMomotalkJob };
