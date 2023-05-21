// render(props){
//   return <div>
//     <p>Наименование: {props.name}</p>
//     <p>Цена: {props.price}</p>
//   </div>
// }

// render(){
//   return <div>
//     <p>Наименование: {this.props.name}</p>
//     <p>Цена: {this.props.price}</p>
//   </div>
// }
// class User extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {this.props.name: 'Чак', this.props.surname: 'Норис'}
// 	}
// 	render() {
// 		return <div>
// 			Вы вошли как: {this.state.name} {this.state.surname}
// 		</div>;
// 	}
// }

// this... = {counter:0, color:'#ffffff'}

// handlerUpdate() {
//   const newCounter = this.state.counter + 1;
//   this.setState({counter: newCounter});
//   console.log('Изменено состояние');
// }

// <button onClick={this.handlerUpdate}>Обновить</button>

// class myForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {name: ''};
//   }
//   render() {
//     return (
//       <form>
//         <label>
//           Имя:
//           <input type="text" value={this.state.name}/>
//         </label>
//       </form>
//     );
//   }
// }

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Марья',
//   lastName: 'Моревна'
// };

// const element = (
//   <h1>
//     Здравствуй, {formatName(user)}!
//   </h1>
// );
// const element = <img src={user.avatarUrl} >;
// {
//   /* <h1 style={{ color = red, font-size : 20px }}>React test jsx</h1> */
// }

// const Car = (props) =>(
//   <div>
//     <h2>Car Name: {props.name}</h2>
//     <p>Year: {props.year}</p>
//   </div>
// )
// <Car name={'Ford'} year={2018}/>

// function ReactTest(props){
//   const admin = true
//   return(
//     <div>
//       {admin?<p>Здравствуйте Администратор</p>:<p>Здравствуйте Гость</p>}
//     </div>
//   )
// }
// function App(){
//     return(
//       //какой тег пропущен?
//         <div className="App">
//             <h1>Hello world</h1>
//         </div>
//         <p>Mistake here</p>
//       //какой тег пропущен?
//     )
// }
// function App(){
//     return(
//         <div className="app">
//             <Car name="Lexus" year="2021" />
//             <Car name="Audi" year="2022" />
//             <Car name="BMD" year="2023" />
//         </div>
//     )
// }
// root.render(
//     <Car name="Lexus" year="2021" />
//     <Car name="Audi" year="2022" />
//     <Car name="BMD" year="2023" />
// )

// function Car( **** ){
//     return(
//         <div className="car">
//             <h3>{ ****.name }</h3>
//             <p>Year: <strong>{ ****.year }</strong></p>
//         </div>
//     )
// }

// root.render(<Car name="Lexus" year="2021" />);

let i = 0;
let timer = () => {
  setTimeout(() => {
    console.log(++i);
    timer();
  }, 1000 * i);
};
timer();
