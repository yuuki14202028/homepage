import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="row">
          <img src="logo.jpg" className="logo" alt="logo"/>
          <div className="name">yuuki14202028</div>
        </div>
        <div className="card_list">
          <a className="card" href="https://github.com/yuuki14202028">
            <div className="card-body">
              <div className="card-name">github</div>
              <img src="github-logo.png" className="card-image" alt="logo"/>
              <div className="card-description">このサイト等、各種成果物のソースコードを公開しています。</div>
            </div>
          </a>
          <a className="card" href="https://twitter.com/yuuki14202028">
            <div className="card-body">
              <div className="card-name">twitter</div>
              <img src="twitter-logo.png" className="card-image" alt="logo"/>
              <div className="card-description">適当なことを呟いたりしています。</div>
            </div>
          </a>
          <a className="card" href="https://store.line.me/stickershop/product/3227591/">
            <div className="card-body">
              <div className="card-name">LINE stamp</div>
              <img src="line-logo.png" className="card-image" alt="logo"/>
              <div className="card-description">アイコンのブラッキー君のラインスタンプです。</div>
            </div>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
