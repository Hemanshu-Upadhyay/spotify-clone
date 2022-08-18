import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import prisma from '../../lib/prisma'
import playlist from './playlist'

const secret = process.env.SECRET
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = await bcrypt.genSalt(10)
  const { email, password, firstName, lastName } = req.body

  let user
  const playlists = await prisma.playlist.findMany()
  const songs = await prisma.song.findMany()
  console.log(playlists)

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, salt),
        firstName,
        lastName,
        playlists: {
          create: playlists.map((playlist) => ({
            name: playlist.name,
            songs: {
              connect: songs.map((song) => ({
                id: song.id,
              })),
            },
          })),
        },
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error creating user' })
    return
  }
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now(),
    },
    secret,
    { expiresIn: '8h' }
  )
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('Cookie_access_token', token, {
      httponly: true,
      maxage: 60 * 60 * 8,
      samesite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    })
  )
  res.status(200).json({ message: 'User created', user })
}
