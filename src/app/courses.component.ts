
import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

//Decorator Function
@Component({
    selector: 'courses',
    // HTML mark up
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <img [src]="imageUrl" />
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding Example</button>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"> Hi colspan = 2</td>
        </tr>
    </table>
    <div (click)="onDivClick($event)">
        <button (click)="onEventBinding($event)">Event Binding</button>
    </div>
    <input [(value)]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
    <div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    </div>
    {{ course.title | uppercase | lowercase}} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'1.2-2' }} <br/>
    {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
    {{ text | summary:10}}
    `
})
// DOM Style Obj. Properties
// https://www.w3schools.com/jsref/dom_obj_style.asp

export class CoursesComponent {
    title = "List of courses";
    courses;
    colSpan = 2; // attribute binding
    imageUrl = ""; // property binding
    isActive = true; //class binding
    email = "me@example.com"; // Banana in Box syntax is cleaner way of two way binding
    text =" Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... Long, long, long... "

    // Pipes example - see mark up
    course = {
        title: "Pipes Example",
        rating: 4.9745,
        students: 30123,
        price: 190.951,
        releaseDate: new Date(2016, 3, 1)
    }


    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onEventBinding($event) {
        $event.stopPropagation(); // Stops Event Bubbling
        console.log("Button was clicked", $event);
    }

    onDivClick($event) {
        console.log("Div Clicked - Event Bubbling Example", $event);
    }

    // See Template mark up for Event Filtering example
    // No need for $event parameter with above example of Event Filtering
    //onKeyUp($event)
    //onKeyUp(email)
    onKeyUp()
     {
        // Traditonal way of Event Filtering
        // if($event.keyCode === 13)
        // console.log("On Key Up ENTER WAS PRESSED - Event Filtering Example", $event);
        
        // Traditional way of getting Input field value
        // Uses $event parameter
        // console.log($event.target.value);
        // Angular way AKA Template Variables
        // See mark up above
        // Uses this     <input #email (keyup.enter)="onKeyUp(email.value)"/>
        //console.log(email);
        
        console.log(this.email); // example of two way binding
    }
}