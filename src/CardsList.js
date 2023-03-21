const CARDS = [
    {
      number: 'k',
      shape: 'diamonds',
      cardName: 'King of diamonds',
      cardImage: 'diamonds_king.png',
      hasAction: false,
      action: null
    },
    {
      number: 'k',
      shape: 'spades',
      cardName: 'King of Spades',
      cardImage: 'spades_king.png',
      hasAction: false,
      action: null
    },
    {
      number: 'k',
      shape: 'hearts',
      cardName: 'King of Hearts',
      cardImage: 'hearts_king.png',
      hasAction: false,
      action: null
    },
    {
      number: 'k',
      shape: 'clubs',
      cardName: 'King of Clubs',
      cardImage: 'clubs_king.png',
      hasAction: false,
      action: null
    },
    {
      number: '10',
      shape: 'diamonds',
      cardName: 'Ten of Diamonds',
      cardImage: 'diamonds_10.png',
      hasAction: false,
      action: null
    },
    {
      number: '10',
      shape: 'spades',
      cardName: 'Ten of Spades',
      cardImage: 'spades_10.png',
      hasAction: false,
      action: null
    },
    {
      number: '10',
      shape: 'hearts',
      cardName: 'Ten of Hearts',
      cardImage: 'hearts_10.png',
      hasAction: false,
      action: null
    },
    {
      number: '10',
      shape: 'clubs',
      cardName: 'Ten of Clubs',
      cardImage: 'clubs_10.png',
      hasAction: false,
      action: null
    },
    {
      number: '9',
      shape: 'diamonds',
      cardName: 'Nine of Diamonds',
      cardImage: 'diamonds_9.png',
      hasAction: false,
      action: null
    },
    {
      number: '9',
      shape: 'spades',
      cardName: 'Nine of Spades',
      cardImage: 'spades_9.png',
      hasAction: false,
      action: null
    },
    {
      number: '9',
      shape: 'hearts',
      cardName: 'Nine of Hearts',
      cardImage: 'hearts_9.png',
      hasAction: false,
      action: null
    },
    {
      number: '9',
      shape: 'clubs',
      cardName: 'Nine of Clubs',
      cardImage: 'clubs_9.png',
      hasAction: false,
      action: null
    },
    {
      number: '8',
      shape: 'diamonds',
      cardName: 'Eight of Diamonds',
      cardImage: 'diamonds_8.png',
      hasAction: true,
      action: 'suspension'
    },
    {
      number: '8',
      shape: 'spades',
      cardName: 'eight of Spades',
      cardImage: 'spades_8.png',
      hasAction: true,
      action: 'suspension'
    },
    {
      number: '8',
      shape: 'hearts',
      cardName: 'Eight of Hearts',
      cardImage: 'hearts_8.png',
      hasAction: true,
      action: 'suspension'
    },
    {
      number: '8',
      shape: 'clubs',
      cardName: 'Eight of Clubs',
      cardImage: 'clubs_8.png',
      hasAction: true,
      action: 'suspension'
    },
    {
      number: '7',
      shape: 'diamonds',
      cardName: 'Seven of Diamonds',
      cardImage: 'diamonds_7.png',
      hasAction: false,
      action: null
    },
    {
      number: '7',
      shape: 'spades',
      cardName: 'Seven of Spades',
      cardImage: 'spades_7.png',
      hasAction: false,
      action: null
    },
    {
      number: '7',
      shape: 'hearts',
      cardName: 'Seven of Hearts',
      cardImage: 'hearts_7.png',
      hasAction: false,
      action: null
    },
    {
      number: '7',
      shape: 'clubs',
      cardName: 'Seven of Clubs',
      cardImage: 'clubs_7.png',
      hasAction: false,
      action: null
    },
    {
      number: '6',
  shape: 'diamonds',
      cardName: 'Six of Diamonds',
      cardImage: 'diamonds_6.png',
      hasAction: false,
      action: null
    },
    {
      number: '6',
      shape: 'spades',
      cardName: 'Six of Spades',
      cardImage: 'spades_6.png',
      hasAction: false,
      action: null
    },
    {
      number: '6',
      shape: 'hearts',
      cardName: 'Six of Hearts',
      cardImage: 'hearts_6.png',
      hasAction: false,
      action: null
    },
    {
      number: '6',
      shape: 'clubs',
      cardName: 'Six of Clubs',
      cardImage: 'clubs_6.png',
      hasAction: false,
      action: null
    },
    {
      number: '5',
      shape: 'diamonds',
      cardName: 'Five of Diamonds',
      cardImage: 'diamonds_5.png',
      hasAction: true,
      action: 'pick 3'
    },
    {
      number: '5',
      shape: 'spades',
      cardName: 'five of Spades',
      cardImage: 'spades_5.png',
      hasAction: true,
      action: 'pick 3'
    },
    {
      number: '5',
      shape: 'hearts',
      cardName: 'Five of Hearts',
      cardImage: 'hearts_5.png',
      hasAction: true,
      action: 'pick 3'
    },
    {
      number: '5',
      shape: 'clubs',
      cardName: 'FIve of Clubs',
      cardImage: 'clubs_5.png',
      hasAction: true,
      action: 'pick 3'
    },
    {
      number: '4',
      shape: 'diamonds',
      cardName: 'Four of Diamonds',
      cardImage: 'diamonds_4.png',
      hasAction: false,
      action: null
    },
    {
      number: '4',
      shape: 'spades',
      cardName: 'Four of Spades',
      cardImage: 'spades_4.png',
      hasAction: false,
      action: null
    },
    {
      number: '4',
      shape: 'hearts',
      cardName: 'Four of Hearts',
      cardImage: 'hearts_4.png',
      hasAction: false,
      action: null
    },
    {
      number: '4',
      shape: 'clubs',
      cardName: 'Four of Clubs',
      cardImage: 'clubs_4.png',
      hasAction: false,
      action: null
    },
    {
      number: '3',
      shape: 'diamonds',
      cardName: 'Three of Diamonds',
      cardImage: 'diamonds_3.png',
      hasAction: false,
      action: null
    },
    {
      number: '3',
      shape: 'spades',
      cardName: 'Three of Spades',
      cardImage: 'spades_3.png',
      hasAction: false,
      action: null
    },
    {
      number: '3',
      shape: 'hearts',
      cardName: 'Three of Hearts',
      cardImage: 'hearts_3.png',
      hasAction: false,
      action: null
    },
    {
      number: '3',
      shape: 'clubs',
      cardName: 'Three of Clubs',
      cardImage: 'clubs_3.png',
      hasAction: false,
      action: null
    },
    {
      number: '2',
      shape: 'diamonds',
      cardName: 'Two of Diamonds',
      cardImage: 'diamonds_2.png',
      hasAction: true,
      action: 'pick 2'
    },
    {
      number: '2',
      shape: 'spades',
      cardName: 'Two of Spades',
      cardImage: 'spades_2.png',
      hasAction: true,
      action: 'pick 2'
    },
    {
      number: '2',
      shape: 'hearts',
      cardName: 'Two of Hearts',
      cardImage: 'hearts_2.png',
      hasAction: true,
      action: 'pick 2'
    },
    {
  number: '2',
      shape: 'clubs',
      cardName: 'Two of Clubs',
      cardImage: 'clubs_2.png',
      hasAction: true,
      action: 'pick 2'
    },
    {
      number: 'A',
      shape: 'diamonds',
      cardName: 'Ace of Diamonds',
      cardImage: 'diamonds_ace.png',
      hasAction: true,
      action: 'hold'
    },
    {
      number: 'A',
      shape: 'spades',
      cardName: 'Ace of Spades',
      cardImage: 'spades_ace.png',
      hasAction: true,
      action: 'hold'
    },
    {
      number: 'A',
      shape: 'hearts',
      cardName: 'Ace of Hearts',
      cardImage: 'hearts_ace.png',
      hasAction: true,
      action: 'hold'
    },
    {
      number: 'A',
      shape: 'clubs',
      cardName: 'Ace of Clubs',
      cardImage: 'clubs_ace.png',
      hasAction: true,
      action: 'hold'
    }
  ]
  


