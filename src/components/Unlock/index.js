// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Image,
  LockContainer,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)
  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const onClickButton = () => setIsLocked(prevStatus => !prevStatus)
  const buttonText = isLocked ? 'unlock' : 'Lock'
  const altText = isLocked ? 'lock' : 'unlock'
  const text = isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'
  return (
    <MainContainer>
      <LockContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </LockContainer>
      <Button type="submit" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}
export default Unlock
