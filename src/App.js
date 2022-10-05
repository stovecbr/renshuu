import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {


const [count, setCount] = useState(0);
const [color,setColor] = useState("black");

//－をクリックしたときの動きを設定
const handleClickDown = () => {
  // 数字を1減らす
  const newCount = count -1;
  
  // newCountの値によって色の判断
  if (newCount >=15){ 
    //newCountの値が15以上の場合はクラス"red"
    setColor("red");
  }else if(newCount >=0){ 
    //newCountの値が0以上の場合はクラス"black"
    setColor("black");
  }else{ 
    //それ以外はクラス"blue"
    setColor("blue");
  };

  //newCountの値に更新する
  setCount(newCount);
};

//＋をクリックしたときの動きを設定
const handleClickUp = () => {
   // 数字を1増やす
  const newCount = count +1;

// newCountの値によって色の判断
  if (newCount >=15){
    //newCountの値が15以上の場合はクラス"red" 
    setColor("red");
  }else if(newCount >=0){
    //newCountの値が0以上の場合はクラス"black" 
    setColor("black");
  }else{
    //それ以外はクラス"blue" 
    setColor("blue");
  };

// newCountの値に更新する
setCount(newCount);
};


  return (
    <div className="App">
      {/* －ボタンをクリックしたらhandleClickDownを実行する */}
    
      <button className="buttonDown" onClick={handleClickDown}>－</button>

     <div className='circle'> 
      {/* ステート"color"を適用して、値を表示 */}
      <p className={`${color}`}>{count}</p>
     </div>

      {/* ＋ボタンをクリックしたらhandleClickUpを実行する */}
      <button className="buttonUp" onClick={handleClickUp}>＋</button>
     
    </div>
  );
};

export default App;
