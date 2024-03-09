- change settings in the following files

  - sdk -> appsettings.json

    - urls="http://192.168.1.107:8080"
    - LocalIP=192.168.1.107

  - frontend -> .env

    - LOCAL_IP=http://192.168.2.32
    - BACKEND_URL=http://192.168.2.32:8000/api
    - SOCKET_ENDPOINT=ws://192.168.2.192:8080/WebSocket

  - backend -> .env
    - SDK_URL=http://192.168.1.107:8080
    - APP_URL=http://192.168.2.32:3000
    - APP_LINK=http://192.168.2.32:3000
