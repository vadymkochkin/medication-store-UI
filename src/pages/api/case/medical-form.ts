// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import APIClient from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.headers && req.headers.authorization) {
    APIClient.setToken(req.headers.authorization);
  }
  if (!req.body.firstName || !req.body.lastName || !req.body.dob) {
    res.status(400).json({ hasError: true, errors: {firstName: req.body.firstName ? '' : 'You need to fill First Name', lastName: req.body.lastName ? '' : 'You need to fill Last Name', dob: req.body.dob ? '' : 'You need to fill Date of birth',}})
  }
  const data = await APIClient.post('/case/medical-form', req.body);
  res.status(200).json(data);
}
