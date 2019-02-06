import { Component, OnInit } from '@angular/core';
import { Question } from '../../shared/models/question';
import { AdminService } from '../../shared/services/admin.service';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listquestions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.scss']
})
export class ListquestionsComponent implements OnInit {
  questions;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    return this.adminService.loadQuestions()
      .subscribe((response: Question)=>{
        console.log(response['data']);
        this.questions = response['data'];
      }, error => {
        console.log(error);
      });
  }

  onQuestionSelectChange(id: string, status: boolean){
    this.adminService.updateQuestionStatus(id, status);
  }

  onSubmit(){

  }

}
