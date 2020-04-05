import { Question } from './question.model';

export class Python extends Question{
    askQuestion(): string {
        return "What is Python?";
    }
}