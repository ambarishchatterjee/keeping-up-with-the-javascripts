//CSS of the HTML.
const css = (
    `html, body {
            height: 100vh;
            font-size: 1rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            width: 100%;
            background-color: #b6b6b6;
            margin: 0;
            display: grid;
        }
        header,footer{
            background-color: #01507e;
            width: 100%;
            height: 50px;
            text-align: center;
            color: #F2F3F4;
        }
        footer{
            bottom: 0;
            position: fixed;
        }
        header h1{
            margin: 0;
            color: #F2F3F4;
        }

        div#index, div#login, div#signup , div#dashboard,
        div#settings, div#account, div#todoList {
            padding: 40px;
        }

        div#index, div#login, div#signup  {    
            margin: auto;
            width: 100%;
            max-width: 450px;
            background: #F2F3F4;
        }
        
        div#index {
            text-align:center;
        }

        div#app {
            margin: auto;
            width: 80%;
            background: #F2F3F4; 
        }

        div#settings {
            float:right;
        }

        .hide {
            display: none !important;
        }

        .show {
            display: block;
        }

        .clearfix {
            clear:both;
        }

        .response {
            color: #fff;
            padding: 12px 8px;
        
            margin-bottom: 5px;
        }

        .success {
            background:  #01507e;
            border:1px solid #01507e;
        }

        .fail {
            background:  #EC7063;
            border:1px solid #EC7063;
        }

        .error {
            color: #ff0000;
            margin: 0;
        }

        .form-field {
            margin-bottom: 20px;    
        }

        .form-field input { 
            padding:10px 20px;
            border: 1px solid #01507e;
        }

        label {
            color: #333;
        }

        .form-field label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
        }

        .form-field  .label-inline {
            display: inline;
        }

        input[type="text"], input[type="password"] {
            width:50%;
        }

        .btn {
            background: #01507e;
            color: #fff;
            cursor: pointer;
            padding: 10px 12px;
            border-radius: 2px;
            text-transform: uppercase;
            border: 1px solid #01507e;
            font-weight: 600;
        }

        .btn-red {
            background: #EC7063;
            border-color: #EC7063;
        }

        .btn-small {
            padding: 2px 5px;
            font-size: 0.8rem;
            margin: 20px;
        }

        .list-title {
            display: inline-block;
        }

        ul li {
            list-style: none;
            padding: 5px 8px;
        }

        ul.todos li label {
            font-size: 1.2rem;
        }

        .todo-lists {
            position: relative;
            font-size: 1.8rem;
        }

        .todo-lists ul li {
            color: #fff;
            background: #1b9eea;
            border-bottom: 1px solid #1b9eea;
            margin-bottom:5px;
            padding: 10px 20px;
            width: 50%;
            word-wrap: break-word;
        }

        .todo-lists ul li:hover {
            cursor: pointer;
        }

        .strikeout {
            text-decoration: line-through;
        }

        .status {
            color: #01507e;
            font-weight: bold;
            margin-left:5px;    
        }`);
    
//Title of HTML
const title = "ToDo Application";

//Head of HTML
const headContents = (
    `<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>${title}</title>
    <style>${css}</style>`);

document.head.innerHTML = headContents;

//Header template
const header = (
    `<header>
    <h1 id="heading">${title}</h1>
    </header>`);

//Footer template
const footer = (
    `<footer>
    <p>Pirple Project 1 by Ambarish</p>
</footer>`);

//Index template.
const indexDescription = "A ToDo app to arrange your daily tasks. Register to start creatingand save your tasks now.";
const divIds = ["index", "signup", "login", "settings",  "dashboard", "todoList", "account"];
const indexButtons = [
    { id:"btnSignup", class:"signup", label: "Sign Up" },
    { id:"btnLogin", class:"login", label: "Log In"},];
 
const indexDIV = (
    `<div class="" id="${divIds[0]}">
        <h2>${indexDescription}</h2>
        ${indexButtons.map((btn) => 
            `<button type="button" class="btn ${btn.class}" id="${btn.id}">${btn.label}</button>`).join(" ")}
    </div>`);

//Sign up template.
const signupForm = [
        { id:"fname",  type:"text", name:"fname", label:"First Name" },
        { id:"lname",  type:"text", name:"lname", label: "Last Name" },
        { id:"email",  type:"text", name:"email", label: "Email" },
        { id:"loginPassword",  type:"password", name:"password", label: "Password" },
        { id:"terms",  type:"checkbox", name:"terms", label: "I agree to the Terms of Use" },];

const signupDIV = (
    `<div class="hide" id="${divIds[1]}">
        <form class="" id="formSignup" method="post" action="">    
            ${signupForm.map((field) => 
                `<div class = "form-field">
                    ${(field.type !== "checkbox")? `<label>${field.label}</label>` : ""}
                    <input type="${field.type}" name="${field.name}" id="${field.id}" />
                    ${(field.type === "checkbox") ? `<label class="label-inline">${field.label}</label>` : ""}
                    <p class="error"></p>
                </div>`).join("")} 
                <div class = "form-field">
                    <button type="submit" class="btn">Sign up</button>
                    <button type="button" class="btn" id="btnBackSignup">Back</button>
                </div>
        </form>
    </div>`);

