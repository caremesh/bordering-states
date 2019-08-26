# What is bordering-states
bordering-states is a module that allows you to search for all states that border the requested state

# Install
```
npm install bordering-states
```

# Usage

## Basic
```
const borderingStates = require('bordering-states');
borderingStates('AL');
```
## Include original state
```
const borderingStates = require('bordering-states');
borderingStates('AL', {inclusive: true});
```


## Returns
```
['FL', 'GA', 'MS', 'TN']
```

# Tests
To run the tests:
```
npm test
```
