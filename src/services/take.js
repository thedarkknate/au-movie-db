export class TakeValueConverter {
  toView(array, count) {
    if (array) {
      return array.slice(0, count);
    }
    return [];
  }
}