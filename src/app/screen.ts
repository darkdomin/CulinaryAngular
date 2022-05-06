export class ScreenMy {

  public static async detectScreenSize(): Promise<number> {
    return new Promise((resolve) => {
      resolve(window.innerWidth);
    });
  }

  public static documentHeight(): number {
    return document.documentElement.getBoundingClientRect().height;
  }

  public static elementHeight(elementId: string): number {
    let element = document.getElementById(elementId);
    if (element !== null) {
      return element.getBoundingClientRect().height;
    }
    return 0;
  }

  public static heightBetweenElements(elementIdTop: string, elementIdBottom: string, move: number = 200): number{
    const element = document.getElementById(elementIdTop)!.getBoundingClientRect();
    const element2 = document.getElementById(elementIdBottom)!.getBoundingClientRect();
    const h1 = +element.top.toFixed() + element.height;
    const h2 = +element2.top.toFixed() + element2.height;
    return (h2 - h1) + move ;
  }
}
