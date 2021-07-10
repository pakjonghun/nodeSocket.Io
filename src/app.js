import express from "express";
import socketIO from "socket.io";
import Http from "http";

const port = 4000;
const app = express();

//http 서버가 연결 socketio 와 express의 연결 역할을 한다.
//최고 대왕 부모 다 모든걸 다 상속해 주고 있다.
// const server = Http.createServer(app);

//io는 모든 이벤트를 알아야 한다. 오로지 연결 만 되 있고 이벤트로 작동한다.
//이벤트를 커스텀이 가능하다.
//서버와 클라이 언트는 서로 다른 이벤트를 주고 받고 거기에 따른 통신을 핑퐁처럼 할 수 있다.
//이때 중요한 것이 connection 이다.

//https://github.com/socketio 여기 있는 샘플 보고 따라해본다.

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/views");
app.use("/static", express.static(process.cwd() + "/assets"));
app.get("/", (req, res) => {
  res.render("index");
});

const server = app.listen(port, () => {
  console.log("hi server");
});

//기존에 socketIO.listen(server) 에서 바뀐듯 하다.
//onconnection 이 시작점이다.
const io = socketIO(server);

//각각의 인자 소켓은 id를 갖는다.
//커넥션은 오로지 서버가 혹은 클라이언트가 연결을 끊을때만 끊긴다.
io.on("connection", (socket) => {
  //브로드케스트는 방금 접한 놈빼고 다 이벤트를 보내줌
  //클라이언트에서 그 이벤트를 듣고 있어야 !!!! 이 이벤트를 받을 수 있다.!!
  //안듣고 있으면 허공에 외치는 것과 같다.!
  // socket.broadcast.emit("hellow");
  //broadcast.emit은
  //3초후에 연결된 모든 클라이언트에게 헬로우 이벤트를 보낸다.
  //단 연결된 아이는 빼고!! ㅋㅋ 이게 기본 이론이다 디게 재밋다 ㅋㅋ
  // setTimeout(a, 3000);
  //그냥 on 해서 받은 이벤트는 서버에서 만 한번 실행되고 끝
  //이벤트를 emit 발생시키거나 broadcast 이벤트 발생시킨 막 들어온 클라이 언트빼고 다른 클라이언트에게 이벤트를 전달 하는것
  //은 딜레이를 줄수 있지만. on 즉 이벤트를 듣는거는 딜레이를 주면 아예 안듣게 된다. 무시됨.
  // socket.on("hellowGuy", () => {
  //   console.log("클라이언트에게 헬로우 가이라는 이벤트를 받음");
  // });
  // socket.on("message", ({ message }) => {
  //   console.log(message);
  //   socket.broadcast.emit("newMessage", { message });
  // });

  socket.on("hellow", ({ message }) => {
    socket.broadcast.emit("newHellow", {
      message,
      nickName: socket.nickName || "ann",
    });
  });

  socket.on("setName", ({ nickName }) => {
    socket.nickName = nickName;
  });
});
