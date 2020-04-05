import { Question } from './question.model';

export class AngularQuestion extends Question{
    askQuestion(): string {
        return "What is Angular?";
    }    
}