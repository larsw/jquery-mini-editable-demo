exports.index = function (req, res) {
  res.render('index', { title: 'jQuery mini-editable demo' });
};

exports.editableChanged = function (req, res) {
  console.log('changed: ' + req.query.id + ": " + req.body.old + ' -> ' + req.body['new']);
  //res.send(200);
  setTimeout(function () {
  	res.send(200);
  }, 500);
};