// const CARDS = [
//   {
//       number: "k",
//       shape: "diamonds",
//       cardName: "King of diamonds",
//       cardImage: "diamonds_king.png"
//   },

//   {
//       number: "k",
//       shape: "spades",
//       cardName: "King of Spades",
//       cardImage: "spades_king.png"
//   },

//   {
//       number: "k",
//       shape: "hearts",
//       cardName: "King of Hearts",
//       cardImage: "hearts_king.png"
//   },

//   {
//       number: "k",
//       shape: "clubs",
//       cardName: "King of Clubs",
//       cardImage: "clubs_king.png"
//   },

//   {
//       number: "10",
//       shape: "diamonds",
//       cardName: "Ten of Diamonds",
//       cardImage: "diamonds_10.png"
//   },
  
//   {
//       number: "10",
//       shape: "spades",
//       cardName: "Ten of Spades",
//       cardImage: "spades_10.png"
//   },
  
//   {
//       number: "10",
//       shape: "hearts",
//       cardName: "Ten of Hearts",
//       cardImage: "hearts_10.png"
//   },
  
//   {
//       number: "10",
//       shape: "clubs",
//       cardName: "Ten of Clubs",
//       cardImage: "clubs_10.png"
//   },

//   {
//       number: "9",
//       shape: "diamonds",
//       cardName: "Nine of Diamonds",
//       cardImage: "diamonds_9.png"
//   },
  
//   {
//       number: "9",
//       shape: "spades",
//       cardName: "Nine of Spades",
//       cardImage: "spades_9.png"
//   },
  
//   {
//       number: "9",
//       shape: "hearts",
//       cardName: "Nine of Hearts",
//       cardImage: "hearts_9.png"
//   },
  
//   {
//       number: "9",
//       shape: "clubs",
//       cardName: "Nine of Clubs",
//       cardImage: "clubs_9.png"
//   },
  
