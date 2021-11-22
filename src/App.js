import './App.css';
import comic1 from './img/comic01.jpg';
import comic2 from './img/comic02.jpg';
import comic3 from './img/comic03.jpg';
import { useEffect, useState } from 'react';

function App() {
   const [move, SetMove] = useState(0);

   const cards = [
      { id: 1, image: comic1 },
      { id: 2, image: comic2 },
      { id: 3, image: comic3 },
   ];

   const mod = (n, m) => {
      let result = n % m;

      return result >= 0 ? result : result + m;
   };

   useEffect(() => {
      setTimeout(() => {
         SetMove((move + 1) % cards.length);
      }, 3000);
   }, [move]);
   return (
      <div className="App">
         <div className="wrap">
            {cards.map((item, i) => {
               const indexLeft = mod(move - 1, cards.length);
               const indexRight = mod(move + 1, cards.length);

               let className = '';

               if (i === move) {
                  className = 'card card__active';
               } else if (i === indexRight) {
                  className = 'card card__right';
               } else if (i === indexLeft) {
                  className = 'card card__left';
               } else {
                  className = 'card';
               }
               return (
                  <img
                     key={item.id}
                     src={item.image}
                     alt="card"
                     className={className}
                  />
               );
            })}
         </div>
      </div>
   );
}

export default App;
