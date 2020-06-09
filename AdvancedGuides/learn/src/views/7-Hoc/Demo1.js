import React from 'react'
import DataSource from './DataSource'

class CommentList extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      comments: DataSource.getComments()
    }
  }

  componentDidMount() {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount() {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments()
    })
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    )
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.comment.id} - {this.props.comment.content}
        </div>
      </div>
    )
  }
}

function TextBlock(props) {
  return <div>{props.text}</div>
}

class BlogPost extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    }
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange)
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    })
  }

  render() {
    return <TextBlock text={this.state.blogPost} />
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <CommentList />
        <BlogPost id="1" />
      </div>
    )
  }
}

export default App
