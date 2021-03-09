import 'twin.macro'

export const Hobbies: React.FC = () => (
  <ul tw='list-disc list-inside text-gray-800 dark:text-red-100'>
    <li>
      <span role='img' aria-label='pop corns'>
        🍿
      </span>
      &nbsp; I like movies
    </li>
    <li>
      <span role='img' aria-label='guitar'>
        🎸
      </span>
      &nbsp; Playing music
    </li>
    <li>
      <span role='img' aria-label='partying with people'>
        🥳
      </span>
      &nbsp; People
    </li>
  </ul>
)
