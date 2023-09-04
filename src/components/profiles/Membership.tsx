import Image from "next/image";
import Button, { ButtonType } from "../Button";
import Divider from "../Divider";
import { useEffect, useState } from "react";
import LocalAPIClient from "@/utils/localApi";

const Membership = () => {
  const [cases, setCases]: any = useState({});
  const [user, setUser]: any = useState(null);

  const getData = async () => {
    const _user = await LocalAPIClient.get('/api/user/profile');
    setUser(_user);

    const _cases = await LocalAPIClient.get('/api/case/case');
    setCases(_cases);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-1 w-full flex-col lg:flex-row">
      <div className="flex flex-col flex-1 rounded-2xl border-2 border-[#3cc6d7] py-8 bg-white items-center">
        <h1 className="text-3xl font-weight-bold">Treatment</h1>
        <Divider className="my-2" />
        <Image
          src='/imgs/recommendation-sildenafil-bg.png'
          alt='prescription'
          width={500}
          height={600}
          className={'rounded-2xl w-fit h-fit mt-4'}
          priority
        />
        <p className="my-8">{cases?.product?.product_title ?? ''}</p>
        <Button type={ButtonType.redOutline} title="Switch Plan" />
      </div>
      <div className="flex flex-col flex-1 rounded-2xl border border-gray-50 py-8 bg-[#eef3f5] px-8 items-center mt-4 lg:mt-0 lg:ml-6">
        <h1 className="text-3xl font-weight-bold">Status</h1>
        <Divider className="my-2" />
        <Button type={ButtonType.redOutline} title="Pending" containerClassName="my-12" />
        <div className="w-full mt-8">
            <div className="flex justify-between items-center border-t border-[#d1e7f0] py-4">
              <p className="font-weight-bold text-[#4d4d4d]">Order Status</p>
              <p className="text-[#4d4d4d]">{cases?.status ?? ''}</p>
            </div>
            <div className="flex justify-between items-center border-t border-[#d1e7f0] py-4">
              <p className="font-weight-bold text-[#4d4d4d]">ID Verification</p>
              <p className="text-[#4d4d4d]">{user?.verification_status ? 'Verified' : 'Unverified'}</p>
            </div>
            <div className="flex justify-between items-center border-t border-[#d1e7f0] py-4">
              <p className="font-weight-bold text-[#4d4d4d]">Medical Status</p>
              <p className="text-[#4d4d4d]">{cases?.status ?? ''}</p>
            </div>
            <div className="flex justify-between items-center border-t border-[#d1e7f0] py-4">
              <p className="font-weight-bold text-[#4d4d4d]">Created</p>
              <p className="text-[#4d4d4d]">{cases?.created_at ?? ''}</p>
            </div>
            <div className="flex justify-between items-center border-t border-[#d1e7f0] py-4">
              <p className="font-weight-bold text-[#4d4d4d]">Subscription Status</p>
              <p className="text-[#4d4d4d]">{cases?.subscription_id ? 'Active' : 'Inactive'}</p>
            </div>
        </div>
      </div>
    </div>
  )
};

export default Membership;