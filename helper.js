/**
 * 发布辅助脚本
 * @author 黄子毅
 */

const fs = require("fs");

const dirs = [
  "前沿技术",
  "TS 类型体操",
  "设计模式",
  "编译原理",
  "源码解读",
  "商业思考",
  "算法",
  "可视化搭建",
  "SQL",
  "生活",
];

dirs.forEach((dir) => {
  const readDir = fs.readdirSync(`./${dir}`);

  console.log(`### ${dir}\n`);

  readDir
    .sort((left, right) => left.split(".")[0] - right.split(".")[0])
    .forEach((dirName) => {
      console.log(
        `- <a href="./${dir}/${encodeURIComponent(dirName)}">${dirName.replace(
          ".md",
          ""
        )}</a>`
      );
    });

  console.log("");
});
