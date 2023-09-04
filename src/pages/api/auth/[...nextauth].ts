import NextAuth from "next-auth"
import APIClient from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next'
import Auth0Provider from "next-auth/providers/auth0"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import TwitterProvider from "next-auth/providers/twitter"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;
  if (req.body.email) {
    const data = await APIClient.post('/auth/login', body);
    res.status(200).json(data);
    return;
  }

  const authOptions = {
    providers: [
      Auth0Provider({
        clientId: process.env.AUTH0_ID || '',
        clientSecret: process.env.AUTH0_SECRET || '',
        // @ts-ignore
        domain: process.env.AUTH0_DOMAIN,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID || '',
        clientSecret: process.env.FACEBOOK_SECRET || '',
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID || '',
        clientSecret: process.env.GITHUB_SECRET || '',
        // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
        // @ts-ignore
        scope: "read:user",
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID || '',
        clientSecret: process.env.GOOGLE_SECRET || '',
      }),
      TwitterProvider({
        clientId: process.env.TWITTER_ID || '',
        clientSecret: process.env.TWITTER_SECRET || '',
      }),
    ],
    callbacks: {
      session({ session, token }: any) {
        return session
      },
      async redirect({ url, baseUrl }: any) {
        // Allows relative callback URLs
        if (url.startsWith("/")) return `${baseUrl}${url}`
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url
        return baseUrl
      }
    }
  };

  return NextAuth(req, res, authOptions);
}