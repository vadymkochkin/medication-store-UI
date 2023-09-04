import Divider from "@/components/Divider";
import Stepper from "@/components/Stepper";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
  activeStep: number;
  title?: string;
}

const QuestionnaireLayout: FC<Props> = ({ children, className = '', activeStep, title }) => {
  return (
    <div className={`w-full bg-white`}>
      <div className='flex px-4 py-4 lg:px-24 lg:py-24 container mx-auto'>
        <div className='flex flex-col flex-1 justify-center items-center'>
          <Stepper active={activeStep} stepCount={4} className={'w-full lg:w-1/3'} />
          <h1 className='text-3xl font-weight-bold leading-tight text-center px-2 lg:px-0'>{title}</h1>
          <Divider className='my-4 lg:my-8' />
          <p className='font-weight-500 leading-snug text-center'>In order for us to ship your pills.</p>
          <p className='font-weight-500 leading-snug text-center'>You <span className='font-weight-bold text-red-500'>must</span> first answer some questions about your health</p>
          {activeStep < 3 && (
            <div className='py-6 my-6 flex flex-col items-center bg-[#ebf3f7] rounded-lg w-full lg:w-1/2'>
              <h2 className='text-3xl font-weight-bold leading-tight text-[#28abe1] my-4 text-center'>Please Complete Medical Profile</h2>
              <p className='font-weight-500 leading-snug text-center'>No waiting rooms, No expensive doctors visits.</p>
              <p className='font-weight-500 leading-snug text-center'>Prescription treatments sent to your door, discreetly.</p>
              <p className='font-weight-500 leading-snug text-center'>This is the future of tele-medicine.</p>
            </div>
          )}
          {activeStep === 3 && (
            <div className='py-6 my-6 flex flex-col items-center bg-[#ededed] rounded-lg w-full lg:w-1/2 px-4'>
              <h2 className='text-2xl font-weight-bold leading-tight my-4 text-center'>Please submit your ID so the physician <br/> assigned to your case can verify your identity.</h2>
              <p className='font-weight-500 leading-snug mt-4'>A quick verification step is required for compliance with existing regulations.</p>
              <p className='font-weight-500 leading-snug text-center'>Please provide your ID for verification. Once verified, your order will be<br /> confirmed in 60 minutes or less. Complying with regulations ensure that you<br /> get 100% REAL FDA-Approved medication.</p>
            </div>
          )}
          <div className={`flex flex-col items-center w-full lg:w-1/2 ${className}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionnaireLayout;