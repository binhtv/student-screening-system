import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../shared/services/student.service';
import { ApiResponse } from '../shared/models/api-response';

@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
	token: string = '';
	studentName: string = '...';
	constructor(private route: ActivatedRoute, private router: Router,
		private studentService: StudentService) {
		this.route.queryParams.subscribe(queries => {
			this.token = queries.token;
			if (!this.token) {
				return this.router.navigate(['not-found']);
			}
		});
	}

	ngOnInit() {
		this.studentService.getStudentInfo(this.token).subscribe((resp: ApiResponse) => {
			if(resp.code === 1) {
				this.studentName = `${resp.data.firstName} ${resp.data.lastName}`;
			}
		});
	}

	getStart() {
		
	}

	ngOnDestroy() {
	}
}