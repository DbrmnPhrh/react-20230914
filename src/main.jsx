import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from '../constants/mock';


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <div>
      <div>
        <h1>{restaurants[0].name}</h1>
        <h1>Меню:</h1>
        <p>{restaurants[0].menu[0].name}</p>
        <p>{restaurants[0].menu[1].name}</p>
        <p>{restaurants[0].menu[2].name}</p>
        <h2>Отзывы:</h2>
        <p>{restaurants[0].reviews[0].text}</p>
        <p>{restaurants[0].reviews[1].text}</p>
      </div>
      <br />
      <div>
        <h1>{restaurants[1].name}</h1>
        <h1>Меню:</h1>
        <p>{restaurants[1].menu[0].name}</p>
        <p>{restaurants[1].menu[1].name}</p>
        <br />
        <h2>Отзывы:</h2>
        <p>{restaurants[1].reviews[0].text}</p>
        <p>{restaurants[1].reviews[1].text}</p>
        <p>{restaurants[1].reviews[2].text}</p>
      </div>
      <br />
      <div>
        <h1>{restaurants[2].name}</h1>
        <h1>Меню:</h1>
        <p>{restaurants[2].menu[0].name}</p>
        <p>{restaurants[2].menu[1].name}</p>
        <p>{restaurants[2].menu[2].name}</p>
        <br />
        <h2>Отзывы:</h2>
        <p>{restaurants[2].reviews[0].text}</p>
      </div>
      <div>
        <h1>{restaurants[3].name}</h1>
        <h1>Меню:</h1>
        <p>{restaurants[3].menu[0].name}</p>
        <p>{restaurants[3].menu[1].name}</p>
        <br />
        <h2>Отзывы:</h2>
        <p>{restaurants[3].reviews[0].text}</p>
        <p>{restaurants[3].reviews[1].text}</p>
      </div>
    </div>
  );
