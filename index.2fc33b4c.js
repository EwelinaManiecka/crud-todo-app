let form=document.getElementById("form"),input=document.getElementById("input"),msg=document.getElementById("msg"),posts=document.getElementById("posts");form.addEventListener("submit",(e=>{e.preventDefault(),console.log("button clicked"),formValidation()}));let formValidation=()=>{""===input.value?(msg.innerHTML="Post cannot be blank",console.log("failure")):(console.log("success"),msg.innerHTML="",acceptData())},data={},acceptData=()=>{data.text=input.value,console.log(data),createPost()},createPost=()=>{posts.innerHTML+=`\n    <div>\n        <p>${data.text}</p>\n        <span class="options">\n            <i onClick="editPost(this)" class="fas fa-edit"></i>\n            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>\n        </span>\n    </div>\n    `,input.value=""},deletePost=e=>{e.parentElement.parentElement.remove()},editPost=e=>{input.value=e.parentElement.previousElementSibling.innerHTML,e.parentElement.parentElement.remove()};
//# sourceMappingURL=index.2fc33b4c.js.map
