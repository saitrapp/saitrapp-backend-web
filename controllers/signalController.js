exports.getSignals = (req, res) => {
  res.json([{ id: 1, type: 'BUY', asset: 'EURUSD' }]);
};