// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import APIClient from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  if (!body.email || !body.password) {
    return res.status(400).json({ hasError: true, data: 'Email or Password not found', errors: { email: 'You need to fill email for signin.', password: 'You need to fill email for signin.' } });
  }
  
  const data = await APIClient.post('/auth/login', body);
  if (data && data.access_token) {
    APIClient.setToken(data.access_token);
  }
  res.status(200).json(data);
}
