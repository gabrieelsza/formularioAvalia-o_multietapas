import React from 'react'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

import "./Thanks.css"

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>, 
  neutral: <BsFillEmojiNeutralFill/>, 
  C: <BsFillEmojiSmileFill/>, 
  very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
      <h2> Falta pouco...</h2>
      <p> A sua opnião é muito importante, em breve você recebera um cupom de 10% de desconto para a sua próxima compra.  </p>
      <p> Para concluir sua avaliação. </p>
      <h3> Aqui esta o resumo da sua avaliação {data.name}:  </h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <div className="review-data">
        <span>Comentario: </span>
        {data.comment}
      </div>
    </div>
  )
}

export default Thanks