import { Fragment } from "react";

interface Props {
    active?: number;
    stepCount?: number;
    className?: string;
}

const Stepper = ({ active = 1, stepCount = 0, className = 'w-full' }: Props) => {
    if (!stepCount) {
        return <></>;
    }

    const steps = Array.from(Array(stepCount).keys());

    return (
        <ul
            data-te-stepper-init
            className={`relative my-4 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out ${className}`}>
            {steps.map((step, index) => (
                <Fragment key={'step_' + index}>
                    <li
                        data-te-stepper-step-ref
                        data-te-stepper-step-active
                        className="w-[4.5rem] flex flex-col items-center">
                        <div
                            data-te-stepper-head-ref
                            className="flex cursor-pointer items-center leading-[1.1rem] no-underline focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                            <span
                                data-te-stepper-head-icon-ref
                                className={`my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full ${step < active - 1 ? 'bg-[#008837] text-[#fff]' : (step === (active - 1) ? 'bg-[#fff] text-[#000] border-2 border-[#28abe1] hover:bg-[#f9f9f9]' : 'bg-[#fff] text-[#e1e1e1] border-2 border-[#e1e1e1] hover:bg-[#f9f9f9]')} text-sm font-medium p-6`}>
                                {('0' + (step + 1)).slice(-2)}
                            </span>
                        </div>
                        <span
                            data-te-stepper-head-text-ref
                            className={`font-medium after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300 ${step < active - 1 ? '' : 'text-[#c5c5c5]'}`}>
                            Step{step + 1}
                        </span>
                    </li>
                    {step < stepCount - 1 && (
                        <li className="flex mt-11 justify-center flex-auto">
                            <div className={`w-10/12 ${step < active - 1 ? 'bg-[#28abe1]' : 'bg-[#e1e1e1]'} h-2 rounded-md`}></div>
                        </li>
                    )}
                </Fragment>
            ))}
        </ul>
    )
};

export default Stepper;
