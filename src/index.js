class Question {
  martix = 0;
  places = {};

  constructor(martix) {
    this.martix = martix;
    // 1. places 初始化，key 为区域编号取值[1, n]，value 为骨干编号取值[1, n]
    for (let i = 0; i < this.martix[0]; i++) {
      this.places[i + 1] = -1;
    }

    // 2. 遍历每位员工的期望区域，并安排合适的位置
    for (let i = 1; i < this.martix.length; i++) {
      // 循环不变量：第 i 号员工，未被派遣
      for (let j = 0; j < this.martix[i].length; j++) {
        // 循环不变量：第 i 号员工的第 j + 1 个期望区域是this.martix[i][j]
        const isUsed = this._getPlaceStatus(this.martix[i][j]);
        if (isUsed) {
          // j + 1 号区域已有人
          continue;
        } else {
          // j + 1 区域没有人
          // 1. 派遣 2. 开始为下一个人选取区域
          this.places[this.martix[i][j]] = i;
          break;
        }
      }
    }
  }

  /**
   * 获取 place 区域的状态: boolean
   * true 表示已派遣骨干
   * false 未派遣骨干
   * @param {number} place [1, n]
   */
  _getPlaceStatus(place) {
    return this.places[place] !== -1;
  }

  /**
   * 打印“第n号区域，派遣第n号骨干”
   */
  _toString() {
    const arr = []; // 第i个数，表示第i个员工去的区域
    for (let key in this.places) {
      arr[parseInt(this.places[parseInt(key)] - 1)] = parseInt(key);
		}
		return arr;
  }
}

const demo = [[3], [1, 2, 3], [1, 3, 2], [3, 2, 1]];
const q = new Question(demo);
console.log(q._toString()); // [1, 3, 2]
