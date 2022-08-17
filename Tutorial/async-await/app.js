//? (1)
//function hello() {
//  return "Hello World";
//}
//const text = hello();
//console.log(hello());

//? (2) Promise
//function hello() {
//  return new Promise((resolve) => resolve("Hello World"));
//}
//const text = hello();
//text.then((resolve) => console.log(resolve));

//? (3) Async to Promise
//async function hello() {
//  return "Hello World";
//}
//const text = hello();
//console.log(text);
//text.then((resolve) => console.log(resolve));

//? (4) Async Await
//* await çalışabilmesi için async ile çalışcan bir fonksiyon içerisinde olmalı örnek ->
//async function hello(name) {
//  return await console.log(name);
//}
//hello("Fatih Şen");

//* trick örnk ->
//(async () => {
//  return await console.log("Hello World");
//})();

const userData = document.querySelector("#user .user-data");
const userPost = document.querySelector("#user .post");
const comments = document.querySelector("#comments");

document.querySelector("#btn").addEventListener("click", async () => {
  const postNum = document.querySelector("#inputNum").value;
  userData.innerHTML = "";
  userPost.innerHTML = "";
  comments.innerHTML = "";
  const user = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${postNum}`)
  ).json();
  userData.innerHTML = `
      <div class="inner">
             <img class="img" src="https://via.placeholder.com/40/92c952"></img>
             <div class="name-mail">
               <div class="name">${user.name} <span>${user.username}</span></div>
               <div class="mail">${user.email}</div>
             </div>
           </div>
         <div class="userid"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </div>
      `;
  const post = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}`)
  ).json();
  userPost.innerHTML = `
    <div class="post">
      <h4>${post.title}</h4>
      <p>${post.body}</p>
    </div>
  `;
  const comment = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${user.id}/comments`
    )
  ).json();
  comment.map((cmnt) => {
    const li = document.createElement("li");
    li.classList.add("comment");
    li.innerHTML = `
    <img class="user-img" src="https://via.placeholder.com/26/009999"></img>
    <div class="user-content">
      ${cmnt.name}
    </div>
  `;
    comments.appendChild(li);
  });
});
