const express = require('express');
const app = express();

app.get('/redirect', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();

  if (userAgent.includes('android')) {
    res.redirect('https://play.google.com/store'); // Link da Google Play
  } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    res.redirect('https://www.apple.com/app-store/'); // Link da Apple Store
  } else {
    res.send('Por favor, acesse de um dispositivo móvel para ser redirecionado.');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));