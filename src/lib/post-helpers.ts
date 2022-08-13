import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { Post } from '../types/post'

const POSTS_DIRECTORY = join(process.cwd(), '_posts')

export function getPostFilenames() {
  return fs.readdirSync(POSTS_DIRECTORY)
}

const getPostPathBySlug = (slug: string) => {
  const postFilenames = getPostFilenames()
  const postFile = postFilenames.find((postFile) => postFile.includes(slug))

  if (!postFile) {
    throw Error(`Couldn't find post file with slug ${slug}`)
  }

  return join(POSTS_DIRECTORY, postFile)
}

export function getPostByFilename(
  filename: string,
  postFields: Array<keyof Post>
): Partial<Post> & { date: Date } {
  const filenameWithNoExtension = filename.replace(/\.mdx$/, '')
  const [year, month, day] = filenameWithNoExtension.split('-').slice(0, 3)
  const date = new Date(+year, +month + -1, +day)
  const fullPath = join(getPostPathBySlug(filenameWithNoExtension))
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const frontMatter = matter(fileContent)
  const post: Partial<Post> & { date: Date } = {
    date
  }

  // Ensure only the minimal needed data is exposed
  postFields.forEach((field) => {
    switch (field) {
      case 'slug':
        post[field] = filenameWithNoExtension
        break
      case 'content':
        post[field] = frontMatter.content
        break
      default:
        if (frontMatter.data[field]) {
          post[field] = frontMatter.data[field]
        }
    }
  })

  return post
}

interface BasePost {
  date: Date
}

/**
 * Get all the posts content
 * @param fields - Fields to fetch from the post
 * @returns
 */
export function getAllPosts(fields: Array<keyof Post> = []) {
  const filenames = getPostFilenames()
  const posts = filenames
    .map((filename) => getPostByFilename(filename, fields))
    .filter(Boolean)

  posts.sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1))

  return posts
}
