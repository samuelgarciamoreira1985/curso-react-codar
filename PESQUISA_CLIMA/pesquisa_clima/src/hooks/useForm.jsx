import { useState } from "react";

export function useForm (steps) {

    const [currentStep,setCurrentStep] = useState(0)

    function changeSteps(indexSteps, e) {

        if (e) e.preventDefault()   
        if (indexSteps < 0 || indexSteps >= steps.length) return 

        setCurrentStep(indexSteps)
    }

    return {
    currentStep,
    currentComponent: steps[currentStep],
    changeSteps,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false
    }
}