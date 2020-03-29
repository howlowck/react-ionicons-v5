# React Ionicons v5

This is the React-component version of the wonderfully created [Ionicons](https://ionicons.com/) V5.

## Demo site of all the icons
**[https://howlowck.github.com/react-ionicons-v5](https://howlowck.github.com/react-ionicons-v5)**

## Quick Start
1. `npm install react-ionicons-v5`
2. In your React Component:

```jsx

import { AddCircleOutline } from 'react-ionicons-v5'
// Or you can import the icons individually like so:
// import AddCircleOutline from 'react-ionicons-v5/dist/icons/AddCircleOutline'

class App extends React.Component {
    render() {
        return <div>
            <a style={{width: 50, height: 50}}><AddCircleOutline /></a>
        </div>
    }
}

let root = document.getElementById("app");

ReactDOM.render(<App />, root);

```

---------------

## Main Tools / Software Used to Create this library:
* [Ionicons](https://ionicons.com/)
* [Glob](https://github.com/isaacs/node-glob)
* [Handlebars](https://handlebarsjs.com/)
* [SVGR](https://react-svgr.com/)
* [Yargs](https://www.npmjs.com/package/yargs)

(👏👏👏 Thank you! 💙💙💙)