//Log in template.
const loginForm = [
    { id:"loginEmail",  type:"text", name:"email" },
    { id:"loginPassword",  type:"password", name:"password" },];

const loginDIV  = (
        `<div class="hide" id="${divIds[2]}">
            <form class= "" id="formLogin" method="post" action="">      
                ${loginForm.map((field) => 
                    `<div class="form-field">
                        <label>${field.name.charAt(0).toUpperCase() + field.name.slice(1)}</label>
                        <input type="${field.type}" name="${field.name}" id="${field.id}" />
                        <p class="error"></p>
                    </div>`).join("")} 
                    <div class="form-field">
                        <button type="submit" class="btn">Log in</button>
                        <button type="button" class="btn" id="btnBackLogin">Back</button>
                    </div>
            </form>
        </div>`);

//App navbar template.
const settingsButtons = [
        {id: "btnDashboard", text: "Dashboard", class:""},
        {id: "btnAccountSettings", text: "Account Settings", class:""},
        {id: "btnLogout", text: "Logout", class:"btn-red"},
    ];  

const settingsDIV = (
    `<div class="hide" id="${divIds[3]}">
        <p></p>
        ${settingsButtons.map((btn) => 
            `<button class="btn ${ btn.text === 'Logout' ? btn.class : ""}" id="${btn.id}">${btn.text}</button>` ).join(" ")}
    </div>
    <div class="clearfix"></div>`);

//App dashboard template.
const todoListTitle = "Here's your to-do lists";
const dashboardDIV = (
    `<div class="hide" id="${divIds[4]}">
        <p class="new-todo">Start creating your first to-do list</p>
        <button type="button" class="btn" id="btnNewTodoList">Create New to-do List</button>
        <div class="todo-lists">
            <h2>${todoListTitle}</h2>
        </div>
    </div>`);

//App todolist template.
const newTodoListTitle = "Create new todo list";
const todoListForm = [
    { id:"listName", type:"text", name:"listName", placeholder: "To-do list name"},];

const todoListButtons = [
    { id:"btnTodoListSubmit", type: "submit", name:"todoListSubmit", class:"", label: "Add List"},
    { id:"btnCancel", type: "button", name:"cancel", class:"hide", label: "Cancel"}, ];

const todoForm = [
    { id:"todo", type:"text", name:"todo", placeholder: "New task"}, ];

const todoListDIV = (
    `<div class="hide" id="${divIds[5]}">
        <div class="" id="newTodo">
            <h2>${newTodoListTitle}</h2>
            <form class="" id="formTodoList" method="post" action="">
                <div class="form-field">
                    ${todoListForm.map((field) => 
                        `<input type="${field.type}" id="${field.id}" name="${field.name}" placeholder="${field.placeholder}" />`)}
                        
                    ${todoListButtons.map((btn) => 
                        `<button type="${btn.type}" id="${btn.id}" name="${btn.name}" class="btn ${btn.class}">${btn.label}</button>`)}
                    <p class="error"></p>
                </div>
            </form>
        </div>
        <div class="" id="listItems">
            <h2 class="list-title"></h2>
            <button class="btn btn-small" id="btnEditTodoList">Edit</button>
            <form class="" id="formTodo" method="post" action="">
                <div class="form-field">
                    ${todoForm.map((field) => 
                        `<input type ="${field.type}" id="${field.id}" name="${field.name}" placeholder="${field.placeholder}" />`)}
                    <button type="submit" class="btn">Add</button>
                    <p class="error"></p>
                </div>
            </form>
            <ul class="todos"></ul>
        </div>
    </div>`);

//Account settings template.
const accountForm = [
            { id:"accFname",  type:"text", name:"fname", label:"First Name" },
            { id:"accLname",  type:"text", name:"lname", label: "Last Name" },
            { id:"accEmail",  type:"text", name:"email", label: "Email" },
            { id:"accPassword",  type:"password", name:"password", label: "Password" },];

const accountDIV = (`<div class="hide" id="${divIds[6]}">
        <form class="" id="formAccount" method="post" action=""> 
            ${accountForm.map((field) => 
            `<div class="form-field">
                <label>${field.label}</label>
                <input type= "${field.type}" name = "${field.name}" id= "${field.id}" />
                ${(field.type === "checkbox") ? `<label class = "label-inline">${field.label}</label>` : ""}
                <p class="error"></p>
             </div>`).join("")}
             <div class="form-field">
                <button type="submit" class="btn">Save</button>
             </div>
        </form>
    </div>`);  

//App template.
const appDIV = (
            `<div class="" id="app">
                ${settingsDIV}
                ${dashboardDIV}
                ${todoListDIV}
                ${accountDIV}
            </div>`);

//HTML body.
document.body.innerHTML = `${header}${indexDIV}${signupDIV}${loginDIV}${appDIV}${footer}`;

//External script.
const externalScript = document.createElement("script");
externalScript.setAttribute("type", "text/javascript");
externalScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js");
document.body.insertBefore(externalScript, appDIV.nextSibling);

//App scripts.
/* const script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "app.js");
 
document.body.insertBefore(script, externalScript.nextSibling);*/