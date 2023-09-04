import Image from "next/image";
import { useEffect, useState } from "react";
import LocalAPIClient from "@/utils/localApi";
import Personal from "./profile/Personal";
import Billing from "./profile/Billing";
import Payment from "./profile/Payment";

const Profile = () => {
  const [user, setUser]: any = useState(null);

  const getData = async () => {
    const _user = await LocalAPIClient.get('/api/user/profile');

    setUser(_user);
  }

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="flex p-6 rounded-xl bg-[#f6f6f6] lg:items-center flex-col lg:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <Image
            src='/imgs/non-profile.png'
            alt='profile'
            width={100}
            height={100}
            className={'rounded-2xl w-fit h-fit mt-4'}
            priority
          />
          <h1 className="text-3xl font-weight-bold my-8">{`${user?.firstName ?? ''} ${user?.lastName ?? ''}`}</h1>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex my-2">
            <div className="w-[150px] font-weight-bold flex items-center">
              <Image
                src='/imgs/email-icon.png'
                alt='email'
                width={12}
                height={12}
                className={'rounded-2xl w-fit h-fit mr-2'}
                priority
              />
              Email:
            </div>
            <div className="flex flex-1">{user?.email ?? ''}</div>
          </div>
          <div className="flex my-2">
            <div className="w-[150px] font-weight-bold flex items-center">
              <Image
                src='/imgs/phone-icon.png'
                alt='phone'
                width={12}
                height={12}
                className={'rounded-2xl w-fit h-fit mr-2'}
                priority
              />
              Phone Number:
            </div>
            <div className="flex flex-1">{user?.phone ?? ''}</div>
          </div>
          <div className="flex my-2">
            <div className="w-[150px] font-weight-bold flex items-center">
              <Image
                src='/imgs/cake-icon.png'
                alt='cake'
                width={12}
                height={12}
                className={'rounded-2xl w-fit h-fit mr-2'}
                priority
              />
              DOB:
            </div>
            <div className="flex flex-1">{user?.date_of_birth ?? ''}</div>
          </div>
          <div className="flex my-2">
            <div className="w-[150px] font-weight-bold flex items-center">
              <Image
                src='/imgs/security-icon.png'
                alt='security'
                width={12}
                height={12}
                className={'rounded-2xl w-fit h-fit mr-2'}
                priority
              />
              Password:
            </div>
            <div className="flex flex-1">***********</div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 w-full items-start flex-col lg:flex-row">
        <div className="flex flex-1 w-full">
          <Personal user={user} />
        </div>
        <div className="flex flex-1 lg:ml-4 flex-col w-full">
          <Billing user={user} />
          <Payment user={user} />
        </div>
      </div>
    </div>
  )
};

export default Profile;