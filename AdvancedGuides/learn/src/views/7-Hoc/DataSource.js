class DataSource {
  static comments = [
    {
      id: 1,
      content: 'hello vue'
    },
    {
      id: 2,
      content: 'hello react'
    }
  ]

  // 获取评论
  static getComments() {
    return this.comments
  }

  // 订阅更改
  static addChangeListener(func) {
    console.log('addChangeListener')
  }

  // 订阅清除
  static removeChangeListener(func) {
    console.log('removeChangeListener')
  }

  // 获取博客
  static getBlogPost(id) {
    return `blogPost：${id} - hello world`
  }
}

export default DataSource
