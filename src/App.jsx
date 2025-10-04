import './App.css'

import UserForm from './components/UserForm'
import ReviewFoem from './components/ReviewForm'
import Thanks from './components/Thanks'

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

import { useForm } from './hooks/useForm'
import Steps from './components/Steps'
import { useState } from 'react'

 const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
  };

function App() {

  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  const formComponets = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewFoem data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} updateFieldHandler={updateFieldHandler} />
  ]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponets)

  return (
    <div className='app'>
      <div className="header">
        <h2> Deixe sua avaliação </h2>
        <p> Ficamos felizes com sua compra, utilize o formulario para avaliar o produto. </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span> Voltar </span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>  Avançar </span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>  Enviar </span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
