document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const commentText = document.getElementById("commentText").value.trim();

  if (username && commentText) {
    const comment = {
      username: username,
      text: commentText,
      timestamp: new Date().toLocaleString(),
    };
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));

    displayComments();
    this.reset();
  }
});

function displayComments() {
  const commentsContainer = document.getElementById("commentsContainer");
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  commentsContainer.innerHTML = "";
  comments.forEach((c) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${c.username}</strong> (${c.timestamp}):<br>${c.text}<hr>`;
    commentsContainer.appendChild(div); // Добавляем в контейнер
  });
}

window.onload = displayComments;
