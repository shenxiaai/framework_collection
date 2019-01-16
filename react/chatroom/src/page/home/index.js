import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './home.less';

class Home extends Component {
  componentDidMount () {}
  componentWillMount () {}
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  getData () {
    axios.get('localhost:3000/login', {
      params: {
        user: 'yuanbao'
      }
    }).then(res => {
      // const data = res.data.data;
      this.setState({});
    });
  }

  render() {
    return (
      <div className="Home">
        {/*<a className="start-btn" href="page/home/index.html">Home page</a>*/}
        <div className="dialog-box">
          <div className="dialog80">
            <div className="icon"><img src={require('../../assets/images/icon1.jpg')} alt="图像" /></div>
            <div className="dialog">对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！对话内容！</div>
          </div>
        </div>
        <div className="dialog-box">
          <div className="dialog80">
            <div className="icon"><img src={require('../../assets/images/icon2.png')} alt="图像" /></div>
            <div className="dialog">对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！对话内容2！</div>
          </div>
        </div>
        <div className="dialog-box">
          <div className="dialog80">
            <div className="icon"><img src={require('../../assets/images/icon3.jpg')} alt="图像" /></div>
            <div className="dialog">对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！对话内容3！</div>
          </div>
        </div>
        <div className="dialog-box">
          <div className="dialog80">
            <div className="icon"><img src={require('../../assets/images/icon4.jpg')} alt="图像" /></div>
            <div className="dialog">对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！</div>
          </div>
        </div>
        <div className="dialog-box">
          <div className="dialog80">
            <div className="icon"><img src={require('../../assets/images/icon5.jpg')} alt="图像" /></div>
            <div className="dialog">对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！</div>
          </div>
        </div>
        <div className="dialog-box">
          <div className="dialog80">
            <div className="icon"><img src={require('../../assets/images/icon6.jpg')} alt="图像" /></div>
            <div className="dialog">对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！对话内容4！</div>
          </div>
        </div>
        <div className="ipt-box">
          <img src={require('../../assets/images/systemprompt.png')} alt="语音" />
          <input type="text" />
          <img src={require('../../assets/images/emoji.png')} alt="表情" />
          <img src={require('../../assets/images/addition.png')} alt="更多" />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById('root'));