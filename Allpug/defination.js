let aboutHeading=document.getElementsByClassName('helloworld')[0]
let infoHeading=document.getElementsByClassName('defi')[0]
let insertCode=document.getElementById('coe')
let preka=document.getElementById('preka')

let python=document.getElementById('py')
let c=document.getElementById('c')
let java=document.getElementById('java')
let html=document.getElementById('html')
let css=document.getElementById('css')


var defination ={
c:"The C programming language is a computer programming language that was developed to do system programming for the operating system UNIX and is an imperative programming language. ... It is a procedural language, which means that people can write their programs as a series of step-by-step instructions."  ,
python:"Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. ... Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse",
java:"JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",
html:"Hypertext Markup Language (HTML) is the standard markup language for documents designed ... Headings: HTML headings are defined with the <h1> to <h6> tags with H1 being the highest (or most important) level and H6 the least",
css:"CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files."
}

var code ={
    C_code:`include<stdio.h> //including header file 
    int main(){
        int a=10;  //declare variable
        printf("Hello World !"); //semicolon is must
    }
    /* this is the syntax of multiline comment*/
    /*in c programming user can define his own header file*/`,

    pythonCode:`print("Hello world !")

    """This is the syntax of multiline comment in python"""
    
    #This is the syntax of single comment in python
    
    #to print current date 
    import datetime 
    #importing datetime module 
    
    print(datetime.datetime.now()) #this will print current date
    
    >>>2020-09-14 05:37:03.620870
    
    #to make Gui window install tkinter
    import tkinter
    root=Tk()
    root.mainloop()  #this will not close the window until the user will close 
    `
    ,javaCode:`
    console.log("Hello world !")
    or document.write("Hello world !")
    
    // this is the syntax of single line commnet
    
    /*this is the syntax of multiline comment */
    
    //javaSript runs in its engine (V8-engine)`,
    htmlCode:`
    <!doctype html>
    <html>
    <head>
    <title>Hello World !</title>
    </head>
    <body>
    <h1> Hello World !</h1>
    </body>
    <!--this is comment in html -->
    </html>`

    ,cssCode:`*{
        margin:50px;
        padding:20px
    }
    .container{
        color :red;
        margin:26px;
        display:felx;

    }
    #element{
        background-color:"blue";
        margin:auto;
    }`

}
// console.log(python,c,html,java,css,preka);



// console.log(aboutHeading, aboutHeading.innerHTML,infoHeading,infoHeading.innerText,insertCode,insertCode.innerText);

class addevent {
    constructor(name,about,info,code) {

        this.name=name;
        this.about=about
        this.info=info
        this.code=code
        this.event=addEventListener('click',()=>{
            console.log("hloo");
        })
        
    }


    

}


python.addEventListener("click",(event)=>{
    insertCode.setAttribute("class","language-python")
    preka.setAttribute("class","language-python")

    aboutHeading.innerText="About Python"
    infoHeading.innerText=defination.python
    insertCode.innerText=code.pythonCode

})

c.addEventListener("click",(event)=>{
    insertCode.setAttribute("class","language-c")
    preka.setAttribute("class","language-c")

    aboutHeading.innerText="About C Programming"
    infoHeading.innerText=defination.c
    insertCode.innerText=code.C_code

})

java.addEventListener("click",(event)=>{
    insertCode.setAttribute("class","language-javascript")
    preka.setAttribute("class","language-javascript")

    aboutHeading.innerText="About Javascript"
    infoHeading.innerText=defination.java
    insertCode.innerText=code.javaCode

})

html.addEventListener("click",(event)=>{
    insertCode.setAttribute("class","language-html")
    preka.setAttribute("class","language-html")

    aboutHeading.innerText="About HTML"
    infoHeading.innerText=defination.html
    insertCode.innerText=code.htmlCode

})

css.addEventListener("click",(event)=>{
    insertCode.setAttribute("class","language-css")
    preka.setAttribute("class","language-css")

    aboutHeading.innerText="About CSS"
    infoHeading.innerText=defination.css
    insertCode.innerText=code.cssCode

})


