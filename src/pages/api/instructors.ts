// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
		res.status(200);
		// const instructors = await Instructor.find();
		// res.json(instructors);
	} catch (e) {
		res.status(500);
		console.error("something is wrong with getInstructors route: ", e);
	}
}
