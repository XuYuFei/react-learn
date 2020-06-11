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

/**************************************************************
 **                         改写                             **
/**************************************************************/
/**
 * 组件函数
 * @param {*} WrappedComponent 传入的组件
 * @param {*} selectData 数据源回调方法
 */
function withSubscription(WrappedComponent, selectData) {
  // 返回另一个组件
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource, props)
      }
    }

    componentDidMount() {
      // ...负责订阅相关操作...
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }

    render() {
      // ...并使用新数据渲染被包装的组件
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

// 简化后评论组件
class CommentList2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: props.data
    }
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

// 简化后博客组件
class BlogPost2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogPost: props.data
    }
  }

  render() {
    return <TextBlock text={this.state.blogPost} />
  }
}

const CommentListWithSubscription = withSubscription(CommentList2, DataSource =>
  DataSource.getComments()
)

const BlogPostWithSubscription = withSubscription(
  BlogPost2,
  (DataSource, props) => DataSource.getBlogPost(props.id)
)

class App2 extends React.Component {
  render() {
    return (
      <div>
        <CommentListWithSubscription />
        <BlogPostWithSubscription id="100" />
      </div>
    )
  }
}

export default App2
