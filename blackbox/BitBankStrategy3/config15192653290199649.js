var config = {
    "debug": false,
    "performanceAnalyzer": {
        "enabled": true,
        "riskFreeReturn": 5
    },
    "BitBankStrategy3": {
        "pair": "BTC_ETH",
        "thresholdBuyProfit": 2.9809045226130646,
        "maxFeatureSetAgeInSeconds": 60,
        "apiKey": "API-KEY",
        "thresholdWavgDistanceToMidpointPercent60min": 0.7638190954773869,
        "thresholdEstimatedFutureWavg5": 2.613065326633166,
        "thresholdEstimatedFutureWavg60": 1.9095477386934672,
        "thresholdEstimatedFutureWavg30": 4.974874371859296,
        "backTest": {
            "enable": true,
            "csvPath": "/home/lee/code/BitBankData/BTC_ETH.csv"
        },
        "thresholdWavgDistanceToMidpointPercent5min": 0.0,
        "thresholdWavgDistanceToMidpointPercent30min": 0.0,
        "thresholdPowerImbalance": 0.32663316582914576,
        "thresholdSumFeatures": 7.49748743718593,
        "candlePeriodInMinutes": 1,
        "thresholdEstimatedFutureWavg120": 0.1507537688442211
    },
    "adapter": "sqlite",
    "paperTrader": {
        "feeTaker": 0.25,
        "simulationBalance": {
            "currency": 100,
            "asset": 0
        },
        "reportInCurrency": true,
        "enabled": true,
        "slippage": 0.05,
        "feeUsing": "maker",
        "feeMaker": 0.25
    },
    "backtest": {
        "daterange": {
            "from": "2018-01-16 01:54",
            "to": "2018-01-19 14:54"
        },
        "batchSize": 50
    },
    "trader": {
        "enabled": false
    },
    "watch": {
        "currency": "BTC",
        "from": "2018-01-16 01:54",
        "exchange": "poloniex",
        "asset": "ETH",
        "to": "2018-01-19 14:54"
    },
    "tradingAdvisor": {
        "method": "BitBankStrategy3",
        "enabled": true,
        "candleSize": 1,
        "historySize": 0
    },
    "sqlite": {
        "dataDirectory": "history",
        "dependencies": [],
        "path": "plugins/sqlite",
        "journalMode": "DELETE",
        "version": 0.1
    }
}
module.exports = config;