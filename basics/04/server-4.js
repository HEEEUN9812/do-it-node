// HTML 페이지 서빙하기  (결과 비교 파일 : 04\results\server-4.js)

const http = require("http");

const server = http.createServer((req, res) => {
    console.log("요청 발생");
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
})