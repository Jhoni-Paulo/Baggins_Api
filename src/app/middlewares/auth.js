import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'
import { promisify } from 'util'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if(!authHeader) {
    res.status(401).json( {error: 'Token não informado!'} )
  }

  const [, token] = authHeader.split(' ')

  try {
    const decrypt = await promisify(jwt.verify)(token, authConfig.secret)
    req.userId = decrypt.id
   return next()
  } catch (error) {
    res.status(401).json( {error: 'Token inválido!'} )
  }
  
}