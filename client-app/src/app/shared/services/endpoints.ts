const ROOT_URL = 'http://localhost:3000';
export const API_URLS = {
  API_STUDENT_LIST: `${ROOT_URL}/staffs/student-list`,
  API_STAFF_UPDATE: `${ROOT_URL}/staffs/staff-update`,
	API_STAFF_NEW_INVITATION: `${ROOT_URL}/staffs/send-invitation`,
	API_STAFF_LOAD_INVITATIONS: `${ROOT_URL}/staffs/get-invitations`,
	
  API_ADMIN_LOAD_EXAMS: `${ROOT_URL}/admin/load-exams`,
	API_ADMIN_LOAD_EXAM: `${ROOT_URL}/admin/load-exam`,
	API_ADMIN_UPDATE_EXAM_STATUS: `${ROOT_URL}/admin/update-exam`,
	API_ADMIN_NEW_QUESTION: `${ROOT_URL}/admin/create-question`,
	API_ADMIN_NEW_STAFF: `${ROOT_URL}/admin/create-staff`,
	API_ADMIN_STAFF_LIST: `${ROOT_URL}/admin/staff-list`,
	API_ADMIN_PUBLISH_RESULT: `${ROOT_URL}/admin/publish-result`,

	API_LOGIN: `${ROOT_URL}/users/login`,

	API_STUDENT_GET_EXAM: `${ROOT_URL}/students/get-exam`,
	API_STUDENT_GET_STUDENT_INFO: `${ROOT_URL}/students/get-info`,
	API_STUDENT_SUBMIT_EXAM: `${ROOT_URL}/students/submit-answer`,
	API_STUDENT_START_EXAM: `${ROOT_URL}/students/start-exam`,
}
