// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import APIClient from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  if (!body.email) {
    return res.status(400).json({ hasError: true, data: 'You need to fill your email address to send password reset link.', errors: { email: body.email ? '' : 'You need to fill your email address to send password reset link.' } });
  }
  const data = await APIClient.post('/auth/reset-password-link', body);
  res.status(200).json(data);
}
