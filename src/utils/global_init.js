import util from './util.js'
if (!util.getVal('weChat') && util.getVal('weChat') == null) {
  util.initData()
}