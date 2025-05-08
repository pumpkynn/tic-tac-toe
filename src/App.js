import Game from './components/Game.jsx';  // 导入你的主游戏组件
import './App.css';         // 可选：App专用样式

function App() {
  return (
    <div className="app-container">
      <h1>React井字棋</h1>
      {/* 这里渲染你的核心游戏组件 */}
      <Game />
    </div>
  );
}

export default App;  // 必须默认导出！