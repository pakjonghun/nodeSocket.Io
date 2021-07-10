const socket = io("/");

// function abc(message) {
//   socket.emit("message", { message });
// }

// socket.on("newMessage", ({ message }) => {
//   console.log(message);
// });


//소켓은 객체라서 이름 을 넣어줄수 있다.
//소켓은 메모리 라서 서버가 힘들어 한다.
//소켓은 메모리라서 서버리프레쉬 하면 바로... 다 날라간다.
//리얼타임용 디비가 있다고 한다... 엄청 ... 하... 
//쿠키나 세션 필요없다. 이건 항상 연결 되 있다 
socket.emit("setNickName", { nickName: "nickName" });

socket.on("newHellow", ({ message, nickName }) => {
  console.log(`${nickName} 에게 newHellow 이벤트 받음${message}`);
});

socket.emit("hellow", {
  message: "message",
});
