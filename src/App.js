import React from 'react';

import Header from './components/Header';
import Profile from './components/Profile';

import './App.css';

function App() {
  const metadata = {
    nickname: 'fristys',
    name: 'Momchil Georgiev',
    followed: false,
    avatar: {
      url: 'https://source.unsplash.com/random/150x150',
      alt: 'Random image from the name'
    },
    posts: 179,
    followers: 30,
    following: 47,
    description: 'Once upon a time AWESOME.',
    images: [
      {
        url: 'https://source.unsplash.com/random/600x600',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/650x650',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/700x700',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/750x750',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/800x800',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/850x850',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/500x500',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/550x550',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/555x555',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/666x666',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      },
      {
        url: 'https://source.unsplash.com/random/880x880',
        alt: 'May contain some random stuff',
        comments: Math.floor(Math.random() * 20)
      }
    ]
  };

  return (
    <div className="App">
      <Header />
      <Profile metadata={metadata} />
    </div>
  );
}

export default App;
