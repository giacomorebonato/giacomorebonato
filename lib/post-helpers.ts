import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { pathToFileURL } from 'url'

const POSTS_DIRECTORY = join(process.cwd(), '_posts')

export function getPostFiles() {
  return fs.readdirSync(POSTS_DIRECTORY)
}

const getPostPathBySlug = (slug: string) => {
  const postFiles = getPostFiles()
  const postFile = postFiles.find(postFile => postFile.includes(slug))

  if (!postFile) {
    throw Error(`Couldn't find post file with slug ${slug}`)
  }

  return join(POSTS_DIRECTORY, postFile)
}

export function getPostBySlug(slug, fields = []): any {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(getPostPathBySlug(realSlug))
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostFiles()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
