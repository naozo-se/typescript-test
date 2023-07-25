import * as net from "net";

// ネットワーク設定（事前にコンテナ同士のネットワークグループ設定は必要）
const HOST: string = "python-socket_app_1";
const PORT: number = 50000;
// 送信内容
// const SEND_DATA = "send message";

const sendSocekt = (send_data: string) => {
  return new Promise((resolve, reject) => {
    // インスタンス生成
    const client = new net.Socket();

    // 接続処理
    client.connect(PORT, HOST, () => {
      console.log("connected: " + HOST + ":" + PORT);
      // メッセージ送信
      client.write(send_data);
    });
    // 相手から通信が帰ってきたとき
    client.on("data", (data: Buffer) => {
      console.log("Recieve Data: " + data);
      // 接続破棄
      client.destroy();
    });
    // 破棄したときの処理
    client.on("close", () => {
      console.log("Connection closed");
      resolve(0);
    });
    // エラー処理
    client.on("error", (err: Error) => {
      console.log("Error:", err);
      reject(1);
    });
  }
  )
}


// メイン実行
const main = async () => {
  try {
    const retcode = await sendSocekt(process.argv[2]);
    console.log("retcode=", retcode)
  } catch (err) {
    console.log("err=", err)
  }

}

// メイン実行
main();
