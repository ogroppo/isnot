var isDate = arg => Object.prototype.toString.call(arg) === '[object Date]'

var isNotDate = arg => !isDate(arg)

module.exports = {
  isDate,
  isNotDate
}
