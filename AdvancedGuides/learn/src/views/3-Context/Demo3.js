import React from 'react'
import './Demo3.css'

function Feed(props) {
  return <div>hello {props.user.name}</div>
}

function Avatar(props) {
  return (
    <div>
      <img src={props.user.avatar} style={{ width: props.size }} alt="头像" />
    </div>
  )
}

function Link(props) {
  return (
    <a href={props.href} className="avatar-link">
      {props.children}
    </a>
  )
}

function NavigationBar(props) {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Page1</a>
        </li>
        <li>
          <a href="/">Page2</a>
        </li>
      </ul>
      {props.children}
    </div>
  )
}

function PageLayout(props) {
  return (
    <div>
      <div className="navigation-bar">{props.topBar}</div>
      <div className="content">{props.content}</div>
    </div>
  )
}

function Page(props) {
  const user = props.user
  const content = <Feed user={user} />
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  )

  return <PageLayout topBar={topBar} content={content} />
}

const App = () => {
  const user = {
    name: '小明',
    permalink: 'http://www.toutiao.com',
    avatar: 'http://placehold.it/50x50/FF5C60/000000?text=itcan',
  }
  return <Page user={user} avatarSize="50px" />
}

export default App
