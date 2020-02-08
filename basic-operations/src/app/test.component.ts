import { Component } from '@angular/core';

@Component({
    selector : 'app-test',
    template : `<h1>{{msg}}</h1>`,
    styles : ['h1{color : green;}']
})
export class TestComponent{
    msg : string = 'Hello Radhe Krishna...!';
}