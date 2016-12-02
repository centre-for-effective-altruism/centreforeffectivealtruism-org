var Chartist = require('chartist')
// attach to the window
global.Chartist = Chartist

Chartist.fn = Chartist.fn || {}
Chartist.plugins = Chartist.plugins || {}

// format value labels as currency
var ctMoneyValuesDefaults = {
}
Chartist.plugins.labelNames = function (options) {
  options = Chartist.extend({}, ctMoneyValuesDefaults, options)
  return function ctLabelNames (chart) {
    if (chart instanceof Chartist.Pie) {
      var name = ''
      chart.on('draw', function (data) {
        console.log(data)
        // queue series name
        if (data.type === 'slice') {
          name = data.series.name
        }
        if (data.type === 'label') {
          var textAnchor = data.element._node.attributes['text-anchor'].nodeValue === 'end' ? 'start' : 'end'
          data.group.elem('text', {
            dx: textAnchor === 'end' ? data.x - 2 : data.x - (data.element._node.clientWidth) + 10,
            dy: data.y,
            'text-anchor': 'end',
            class: 'ct-label ct-label-name'
          }).text(name)
        }
      })
    }
  }
}

Chartist.fn.moneyFormat = function (currencySymbol) {
  return function (value) {
    return [currencySymbol, parseInt(value, 10).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')].join('')
  }
}

Chartist.fn.multipleCurrencies = function (currencyList) {
  return function (value) {
    var values = []
    for (var i = 0, l = currencyList.length; i < l; ++i) {
      values.push(Chartist.fn.moneyFormat(currencyList[i].currencySymbol)((value * currencyList[i].exchangeRate)))
    }
    if (values.length === 1) return values[0]
    return [values[0], ' (', values.slice(1).join(' / '), ')'].join('')
  }
}


