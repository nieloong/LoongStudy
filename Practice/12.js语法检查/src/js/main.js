const add = (x, y) => x + y;

// 下一行eslint所有规则都失效（下一行不进行eslint检查）
// eslint-disable-next-line
console.warn('[looong]-',add(2,6))