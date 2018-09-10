class Sorter {
  constructor() {
    this.Arr = [];
    this.Comparator = (left, right) => left - right;
  }

  add(element) {
    this.Arr.push(element);
  }

  at(index) {
    return this.Arr[index];
  }

  get length() {
    return this.Arr.length;
  }

  toArray() {
    return this.Arr;
  }

  sort(indices) {
    var tempArray = [];
    for(var index = 0; index < indices.length; index++) {
      tempArray.push(this.Arr[indices[index]]);
    }

    tempArray.sort(this.Comparator);
    indices.sort();

    for(var index = 0; index < indices.length; index++) {
      this.Arr[indices[index]] = tempArray[index];
    }
  }

  setComparator(compareFunction) {
    this.Comparator = compareFunction;
  }
}

module.exports = Sorter;