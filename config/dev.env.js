'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://localhost:8080/"',
  QM_PATH: '"/api/search/qmchartdata"',
  AVG_PATH: '"/api/search/avgchartdata"',
  TOTAL_TRAFFIC_PATH: '"/api/totaltraffic/chartdata"'
})
