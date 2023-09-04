import Button, { ButtonType } from "@/components/Button";
import Image from "next/image";
import TextInput from "@/components/TextInput";
import LocalAPIClient from "@/utils/localApi";
import { useState } from "react";

interface Props {
  user?: any;
}

const Payment = ({ user }: Props) => {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    payment_processor: '',
    creditCardType: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: '',
  })

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveHandler = async () => {
    setLoading(true);
    await LocalAPIClient.post('/api/user/payment', paymentInfo);
    setLoading(false);
    setEditMode(!editMode);
  };

  const handleChangeText = (val: string, key: string) => {
    setPaymentInfo({
      ...paymentInfo,
      [key]: val,
    });
  };

  return (
    <div className="border-t-4 border-[#45a46c] w-full bg-[#eef3f5] py-8 mt-4">
      <div className="header-part flex justify-between items-center px-8">
        <div className="header-text">
          <h1 className="text-[#45a46c] font-weight-bold">Payment Info</h1>
        </div>
        {!editMode && (
          <Button title="Edit" type={ButtonType.redOutline} buttonClassName={'py-2 lg:pb-2 lg:text-xl'} disabled={loading} onClick={toggleEditMode} />
        )}
      </div>
      {!editMode && (
        <div className="flex flex-col mt-4 px-8">
          <Image
            src='/imgs/card-info.png'
            alt='card-info'
            width={100}
            height={100}
            className={'w-fit h-fit my-4'}
            priority
          />
          <div className="py-2 border-t border-[#d2dee3] flex items-center">
            <p className="w-[100px]">CC #:</p>
            <p>{user?.creditCardNumber ?? ''}</p>
          </div>
          <div className="py-2 border-t border-[#d2dee3] flex items-center">
            <p className="w-[100px]">Exp. Date:</p>
            <p>{user?.expirationDate ?? ''}</p>
          </div>
          <div className="py-2 border-t border-[#d2dee3] flex items-center">
            <p className="w-[100px]">CVC:</p>
            <p>{user?.cvv ?? ''}</p>
          </div>
        </div>
      )}
      {editMode && (
        <div className="flex flex-col mt-4 px-8">
          <div className='flex'>
            <TextInput label='Card Number' id='card_number' value={user?.creditCardNumber} handleChange={(val) => handleChangeText(val, 'creditCardNumber')} />
            <TextInput label='Exp Date' id='exp_date' containerClassName='ml-4' value={user?.expirationDate} handleChange={(val) => handleChangeText(val, 'expirationDate')} />
            <TextInput label='CVC' id='cvc' containerClassName='ml-4' value={user?.cvv} handleChange={(val) => handleChangeText(val, 'cvv')} />
          </div>
          <div className='flex items-center justify-center mt-6'>
            <Button title='Save & Continue' type={ButtonType.redOutline} onClick={saveHandler} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;