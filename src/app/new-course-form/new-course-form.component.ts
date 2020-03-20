import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });

  // FormBuiilder Example
  // form;
  // constructor(fb: FormBuilder) {
  //   this.form = fb.group({
  //     name: ['', Validators.required],
  //     contact: fb.group({
  //       email: [],
  //       phone: []
  //     }),
  //     topics: fb.array([])
  //   })
  // }

  categories = [
    { id: 1, name: 'Development'},
    { id: 2, name: 'Art'},
    { id: 3, name: 'Languages'}
  ];

  onSubmit(course) {
    console.log(course);
  }

  get topics() {
    return <FormArray>this.form.get('topics');
  }

  addTopic(topic: HTMLInputElement) {
    (this.topics as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
