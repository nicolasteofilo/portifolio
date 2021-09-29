import { v4 as uuid } from 'uuid';

import rocketImg from '../images/projects/rocket.png'
import dtmoneyImg from '../images/projects/dtmoney.png'


export const domination = [
    {
    id: uuid(),
    url: 'https://github.com/nicolasteofilo/rocket.q',
    name: 'Rocket.Q',
    background: <img src={rocketImg} alt="RocketQ" />,
    backgroundIcon: '#f6da3a',
    borderBottom: '1px solid #f6da3a',
    description: 'Se conecte com pessoas em uma sala de chat de perguntas e respostas',
    techs: 'HTML, CSS, Javascript, Node'
  },
  {
    id: uuid(),
    url: 'https://github.com/nicolasteofilo/dtmoney',
    name: 'Dt Money',
    background: <img src={dtmoneyImg} alt="RocketQ" />,
    backgroundIcon: '#2ac7e3',
    borderBottom: '1px solid #2ac7e3',
    description: 'Gerencie suas finanças pessoas de uma maneira fácil e rápida!',
    techs: 'ReactJs, Styled-Components'
  },
  // {
  //   id: uuid(),
  //   icon: <DiNodejsSmall />,
  //   name: 'Node Js',
  //   backgroundIcon: '#8cc84b',
  //   borderBottom: '1px solid #8cc84b',
  //   description: ''
  // },
  // {
  //   id: uuid(),
  //   icon: <SiTypescript />,
  //   name: 'Typescript',
  //   backgroundIcon: '#2281cf',
  //   borderBottom: '1px solid #2281cf',
  //   description: ''
  // },
  // {
  //   id: uuid(),
  //   icon: <DiDatabase />,
  //   name: 'Typeorm',
  //   backgroundIcon: '#c8924b',
  //   borderBottom: '1px solid #c8924b',
  //   description: 'asas'
  // },

];

// export const learning: IPropsItems[] = [
//   {
//     id: uuid(),
//     icon: <DiReact />,
//     name: 'React Js',
//     backgroundIcon: '#2ac7e3',
//     borderBottom: '1px solid #2ac7e3'
//   },
//   {
//     id: uuid(),
//     icon: <DiNodejsSmall />,
//     name: 'Node Js',
//     backgroundIcon: '#8cc84b',
//     borderBottom: '1px solid #8cc84b'
//   },
//   {
//     id: uuid(),
//     icon: <SiTypescript />,
//     name: 'Typescript',
//     backgroundIcon: '#2281cf',
//     borderBottom: '1px solid #2281cf'
//   },
//   {
//     id: uuid(),
//     icon: <DiReact />,
//     name: 'React Native',
//     backgroundIcon: '#5667f9',
//     borderBottom: '1px solid #5667f9'
//   }
// ];
