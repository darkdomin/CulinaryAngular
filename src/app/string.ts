export class StringMy {

  // method checks if the argument is a number
  public static isNumber(str : string): boolean {
    return !isNaN(parseInt(str));
  }
}
