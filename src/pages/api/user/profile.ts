// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import APIClient from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  if (req.headers && req.headers.authorization) {
    APIClient.setToken(req.headers.authorization);
  }
  const data = await APIClient.get('/user/user-profile');
  res.status(200).json(data);
}
