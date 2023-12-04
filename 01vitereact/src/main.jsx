import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom APP !</h1>
        </div>
    )
}

// 


const ReactElement={
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank',
    },
    Children: 'Click me to visit google'
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit to google in one sec.</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://facebook.com', target:'_blank'},
    'click me to facebook',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
       reactElement
)