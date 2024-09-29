window.onload = function () {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "./openapi.yml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};

// "eyJraWQiOiJaWVRaK3VlNnFZcHUrSThyaXJZSUVFUGxncVlSM01kWHlLR0huSTd6dVwvOD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3M2Q0MjgxMi1jMGIxLTcwMTktNTQwMi0yNzliZWZkZWIzYTIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9YUFV0d01YbjQiLCJjbGllbnRfaWQiOiIzajFmcDJjcWw1MDJwazR2YzEzZ2oxdWhzNiIsIm9yaWdpbl9qdGkiOiI4YTM5YjQ4ZS0wODI3LTQyZjUtODdjNC05MDNjZTljOTMwMDYiLCJldmVudF9pZCI6IjZkNzg4ZDA4LWVlNTQtNGYwOC05NzgyLWU1OTU0YjFkOTllOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3Mjc0MzU3NzIsImV4cCI6MTcyNzQzNjA3MiwiaWF0IjoxNzI3NDM1NzcyLCJqdGkiOiJmZjlmYWUxZC1kNTJiLTRiNjctYTUyZS1lODI1M2FkM2NiNTMiLCJ1c2VybmFtZSI6ImlicmFoaW0uYWxyYXl5YW5AaWtub3dseS5jb20ifQ.eH4sKAviF1QRMKXKoTGfR8oyzMShhTtPNgtZE0843t2RtHhWmWdlinJ0D3jJSuRVCr6nYvIT0Al_UWlRrx9nyJk7QbzpKtSgoOb-EHn6ghAW1DHGE43yrEjpyXO3AvDHBiCImVv8MR1HbyVmVB2ZB1_-Hr0pL7gmkhdzz9pUzh5IbYD5vM6ayvGpj0vp8CWh4QBqfa7pUcZ6nRNR9ndINh-KQ_AFVUtlWGuGTSwGV8_Y4BXrO4dIWfgeZ3KkXSVKaKlKnpFRXvwyv-cr4nkNg8wKhsAjLpmTgVvzyLCVXheAEq5XH9qVcmjgnS-OpqzQHiKzg_8oi5fA7yUXuBzi6A

