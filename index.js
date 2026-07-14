export default {
  async fetch(request) {
    return new Response(`
<!DOCTYPE html>
<html>
<head>
  <title>Mi Web</title>
  <meta charset="UTF-8">
  <style>
    body {
      background: #111;
      color: white;
      font-family: Arial;
      text-align: center;
      padding-top: 80px;
    }
    .card {
      background: #222;
      padding: 30px;
      border-radius: 15px;
      display: inline-block;
    }
    button {
      background: #007bff;
      color: white;
      border: 0;
      padding: 12px 25px;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 Mi Web en Cloudflare</h1>
    <p>Servidor funcionando correctamente.</p>
    <button onclick="alert('Hola desde Cloudflare Workers')">
      Presiona aquí
    </button>
  </div>
</body>
</html>
    `, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
