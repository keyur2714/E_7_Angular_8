import { Component } from '@angular/core';

@Component({
    selector : 'app-number-util',
    template : `Result Is : {{result}}`,
    styles : []
})
export class NumberUtilCompoent {
    constructor(){
        console.log("Num Util Component Objecte Created...!");
    }

    result : number = 0;

    add(num1 : number,num2 : number) : number {
        return num1 + num2;
    }
    sub(num1 : number,num2 : number) : number {
        return num1 - num2;
    }
    mul(num1 : number,num2 : number) : number {
        return num1 * num2;
    }
    div(num1 : number,num2 : number) : number {
        if(num2 === 0){
            return 0;
        }
        return num1 / num2;
    }
}