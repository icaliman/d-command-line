module.exports = CommandLine

function CommandLine() {}

CommandLine.prototype.view = __dirname;

CommandLine.prototype.create = function(model, dom) {
//  TODO: save commands list to localStorage
  model.set('commands', []);
};

CommandLine.prototype.newCommand = function() {
  var model = this.model;
  var command = model.del('command');
  var index = model.push('commands', {text: command});

  model.set("waitingResponse", true);

  this.emit('newCommand', command, function(err, result) {
    if (err) {
      model.set("commands." + (index - 1) + ".error", err);
    } else {
      model.set("commands." + (index - 1) + ".result", result);
    }
    model.set("waitingResponse", false);
  });
};

CommandLine.prototype.stringify = function(e) {
  if (typeof e === 'object') {
    return JSON.stringify(e);
  }
  return e && e + '';
};