import Button, { ButtonType } from "@/components/Button";
import TextInput from "@/components/TextInput";
import LocalAPIClient from "@/utils/localApi";
import { useState } from "react";

interface Props{
  user?: any;
}

const Billing = ({ user }: Props) => {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    billingFirstName: '',
    billingLastName: '',
    billingAddress: '',
    billingCityName: '',
    billingState: '',
    billingZip: '',
  })

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveHandler = async () => {
    setLoading(true);
    await LocalAPIClient.post('/api/user/billing', billingInfo);
    setLoading(false);
    setEditMode(!editMode);
  };

  const handleChangeText = (val: string, key: string) => {
    setBillingInfo({
      ...billingInfo,
      [key]: val,
    });
  }
  
  return (
    <div className="border-t-4 border-[#45a46c] w-full bg-[#eef3f5] py-8 px-8 mt-4 lg:mt-0">
      <div className="header-part flex justify-between items-center">
        <div className="header-text">
          <h1 className="text-[#45a46c] font-weight-bold">Billing Info</h1>
        </div>
        {!editMode && (
          <Button title="Edit" type={ButtonType.redOutline} buttonClassName={'py-2 lg:pb-2 lg:text-xl'} disabled={loading} onClick={toggleEditMode} />
        )}
      </div>
      {!editMode && (
        <div className="flex flex-col mt-4">
          <p className="my-1 font-weight-500 text-[#4d4d4d]">{user?.billingAddress ?? ''}</p>
          <p className="my-1 font-weight-500 text-[#4d4d4d]">{user?.billingCityName ?? ''}</p>
          <p className="my-1 font-weight-500 text-[#4d4d4d]">United State, {user?.billingState ?? ''}, {user?.billingZip ?? ''}</p>
        </div>
      )}
      {editMode && (
        <div className="flex flex-col mt-4">
          <div className='flex'>
            <TextInput label='First Name' id='first_name' value={user?.firstName} handleChange={(val) => handleChangeText(val, 'billingFirstName')}  />
            <TextInput label='Last Name' id='last_name' containerClassName='ml-4' value={user?.lastName} handleChange={(val) => handleChangeText(val, 'billingLastName')}  />
          </div>
          <TextInput label='Address' id='address' value={user?.billingAddress} handleChange={(val) => handleChangeText(val, 'billingAddress')}  />
          <TextInput label='Address 2' id='address2' value={user?.shippingAddress2} />
          <div className='flex'>
            <TextInput label='State' id='state' value={user?.billingState} handleChange={(val) => handleChangeText(val, 'billingState')}  />
            <TextInput label='City' id='city' containerClassName='ml-4' value={user?.billingCityName} handleChange={(val) => handleChangeText(val, 'billingCityName')} />
          </div>
          <div className='flex w-1/2'>
            <TextInput label='Zip' id='zip' value={user?.billingZip} handleChange={(val) => handleChangeText(val, 'billingZip')}  />
          </div>
          <div className='flex items-center justify-center mt-6'>
            <Button title='Save & Continue' type={ButtonType.redOutline} onClick={saveHandler} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Billing;