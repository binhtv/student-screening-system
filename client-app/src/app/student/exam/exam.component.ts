import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  token: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
			this.token = params.token;
			if(!this.token) {
				this.router.navigate(['not-found']);
      }
      //Get exam data
      
		}, error => this.router.navigate(['not-found']));
  }

}
