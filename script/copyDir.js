const fs = require('fs')
const path = require("path")
const crypto = require("crypto")

function copyDir(src, dist) {
  deleteFolderRecursive(dist)
  fs.mkdirSync(dist)
  const paths = fs.readdirSync(src)
  paths.forEach(path => {
    var _src = src + '/' + path;
    var _dist = dist + '/' + path;
    fs.stat(_src, (err, stat) => {
      if (stat.isFile()) {
        if (_dist.indexOf('/assets/') === -1) { // 非资源文件才进行编名字
          let arrpath = _dist.split('/')
          const hash = crypto.createHash("sha1").update(arrpath.pop()).digest('hex')
          _dist = arrpath.join('/') + hash
        }
        fs.writeFileSync(_dist, fs.readFileSync(_src));
      } else if (stat.isDirectory()) {
        // 当是目录是，递归复制
        copyDir(_src, _dist + '/')
      }
    })
  })
}
function deleteFolderRecursive(url) {
  var files = [];
  /**
   * 判断给定的路径是否存在
   */
  if (fs.existsSync(url)) {
    /**
     * 返回文件和子目录的数组
     */
    files = fs.readdirSync(url);
    files.forEach(function (file, index) {

      var curPath = path.join(url, file);
      /**
       * fs.statSync同步读取文件夹文件，如果是文件夹，在重复触发函数
       */
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);

      } else {
        fs.unlinkSync(curPath);
      }
    });
    /**
     * 清除文件夹
     */
    fs.rmdirSync(url);
  }
}

module.exports = copyDir