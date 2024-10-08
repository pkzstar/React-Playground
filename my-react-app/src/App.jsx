//App.jsx

import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
// import Card from "./Card.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
// import Button from "./button.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import OnChange from "./OnChange.jsx";
import ColorPicker from "./ColorPicker.jsx";
// import ObjectUpdate from "./ObjectUpdate.jsx";
import FoodArray from "./Food.jsx";
import ListCars from "./Cars.jsx";
import ToDoList from "./ToDoList.jsx";
import Effect from "./Effect.jsx";
import DigiClock from "./DigitalClock.jsx";
import Ref from "./Ref.jsx";
// import ContextA from "./ContextA.jsx";
// import ContextB from "./ContextB.jsx";
// import ContextC from "./ContextC.jsx";
import StopWatch from "./StopWatch.jsx"


function App() {
 
        const fruits = [
              {id: 1, name: "apple", calories: 95}, 
              {id: 2, name: "orange", calories: 45}, 
              {id: 3, name: "banana", calories: 105}, 
              {id: 4,  name: "coconut", calories: 159}, 
              {id: 5,  name: "pineapple", calories: 37}];

        const vegetables = [
                {id: 6, name: "potatoes", calories: 110}, 
                {id: 7, name: "celery", calories: 15}, 
                {id: 8, name: "carrots", calories: 25}, 
                {id: 9,  name: "corn", calories: 63}, 
                {id: 10,  name: "broccoli", calories: 50}];
        

  const SpongeBobImg = "https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1617349775490-7P9LCGGC7LOWVR95DKAX/SPONGEBOB+SQUAREPANTS+SOUNDBOARD";
  const PatImg = "https://i.redd.it/rsxvri0ygqcc1.png";
  const SquidImg = "https://i.redd.it/1snloyd49aob1.jpg";
  const SandyImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDuSdGUw3OY6Pt4pefw6apPmoalSn-o8IMg&s"

  return(
    <>
           {/* <ContextA />
           <ContextB />
           <ContextC /> */}

       <Header/>
       <UserGreeting isLoggedIn={true} username="Joe Sparrow"/>
       <DigiClock />
       <StopWatch />

       <Ref />
       <div className="grid">
       {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
       {fruits.length > 0 && <List items={vegetables} category="vegetables"/>}
       </div>
       <OnChange />
       <Effect />
       <ToDoList/>
       <hr></hr>
       <ColorPicker/>
       <FoodArray/>


       {/* <Card/> */}
       <MyComponent/>
       <ProfilePicture />
       <Counter />
       <Student name="Spongebob" imageSrc={SpongeBobImg} age={30} isStudent={true}/>
       <Student name="Patrick" imageSrc={PatImg} age={42} isStudent={false}/>
       <Student name="Squidward" imageSrc={SquidImg} age={50} isStudent={false}/>
       <Student name="Sandy" imageSrc={SandyImg} age={27} isStudent={true}/>
       <ListCars/>
       {/* <ObjectUpdate/> */}
       <hr></hr>
       <Footer/>
    </>

  );
}

export default App
