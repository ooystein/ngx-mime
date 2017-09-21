//Animated zoom - used in transition between dashboard and page view
export class ZoomAnimation {
  
  private static iterations: number = 10;
  
  public static animateZoom(viewport: any, zoom: number, milliseconds: number, callback: () => void): void {

    let currentZoom = viewport.getZoom();
    let zoomIncrement = (zoom - currentZoom) / this.iterations;
    let timeIncrement = milliseconds / this.iterations;

    this.incrementZoom(viewport, currentZoom, zoomIncrement, timeIncrement, 1, callback);
  }
  
  private static incrementZoom(viewport: any, currentZoom: number, zoomIncrement: number, timeIncrement: number, i: number, callback: () => void) {
    if (i > this.iterations) {
      
      return;
    }
    i = i + 1;

    setTimeout(() => {

      let viewportZoom = viewport.getZoom();
      if (currentZoom != viewportZoom) {
        zoomIncrement = viewportZoom / currentZoom * zoomIncrement;
        currentZoom = viewportZoom;
      }
      currentZoom = currentZoom + zoomIncrement;
      viewport.zoomTo(currentZoom, null, false);

      this.incrementZoom(viewport, currentZoom, zoomIncrement, timeIncrement, i, callback);
      
      callback();

    }, timeIncrement);
  }
}