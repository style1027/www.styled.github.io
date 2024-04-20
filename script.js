document.getElementById("post-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    var posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.push({title: title, content: content});
    localStorage.setItem("posts", JSON.stringify(posts));

    showPosts();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
});

function showPosts() {
    var posts = JSON.parse(localStorage.getItem("posts") || "[]");
    var postsList = document.getElementById("posts");
    postsList.innerHTML = "";

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var postElement = document.createElement("li");
        postElement.innerHTML = `
            <p>标题: ${post.title}</p>
            <p>内容: ${post.content}</p>
        `;
        postsList.appendChild(postElement);
    }

    document.getElementById("saved-post-count").innerText = posts.length;
}

document.addEventListener("DOMContentLoaded", function() {
    showPosts();
});
