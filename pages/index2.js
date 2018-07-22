import React from 'react'

export default class extends React.Component {
  static async getInitialProps({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const from = req? "has req ":222
    console.log(111)
    return { userAgent,from }
  }
  componentDidMount(){
    console.log("did")
  }
  componentWillReceiveProps(nextProps){
    console.log("receive"+nextProps)
  }
  render() {
    console.log("render",new Date().getTime())
    return (
      <div>
        Hello World {this.props.userAgent}

        this is from {JSON.stringify(this.props.from)} 
      </div>
    )
  }
}