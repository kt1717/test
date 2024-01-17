//import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './components/Menu.js';
import Content from './components/Content.js';

//import List from '../src/pages/Home/components/List.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App /> <Edit />
//   </React.StrictMode>
// );

//傳遞資料用ㄉ酷東西
//parameters
const someFunc = (param1,param2,para3)=>{
  console.log(param1,param2,para3);
}
//arguments
someFunc('job','developer');

const books = [
{
  author:'Kelly',
  title:'book1',
  img:'./images/51Q50f11cmL.jpg',
  id:1
},
{
  author:'Penny',
  title:'book2',
  img:'./images/capybara.jpg',
  id:2
}

]
// const Booklist = (props) => {
  
//   return <section className='booklist'>
//     <Book title="tata" auth="Amy" img='./images/51Q50f11cmL.jpg'/>
//     <Book title="BOBO" auth="Daisy" img=''/>
//     <Book title="Lili" auth="Ezabella"/>
//     </section>
// }


const Booklist = () => {
  
  return( <section className='booklist'>
   {books.map((eachbook)=>{
    //    const {img,title,author}=book;
      //  return <Book img={img} title={title} author={author}/>
   return <Book {...eachbook} key={eachbook.id}/>
   })}
         </section>
         );
}

// const Book = (props) => {  
//   //const {title , author , img} = props;
//   //const {img,title,author} = props;
//         return <article className='book'>
//       <Title title={props.title}></Title>
//       <Author auth={props.author}></Author>
//       <Image img={props.img}></Image>
//         </article>
// }
const Book = (props) => {  
  //const {title , author , img} = props;
  const {img,title,author} = props;
        return <article className='book'>
      <Title title={title}></Title>
      <Author author={author}></Author>
      <Image img={img}></Image>
        </article>
}
const NaviBar = ()=>{
return(
  <div>
<nav className="navbar navbar-inverse visible-xs">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">Logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Dashboard</a></li>
        <li><a href="#">Age</a></li>
        <li><a href="#">Gender</a></li>
        <li><a href="#">Geo</a></li>
      </ul>
    </div>
  </div>
</nav>

<div className="container-fluid">
  <div className="row content">
    <div className="col-sm-3 sidenav hidden-xs">
      <h2>Logo</h2>
      <ul className="nav nav-pills nav-stacked">
        <li className="active"><a href="#section1">Dashboard</a></li>
        <li><a href="#section2">Age</a></li>
        <li><a href="#section3">Gender</a></li>
        <li><a href="#section3">Geo</a></li>
      </ul><br/>
    </div>
    <br/>
    
    <div className="col-sm-9">
      <div className="well">
        <h4>Dashboard</h4>
        <p>Some text..</p>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <h4>Users</h4>
            <p>1 Million</p> 
          </div>
        </div>
        <div className="col-sm-3">
          <div className="well">
            <h4>Pages</h4>
            <p>100 Million</p> 
          </div>
        </div>
        <div className="col-sm-3">
          <div className="well">
            <h4>Sessions</h4>
            <p>10 Million</p> 
          </div>
        </div>
        <div className="col-sm-3">
          <div className="well">
            <h4>Bounce</h4>
            <p>30%</p> 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
            <p>Text</p> 
            <p>Text</p> 
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
            <p>Text</p> 
            <p>Text</p> 
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
            <p>Text</p> 
            <p>Text</p> 
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="well">
            <p>Text</p> 
          </div>
        </div>
        <div className="col-sm-4">
          <div className="well">
            <p>Text</p> 
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);

}

const Title = ({title}) => <h1 className="container-md" >{title}</h1>;

const Author= ({author}) =>  {
const Inlinestyle={
color:'#987654', marginTop:'0.5rem'
}

return <h2 style={Inlinestyle}>{author}</h2>;
};
//const Author= () =>  <h2 style={{color:'#987654',fontSize:'0.75rem',marginTop:'0.5rem'}}>Ashley Elston</h2>;

const Image = ({img}) => <div>Image<br/><img src={img}/></div>;
//const Image = () => <div>Image<br/><img src='../public/images/51Q50f11cmL.jpg'/></div>;



function Hello() {
  return (  
  <div className="hello" tabIndex={1}>
      <button onclick="myFunction()">click me</button>
      <input readonly id="name"/>
    </div>
  )
}
 

function Capy() {
  return <React.Fragment>Curu~Curu~</React.Fragment>;
}

//const MsWhite = () = > return <p>this is my message</p>;
const MsWhite = () => <p>It's Dragon Year</p>;

const Message = () => { 
  return <p>this is my message</p> ;}
 




const Try = () => {
  const [selectedSection, setSelectedSection] = useState('section1');

  const handleMenuSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Menu onSelect={handleMenuSelect} />
      <Content selectedSection={selectedSection} />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
  <React.StrictMode>
    <App /> <Booklist/><Hello/><Capy/><MsWhite/><Message/><NaviBar/>
 <Try/>
  </React.StrictMode> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals(); //export的功能
