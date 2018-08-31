const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


var indexData = require('../data/data-index.js')
var index_next = require('../data/data-index-next.js')
var discoveryData = require('../data/data-discovery.js')

function getIndexData() {
  return indexData.index;
}

function getNext() {
  return index_next.next;
}

function getDiscoveryData() {
  return discoveryData.discovery;
}

module.exports = {
  formatTime: formatTime,
  getIndexData: getIndexData,
  getNext: getNext,
  getDiscoveryData: getDiscoveryData
}
