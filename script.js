async function send() {
  const input = document.getElementById("userInput").value;
  const chat = document.getElementById("chat");
  if (!input) return;

  chat.innerText += "\n🧑: " + input;

  const response = await fetch("https://miras-chat.repl.co/chat", { // <-- Осы жерге Replit сервер сілтемесі
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messages: [{ role: "user", content: input }]
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || "⚠️ Жауап ала алмадым...";
  chat.innerText += "\n🤖: " + reply + "\n";
  document.getElementById("userInput").value = "";
}
