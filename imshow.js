// gif画像を挿入するための要素を作成
let gifElement = document.createElement('img');
gifElement.src = chrome.runtime.getURL('Images/gif_image.gif'); // GIFのURLを指定
gifElement.style.position = 'fixed';  // 固定位置
gifElement.style.bottom = '10px';  // 下に固定
gifElement.style.right = '10px';  // 右に固定
gifElement.style.zIndex = '1000';  // 他の要素の上に表示
gifElement.style.width = '150px';  // GIFのサイズを指定
gifElement.style.height = '150px';
gifElement.style.opacity = '0.8';  // 少し透明に

// ページに追加
document.body.appendChild(gifElement);