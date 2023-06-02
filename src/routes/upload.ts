import { randomUUID } from 'node:crypto'
import { extname, resolve } from 'node:path'
import { FastifyInstance } from 'fastify'
import { createWriteStream, unlink } from 'node:fs'
import { pipeline } from 'node:stream'
import { promisify } from 'node:util'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {

  app.post('/upload', async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5mb
      },
    })

    if(!upload) {
      return reply.status(400).send()
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-z]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)
    if(!isValidFileFormat) {
      return reply.status(400).send()
    }

    const fileId = randomUUID()
    const extension = extname(upload.filename)
    const fileName = fileId.concat(extension)

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads/', fileName),
    )
    await pump(upload.file, writeStream)

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl)
    return { fileUrl }
  })

  app.delete('/upload/:id', async(request, reply)=> {
    const paramsSchema = z.object({ id: z.string().uuid() })
    const { id } = paramsSchema.parse(request.params)
    const memory = await prisma.memory.findUniqueOrThrow({ where: { id }})

    const arrayUrl = memory.coverUrl?.split('/')
    const pathName = arrayUrl[arrayUrl.length - 1]
    await unlink(resolve(__dirname, '../../uploads/', pathName), (err)=> {
      if (err) throw err
      console.log('file deleted')
    })

    return reply.status(204).send()
  })
}
