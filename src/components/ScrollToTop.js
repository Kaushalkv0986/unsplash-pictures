import '../styles/ScrollToTop.css'
import logo from '../static/images/top.png'
import React from "react"

class ScrollToTop extends React.Component {

  constructor(){
    super()
    this.state = {visible: false};
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () =>{
    const scrollPos = document.documentElement.scrollTop;
    return scrollPos > 50? this.setState({visible: true}) : this.setState({visible: false});
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  render() {
    return (
      <div>
        <button id="return-to-top" style={{ display: this.state.visible ? 'inline' : 'none' }}>
          <img loading="lazy"
            src={logo}
            alt="arrow" width="32" height="32"
            className="alignnone size-full wp-image-7213"
            onClick={this.scrollToTop}
          />
        </button>
      </div >
    );
  }
}

export default ScrollToTop;