//   {
//       number: "8",
//       shape: "diamonds",
//       cardName: "Eight of Diamonds",
//       cardImage: "diamonds_8.png"
//   },
  
//   {
//       number: "8",
//       shape: "spades",
//       cardName: "eight of Spades",
//       cardImage: "spades_8.png"
//   },
  
//   {
//       number: "8",
//       shape: "hearts",
//       cardName: "Eight of Hearts",
//       cardImage: "hearts_8.png"
//   },
  
//   {
//       number: "8",
//       shape: "clubs",
//       cardName: "Eight of Clubs",
//       cardImage: "clubs_8.png"
//   },
      
//   {
//       number: "7",
//       shape: "diamonds",
//       cardName: "Seven of Diamonds",
//       cardImage: "diamonds_7.png"
//   },
  
//   {
//       number: "7",
//       shape: "spades",
//       cardName: "Seven of Spades",
//       cardImage: "spades_7.png"
//   },
  
//   {
//       number: "7",
//       shape: "hearts",
//       cardName: "Seven of Hearts",
//       cardImage: "hearts_7.png"
//   },
  
//   {
//       number: "7",
//       shape: "clubs",
//       cardName: "Seven of Clubs",
//       cardImage: "clubs_7.png"
//   },
      
//   {
//       number: "6",
//       shape: "diamonds",
//       cardName: "Six of Diamonds",
//       cardImage: "diamonds_6.png"
//   },
  
//   {
//       number: "6",
//       shape: "spades",
//       cardName: "Six of Spades",
//       cardImage: "spades_6.png"
//   },
  
//   {
//       number: "6",
//       shape: "hearts",
//       cardName: "Six of Hearts",
//       cardImage: "hearts_6.png"
//   },
  
//   {
//       number: "6",
//       shape: "clubs",
//       cardName: "Six of Clubs",
//       cardImage: "clubs_6.png"
//   },
      
//   {
//       number: "5",
//       shape: "diamonds",
//       cardName: "Five of Diamonds",
//       cardImage: "diamonds_5.png"
//   },
  
//   {
//       number: "5",
//       shape: "spades",
//       cardName: "five of Spades",
//       cardImage: "spades_5.png"
//   },
  
//   {
//       number: "5",
//       shape: "hearts",
//       cardName: "Five of Hearts",
//       cardImage: "hearts_5.png"
//   },
  
//   {
//       number: "5",
//       shape: "clubs",
//       cardName: "FIve of Clubs",
//       cardImage: "clubs_5.png"
//   },
      
//   {
//       number: "4",
//       shape: "diamonds",
//       cardName: "Four of Diamonds",
//       cardImage: "diamonds_4.png"
//   },
  
//   {
//       number: "4",
//       shape: "spades",
//       cardName: "Four of Spades",
//       cardImage: "spades_4.png"
//   },
  
//   {
//       number: "4",
//       shape: "hearts",
//       cardName: "Four of Hearts",
//       cardImage: "hearts_4.png"
//   },
  
//   {
//       number: "4",
//       shape: "clubs",
//       cardName: "Four of Clubs",
//       cardImage: "clubs_4.png"
//   },
      
//   {
//       number: "3",
//       shape: "diamonds",
//       cardName: "Three of Diamonds",
//       cardImage: "diamonds_3.png"
//   },
  
//   {
//       number: "3",
//       shape: "spades",
//       cardName: "Three of Spades",
//       cardImage: "spades_3.png"
//   },
  
//   {
//       number: "3",
//       shape: "hearts",
//       cardName: "Three of Hearts",
//       cardImage: "hearts_3.png"
//   },
  
//   {
//       number: "3",
//       shape: "clubs",
//       cardName: "Three of Clubs",
//       cardImage: "clubs_3.png"
//   },
      
//   {
//       number: "2",
//       shape: "diamonds",
//       cardName: "Two of Diamonds",
//       cardImage: "diamonds_2.png"
//   },
  
//   {
//       number: "2",
//       shape: "spades",
//       cardName: "Two of Spades",
//       cardImage: "spades_2.png"
//   },
  
//   {
//       number: "2",
//       shape: "hearts",
//       cardName: "Two of Hearts",
//       cardImage: "hearts_2.png"
//   },
  
//   {
//       number: "2",
//       shape: "clubs",
//       cardName: "Two of Clubs",
//       cardImage: "clubs_2.png"
//   },
      
//   {
//       number: "A",
//       shape: "diamonds",
//       cardName: "Ace of Diamonds",
//       cardImage: "diamonds_ace.png"
//   },
  
//   {
//       number: "A",
//       shape: "spades",
//       cardName: "Ace of Spades",
//       cardImage: "spades_ace.png"
//   },
  
//   {
//       number: "A",
//       shape: "hearts",
//       cardName: "Ace of Hearts",
//       cardImage: "hearts_ace.png"
//   },
  
//   {
//       number: "A",
//       shape: "clubs",
//       cardName: "Ace of Clubs",
//       cardImage: "clubs_ace.png"
//   },
// ]


export default CARDS