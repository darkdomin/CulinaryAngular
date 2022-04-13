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

  public static heightBetweenElements(elementId: string): number{
    const element = document.getElementById(elementId)!;
    const rect = element.getBoundingClientRect();
    return +rect.top.toFixed() * -1 + rect.height;
  }
}
