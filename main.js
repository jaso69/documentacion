import './intro.min.js'

const end = () => {
    window.location.replace('http://localhost:5173/menu.html')
}

introJs().oncomplete(async () => {
    return new Promise((resolve) => {
      end()
      setInterval(resolve, 500);
    });
  }).start();
