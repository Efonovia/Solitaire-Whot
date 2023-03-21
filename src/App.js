import React from "react";
import CardsList from "./CardsList"
import Card from "./Card"
import { nanoid } from "nanoid"
import Confetti from "react-confetti";



let tempCards = CardsList
let tempUserCards = []
let tempBotCards = []
let startingCard

for (let i = 0; i < 5; i++) {
  const randCard = tempCards[Math.floor(Math.random()*tempCards.length)];
  tempUserCards.push(randCard)
  tempCards = tempCards.filter(card => card.cardName !== randCard.cardName)
}

for (let i = 0; i < 5; i++) {
  const randCard = tempCards[Math.floor(Math.random()*tempCards.length)];
  tempBotCards.push(randCard)
  tempCards = tempCards.filter(card => card.cardName !== randCard.cardName)

}

startingCard = tempCards[Math.floor(Math.random()*tempCards.length)];
while (startingCard.hasAction) {
  startingCard = tempCards[Math.floor(Math.random()*tempCards.length)];
}

tempCards = tempCards.filter(card => card.cardName !== startingCard.cardName)
console.log(tempCards)


function App() {
  const [marketCards, setMarketCards] = React.useState(tempCards)
  const [userCards, setUserCards] = React.useState(tempUserCards)
  const [botCards, setBotCards] = React.useState(tempBotCards)
  const [playedCards, setPlayedCards] = React.useState([startingCard])
  const [turn, setTurn] = React.useState("user")
  const [instruction, setInstruction] = React.useState("Your turn")
  const [pickAmount, setPickAmount] = React.useState(0)
  const [amountToPick, setAmountToPick] = React.useState(null)
  const [shouldUserPick, setShouldUserPick] = React.useState(false)


  React.useEffect(() => {
    if(userCards.length < 1) {
      setInstruction("Congratulations you won!")
    } else if(botCards.length < 1) {
      setInstruction("You lost to the computer sadly")
    }
  }, [botCards.length, userCards.length])

  if(pickAmount === amountToPick && shouldUserPick) {
    console.log("User is done picking " + amountToPick)
    setShouldUserPick(false)
    setPickAmount(0)
    setTurn("bot")
    setInstruction("Computer's turn")
    handleBotPlay()
  }

  function reset() {
    let newTempCards = CardsList
    let newTempUserCards = []
    let newTempBotCards = []
    let newStartingCard
    for (let i = 0; i < 5; i++) {
      const randCard = newTempCards[Math.floor(Math.random()*newTempCards.length)];
      newTempUserCards.push(randCard)
      // newTempCards.splice(newTempCards.indexOf(randCard), 1)
      newTempCards = newTempCards.filter(card => card.cardName !== randCard.cardName)
    }
  
    for (let i = 0; i < 5; i++) {
      const randCard = newTempCards[Math.floor(Math.random()*newTempCards.length)];
      newTempBotCards.push(randCard)
      // newTempCards.splice(newTempCards.indexOf(randCard), 1)
      newTempCards = newTempCards.filter(card => card.cardName !== randCard.cardName)
    }

    newStartingCard = newTempCards[Math.floor(Math.random()*newTempCards.length)];
    while (newStartingCard.hasAction) {
      newStartingCard = newTempCards[Math.floor(Math.random()*newTempCards.length)];
    }

    newTempCards = newTempCards.filter(card => card.cardName !== newStartingCard.cardName)
    console.log(newTempCards)
    setMarketCards(newTempCards)
    setUserCards(newTempUserCards)
    setBotCards(newTempBotCards)
    setPlayedCards([newStartingCard])
    setTurn("user")
    setInstruction("Your turn")
    setPickAmount(0)
    setAmountToPick(null)
    setShouldUserPick(false)

    // newTempCards = CardsList
  }

  function handleMarketUse(activator) {
    if(marketCards.length > 1) {
      if(activator === "user") {
        if(turn === "user") {
          const marketCardPicked = marketCards[Math.floor(Math.random()*marketCards.length)]
      
          setUserCards(prevUserCards => [...prevUserCards, marketCardPicked])
          setMarketCards(marketCards.filter(marketCard => marketCard.cardName !== marketCardPicked.cardName))
          setTurn("bot")
          setInstruction("Computer's turn") 
        } else if(shouldUserPick) {
          setPickAmount(prevPickAmount => prevPickAmount+=1)
          console.log(pickAmount)
          
          const marketCardPicked = marketCards[Math.floor(Math.random()*marketCards.length)]
      
          setUserCards(prevUserCards => [...prevUserCards, marketCardPicked])
          setMarketCards(marketCards.filter(marketCard => marketCard.cardName !== marketCardPicked.cardName))
        }
      } else if(activator === "bot") {
        const marketCardPicked = marketCards[Math.floor(Math.random()*marketCards.length)]
        console.log("bot picked ", marketCardPicked)
        setBotCards(prevBotCards => [...prevBotCards, marketCardPicked])
        setMarketCards(marketCards.filter(marketCard => marketCard.cardName !== marketCardPicked.cardName))
        setTurn("user")
        setInstruction("Your turn")
      } 
    } else {
      console.log("market is almost empty: "+marketCards)
      console.log("Restocking from playedCards")
      setMarketCards(prevMarketCards => [...prevMarketCards, ...(playedCards.filter(playedCard => playedCards.indexOf(playedCard) !== playedCards.length-1))])
      setPlayedCards([playedCards[playedCards.length-1]])
    }
  }

  function handleBotPlay() {
    console.log("about to play")
  
    if(turn === "bot" && botCards.length > 0) {
      console.log("Bot is playing...")
      let botCardPlayed
      if(playedCards[playedCards.length-1]) {
        if(playedCards[playedCards.length-1].number === "A" && playedCards[playedCards.length-1].playedBy === "bot") {
          botCardPlayed = botCards[Math.floor(Math.random()*botCards.length)]
        } else {
          botCardPlayed = botCards.find(card => card.shape === playedCards[playedCards.length-1].shape || card.number === playedCards[playedCards.length-1].number)
        }
      } else {
        botCardPlayed = botCards[Math.floor(Math.random()*botCards.length)]
      }


      setTimeout(() => {
        if(botCardPlayed) {
          botCardPlayed.playedBy = "bot"
          if(botCardPlayed.number === "2") {
            setTurn("none") 
            setShouldUserPick(true)
            console.log("Computer Played action card: ", botCardPlayed)
            setPlayedCards(prevPlayedCards => [...prevPlayedCards, botCardPlayed])
            setBotCards(botCards.filter(botCard => botCard.cardName !== botCardPlayed.cardName))
            console.log(pickAmount)
            setAmountToPick(2)
            setInstruction("Pick two cards")
            console.log("User should Pick two")
          } else if(botCardPlayed.number === "5") {
            setTurn("none") 
            setShouldUserPick(true)
            console.log("Computer Played action card: ", botCardPlayed)
            setPlayedCards(prevPlayedCards => [...prevPlayedCards, botCardPlayed])
            setBotCards(botCards.filter(botCard => botCard.cardName !== botCardPlayed.cardName))
            console.log("User should Pick three")
            console.log(pickAmount)
            setAmountToPick(3)
            setInstruction("Pick three cards")
          } else if(botCardPlayed.number === "A"){
            console.log("Computer Played action card: ", botCardPlayed)
            setPlayedCards(prevPlayedCards => [...prevPlayedCards, botCardPlayed])
            setBotCards(botCards.filter(botCard => botCard.cardName !== botCardPlayed.cardName))
            // COMPUTER SHOULD THEN PLAY ANY CARD ON TOP
            setTurn("bot")
            setInstruction("Hold on")
            // handleBotPlay()
          } else if(botCardPlayed.number === "8"){
            console.log("Computer Played action card: ", botCardPlayed)
            setPlayedCards(prevPlayedCards => [...prevPlayedCards, botCardPlayed])
            setBotCards(botCards.filter(botCard => botCard.cardName !== botCardPlayed.cardName))
            // COMPUTER SHOULD THEN PLAY A FOLLOW UP CARD ON TOP
            setTurn("bot")
            setInstruction("You are suspended")
            // handleBotPlay()
          } else {
            // COMPUTER PLAYED A REGULAR CARD
            setShouldUserPick(false)
            console.log("Computer Played regular card: ", botCardPlayed)
            setPlayedCards(prevPlayedCards => [...prevPlayedCards, botCardPlayed])
            setBotCards(botCards.filter(botCard => botCard.cardName !== botCardPlayed.cardName))
            setTurn("user")
            setInstruction("Your turn") 
          }
        } else {
          console.log("Computer doesn't have a card to play. I'm going to market")
          setTimeout(handleMarketUse("bot"), 1500)
          
          setTurn("user")
          setInstruction("Your turn")
        }
      }, 1500)
    }
  }
  
  function handleCardClick(card) {
    if(turn === "user" && userCards.length > 0) {
      card.playedBy = "user"
      console.log("You Played: ", card)
      const currentCard = playedCards[playedCards.length-1]

      if(card.number === "2") {
        setPlayedCards(prevPlayedCards => [...prevPlayedCards, card])
        setUserCards(userCards.filter(userCard => userCard.cardName !== card.cardName))
        setTurn("user")
        setInstruction("Computer should pick two") 
        let pickCount = 0
        let pickTimer = setInterval(() => {
          pickCount++
          if(pickCount > 1) clearInterval(pickTimer)
          handleMarketUse("bot")
        }, 800);
        // handleBotPlay()
      } else if(card.number === "5") {
        setPlayedCards(prevPlayedCards => [...prevPlayedCards, card])
        setUserCards(userCards.filter(userCard => userCard.cardName !== card.cardName))
        setTurn("user")
        setInstruction("Computer should pick three") 
        let pickCount = 0
        let pickTimer = setInterval(() => {
          pickCount++
          if(pickCount > 2) clearInterval(pickTimer)
          handleMarketUse("bot")
        }, 800);
        // handleBotPlay()
      }
      if(currentCard && currentCard.hasAction) {
        console.log(card.action)
        switch (currentCard.number) {
          case "A":
            if(currentCard.playedBy === "user") {
              console.log("You Played: ", card)
              console.log("it's a follow up on the hold on card")
              card.hasAction ? setTurn("user") : setTurn("bot") 
              setPlayedCards(prevPlayedCards => [...prevPlayedCards, card])
              setUserCards(userCards.filter(userCard => userCard.cardName !== card.cardName))
              // handleBotPlay()
            }
            break;
          case "8":
            if(currentCard.playedBy === "user") {
              if(playedCards.length === 0 || (currentCard.number === card.number || currentCard.shape === card.shape)) {
                console.log("You Played nonaction card: ", card)
                console.log("it's a match")
                card.hasAction ? setTurn("user") : setTurn("bot") 
                setPlayedCards(prevPlayedCards => [...prevPlayedCards, card])
                setUserCards(userCards.filter(userCard => userCard.cardName !== card.cardName))
                // handleBotPlay()
              }
            }
            break;
          default:
            break;
        }
      } 

      if(playedCards.length === 0 || (currentCard.number === card.number || currentCard.shape === card.shape)) {
        console.log("it's a match")
        card.hasAction ? setTurn("user") : setTurn("bot") 
        if(card.number === "A") {
          setInstruction("Computer should hold on")
        } else if(card.number === "8") {
          setInstruction("Computer is suspended")
        } else {
          setInstruction("Computer's turn")
        }
        setPlayedCards(prevPlayedCards => [...prevPlayedCards, card])
        setUserCards(userCards.filter(userCard => userCard.cardName !== card.cardName))
        handleBotPlay()
      } else {
        console.log("Illegal card to play")
      }
    } else {
      console.log("it ain't yo turn")
    }

    console.log(turn)
  }

  console.log(`playedCards: ${playedCards.length} | marketCards: ${marketCards.length}`)
  React.useEffect(handleBotPlay)


  let userCardElements = userCards.map(card => <Card handleCardClick={()=>handleCardClick(card)} key={nanoid()} visible={true} data={card}/>)
  let botCardElements = botCards.map(card => <Card key={nanoid()} visible={false} data={card}/>)
  

  return (
    <div className="App">
      {userCards.length < 1 && <Confetti />}    
      <h1>SOLITAIRE WHOT</h1>
      {(userCards.length<1 || botCards.length<1) && <div className="reset" onClick={reset}>Play again?</div> }
      <div className="player-cards-amount">{userCards.length}</div>
      <div className="bot-cards-amount">{botCards.length}</div>
      <div className="game-area">
        <div className="bot-card-area">{botCardElements}</div>
        <div className="play-area">
            <div className="instruction">{instruction}</div>
            <div className="current-cards">
              {playedCards.length>0 && <Card visible={true} data={playedCards[playedCards.length-1]}/>}
            </div>
            <div className="market" onClick={()=>handleMarketUse("user")}><img src={`${process.env.PUBLIC_URL}/assets/images/red.png`} alt=""></img></div>
        </div>
        <div className="player-card-area">{userCardElements}</div>
      </div>
    </div>
  );
}

export default App;
