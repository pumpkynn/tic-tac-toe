import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';       // 全局样式
import App from './App';    // 导入根组件

// 1. 获取HTML中的根DOM节点
const rootElement = document.getElementById('root');

// 2. 创建React根实例
const root = ReactDOM.createRoot(rootElement);

// 3. 渲染根组件
root.render(
    <React.StrictMode>
        <App />   {/* 这里挂载你的整个应用 */}
    </React.StrictMode>
);