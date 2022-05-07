import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className="my-4">
            <h1 className="blog-title text-center my-4">Blogs</h1>
            <div className="container">
                <div>
                    <h3>1. What's the purpose of JWT? And how does it work?</h3>

                    <p>Jwt means json web token. It's been used to ensure server and client authentication. It is basically used so that a user can create a secure key to connect with the server. And that very server will provide information if the user provides the key that's been connected between the server and the client. So that no one else but only the authorized user can get the access of server or whatever service he's using. While log in a key's been generated. Which has 3 parts and seoarated by dots. And a token bearer bears this key. While log in the generated key comes to the server and the server saves it. Either local storage or any other service. After awhile if any user logged in if the token matched with the current user it will provide whatever service the user's been taking on client side. And it also secure the data so that no one can get it by through http url.</p>
                </div>

                <div>
                    <h3>2. When should we use nodejs and mongodb.</h3>

                    Nodejs is a JavaScript engine on the other hand mongodb is a library. A database where we can store, create, recreate or remove datas or documents. To run some code in JavaScript we need a programing environment. That's what nodejs provides us. And if we have to store data so we can reuse we use mongo db.
                </div>

                <div>
                    <h3>3. Difference between JavaScript and nodejs</h3>


                    We can run JavaScript only in browser through engine.	But we can run JavaScript without browser with the help of node js. Node js is a run time environment program. Where JavaScript is a script programming language.
                    JavaScript basically used in a client side and we can use node js in server side. We can play around with html tags and browser dom with JavaScript but we can't do it with node js.
                    Just like I said before about client and server side... JavaScript is basically a frontend side language whereas nodejs used in backend.
                </div>
            </div>
        </div>
    );
};

export default Blogs;