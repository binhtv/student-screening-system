# Modern Web Applications CS572 - Final Project


## Student Screening System
A screening application for students to apply and study programming at a computer science University
## Course information
### Professor **Asaad Saad**
### Group 1
* Binh Tran 
* Pheakdey Luk
* Petros Habteslassie Ghebrezghi
## Technology
MEAN Stack
![NodeJs!](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png "NodeJs")
![MongoDB!](https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg "MongoDB")
![Angular!](https://user-images.githubusercontent.com/7671024/52155533-f0be1280-2648-11e9-9005-5d6c8e4a5cc7.png "Angular")
![Redux](https://user-images.githubusercontent.com/7671024/52170699-c6d22200-2714-11e9-8a9b-62a0a9eaa9d9.png "Redux")
## How to build & run
Once you clone the source code
1. Server app
   
   - Go to _server-app_ 
   - At the same level with _package.json_ create _.env_ file with the content as below. This file is for server app configuration
  
			DB_HOST=[your mongodb host]
			DB_USER=[db username]
			DB_PASS=[db password]
			DB_NAME=[db name]
			SMTP_EMAIL=[email]
			SMTP_PASSWORD=[email password]
			EXAM_TOKEN_SECRET=[exam token secret]
			EXAM_URL=[http://localhost:4200]/student/take-exam
			USER_TOKEN_SECRET=[user token secret]

   - Run `npm install` to download all dependencies
   - Run `npm start` to startup the server
	
	Once the app is started you should see the following log
		
		server-app git:(master) ✗ npm start

		> server-app@0.0.0 start .../server-app
		> node ./bin/www

		(node:13538) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
		DB connection established

2. Client app
   
   - Go to _client-app_
   - Run `npm install` to download all dependencies
   - Run `ng serve` to start up client app
  
  Once your client app gets started, you should see the logs like below:
	
	client-app git:(master) ✗ ng serve
	** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
																															
	Date: 2019-02-09T20:51:37.953Z
	Hash: fdfb55a20c31780bad11
	Time: 11253ms
	chunk {admin-admin-module} admin-admin-module.js, admin-admin-module.js.map (admin-admin-module) 54.1 kB  [rendered]
	chunk {default~admin-admin-module~student-student-module} default~admin-admin-module~student-student-module.js, default~admin-admin-module~student-student-module.js.map (default~admin-admin-module~student-student-module) 714 kB  [rendered]
	chunk {main} main.js, main.js.map (main) 88.4 kB [initial] [rendered]
	chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 236 kB [initial] [rendered]
	chunk {runtime} runtime.js, runtime.js.map (runtime) 8.97 kB [entry] [rendered]
	chunk {scripts} scripts.js, scripts.js.map (scripts) 530 kB [entry] [rendered]
	chunk {staff-staff-module} staff-staff-module.js, staff-staff-module.js.map (staff-staff-module) 570 kB  [rendered]
	chunk {student-student-module} student-student-module.js, student-student-module.js.map (student-student-module) 60.6 kB  [rendered]
	chunk {styles} styles.js, styles.js.map (styles) 992 kB [initial] [rendered]
	chunk {vendor} vendor.js, vendor.js.map (vendor) 4.2 MB [initial] [rendered]
	ℹ ｢wdm｣: Compiled successfully.
3. Test your app
   
   Open your browser and go to _http://localhost:4200_

## Online demo

You can also see the demo version at: https://screening-system.herokuapp.com/
