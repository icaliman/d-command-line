d-command-line
==================

Command line Derby component.

# Usage
[Example usage](http://github.com/icalimen/derby-examples/cmd)

## In your template
```
<view name="d-command-line" dash=">>> " on-new-command="newCommand()"></view>
```
## In your app script
```
app.proto.newCommand = (command, callback) ->
  try
    callback null, eval(command)
  catch error
    callback error.message
```