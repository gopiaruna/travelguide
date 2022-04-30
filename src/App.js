import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ListItem from './Components/ListItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './App.css'

class App extends Component {
  state = {listItems: [], isLoading: true}

  componentDidMount() {
    this.onAPiCallForList()
  }

  onAPiCallForList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({
      listItems: data,
      isLoading: false,
    })
  }

  onRenderList = data => {
    const {packages} = data
    return (
      <ul className="ul-container">
        {packages.map(eachItem => (
          <ListItem listDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, listItems} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">Travel Guide</h1>
        {isLoading && (
          <div className="loading-containers" testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        )}
        {!isLoading && this.onRenderList(listItems)}
      </div>
    )
  }
}

export default App
