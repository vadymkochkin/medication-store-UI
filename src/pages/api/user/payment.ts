// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import APIClient from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number,
  email: string,
  access_token: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.headers && req.headers.authorization) {
    APIClient.setToken(req.headers.authorization);
  }
  const body = req.body;
  if (req.method === 'GET') {
    const data = await APIClient.get('/user/payment-info');
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const data = await APIClient.post('/user/payment-info', body);
    res.status(200).json(data);
  }
}
