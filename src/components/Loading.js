import React from 'react'
import { FirstLoad } from '../styles'
import logo from '../images/logowht.png'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }
  componentDidMount() {
    this.loadingTimeout = setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout)
  }

  render() {
    const { loading } = this.state
    return (
      <FirstLoad hidden={!loading}>
        <img src={logo} alt="" />
      </FirstLoad>
    )
  }
}

export default Loading