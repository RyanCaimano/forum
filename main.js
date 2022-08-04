document.getElementById("submit").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var text = document.getElementById("message").value;

  var postsDiv = document.querySelector(".posts");

  var newPostDiv = document.createElement("div");

  var newPostTextP = document.createElement("p");
  var newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);

  var newPostNameP = document.createElement("p");
  var newPostNameNode = document.createTextNode("Posted By: " + name);
  newPostNameP.appendChild(newPostNameNode);

  var newPostHR = document.createElement("hr");

  newPostDiv.append(newPostTextP);
  newPostDiv.append(newPostNameP);
  newPostDiv.append(newPostHR);

  postsDiv.append(newPostDiv);
});
