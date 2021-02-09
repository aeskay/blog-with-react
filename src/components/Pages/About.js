import React from 'react'
import Divider from '../layout/Divider'

function About() {
    return (
        <div className="container">
            <Divider text={<span>About React Blog</span>}/>
            <div className="py-4">
            <div className="py-4">
                <h3 className="display-4 text-left">Declarative</h3>
                <p className="post-body text-justify">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                <br/>Declarative views make your code more predictable and easier to debug.</p>
            </div>
            <div className="py-3">
                <h3 className="display-4 text-left">Component-Based</h3>
                <p className="post-body text-justify">Build encapsulated components that manage their own state, then compose them to make complex UIs.
                <br/>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
            </div>
            <div className="py-3">
                <h3 className="display-4 text-left">Learn Once, Write Anywhere</h3>
                <p className="post-body text-justify">We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
                <br/>React can also render on the server using Node and power mobile apps using React Native.</p>
            </div>
            </div>
        </div>
    )
}

export default About
