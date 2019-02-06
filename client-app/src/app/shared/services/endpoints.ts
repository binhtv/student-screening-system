const ROOT_URL = 'http://localhost:3000';
export const API_URLS = {
  API_STUDENT_LIST: `${ROOT_URL}/staffs/student-list`,
  API_STAFF_LIST: `${ROOT_URL}/staffs/staff-list`,
	API_STAFF_NEW_INVITATION: `${ROOT_URL}/staffs/send-invitation`,
	API_ADMIN_NEW_QUESTION: `${ROOT_URL}/admin/create-question`,
	API_ADMIN_NEW_STAFF:  `${ROOT_URL}/admin/create-staff`,
	API_LOGIN: `${ROOT_URL}/users/login`,
	API_STUDENT_GET_EXAM: `${ROOT_URL}/students/get-exam`,
	API_STUDENT_GET_STUDENT_INFO: `${ROOT_URL}/students/get-info`,
	API_STUDENT_SUBMIT_EXAM: `${ROOT_URL}/students/submit-answer`,
	API_STUDENT_START_EXAM: `${ROOT_URL}/students/start-exam`,
}
