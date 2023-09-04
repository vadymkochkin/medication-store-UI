import Button, { ButtonType } from "@/components/Button";
import TextInput from "@/components/TextInput";
import LocalAPIClient from "@/utils/localApi";
import { useState } from "react";

interface Props {
  user: any;
}

const Personal = ({ user }: Props) => {
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    shippingAddress: '',
    shippingCityName: '',
    shippingState: '',
    shippingZip: '',
  })

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveHandler = async () => {
    setLoading(true);
    await LocalAPIClient.post('/api/user/shipping', shippingInfo);
    setEditMode(!editMode);
    setLoading(false);
  };

  const handleChangeText = (val: string, key: string) => {
    setShippingInfo({
      ...shippingInfo,
      [key]: val,
    });
  }

  return (
    <div className="border-t-4 border-[#45a46c] w-full bg-[#eef3f5] py-8 px-8">
      <div className="header-part flex justify-between">
        <div className="header-text">
          <h1 className="text-[#45a46c] font-weight-bold">Personal and Shipping Info</h1>
          <h1 className="text-2xl font-weight-bold">{`${user?.firstName ?? ''} ${user?.lastName ?? ''}`}</h1>
        </div>
        {!editMode && (
          <Button title="Edit" type={ButtonType.redOutline} onClick={toggleEditMode} disabled={loading} buttonClassName={'py-2 pb-2 lg:text-xl'} />
        )}
      </div>
      {!editMode && (
        <div className="flex flex-col mt-4">
          <p className="my-1 font-weight-500 text-[#4d4d4d]">{user?.phone ?? ''}</p>
          <p className="my-1 font-weight-500 text-[#4d4d4d]">{user?.shippingAddress ?? ''}</p>
          <p className="my-1 font-weight-500 text-[#4d4d4d]">{user?.shippingCityName ?? ''}</p>
          <p className="my-1 font-weight-500 text-[#4d4d4d]">United State, {user?.shippingState ?? ''}, {user?.shippingZip ?? ''}</p>
        </div>
      )}
      {editMode && (
        <div className="flex flex-col mt-4">
          <TextInput label='Address' id='address' value={user?.shippingAddress} handleChange={(val) => handleChangeText(val, 'shippingAddress')}  />
          <TextInput label='Address 2' id='address2' value={user?.shippingAddress2} />
          <div className='flex'>
            <TextInput label='State' id='state' value={user?.shippingState} handleChange={(val) => handleChangeText(val, 'shippingState')}  />
            <TextInput label='City' id='city' containerClassName='ml-4' value={user?.shippingCityName} handleChange={(val) => handleChangeText(val, 'shippingCityName')} />
          </div>
          <div className='flex w-1/2'>
            <TextInput label='Zip' id='zip' value={user?.shippingZip} handleChange={(val) => handleChangeText(val, 'shippingZip')}  />
          </div>
          <div className='flex items-center justify-center mt-6'>
            <Button title='Save & Continue' type={ButtonType.redOutline} onClick={saveHandler} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Personal;