import { Request, Response, NextFunction } from 'express'

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const { isLoggedIn } = req.signedCookies
  if (!isLoggedIn) {
    res.status(403).render('forbidden')
    return
  }
  next() // Continue to next middleware/route
}