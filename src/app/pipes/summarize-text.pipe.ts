import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "summarize" })
export class SummarizeTextPipe implements PipeTransform {
  transform(value: string) {
    let words = value.split(" ");
    if (words.length <= 18) {
      return value;
    } else {
      words = words.slice(0, 18);
      return words.reduce((prev, elem) => prev + " " + elem) + "...";
    }
  }
}
