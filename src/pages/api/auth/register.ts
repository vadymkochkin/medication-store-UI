// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import APIClient from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;
  if (!body.email || !body.password || !body.confirmPassword) {
    return res.status(400).json({ hasError: true, data: 'Email or Password not signup', errors: { email: body.email ? '' : 'You need to fill email for signin.', password: body.password ? '' : 'You need to fill password for signup.', confirmPassword: body.confirmPassword ? '' : 'You need to confirm password for signup.' } });
  }
  if (body.password !== body.confirmPassword) {
    return res.status(400).json({ hasError: true, data: 'Password does not match', errors: { confirmPassword: 'Password does not match' } });
  }
  const data = await APIClient.post('/auth/register', body);
  res.status(200).json(data)
}
