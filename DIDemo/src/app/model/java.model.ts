import { Question } from './question.model';

export class JavaQuestion extends Question{

    askQuestion(): string {
        return "What is Java?";
    }
}