export class ScreenMy {

  public static async detectScreenSize(): Promise<number> {
    return new Promise((resolve) => {
      resolve(window.innerWidth);
    });
  }

  public static documentHeight(): number {
    return document.documentElement.getBoundingClientRect().height;
  }
}
