# Installation
npm install --save-dev babel-plugin-react-add-data-id

# Example

```js
class Example extends React.Component{
  render(){
    return (
      <MyComponent>
        component
      </MyComponent>
    )
  }
}

```
#### out 

```js

class Example extends React.Component{
  render(){
    return (
      <MyComponent data-id="node-1">
        component
      </MyComponent>
    )
  }
}
```

# Usage

###### .babelrc

```json
  {
  "plugins": ["react-add-data-id"],
  "presets": ["react","env"]
  }
```


###### webpack.config.js
```js
'module': {
  'loaders': [{
    'loader': 'babel-loader',
    'test': /\.js$/,
    'exclude': /node_modules/,
    'query': {
      'plugins': ['react-add-data-id'],
      ...
    }
  }]
}
```